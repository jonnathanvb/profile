# -*- coding: utf-8 -*-
"""
Gera os PDFs do currículo (PT-BR e EN) em assets/cv/, com layout próprio
(reportlab). O conteúdo espelha o do index.html / i18n.js — ao atualizar o site,
atualizar também este arquivo e rodar novamente:

    python tools/generate_cv.py

Saídas:
    assets/cv/Jonnathan_Barroso_CV_pt.pdf
    assets/cv/Jonnathan_Barroso_CV_en.pdf

Requer: reportlab  (pip install reportlab)
"""
import os
import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_RIGHT
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate,
    Paragraph, Spacer, Table, TableStyle, Image, HRFlowable,
)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PHOTO = os.path.join(ROOT, "assets", "img", "photo.jpg")
OUT_DIR = os.path.join(ROOT, "assets", "cv")

ACCENT = colors.HexColor("#0e7490")
INK = colors.HexColor("#1a1a1a")
MUTED = colors.HexColor("#4a4a4a")
LINE = colors.HexColor("#cbd5e1")

NAME = "Jonnathan Barroso"

# Anos de experiência calculados a partir do início profissional (jul/2013),
# para o número ficar correto sempre que o PDF for regerado.
_EXP_START = datetime.date(2013, 7, 1)
YEARS = int((datetime.date.today() - _EXP_START).days / 365.25)

