import argparse, json, reportlab
from html import escape
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether, PageBreak
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

FONT_DIR = Path(reportlab.__file__).resolve().parent/'fonts'
pdfmetrics.registerFont(TTFont('Body', str(FONT_DIR/'Vera.ttf')))
pdfmetrics.registerFont(TTFont('Body-Bold', str(FONT_DIR/'VeraBd.ttf')))
pdfmetrics.registerFontFamily('Body', normal='Body', bold='Body-Bold')

ROOT = Path(__file__).resolve().parents[1]
INK, GREEN, MUTED = '#172c25', '#174e3b', '#56665e'
STYLES = {
    'label': ParagraphStyle('label', fontName='Body-Bold', fontSize=8, leading=12, textColor=colors.HexColor(GREEN), spaceAfter=9),
    'name': ParagraphStyle('name', fontName='Body-Bold', fontSize=29, leading=34, textColor=colors.HexColor(INK), spaceAfter=5),
    'title': ParagraphStyle('title', fontName='Body', fontSize=12, leading=17, textColor=colors.HexColor(GREEN), spaceAfter=10),
    'body': ParagraphStyle('body', fontName='Body', fontSize=9.3, leading=13.8, textColor=colors.HexColor(INK), spaceAfter=8),
    'small': ParagraphStyle('small', fontName='Body', fontSize=8.2, leading=12, textColor=colors.HexColor(MUTED), spaceAfter=7),
    'section': ParagraphStyle('section', fontName='Body-Bold', fontSize=10.5, leading=15, textColor=colors.HexColor(GREEN), spaceBefore=12, spaceAfter=9),
    'entry': ParagraphStyle('entry', fontName='Body-Bold', fontSize=10, leading=14, textColor=colors.HexColor(INK), spaceAfter=3),
    'hero': ParagraphStyle('hero', fontName='Body', fontSize=39, leading=44, textColor=colors.HexColor(INK), spaceAfter=20),
    'intro': ParagraphStyle('intro', fontName='Body', fontSize=12, leading=20, textColor=colors.HexColor(INK), spaceAfter=20),
    'url': ParagraphStyle('url', fontName='Body', fontSize=10, leading=17, textColor=colors.HexColor(GREEN), spaceAfter=15, wordWrap='CJK'),
}

def p(text, style='body'):
    return Paragraph(text, STYLES[style])

def link(url, label=None):
    return f'<a href="{escape(url, quote=True)}" color="{GREEN}">{escape(label or url)}</a>'

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#d9e1d9'))
    canvas.line(20*mm, 17*mm, A4[0]-20*mm, 17*mm)
    canvas.setFont('Body', 8)
    canvas.setFillColor(colors.HexColor(MUTED))
    canvas.drawString(20*mm, 12*mm, 'Marijn Bent | marijnbent.nl')
    canvas.drawRightString(A4[0]-20*mm, 12*mm, str(doc.page))
    canvas.restoreState()

def write(path, story, title):
    SimpleDocTemplate(str(path), pagesize=A4, rightMargin=20*mm, leftMargin=20*mm, topMargin=17*mm, bottomMargin=23*mm, title=title, author='Marijn Bent').build(story, onFirstPage=footer, onLaterPages=footer)

def generate(config_path):
    app = json.loads(config_path.read_text())
    cv = json.loads((ROOT/'src/data/cv'/app['cvSource']).read_text())
    out = ROOT/'public/applications'/app['directory']
    out.mkdir(parents=True, exist_ok=True)
    contact = f"{link('mailto:'+cv['email'], cv['email'])} &nbsp; | &nbsp; {link(cv['phoneHref'], cv['phone'])}<br/>{link(cv['website'], 'marijnbent.nl')} &nbsp; | &nbsp; {link(cv['github'], 'github.com/marijnbent')}"
    story = [p(escape(app['cvLabel']), 'label'), p(escape(cv['name']), 'name'), p(escape(cv['title']), 'title'), p(contact, 'small'), HRFlowable(width='100%', thickness=.6, color=colors.HexColor('#d9e1d9')), Spacer(1, 9), p(escape(cv['summary']))]
    for section in cv['sections']:
        if section.get('pageBreakBefore'):
            story.append(PageBreak())
        story.append(p(escape(section['heading']), 'section'))
        for entry in section['entries']:
            title = link(entry['url'], entry['title']) if entry.get('url') else escape(entry['title'])
            story.append(KeepTogether([p(title+' <font name="Body" color="'+MUTED+'"> / '+escape(entry['subtitle'])+'</font>', 'entry'), p(escape(entry['body']))]))
    story.extend([p(escape(cv['skillsHeading']), 'section'), p(escape(cv['skills']))])
    write(out/app['cvFilename'], story, f"{cv['name']} - CV")
    story = [p(escape(app['applicationLabel']), 'label'), Spacer(1, 24), p(escape(app['heading']), 'hero'), p(escape(app['role'])+' / '+escape(app['company']), 'title'), Spacer(1, 18), p(escape(app['introduction']), 'intro'), Spacer(1, 10), p(escape(app['linkLabel']), 'section'), p(link(app['applicationUrl']), 'url'), Spacer(1, 12), HRFlowable(width='100%', thickness=.6, color=colors.HexColor('#d9e1d9')), Spacer(1, 22), p(escape(app['supportingText']), 'intro'), Spacer(1, 25), p(escape(app['contactLabel']), 'label'), p(contact, 'small')]
    write(out/app['applicationFilename'], story, f"{cv['name']} - {app['company']} application")
    return [out/app['cvFilename'], out/app['applicationFilename']]

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('application', nargs='?', default='genki')
    args = parser.parse_args()
    if not args.application.replace('-', '').isalnum():
        parser.error('Use an application slug.')
    for output in generate(ROOT/'src/data/applications'/f'{args.application}-documents.json'):
        print(output.relative_to(ROOT))
