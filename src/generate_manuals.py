from reportlab.pdfgen import canvas
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
import os

# ✅ 폰트 등록
base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
font_dir = os.path.join(base_dir, "fonts")
manual_dir = os.path.join(base_dir, "public", "manual")

os.makedirs(manual_dir, exist_ok=True)

pdfmetrics.registerFont(TTFont("NotoKR", os.path.join(font_dir, "NotoSansKR.ttf")))
pdfmetrics.registerFont(TTFont("NotoJP", os.path.join(font_dir, "NotoSansJP.ttf")))
pdfmetrics.registerFont(TTFont("NotoSC", os.path.join(font_dir, "NotoSansSC.ttf")))

# ✅ 다국어 텍스트
translations = {
    "ko": {
        "title": "비상 대처 매뉴얼",
        "body": [
            "이 매뉴얼은 화재, 지진, 홍수, 전쟁 등의 긴급 상황 시 필요한 행동 지침을 제공합니다.",
            "1. 침착하게 주변 상황을 파악하세요.",
            "2. 안전한 장소로 대피하세요.",
            "3. 구조 요청을 보내세요.",
            "꼭 지시를 따르고 서로 도와주세요.",
        ],
        "font": "NotoKR",
    },
    "ja": {
        "title": "緊急対応マニュアル",
        "body": [
            "このマニュアルは緊急時の行動指針を提供します。",
            "1. 冷静に周囲を確認しましょう。",
            "2. 安全な場所へ避難してください。",
            "3. 救助を要請してください。",
            "指示に従い、協力しましょう。",
        ],
        "font": "NotoJP",
    },
    "zh": {
        "title": "应急手册",
        "body": [
            "本手册提供火灾、地震、洪水、战争等紧急情况下的应对指南。",
            "1. 保持冷静并评估周围情况。",
            "2. 前往安全地点。",
            "3. 请求救援。",
            "请遵循指示并协助他人。",
        ],
        "font": "NotoSC",
    },
    "en": {
        "title": "Emergency Response Manual",
        "body": [
            "This manual provides emergency response guidelines.",
            "1. Stay calm and assess the situation.",
            "2. Move to a safe location.",
            "3. Request help from authorities.",
            "Follow instructions and assist others.",
        ],
        "font": "Helvetica",  # 기본 영문 폰트
    },
    "es": {
        "title": "Manual de Respuesta de Emergencia",
        "body": [
            "Este manual proporciona pautas para situaciones de emergencia.",
            "1. Mantenga la calma y evalúe la situación.",
            "2. Diríjase a un lugar seguro.",
            "3. Solicite ayuda.",
            "Siga las instrucciones y ayude a los demás.",
        ],
        "font": "Helvetica",
    },
}

# ✅ PDF 생성
for lang, content in translations.items():
    file_path = os.path.join(manual_dir, f"manual_{lang}.pdf")
    c = canvas.Canvas(file_path)
    c.setFont(content["font"], 24)
    c.drawString(100, 770, content["title"])
    c.setFont(content["font"], 16)
    y = 730
    for line in content["body"]:
        c.drawString(100, y, line)
        y -= 30
    c.save()

print("📄 PDF 매뉴얼 생성 완료!")
