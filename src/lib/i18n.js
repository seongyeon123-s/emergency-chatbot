// src/lib/i18n.js

const translations = {
      ko: {
        appTitle: "🆘 비상상황 챗봇",
        chooseSituation: "어느 상황인가요?",
        wildfire: "🔥 산불",
        earthquake: "🌍 지진",
        flood: "🌊 홍수",
        war: "⚔️ 전쟁",
        voiceInput: "음성 입력",
        changeLanguage: "언어 변경",
        settings: "⚙️ 설정",
        languageSetting: "언어 설정:",
        voiceSetting: "음성 인식:",
        offlineManual: "오프라인 메뉴얼:",
        gpsSetting: "위치 정보 사용:",
        privacy: "개인정보 처리방침:",
        change: "변경",
        view: "보기",
        download: "미리 다운로드",
        enableVoice: "음성 안내 및 입력",
        sendGPS: "GPS 전송 여부",
        back: "← 돌아가기",
        currentLocation: "📍 현재 위치:",
        detailTitle: {
          wildfire: "산불 대처 요령",
          earthquake: "지진 대처 요령",
          flood: "홍수 대처 요령",
          war: "전쟁 대처 요령"
        },
        detailContent: {
          wildfire: `1. 바람 방향을 확인하고 바람 반대편으로 대피하세요.
    2. 연기가 짙은 곳은 피하고 낮은 자세로 이동하세요.
    3. 차량보다 도보가 안전할 수 있으니 상황을 판단하세요.`,
          earthquake: `1. 탁자 아래로 들어가 머리를 보호하세요.
    2. 창문 및 떨어질 물건에서 떨어지세요.
    3. 진동이 멈춘 후 대피하세요.`,
          flood: `1. 높은 지대로 대피하세요.
    2. 전기 기기 사용을 피하고, 물 근처에 접근하지 마세요.
    3. 지역 뉴스나 안내 방송을 확인하세요.`,
          war: `1. 공습 경보를 듣고 즉시 대피소로 이동하세요.
    2. 비상용품을 미리 준비하고, 가족과 연락 계획을 세우세요.
    3. 군사 시설 근처를 피하고 실내에 머무르세요.`
        }
      },
      en: {
        appTitle: "🆘 Emergency Chatbot",
        chooseSituation: "What is the emergency situation?",
        wildfire: "🔥 Wildfire",
        earthquake: "🌍 Earthquake",
        flood: "🌊 Flood",
        war: "⚔️ War",
        voiceInput: "Voice Input",
        changeLanguage: "Change Language",
        settings: "⚙️ Settings",
        languageSetting: "Language:",
        voiceSetting: "Voice Recognition:",
        offlineManual: "Offline Manual:",
        gpsSetting: "Location Sharing:",
        privacy: "Privacy Policy:",
        change: "Change",
        view: "View",
        download: "Download",
        enableVoice: "Voice guidance and input",
        sendGPS: "Enable GPS sharing",
        back: "← Back",
        currentLocation: "📍 Current location:",
        detailTitle: {
          wildfire: "Wildfire Response Guide",
          earthquake: "Earthquake Response Guide",
          flood: "Flood Response Guide",
          war: "War Emergency Guide"
        },
        detailContent: {
          wildfire: `1. Check wind direction and evacuate to the opposite side.
    2. Avoid thick smoke and stay low when moving.
    3. Sometimes walking is safer than driving. Decide wisely.`,
          earthquake: `1. Hide under a table and protect your head.
    2. Stay away from windows and falling objects.
    3. Evacuate after shaking stops.`,
          flood: `1. Evacuate to higher ground.
    2. Avoid using electrical appliances and stay away from water.
    3. Follow local alerts or news.`,
          war: `1. Move to shelter immediately upon hearing sirens.
    2. Prepare emergency supplies and contact plans.
    3. Stay indoors and avoid military zones.`
        }
      },
      zh: {
        appTitle: "🆘 紧急情况聊天机器人",
        chooseSituation: "是什么紧急情况？",
        wildfire: "🔥 森林火灾",
        earthquake: "🌍 地震",
        flood: "🌊 洪水",
        war: "⚔️ 战争",
        voiceInput: "语音输入",
        changeLanguage: "切换语言",
        settings: "⚙️ 设置",
        languageSetting: "语言设置:",
        voiceSetting: "语音识别:",
        offlineManual: "离线手册:",
        gpsSetting: "位置使用:",
        privacy: "隐私政策:",
        change: "更改",
        view: "查看",
        download: "预先下载",
        enableVoice: "启用语音提示与输入",
        sendGPS: "启用 GPS 共享",
        back: "← 返回",
        currentLocation: "📍 当前定位:",
        detailTitle: {
          wildfire: "森林火灾应对指南",
          earthquake: "地震应对指南",
          flood: "洪水应对指南",
          war: "战争应对指南"
        },
        detailContent: {
          wildfire: `1. 观察风向，往逆风方向疏散。
    2. 避开浓烟区域，低姿态移动。
    3. 视情况判断步行可能比驾车更安全。`,
          earthquake: `1. 躲到桌子下保护头部。
    2. 远离窗户和可能掉落的物体。
    3. 震动停止后再撤离。`,
          flood: `1. 向高地撤离。
    2. 避免使用电器，远离水源。
    3. 收听广播或官方指引。`,
          war: `1. 听到警报后立即前往避难所。
    2. 准备应急用品并与家人约定联络方式。
    3. 避开军事设施并留在室内。`
        }
      },
      ja: {
        appTitle: "🆘 緊急チャットボット",
        chooseSituation: "どのような状況ですか？",
        wildfire: "🔥 山火事",
        earthquake: "🌍 地震",
        flood: "🌊 洪水",
        war: "⚔️ 戦争",
        voiceInput: "音声入力",
        changeLanguage: "言語を変更",
        settings: "⚙️ 設定",
        languageSetting: "言語設定:",
        voiceSetting: "音声認識:",
        offlineManual: "オフラインマニュアル:",
        gpsSetting: "位置情報共有:",
        privacy: "プライバシーポリシー:",
        change: "変更",
        view: "表示",
        download: "事前にダウンロード",
        enableVoice: "音声案内と入力を有効化",
        sendGPS: "GPS共有を有効にする",
        back: "← 戻る",
        currentLocation: "📍 現在地:",
        detailTitle: {
          wildfire: "山火事対応ガイド",
          earthquake: "地震対応ガイド",
          flood: "洪水対応ガイド",
          war: "戦争対応ガイド"
        },
        detailContent: {
          wildfire: `1. 風向きを確認し、逆方向へ避難。
    2. 煙が濃い場所を避け、姿勢を低く保つ。
    3. 状況により徒歩が安全な場合もあります。`,
          earthquake: `1. テーブルの下に隠れて頭を守る。
    2. 窓や落ちてくる物から離れる。
    3. 揺れが収まったら避難。`,
          flood: `1. 高い場所に避難。
    2. 電気機器を使用せず、水辺から離れる。
    3. 地域の情報を確認。`,
          war: `1. 警報が鳴ったらすぐに避難所へ。
    2. 非常用品の準備と家族との連絡手段を確認。
    3. 軍事施設を避け、室内に留まる。`
        }
      },
      es: {
        appTitle: "🆘 Chatbot de Emergencia",
        chooseSituation: "¿Cuál es la situación de emergencia?",
        wildfire: "🔥 Incendio forestal",
        earthquake: "🌍 Terremoto",
        flood: "🌊 Inundación",
        war: "⚔️ Guerra",
        voiceInput: "Entrada de voz",
        changeLanguage: "Cambiar idioma",
        settings: "⚙️ Ajustes",
        languageSetting: "Idioma:",
        voiceSetting: "Reconocimiento de voz:",
        offlineManual: "Manual sin conexión:",
        gpsSetting: "Ubicación activada:",
        privacy: "Política de privacidad:",
        change: "Cambiar",
        view: "Ver",
        download: "Descargar ahora",
        enableVoice: "Guía y entrada de voz",
        sendGPS: "Habilitar GPS",
        back: "← Volver",
        currentLocation: "📍 Ubicación actual:",
        detailTitle: {
          wildfire: "Guía de Incendios Forestales",
          earthquake: "Guía para Terremotos",
          flood: "Guía para Inundaciones",
          war: "Guía para Situaciones de Guerra"
        },
        detailContent: {
          wildfire: `1. Verifica la dirección del viento y evacua en dirección opuesta.
    2. Evita áreas con humo denso y muévete agachado.
    3. Caminar puede ser más seguro que conducir.`,
          earthquake: `1. Refúgiate bajo una mesa y protege tu cabeza.
    2. Aléjate de ventanas y objetos que puedan caer.
    3. Evacúa después de que termine el temblor.`,
          flood: `1. Evacua a una zona alta.
    2. No uses aparatos eléctricos ni te acerques al agua.
    3. Escucha alertas locales o noticias.`,
          war: `1. Dirígete a un refugio al oír la alarma.
    2. Ten preparado un kit de emergencia y un plan de contacto.
    3. Evita instalaciones militares y permanece en interiores.`
        }
      }
    }
    
    export default translations;
    