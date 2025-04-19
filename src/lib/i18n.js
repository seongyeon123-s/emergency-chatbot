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
        nearestShelter: "📍가까운 대피소",
        detailTitle: {
          wildfire: "산불 대처 요령",
          earthquake: "지진 대처 요령",
          flood: "홍수 대처 요령",
          war: "전쟁 대처 요령",
        },
        detailContent: {
          wildfire: `🔥야외에서 발생했을 때\n1. 바람 방향을 확인하고 바람 반대편으로 대피하세요.\n2. 연기가 짙은 곳은 피하고 낮은 자세로 이동하세요.\n3. 차량보다 도보가 안전할 수 있으니 상황을 판단하세요.\n4. 화제 발생지보다 낮은 곳으로 대피하세요.\n🏠실내에서 발생했을 때\n1. 작은 화제일 경우 소화기를 사용하세요.\n2. 초기 진압에 실패했을 경우 119에 신고하고 안내를 따르세요.\n3. 젖은 수건을 얼굴에 두르고 낮은 자세로 대피하세요.\n4. 출입문의 온도를 확인하고 탈출하세요.\n5. 엘리베이터를 사용하지 마세요.\n📞비상 연락망\n산림청 : 1688-3119\n소방서 : 119`,
          earthquake: `🏢건물 안에서 발생했을 때\n1. 탁자 아래로 들어가 머리를 보호하세요.\n2. 창문 및 떨어질 물건에서 떨어지세요.\n3. 진동이 멈춘 후 대피하세요.\n🚗차 안에서 발생했을 때\n1. 큰 진동이 끝날 때까지 차 안에서 머무르되, 고가도로나 터널은 피하세요.\n2. 비상등을 켜둔 채, 높은 건물이 적은 도로 가장자리에 정차하세요.\n🏞️야외에서 발생했을 때\n1. 가로수, 건물, 전신주에서 멀리 떨어져서 대기하세요.\n2. 넓은 공터로 대피하세요.\n📞비상 연락망\n소방서 : 119\n경찰서 : 112\n행정안전부 재난안전상황실 : 044-205-1542`,
          flood: `🏠실내에 있을 때\n1. 2층 이상으로 대피하세요.\n2. 전기 기기 사용을 피하고, 물 근처에 접근하지 마세요.\n3. 가스를 차단하세요.\n4. 지역 뉴스나 안내 방송을 확인하세요.\n💧야외에 있을 때\n1. 높은 지대로 대피하세요.\n2. 하천, 침수도로 근처로 가지 마세요.\n3. 차량 사용을 자제하세요.\n📞비상 연락망\n소방서 : 119\n경찰서 : 112\n행정안전부 재난안전상황실 : 044-205-1542`,
          war: `🚨전쟁 발발 직후\n1. 공습 경보를 듣고 즉시 대피소로 이동하세요.\n2. 비상용품을 미리 준비하고, 가족과 연락 계획을 세우세요.\n3. 군사 시설 근처를 피하고 실내에 머무르세요.\n4. 통신 두절을 대비해서 가족, 지인들과 모일 장소, 연락 방법을 정하세요.\n5. TV나 라디오, 스마트폰 알림으로 정부의 지시를 따르세요.\n🛡️전쟁 중 행동수칙\n1. 실내에서 머무르며 외부 노출을 자제하세요.\n2. 식량과 물을 아껴서 사용하세요.\n3. 정부방송 및 공공알림을 주기적으로 확인하세요.\n📞비상 연락망\n행정안전부 중앙재난안전대책본부 : 044-205-1542\n대한적십자사 : 1577-8179\n소방서 : 119\n경찰서 : 112\n🌐정부 공지 확인\n정부24 : www.gov.kr`,
        },
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
        gpsSetting: "Use Location Info:",
        privacy: "Privacy Policy:",
        change: "Change",
        view: "View",
        download: "Download in Advance",
        enableVoice: "Voice Guide and Input",
        sendGPS: "Send GPS Info",
        back: "← Back",
        currentLocation: "📍 Current Location:",
        nearestShelter: "📍 Nearest Shelter",
        detailTitle: {
          wildfire: "Wildfire Guide",
          earthquake: "Earthquake Guide",
          flood: "Flood Guide",
          war: "War Response Guide",
        },
        detailContent: {
            "wildfire": "🔥When outdoors:\n1. Identify wind direction and evacuate against the wind.\n2. Avoid thick smoke and move in a low posture.\n3. Walking may be safer than driving; assess the situation.\n4. Evacuate to lower areas than the fire origin.\n🏠When indoors:\n1. Use a fire extinguisher for small fires.\n2. If initial suppression fails, call 119 and follow instructions.\n3. Cover your face with a wet towel and evacuate in a low posture.\n4. Check the door temperature before exiting.\n5. Do not use elevators.\n📞Emergency Contacts\n  Korea Forest Service: 1688-3119\n  Fire Department: 119",
            "earthquake": "🏢When inside a building:\n1. Take cover under a table and protect your head.\n2. Stay away from windows and falling objects.\n3. Evacuate after the shaking stops.\n🚗When in a car:\n1. Stay inside until the major shaking stops; avoid overpasses and tunnels.\n2. Turn on hazard lights and stop at the roadside away from tall buildings.\n🏞️When outdoors:\n1. Stay away from trees, buildings, and utility poles.\n2. Evacuate to an open area.\n📞Emergency Contacts\n  Fire Department: 119\n  Police: 112\n  Ministry of the Interior and Safety Disaster Situation Room: 044-205-1542",
            "flood": "🏠When indoors:\n1. Evacuate to the second floor or higher.\n2. Avoid using electrical appliances and stay away from water.\n3. Shut off the gas supply.\n4. Monitor local news and announcements.\n💧When outdoors:\n1. Evacuate to higher ground.\n2. Stay away from rivers and flooded roads.\n3. Refrain from using vehicles.\n📞Emergency Contacts\n  Fire Department: 119\n  Police: 112\n  Ministry of the Interior and Safety Disaster Situation Room: 044-205-1542",
            "war": "🚨Immediately after the outbreak of war:\n1. Upon hearing an air raid warning, move to a shelter immediately.\n2. Prepare emergency supplies and establish a communication plan with family.\n3. Avoid military facilities and stay indoors.\n4. Plan meeting places and communication methods with family and acquaintances in case of communication failure.\n5. Follow government instructions via TV, radio, or smartphone alerts.\n🛡️During wartime:\n1. Stay indoors and minimize exposure.\n2. Conserve food and water.\n3. Regularly check government broadcasts and public alerts.\n📞Emergency Contacts\n  Ministry of the Interior and Safety Central Disaster and Safety Countermeasures Headquarters: 044-205-1542\n  Korean Red Cross: 1577-8179\n  Fire Department: 119\n  Police: 112\n🌐Government Notices\n  Government24: www.gov.kr"
        },
      },
    
      ja: {
        appTitle: "🆘 緊急チャットボット",
        chooseSituation: "どの状況ですか？",
        wildfire: "🔥 山火事",
        earthquake: "🌍 地震",
        flood: "🌊 洪水",
        war: "⚔️ 戦争",
        voiceInput: "音声入力",
        changeLanguage: "言語変更",
        settings: "⚙️ 設定",
        languageSetting: "言語設定：",
        voiceSetting: "音声認識：",
        offlineManual: "オフラインマニュアル：",
        gpsSetting: "位置情報の使用：",
        privacy: "プライバシーポリシー：",
        change: "変更",
        view: "表示",
        download: "事前にダウンロード",
        enableVoice: "音声案内と入力",
        sendGPS: "GPS送信の有無",
        back: "← 戻る",
        currentLocation: "📍 現在地：",
        nearestShelter: "📍 最寄りの避難所",
        detailTitle: {
          wildfire: "山火事の対応方法",
          earthquake: "地震の対応方法",
          flood: "洪水の対応方法",
          war: "戦争時の行動指針",
        },
        detailContent: {
            "wildfire": "🔥屋外にいる場合:\n1. 風向きを確認し、風下ではなく風上に避難してください。\n2. 濃い煙を避け、低い姿勢で移動してください。\n3. 状況によっては徒歩の方が安全な場合があります。\n4. 火災発生場所より低い場所に避難してください。\n🏠屋内にいる場合:\n1. 小規模な火災には消火器を使用してください。\n2. 初期消火に失敗した場合は119番に通報し、指示に従ってください。\n3. 濡れたタオルで顔を覆い、低い姿勢で避難してください。\n4. 扉の温度を確認してから退避してください。\n5. エレベーターは使用しないでください。\n📞緊急連絡先\n  韓国森林庁: 1688-3119\n  消防署: 119",
          
            "earthquake": "🏢建物内にいる場合:\n1. 机の下に身を隠し、頭部を保護してください。\n2. 窓や落下物から離れてください。\n3. 揺れが収まった後に避難してください。\n🚗車内にいる場合:\n1. 大きな揺れが収まるまでは車内に留まり、高架橋やトンネルを避けてください。\n2. ハザードランプを点け、建物の少ない道の端に停車してください。\n🏞️屋外にいる場合:\n1. 木、建物、電柱から離れてください。\n2. 開けた場所に避難してください。\n📞緊急連絡先\n  消防署: 119\n  警察署: 112\n  行政安全部 災害状況室: 044-205-1542",
          
            "flood": "🏠屋内にいる場合:\n1. 2階以上に避難してください。\n2. 電気機器の使用を避け、水に近づかないでください。\n3. ガスを遮断してください。\n4. 地域ニュースや放送を確認してください。\n💧屋外にいる場合:\n1. 高台に避難してください。\n2. 川や冠水した道路には近づかないでください。\n3. 車の使用を控えてください。\n📞緊急連絡先\n  消防署: 119\n  警察署: 112\n  行政安全部 災害状況室: 044-205-1542",
          
            "war": "🚨戦争発生直後:\n1. 空襲警報が聞こえたら、すぐにシェルターに避難してください。\n2. 非常用品を準備し、家族との連絡計画を立ててください。\n3. 軍事施設から離れ、屋内に留まってください。\n4. 通信障害に備えて、集合場所や連絡方法を決めておきましょう。\n5. テレビ、ラジオ、スマートフォン通知で政府の指示に従ってください。\n🛡️戦時中:\n1. 屋内で過ごし、外出を控えてください。\n2. 食料と水を節約してください。\n3. 政府放送やアラートを定期的に確認してください。\n📞緊急連絡先\n  行政安全部 中央災害安全対策本部: 044-205-1542\n  韓国赤十字社: 1577-8179\n  消防署: 119\n  警察署: 112\n🌐政府通知: www.gov.kr"
          },
      },
    
      zh: {
            appTitle: "🆘 紧急情况聊天机器人",
            chooseSituation: "当前是什么情况？",
            wildfire: "🔥 森林火灾",
            earthquake: "🌍 地震",
            flood: "🌊 洪水",
            war: "⚔️ 战争",
            voiceInput: "语音输入",
            changeLanguage: "更改语言",
            settings: "⚙️ 设置",
            languageSetting: "语言设置：",
            voiceSetting: "语音识别：",
            offlineManual: "离线手册：",
            gpsSetting: "位置服务使用：",
            privacy: "隐私政策：",
            change: "更改",
            view: "查看",
            download: "提前下载",
            enableVoice: "语音提示与输入",
            sendGPS: "GPS 发送与否",
            back: "← 返回",
            currentLocation: "📍 当前所在位置：",
            nearestShelter: "📍 最近的避难所",
            detailTitle: {
              wildfire: "森林火灾应对指南",
              earthquake: "地震应对指南",
              flood: "洪水应对指南",
              war: "战争应对指南"
            },
            detailContent: {
              wildfire: `🔥 户外发生时\n1. 确认风向并向逆风方向逃生。\n2. 避开浓烟区域，保持低姿态移动。\n3. 根据情况判断，步行可能比驾车更安全。\n4. 向比起火点更低的地方撤离。\n🏠 室内发生时\n1. 小火时使用灭火器扑灭。\n2. 扑灭失败立即拨打119并遵循指示。\n3. 用湿毛巾捂住口鼻，保持低姿态撤离。\n4. 确认门把温度再开门逃生。\n5. 切勿使用电梯。\n📞 紧急联系电话\n林业厅：1688-3119\n消防：119`,
              earthquake: `🏢 室内发生时\n1. 躲在桌子下保护头部。\n2. 远离窗户和易掉落物品。\n3. 震动结束后再撤离。\n🚗 车内发生时\n1. 大震动时留在车内，但避免高架道路和隧道。\n2. 打开双闪灯，停在建筑较少的路边。\n🏞️ 户外发生时\n1. 远离电线杆、大树、建筑物。\n2. 撤离到开阔地区。\n📞 紧急联系电话\n消防：119\n警察：112\n应急管理厅：044-205-1542`,
              flood: `🏠 室内\n1. 撤离至二楼以上。\n2. 避免使用电器设备，远离水源。\n3. 关闭燃气。\n4. 关注新闻或紧急广播。\n💧 室外\n1. 向高处撤离。\n2. 避免靠近河流、积水道路。\n3. 尽量不使用车辆。\n📞 紧急联系电话\n消防：119\n警察：112\n应急管理厅：044-205-1542`,
              war: `🚨 战争爆发初期\n1. 听到空袭警报立即前往避难所。\n2. 提前准备应急物资并与家人制定联系计划。\n3. 避开军事设施，尽量待在室内。\n4. 为断网做好准备，与家人商定集合地点和联系方法。\n5. 关注电视、广播或手机通知，遵从政府指示。\n🛡️ 战争期间行为守则\n1. 尽量留在室内，避免外出。\n2. 节约使用粮食和饮水。\n3. 定期确认政府公告与公共预警。\n📞 紧急联系电话\n应急管理厅：044-205-1542\n红十字会：1577-8179\n消防：119\n警察：112\n🌐 政府通知\n政府24：www.gov.kr`
            }
          },
      es: {
            appTitle: "🆘 Chatbot de Emergencia",
            chooseSituation: "¿Cuál es la situación actual?",
            wildfire: "🔥 Incendio forestal",
            earthquake: "🌍 Terremoto",
            flood: "🌊 Inundación",
            war: "⚔️ Guerra",
            voiceInput: "Entrada de voz",
            changeLanguage: "Cambiar idioma",
            settings: "⚙️ Configuración",
            languageSetting: "Idioma:",
            voiceSetting: "Reconocimiento de voz:",
            offlineManual: "Manual sin conexión:",
            gpsSetting: "Uso de ubicación:",
            privacy: "Política de privacidad:",
            change: "Cambiar",
            view: "Ver",
            download: "Descargar anticipadamente",
            enableVoice: "Guía de voz y entrada",
            sendGPS: "¿Enviar ubicación GPS?",
            back: "← Volver",
            currentLocation: "📍 Ubicación actual:",
            nearestShelter: "📍 Refugio más cercano",
            detailTitle: {
              wildfire: "Guía ante Incendio Forestal",
              earthquake: "Guía ante Terremoto",
              flood: "Guía ante Inundación",
              war: "Guía ante Guerra"
            },
            detailContent: {
              wildfire: `🔥 Al aire libre\n1. Verifica la dirección del viento y evacúa en dirección opuesta.\n2. Evita el humo espeso y mantente bajo.\n3. Considera caminar si es más seguro que conducir.\n4. Desplázate a zonas más bajas.\n🏠 En interiores\n1. Usa un extintor si es un incendio pequeño.\n2. Si no lo puedes controlar, llama al 119 y sigue instrucciones.\n3. Cúbrete con una toalla mojada y sal agachado.\n4. Verifica la temperatura de la puerta antes de abrirla.\n5. No uses el ascensor.\n📞 Contactos de emergencia\nAgencia Forestal: 1688-3119\nBomberos: 119`,
              earthquake: `🏢 En interiores\n1. Refúgiate bajo una mesa y protege tu cabeza.\n2. Aléjate de ventanas y objetos que puedan caer.\n3. Evacúa cuando termine el temblor.\n🚗 En un vehículo\n1. Quédate en el coche si el temblor es fuerte, evita túneles y puentes.\n2. Enciende las luces de emergencia y detente en un lugar seguro.\n🏞️ Al aire libre\n1. Aléjate de postes, edificios y árboles.\n2. Refúgiate en un área abierta.\n📞 Contactos de emergencia\nBomberos: 119\nPolicía: 112\nCentro Nacional de Emergencias: 044-205-1542`,
              flood: `🏠 En casa\n1. Evacúa a pisos superiores.\n2. No uses electricidad ni te acerques al agua.\n3. Cierra el gas.\n4. Sigue noticias o alertas.\n💧 En exteriores\n1. Refúgiate en zonas altas.\n2. No te acerques a ríos o calles inundadas.\n3. Evita usar el coche.\n📞 Contactos de emergencia\nBomberos: 119\nPolicía: 112\nCentro Nacional de Emergencias: 044-205-1542`,
              war: `🚨 Al inicio de una guerra\n1. Evacúa a un refugio al oír la alerta.\n2. Prepara suministros y acuerda un plan con tu familia.\n3. Evita zonas militares y permanece en interiores.\n4. Establece puntos de reunión y contacto en caso de cortes de comunicación.\n5. Sigue instrucciones del gobierno por TV o móvil.\n🛡️ Durante el conflicto\n1. Permanece en interiores y evita exposición.\n2. Raciona alimentos y agua.\n3. Verifica periódicamente los avisos del gobierno.\n📞 Contactos de emergencia\nCentro Nacional de Emergencias: 044-205-1542\nCruz Roja: 1577-8179\nBomberos: 119\nPolicía: 112\n🌐 Avisos oficiales\nGov24: www.gov.kr`
            }
          }
          
    }
    
    export default translations
    