# ----------------------------------------------------------------- conteúdo PT
PT = {
    "file": "Jonnathan_Barroso_CV_pt.pdf",
    "doc_title": "Jonnathan Barroso — Currículo",
    "role": "Software Engineer | .NET | C# | Azure | Tech Lead",
    "contact": ("Itapevi, São Paulo — Brasil &nbsp;·&nbsp; macstudio.com.br "
                "&nbsp;·&nbsp; contato@macstudio.com.br"),
    "sec": {"about": "Sobre", "exp": "Experiência", "edu": "Formação",
            "skills": "Competências", "high": "Destaques", "lang": "Idiomas"},
    "about": [
        "Engenheiro de software com mais de {years} anos de experiência ajudando empresas a "
        "transformar a operação do dia a dia em sistemas confiáveis, com forte vivência em "
        "varejo, ponto de venda (PDV) e gestão empresarial (ERP). Atuo de ponta a ponta — do "
        "desenvolvimento full stack à definição de arquitetura de sistemas distribuídos —, "
        "com passagem por startups e empresas de tecnologia no Brasil e em Portugal.",
        "Conheço de perto os módulos que sustentam o negócio: estoque, vendas, financeiro "
        "(fechamento de caixa e conciliação) e fiscal (emissão de NFC-e e integração com a "
        "SEFAZ). Também atuei com o ERP TOTVS (Protheus), entendendo as rotinas de quem opera "
        "esses processos no dia a dia.",
        "Essa vivência me trouxe atenção redobrada à confiabilidade e à conformidade — em "
        "sistemas que lidam com dinheiro e obrigações fiscais, cada detalhe importa. No lado "
        "técnico, trabalho com back-end em C#/.NET, front-end em Angular e nuvem Microsoft "
        "Azure; como Arquiteto de Soluções, atuo nas decisões estratégicas (arquitetura, "
        "governança técnica e mentoria), sempre alinhado aos objetivos do negócio.",
    ],
    "experience": [
        ("Genesis Digital Solutions", "Lisboa, Portugal · Remoto", [
            ("Arquiteto de Software", "out 2024 – fev 2026",
             "Back-end .NET (C#) e front-end (Angular, Vue), Infraestrutura como Código "
             "(IaC/Terraform), CI/CD e Azure (Web Apps, Functions, Storage, Service Bus, "
             "Database, VM).",
             ["Projetei uma arquitetura em microsserviços dimensionada para 1.000 "
              "requisições por minuto."]),
        ]),
        ("Linked Tech", "São Paulo, Brasil", [
            ("Arquiteto de Soluções", "fev 2019 – out 2024",
             "Arquitetura de uma plataforma de PDV/food-service em microsserviços .NET "
             "(Clean Architecture e CQRS), com bibliotecas compartilhadas (NuGet) e "
             "persistência poliglota (SQL Server, Redis, CouchDB e SQLite offline). "
             "Mensageria com Azure Service Bus, módulos em tempo real (KDS via Socket.IO), "
             "autenticação centralizada (SSO) com Keycloak e integração fiscal "
             "(SEFAZ/NFCe, SAT) e de periféricos. Responsável por padrões técnicos, "
             "governança, revisão de código, infraestrutura Azure (Azure Container Apps) "
             "com CI/CD e mentoria do time.",
             ["Reduzi a fila de bugs de ~1.000 para ~10, elevando de forma expressiva a "
              "estabilidade da plataforma.",
              "Reduzi cerca de 30% do custo de nuvem ao corrigir bugs de consumo excessivo "
              "(ex.: escalonamento indevido por esgotamento de portas), migrar a "
              "hospedagem de Windows para Linux e otimizar consumo de banda larga.",
              "Implementei pipelines de CI/CD, eliminando publicações manuais que levavam "
              "horas; o empacotamento e o deploy passaram a levar menos de 5 minutos."]),
            ("Desenvolvedor Full Stack", "set 2018 – jan 2019",
             "Desenvolvimento back-end (C#) e front-end (Angular) do PDV, com integrações "
             "de meios de pagamento (POS Stone) e plataformas de delivery (iFood, Rappi), "
             "automação de infraestrutura e CI/CD."),
        ]),
        ("Iterative", "São Paulo, Brasil", [
            ("Desenvolvedor Full Stack", "jun 2017 – ago 2018",
             "APIs em .NET (projeto ConectCar), boas práticas de front-end com Angular "
             "(projeto Poder do Voto) e aplicação web (HTML/CSS/JS) para o POS da Stone."),
        ]),
        ("Betta Tecnologia", "São Paulo, Brasil", [
            ("Desenvolvedor", "jan 2017 – jun 2017",
             "Desenvolvimento e manutenção de sistemas (.NET e PHP) para as universidades "
             "FMU e Anhembi Morumbi."),
        ]),
        ("Link do Brasil", "Barueri, São Paulo", [
            ("Desenvolvedor", "jul 2015 – dez 2016",
             "Sistemas internos em C#, manutenção em VB.NET e suporte ao ERP TOTVS."),
            ("Estagiário", "jul 2013 – jun 2015",
             "Migração de sistemas legados de VB6 para VB.NET, manutenção de sistemas "
             "internos e suporte ao ERP TOTVS."),
        ]),
    ],
    "education": [
        ("Bacharelado em Sistemas de Informação", "2014 – 2017",
         "UNINOVE — Universidade Nove de Julho"),
        ("Técnico em Informática", "2012 – 2013",
         "FIEB — Instituto Técnico de Barueri"),
    ],
    "skills": [
        ("Back-end", "C#, .NET, ASP.NET Core, VB.NET, Node.js, NestJS, APIs REST"),
        ("Front-end", "Angular, Vue, TypeScript, JavaScript, NgRx, RxJS, Angular Material, HTML, CSS/SCSS, Bootstrap"),
        ("Dados & ORM", "SQL Server, PostgreSQL, MySQL, MongoDB, Redis, CouchDB, Elasticsearch, Entity Framework Core, Dapper"),
        ("Arquitetura & Integrações", "Microsserviços, Clean Architecture, DDD, CQRS, SSO/OAuth2 (Keycloak), Mensageria (Azure Service Bus), Tempo real (Socket.IO), Integração fiscal (NFC-e/SEFAZ)"),
        ("Cloud & DevOps", "Azure, AWS, Docker, Azure Container Apps, Azure DevOps, Terraform (IaC), Kubernetes, CI/CD"),
        ("Ferramentas & IA", "Git, Swagger/OpenAPI, Claude Code, OpenCode, Antigravity"),
    ],
    "highlights": [
        "Alura: +280 cursos concluídos e 11.427 exercícios resolvidos.",
        "Mais de {years} anos de experiência em desenvolvimento e arquitetura.",
    ],
    "languages": "Português (Nativo) &nbsp;·&nbsp; Inglês (Básico)",
}

# ----------------------------------------------------------------- conteúdo EN
EN = {
    "file": "Jonnathan_Barroso_CV_en.pdf",
    "doc_title": "Jonnathan Barroso — Resume",
    "role": "Software Engineer | .NET | C# | Azure | Tech Lead",
    "contact": ("Itapevi, São Paulo — Brazil &nbsp;·&nbsp; macstudio.com.br "
                "&nbsp;·&nbsp; contato@macstudio.com.br"),
    "sec": {"about": "About", "exp": "Experience", "edu": "Education",
            "skills": "Skills", "high": "Highlights", "lang": "Languages"},
    "about": [
        "Software engineer with over {years} years of experience helping companies turn "
        "day-to-day operations into reliable systems, with a strong background in retail, "
        "point of sale (POS) and enterprise management (ERP). I work end to end — from full "
        "stack development to the architecture of distributed systems — with experience at "
        "startups and technology companies in Brazil and Portugal.",
        "I know the modules that run the business firsthand: inventory, sales, finance (cash "
        "closing and reconciliation) and fiscal (NFC-e issuance and SEFAZ integration). I "
        "also worked with the TOTVS (Protheus) ERP, understanding the daily routines of the "
        "people who operate these processes.",
        "This background gave me heightened attention to reliability and compliance — in "
        "systems that handle money and tax obligations, every detail matters. On the "
        "technical side, I work with C#/.NET back-end, Angular front-end and Microsoft Azure "
        "cloud; as a Solutions Architect, I drive strategic decisions (architecture, "
        "technical governance and mentoring), always aligned with business goals.",
    ],
    "experience": [
        ("Genesis Digital Solutions", "Lisbon, Portugal · Remote", [
            ("Software Architect", "Oct 2024 – Feb 2026",
             "Back-end .NET (C#) and front-end (Angular, Vue), Infrastructure as Code "
             "(IaC/Terraform), CI/CD and Azure (Web Apps, Functions, Storage, Service Bus, "
             "Database, VM).",
             ["Designed a microservices architecture sized for 1,000 requests per minute."]),
        ]),
        ("Linked Tech", "São Paulo, Brazil", [
            ("Solutions Architect", "Feb 2019 – Oct 2024",
             "Architecture of a POS/food-service platform built as .NET microservices "
             "(Clean Architecture and CQRS), with shared NuGet libraries and polyglot "
             "persistence (SQL Server, Redis, CouchDB and offline SQLite). Azure Service "
             "Bus messaging, real-time modules (KDS over Socket.IO), centralized "
             "authentication (SSO) with Keycloak, and fiscal (SEFAZ/NFCe, SAT) and "
             "peripheral integrations. Owned technical standards, governance, code review, "
             "Azure infrastructure (Azure Container Apps) with CI/CD and team mentoring.",
             ["Cut the bug backlog from ~1,000 to ~10, significantly improving platform "
              "stability.",
              "Reduced cloud costs by around 30% by fixing excessive-consumption bugs "
              "(e.g., unnecessary auto-scaling caused by port exhaustion), migrating "
              "hosting from Windows to Linux and optimizing bandwidth usage.",
              "Implemented CI/CD pipelines, eliminating manual deployments that took hours; "
              "packaging and release dropped to under 5 minutes."]),
            ("Full Stack Developer", "Sep 2018 – Jan 2019",
             "Back-end (C#) and Angular front-end development for the POS, with payment "
             "(Stone POS) and delivery (iFood, Rappi) integrations, infrastructure "
             "automation and CI/CD."),
        ]),
        ("Iterative", "São Paulo, Brazil", [
            ("Full Stack Developer", "Jun 2017 – Aug 2018",
             ".NET APIs (ConectCar project), front-end best practices with Angular "
             "(Poder do Voto project) and a web app (HTML/CSS/JS) for the Stone POS."),
        ]),
        ("Betta Tecnologia", "São Paulo, Brazil", [
            ("Developer", "Jan 2017 – Jun 2017",
             "Development and maintenance of .NET and PHP systems for FMU and Anhembi "
             "Morumbi universities."),
        ]),
        ("Link do Brasil", "Barueri, São Paulo", [
            ("Developer", "Jul 2015 – Dec 2016",
             "Internal systems in C#, VB.NET maintenance and TOTVS ERP support."),
            ("Intern", "Jul 2013 – Jun 2015",
             "Migration of legacy systems from VB6 to VB.NET, internal systems "
             "maintenance and TOTVS ERP support."),
        ]),
    ],
    "education": [
        ("Bachelor's in Information Systems", "2014 – 2017",
         "UNINOVE — Universidade Nove de Julho"),
        ("Technical degree in IT", "2012 – 2013",
         "FIEB — Instituto Técnico de Barueri"),
    ],
    "skills": [
        ("Back-end", "C#, .NET, ASP.NET Core, VB.NET, Node.js, NestJS, REST APIs"),
        ("Front-end", "Angular, Vue, TypeScript, JavaScript, NgRx, RxJS, Angular Material, HTML, CSS/SCSS, Bootstrap"),
        ("Data & ORM", "SQL Server, PostgreSQL, MySQL, MongoDB, Redis, CouchDB, Elasticsearch, Entity Framework Core, Dapper"),
        ("Architecture & Integrations", "Microservices, Clean Architecture, DDD, CQRS, SSO/OAuth2 (Keycloak), Messaging (Azure Service Bus), Real-time (Socket.IO), Fiscal integration (NFC-e/SEFAZ)"),
        ("Cloud & DevOps", "Azure, AWS, Docker, Azure Container Apps, Azure DevOps, Terraform (IaC), Kubernetes, CI/CD"),
        ("Tools & AI", "Git, Swagger/OpenAPI, Claude Code, OpenCode, Antigravity"),
    ],
    "highlights": [
        "Alura: 280+ courses completed and 11,427 exercises solved.",
        "{years}+ years of experience in development and architecture.",
    ],
    "languages": "Portuguese (Native) &nbsp;·&nbsp; English (Basic)",
}

# ---------------------------------------------------------------------- estilos
st_name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=20,
                         textColor=ACCENT, leading=22)
st_role = ParagraphStyle("role", fontName="Helvetica", fontSize=11,
                         textColor=MUTED, leading=14, spaceBefore=2)
st_contact = ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5,
                            textColor=MUTED, leading=12, spaceBefore=4)
st_sec = ParagraphStyle("sec", fontName="Helvetica-Bold", fontSize=11.5,
                        textColor=ACCENT, leading=13, spaceBefore=2)
st_org = ParagraphStyle("org", fontName="Helvetica-Bold", fontSize=10,
                        textColor=INK, leading=12)
st_place = ParagraphStyle("place", fontName="Helvetica-Oblique", fontSize=8.5,
                          textColor=MUTED, leading=11)
st_roletitle = ParagraphStyle("roletitle", fontName="Helvetica-Bold", fontSize=9.5,
                              textColor=ACCENT, leading=12)
st_period = ParagraphStyle("period", fontName="Helvetica", fontSize=8.5,
                           textColor=MUTED, leading=12, alignment=TA_RIGHT)
st_desc = ParagraphStyle("desc", fontName="Helvetica", fontSize=9,
                         textColor=INK, leading=12.5)
st_result = ParagraphStyle("result", fontName="Helvetica", fontSize=8.8,
                           textColor=INK, leading=12, spaceBefore=1,
                           leftIndent=11, firstLineIndent=-11)
st_eduinst = ParagraphStyle("eduinst", fontName="Helvetica", fontSize=9,
                            textColor=ACCENT, leading=12)
st_body = ParagraphStyle("body", fontName="Helvetica", fontSize=9,
                         textColor=INK, leading=12.5)
st_skillcat = ParagraphStyle("skillcat", fontName="Helvetica-Bold", fontSize=9,
                             textColor=INK, leading=12)


def section(title):
    return [
        Spacer(1, 8),
        Paragraph(title, st_sec),
        HRFlowable(width="100%", thickness=0.6, color=LINE, spaceBefore=2, spaceAfter=5),
    ]


def title_period(title, period, title_style):
    """Linha: título à esquerda + período alinhado à direita da margem."""
    tbl = Table([[Paragraph(title, title_style), Paragraph(period, st_period)]],
                colWidths=[12.6 * cm, 5.2 * cm])
    tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return tbl


def build(data):
    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, data["file"])
    doc = BaseDocTemplate(
        out, pagesize=A4,
        leftMargin=1.6 * cm, rightMargin=1.6 * cm,
        topMargin=1.3 * cm, bottomMargin=1.3 * cm,
        title=data["doc_title"], author=NAME,
    )
    # Quadro sem padding interno: parágrafos e tabelas começam exatamente na
    # margem, evitando o desalinhamento de ~6 pt entre os dois.
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height,
                  leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates([PageTemplate(id="main", frames=[frame])])
    sec = data["sec"]
    story = []

    head_txt = [Paragraph(NAME, st_name), Paragraph(data["role"], st_role),
                Paragraph(data["contact"], st_contact)]
    if os.path.exists(PHOTO):
        img = Image(PHOTO, width=2.3 * cm, height=2.3 * cm)
        header = Table([[img, head_txt]], colWidths=[2.7 * cm, 15.1 * cm])
    else:
        header = Table([[head_txt]], colWidths=[16.8 * cm])
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(header)

    story += section(sec["about"])
    for p in data["about"]:
        story.append(Paragraph(p, st_body))
        story.append(Spacer(1, 3))

    # Experiência: empresa, cargo e atividades alinhados à esquerda
    story += section(sec["exp"])
    for org, place, roles in data["experience"]:
        story.append(Paragraph(org, st_org))
        story.append(Paragraph(place, st_place))
        story.append(Spacer(1, 2))
        for role in roles:
            title, period, desc = role[0], role[1], role[2]
            results = role[3] if len(role) > 3 else []
            story.append(title_period(title, period, st_roletitle))
            story.append(Paragraph(desc, st_desc))
            for r in results:
                story.append(Paragraph('<font color="#0e7490">•</font>&nbsp; ' + r, st_result))
            story.append(Spacer(1, 4))
        story.append(Spacer(1, 3))

    # Formação: curso (negrito) + período; instituição (azul) abaixo — à esquerda
    story += section(sec["edu"])
    for degree, period, inst in data["education"]:
        story.append(title_period(degree, period, st_org))
        story.append(Paragraph(inst, st_eduinst))
        story.append(Spacer(1, 5))

    # Competências: categoria | itens (duas colunas)
    story += section(sec["skills"])
    rows = [[Paragraph(cat, st_skillcat), Paragraph(items, st_body)]
            for cat, items in data["skills"]]
    sk = Table(rows, colWidths=[5.2 * cm, 12.6 * cm])
    sk.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
    ]))
    story.append(sk)

    story += section(sec["high"])
    for h in data["highlights"]:
        story.append(Paragraph("•&nbsp; " + h, st_body))
        story.append(Spacer(1, 2))

    doc.build(story)
    print("PDF gerado:", out)


if __name__ == "__main__":
    # Substitui o token {years} pelos anos de experiência calculados.
    for _data in (PT, EN):
        _data["about"] = [s.replace("{years}", str(YEARS)) for s in _data["about"]]
        _data["highlights"] = [s.replace("{years}", str(YEARS)) for s in _data["highlights"]]
    build(PT)
    build(EN)
