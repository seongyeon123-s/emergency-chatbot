// src/lib/i18n.js

const translations = {
      ko: {
        appTitle: "🆘 비상상황 챗봇",
        chooseSituation: "어느 상황인가요?",
        wildfire: "🔥 화재",
        earthquake: "🌍 지진",
        flood: "🌧️ 홍수",
        war: "⚔️ 전쟁",
        typhoon: "🌪️ 태풍",
        tsunami:"🌊해일",
        voiceInput: "음성 입력",
        changeLanguage: "언어 변경",
        settings: "⚙️ 설정",
        languageSetting: "언어 설정:",
        voiceSetting: "음성 인식:",
        offlineManual: "PDF 메뉴얼:",
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
          wildfire: "화재 대처 요령",
          earthquake: "지진 대처 요령",
          flood: "홍수 대처 요령",
          war: "전쟁 대처 요령",
          typhoon: "태풍 대처 요령",
          tsunami:"해일 대처 요령",
        },
        detailContent: {
          wildfire: `
            <h3>🏠 실내에서</h3>
            <ol>
              <li><strong>작은 화재</strong>일 경우 소화기를 사용하세요.</li>
              <li><strong>초기 진압 실패 시</strong> 119에 신고하고 안내를 따르세요.</li>
              <li>젖은 수건을 얼굴에 두르고 낮은 자세로 대피하세요.</li>
              <li>출입문의 온도를 확인하고 탈출하세요.</li>
              <li><strong>엘리베이터는 사용하지 마세요.</strong></li>
            </ol>
            <h3>🔥 야외에서</h3>
            <ol>
              <li><strong>바람 반대편</strong>으로 대피하세요.</li>
              <li>연기가 짙은 곳은 피하고 <strong>낮은 자세</strong>로 이동하세요.</li>
              <li><strong>도보</strong>가 차량보다 안전할 수 있습니다.</li>
              <li><strong>화재 발생지보다 낮은 곳</strong>으로 대피하세요.</li>
            </ol>
            <p><strong>📞 비상 연락망</strong><br>
            산림청: 1688-3119<br>
            소방서: 119</p>
          `,
          earthquake: `
            <h3>🏢 건물 안에서</h3>
            <ol>
              <li>탁자 아래로 들어가 머리를 보호하세요.</li>
              <li>창문 및 떨어질 물건에서 떨어지세요.</li>
              <li>진동이 멈춘 후 대피하세요.</li>
            </ol>
            <h3>🚗 차량 안에서</h3>
            <ol>
              <li>큰 진동이 끝날 때까지 차 안에서 머무르세요.</li>
              <li>고가도로나 터널은 피하고 비상등을 켜고 정차하세요.</li>
            </ol>
            <h3>🏞️ 야외에서</h3>
            <ol>
              <li>가로수, 건물, 전신주에서 멀리 떨어지세요.</li>
              <li>넓은 공터로 대피하세요.</li>
            </ol>
            <p><strong>📞 비상 연락망</strong><br>
            소방서: 119<br>
            경찰서: 112<br>
            행정안전부 재난안전상황실: 044-205-1542</p>
          `,
          flood: `
            <h3>🏠 실내에 있을 때</h3>
            <ol>
              <li><strong>2층 이상</strong>으로 대피하세요.</li>
              <li><strong>전기 기기 사용을 피하고</strong> 물 근처에 접근하지 마세요.</li>
              <li>가스를 차단하세요.</li>
              <li>지역 뉴스나 안내 방송을 확인하세요.</li>
            </ol>
            <h3>💧 야외에 있을 때</h3>
            <ol>
              <li><strong>높은 지대</strong>로 대피하세요.</li>
              <li>하천, 침수도로 근처로 가지 마세요.</li>
              <li>차량 사용을 자제하세요.</li>
            </ol>
            <p><strong>📞 비상 연락망</strong><br>
            소방서: 119<br>
            경찰서: 112<br>
            행정안전부 재난안전상황실: 044-205-1542</p>
          `,
          war: `
            <h3>🚨 전쟁 발발 직후</h3>
            <ol>
              <li>공습 경보를 들으면 <strong>즉시 대피소</strong>로 이동하세요.</li>
              <li>비상용품을 준비하고 가족과 <strong>연락 계획</strong>을 세우세요.</li>
              <li><strong>군사 시설 근처</strong>를 피하고 실내에 머무르세요.</li>
              <li>통신 두절을 대비해 <strong>모일 장소</strong>를 정하세요.</li>
              <li>TV, 라디오, 스마트폰 알림으로 <strong>정부의 지시</strong>를 따르세요.</li>
            </ol>
            <h3>🛡️ 전쟁 중 행동수칙</h3>
            <ol>
              <li>실내에서 머무르며 <strong>외부 노출을 자제</strong>하세요.</li>
              <li><strong>식량과 물</strong>을 아껴서 사용하세요.</li>
              <li>정부 방송 및 공공 알림을 <strong>주기적으로 확인</strong>하세요.</li>
            </ol>
            <p><strong>📞 비상 연락망</strong><br>
            행정안전부 중앙재난안전대책본부: 044-205-1542<br>
            대한적십자사: 1577-8179<br>
            소방서: 119<br>
            경찰서: 112<br>
            <strong>🌐 정부 공지 확인:</strong> <a href="https://www.gov.kr" target="_blank">www.gov.kr</a></p>
          `,
          typhoon: `
          <h3>🌪️ 태풍 대처 요령</h3>
          <h4><strong>사전 대비</strong></h4>
          <ul>
            <li>기상 정보 확인 및 외출 자제</li>
            <li>창문 고정 및 비상용품 준비</li>
            <li>야외 시설물 실내로 이동</li>
          </ul>
          <h4><strong>태풍 중</strong></h4>
          <ul>
            <li>실내 대피, 창문 근처 피하기</li>
            <li>정전 대비, 전기 제품 사용 주의</li>
            <li>침수 시 전기 차단</li>
          </ul>
          <h4><strong>태풍 후</strong></h4>
          <ul>
            <li>위험 지역 접근 금지</li>
            <li>가스·전기 점검, 감염병 주의</li>
            <li>시설물 피해 신고</li>
          </ul>
          <p><strong>📞 비상 연락망</strong><br>
          기상청: 131<br>
          소방서: 119</p>
`,
tsunami: `
  <h3>🌊 <strong>해일 발생 시 행동 요령</strong></h3>
  <h4><strong>사전 준비</strong></h4>
  <ul>
    <li>해안 지역에 있을 경우 <strong>해일 경보 시스템</strong> 위치 확인</li>
    <li><strong>가족 대피 장소</strong>와 연락 방법 사전 공유</li>
  </ul>

  <h4><strong>해일 발생 시</strong></h4>
  <ul>
    <li><strong>해안가 근처에 있을 경우</strong>, 즉시 높은 지대로 대피</li>
    <li>자동차보다 <strong>도보 이동</strong>이 빠르면 걸어서 대피</li>
    <li>해일 경보 시 <strong>절대 해변이나 방파제에 접근하지 마세요</strong></li>
  </ul>

  <h4><strong>해일 후</strong></h4>
  <ul>
    <li>구조 활동 방해되지 않도록 <strong>안전한 장소에 머무르세요</strong></li>
    <li>홍수, 전염병 등 <strong>2차 피해에 유의</strong>하세요</li>
    <li>공식 안내가 있을 때까지 <strong>귀가를 자제</strong>하세요</li>
  </ul>

  <p><strong>📞 비상 연락망</strong><br>
  기상청: 131<br>
  소방서: 119</p>
`,
        },
      },
    
      en: {
        appTitle: "🆘 Emergency Chatbot",
        chooseSituation: "What is the emergency situation?",
        wildfire: "🔥 fire",
        earthquake: "🌍 Earthquake",
        flood: "🌧️ Flood",
        war: "⚔️ War",
        typhoon: "🌪️ Typhoon",
        tsunami: "🌊Tsunami",
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
          typhoon: "Typhoon Safety Guide",
          tsunami: "Tsunami Safety Guide",
        },
        detailContent: {
  wildfire: `
    <h3>🏠 Indoors</h3>
    <ol>
      <li>If it is a <strong>small fire</strong>, use a fire extinguisher.</li>
      <li><strong>If initial suppression fails</strong>, call 119 and follow the instructions.</li>
      <li>Cover your face with a wet towel and evacuate in a low posture.</li>
      <li>Check the door temperature before exiting.</li>
      <li><strong>Do not use the elevator.</strong></li>
    </ol>
    <h3>🔥 Outdoors</h3>
    <ol>
      <li>Evacuate <strong>against the wind direction</strong>.</li>
      <li>Avoid heavy smoke and move in a <strong>low posture</strong>.</li>
      <li><strong>Walking</strong> may be safer than driving.</li>
      <li>Evacuate to an area <strong>lower than the fire origin</strong>.</li>
    </ol>
    <p><strong>📞 Emergency Contacts</strong><br>
    Korea Forest Service: 1688-3119<br>
    Fire Department: 119</p>
  `,
  earthquake: `
    <h3>🏢 Inside a Building</h3>
    <ol>
      <li>Take cover under a table and protect your head.</li>
      <li>Stay away from windows and falling objects.</li>
      <li>Evacuate after the shaking stops.</li>
    </ol>
    <h3>🚗 Inside a Vehicle</h3>
    <ol>
      <li>Stay inside the car until the major shaking stops.</li>
      <li>Avoid overpasses and tunnels. Turn on hazard lights and stop safely.</li>
    </ol>
    <h3>🏞️ Outdoors</h3>
    <ol>
      <li>Stay away from trees, buildings, and utility poles.</li>
      <li>Evacuate to an open area.</li>
    </ol>
    <p><strong>📞 Emergency Contacts</strong><br>
    Fire Department: 119<br>
    Police: 112<br>
    Ministry of the Interior and Safety Situation Room: 044-205-1542</p>
  `,
  flood: `
    <h3>🏠 Indoors</h3>
    <ol>
      <li><strong>Evacuate to the second floor or higher</strong>.</li>
      <li><strong>Avoid using electrical devices</strong> and stay away from water.</li>
      <li>Turn off the gas valve.</li>
      <li>Check local news or emergency broadcasts.</li>
    </ol>
    <h3>💧 Outdoors</h3>
    <ol>
      <li><strong>Move to higher ground</strong>.</li>
      <li>Avoid rivers and flooded roads.</li>
      <li>Refrain from using vehicles.</li>
    </ol>
    <p><strong>📞 Emergency Contacts</strong><br>
    Fire Department: 119<br>
    Police: 112<br>
    Ministry of the Interior and Safety Situation Room: 044-205-1542</p>
  `,
  war: `
    <h3>🚨 Immediately After War Breaks Out</h3>
    <ol>
      <li>Upon hearing an air raid alert, <strong>immediately go to a shelter</strong>.</li>
      <li>Prepare emergency supplies and establish a <strong>contact plan</strong> with family.</li>
      <li><strong>Avoid military facilities</strong> and stay indoors.</li>
      <li>Plan a <strong>meeting place</strong> in case communication is lost.</li>
      <li>Follow <strong>government instructions</strong> via TV, radio, or smartphone alerts.</li>
    </ol>
    <h3>🛡️ During War</h3>
    <ol>
      <li>Stay indoors and <strong>minimize exposure</strong> to the outside.</li>
      <li><strong>Conserve food and water</strong>.</li>
      <li><strong>Check public alerts</strong> and government broadcasts regularly.</li>
    </ol>
    <p><strong>📞 Emergency Contacts</strong><br>
    Central Disaster and Safety Countermeasure Headquarters: 044-205-1542<br>
    Korean Red Cross: 1577-8179<br>
    Fire Department: 119<br>
    Police: 112<br>
    <strong>🌐 Government Notices:</strong> <a href="https://www.gov.kr" target="_blank">www.gov.kr</a></p>
  `,
    typhoon: `
  <h3>🌪️ Typhoon Safety Guide</h3>
  <h4><strong>Before the Typhoon</strong></h4>
  <ul>
    <li>Check weather updates and avoid going outside</li>
    <li>Secure windows and prepare emergency supplies</li>
    <li>Bring outdoor items indoors</li>
  </ul>
  <h4><strong>During the Typhoon</strong></h4>
  <ul>
    <li>Stay indoors and away from windows</li>
    <li>Prepare for power outages and use electronics cautiously</li>
    <li>Turn off electricity if flooding occurs</li>
  </ul>
  <h4><strong>After the Typhoon</strong></h4>
  <ul>
    <li>Avoid entering dangerous areas</li>
    <li>Check gas/electric lines and beware of disease</li>
    <li>Report any facility damage</li>
  </ul>
  <p><strong>📞 Emergency Contacts</strong><br>
  KMA (Weather): 131<br>
  Fire Department: 119</p>
`,
tsunami: `
  <h3>🌊 <strong>Tsunami Safety Guidelines</strong></h3>
  <h4><strong>Before a tsunami</strong></h4>
  <ul>
    <li>Know the <strong>tsunami warning systems</strong> in your coastal area</li>
    <li>Share <strong>evacuation routes and contact plans</strong> with family members</li>
  </ul>

  <h4><strong>During a tsunami</strong></h4>
  <ul>
    <li>If near the coast, <strong>evacuate immediately to higher ground</strong></li>
    <li>If faster, <strong>evacuate on foot</strong> instead of by car</li>
    <li>Do <strong>not approach the beach or seawalls</strong> after a warning</li>
  </ul>

  <h4><strong>After a tsunami</strong></h4>
  <ul>
    <li><strong>Stay in a safe area</strong> and avoid interfering with rescue efforts</li>
    <li>Watch out for <strong>secondary hazards</strong> like floods and infections</li>
    <li>Do <strong>not return home</strong> until officially advised</li>
  </ul>

  <p><strong>📞 Emergency Contacts</strong><br>
  KMA (Weather Agency): 131<br>
  Fire Department: 119</p>
`
,

}
,
      },
    
      ja: {
        appTitle: "🆘 緊急チャットボット",
        chooseSituation: "どの状況ですか？",
        wildfire: "🔥 火事",
        earthquake: "🌍 地震",
        flood: "🌧️ 洪水",
        war: "⚔️ 戦争",
        typhoon: "🌪️ 台風",
        tsunami: "🌊津波",
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
          typhoon: "台風の対応方法",
          tsunami: "津波対策ガイド",
        },
        detailContent: {
  wildfire: `
    <h3>🏠 屋内</h3>
    <ol>
      <li><strong>小規模な火災</strong>の場合は消火器を使用してください。</li>
      <li><strong>初期消火に失敗した場合</strong>は119番に通報し、指示に従ってください。</li>
      <li>濡れたタオルで顔を覆い、姿勢を低くして避難してください。</li>
      <li>ドアの温度を確認してから退避してください。</li>
      <li><strong>エレベーターは使用しないでください。</strong></li>
    </ol>
    <h3>🔥 屋外</h3>
    <ol>
      <li><strong>風上</strong>の方向に避難してください。</li>
      <li>煙が濃い場所を避け、<strong>低い姿勢</strong>で移動してください。</li>
      <li><strong>徒歩</strong>のほうが安全な場合もあります。</li>
      <li><strong>火災発生地よりも低い場所</strong>に避難してください。</li>
    </ol>
    <p><strong>📞 緊急連絡先</strong><br>
    山林庁：1688-3119<br>
    消防署：119</p>
  `,
  earthquake: `
    <h3>🏢 建物内</h3>
    <ol>
      <li>机の下に隠れて頭を守ってください。</li>
      <li>窓や落下物から離れてください。</li>
      <li>揺れが収まってから避難してください。</li>
    </ol>
    <h3>🚗 車内</h3>
    <ol>
      <li>強い揺れが収まるまでは車内にとどまってください。</li>
      <li>高架道路やトンネルを避け、ハザードランプを点けて安全な場所に停車してください。</li>
    </ol>
    <h3>🏞️ 屋外</h3>
    <ol>
      <li>街路樹や建物、電柱から離れてください。</li>
      <li>広い空き地に避難してください。</li>
    </ol>
    <p><strong>📞 緊急連絡先</strong><br>
    消防署：119<br>
    警察署：112<br>
    行政安全部災害安全状況室：044-205-1542</p>
  `,
  flood: `
    <h3>🏠 屋内</h3>
    <ol>
      <li><strong>2階以上</strong>に避難してください。</li>
      <li><strong>電気機器の使用を避け</strong>、水に近づかないでください。</li>
      <li>ガスを遮断してください。</li>
      <li>地域のニュースや放送を確認してください。</li>
    </ol>
    <h3>💧 屋外</h3>
    <ol>
      <li><strong>高い場所</strong>に避難してください。</li>
      <li>河川や冠水した道路に近づかないでください。</li>
      <li>車の使用を控えてください。</li>
    </ol>
    <p><strong>📞 緊急連絡先</strong><br>
    消防署：119<br>
    警察署：112<br>
    行政安全部災害安全状況室：044-205-1542</p>
  `,
  war: `
    <h3>🚨 戦争発生直後</h3>
    <ol>
      <li>空襲警報を聞いたら、<strong>すぐに避難所</strong>へ移動してください。</li>
      <li>非常用品を準備し、家族と<strong>連絡手段</strong>を決めてください。</li>
      <li><strong>軍事施設の近く</strong>を避け、屋内にとどまってください。</li>
      <li>通信が遮断されたときのために<strong>集合場所</strong>を決めておいてください。</li>
      <li>テレビやラジオ、スマートフォンの通知で<strong>政府の指示</strong>に従ってください。</li>
    </ol>
    <h3>🛡️ 戦時中の行動指針</h3>
    <ol>
      <li>屋内にとどまり、<strong>外部への露出を最小限にしてください。</strong></li>
      <li><strong>食料と水</strong>を節約して使ってください。</li>
      <li><strong>政府放送や公的通知</strong>を定期的に確認してください。</li>
    </ol>
    <p><strong>📞 緊急連絡先</strong><br>
    行政安全部 中央災害安全対策本部：044-205-1542<br>
    大韓赤十字社：1577-8179<br>
    消防署：119<br>
    警察署：112<br>
    <strong>🌐 政府のお知らせ：</strong> <a href="https://www.gov.kr" target="_blank">www.gov.kr</a></p>
  `,
  typhoon: `
  <h3>🌪️ 台風対策ガイド</h3>
  <h4><strong>台風前の準備</strong></h4>
  <ul>
    <li>天気情報を確認し、外出を控える</li>
    <li>窓を固定し、非常用品を準備する</li>
    <li>屋外の物を室内に移動する</li>
  </ul>
  <h4><strong>台風中</strong></h4>
  <ul>
    <li>屋内に避難し、窓から離れる</li>
    <li>停電に備え、電化製品の使用に注意する</li>
    <li>浸水時には電源を切る</li>
  </ul>
  <h4><strong>台風後</strong></h4>
  <ul>
    <li>危険地域への立ち入りを避ける</li>
    <li>ガス・電気の点検、感染症に注意</li>
    <li>施設の被害を報告する</li>
  </ul>
  <p><strong>📞 緊急連絡先</strong><br>
  気象庁: 131<br>
  消防署: 119</p>
`,
tsunami: `
  <h3>🌊 <strong>津波発生時の対処方法</strong></h3>
  <h4><strong>事前の備え</strong></h4>
  <ul>
    <li>沿岸地域では<strong>津波警報システム</strong>の位置を確認する</li>
    <li><strong>避難場所や連絡方法</strong>を家族と共有する</li>
  </ul>

  <h4><strong>津波発生時</strong></h4>
  <ul>
    <li>海岸にいる場合は<strong>すぐに高台に避難</strong>する</li>
    <li>徒歩の方が早ければ<strong>歩いて避難</strong>する</li>
    <li><strong>海岸や防波堤には近づかない</strong></li>
  </ul>

  <h4><strong>津波の後</strong></h4>
  <ul>
    <li><strong>安全な場所にとどまり</strong>救助活動を妨げない</li>
    <li><strong>洪水や感染症などの二次災害</strong>に注意する</li>
    <li><strong>正式な指示があるまで帰宅しない</strong></li>
  </ul>

  <p><strong>📞 緊急連絡先</strong><br>
  気象庁: 131<br>
  消防署: 119</p>
`
,
}
,
      },
    
      zh: {
            appTitle: "🆘 紧急情况聊天机器人",
            chooseSituation: "当前是什么情况？",
            wildfire: "🔥 火灾",
            earthquake: "🌍 地震",
            flood: "🌧️ 洪水",
            war: "⚔️ 战争",
            typhoon: "🌪️ 台风",
            tsunami: "🌊海啸",
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
              war: "战争应对指南",
              typhoon: "台风应对指南",
              tsunami: "海啸应对指南",
            },
            detailContent: {
  wildfire: `
    <h3>🏠 室内</h3>
    <ol>
      <li>若为<strong>小型火灾</strong>，请使用灭火器。</li>
      <li><strong>若初期扑灭失败</strong>，请拨打119并遵循指示。</li>
      <li>用湿毛巾捂住口鼻，低姿态疏散。</li>
      <li>检查出入口温度后再逃生。</li>
      <li><strong>不要使用电梯。</strong></li>
    </ol>
    <h3>🔥 室外</h3>
    <ol>
      <li><strong>朝逆风方向</strong>疏散。</li>
      <li>避开浓烟区域，<strong>低姿态</strong>移动。</li>
      <li><strong>步行</strong>可能比开车更安全。</li>
      <li><strong>向比起火点更低的地方</strong>撤离。</li>
    </ol>
    <p><strong>📞 紧急联系电话</strong><br>
    林业厅：1688-3119<br>
    消防：119</p>
  `,
  earthquake: `
    <h3>🏢 建筑物内</h3>
    <ol>
      <li>躲在桌子下方保护头部。</li>
      <li>远离窗户和易掉落的物体。</li>
      <li>震动停止后再撤离。</li>
    </ol>
    <h3>🚗 车内</h3>
    <ol>
      <li>强烈震动时留在车内。</li>
      <li>避免高架道路和隧道，开启警示灯后靠边停车。</li>
    </ol>
    <h3>🏞️ 室外</h3>
    <ol>
      <li>远离树木、建筑物和电线杆。</li>
      <li>前往开阔地带。</li>
    </ol>
    <p><strong>📞 紧急联系电话</strong><br>
    消防：119<br>
    警察：112<br>
    行政安全部灾难安全情况室：044-205-1542</p>
  `,
  flood: `
    <h3>🏠 室内</h3>
    <ol>
      <li><strong>疏散至二楼以上</strong>。</li>
      <li><strong>避免使用电器</strong>，远离水源。</li>
      <li>关闭燃气阀门。</li>
      <li>收听当地新闻或应急广播。</li>
    </ol>
    <h3>💧 室外</h3>
    <ol>
      <li><strong>前往高处</strong>避难。</li>
      <li>远离河流和被水淹没的道路。</li>
      <li>尽量避免使用车辆。</li>
    </ol>
    <p><strong>📞 紧急联系电话</strong><br>
    消防：119<br>
    警察：112<br>
    行政安全部灾难安全情况室：044-205-1542</p>
  `,
  war: `
    <h3>🚨 战争爆发初期</h3>
    <ol>
      <li>听到空袭警报后<strong>立即前往避难所</strong>。</li>
      <li>准备紧急物品，与家人制定<strong>联系计划</strong>。</li>
      <li><strong>远离军事设施</strong>并留在室内。</li>
      <li>为通信中断做好准备，指定<strong>集合地点</strong>。</li>
      <li>通过电视、广播或手机<strong>遵循政府指示</strong>。</li>
    </ol>
    <h3>🛡️ 战争期间行为守则</h3>
    <ol>
      <li>尽量待在室内，<strong>避免外出</strong>。</li>
      <li><strong>节约使用食物和水</strong>。</li>
      <li><strong>定期查看</strong>政府公告和公共警报。</li>
    </ol>
    <p><strong>📞 紧急联系电话</strong><br>
    行政安全部中央灾难安全对策本部：044-205-1542<br>
    韩国红十字会：1577-8179<br>
    消防：119<br>
    警察：112<br>
    <strong>🌐 政府公告查看：</strong> <a href="https://www.gov.kr" target="_blank">www.gov.kr</a></p>
  `,
  typhoon: `
  <h3>🌪️ 台风应对指南</h3>
  <h4><strong>台风前的准备</strong></h4>
  <ul>
    <li>关注天气信息，尽量避免外出</li>
    <li>加固窗户，准备应急用品</li>
    <li>将户外物品移至室内</li>
  </ul>
  <h4><strong>台风期间</strong></h4>
  <ul>
    <li>留在室内，远离窗户</li>
    <li>做好停电准备，谨慎使用电器</li>
    <li>如遇积水，及时切断电源</li>
  </ul>
  <h4><strong>台风后</strong></h4>
  <ul>
    <li>避免进入危险区域</li>
    <li>检查煤气和电路，注意传染病</li>
    <li>报告设施损坏情况</li>
  </ul>
  <p><strong>📞 紧急联系电话</strong><br>
  气象局: 131<br>
  消防部门: 119</p>
`,
tsunami: `
  <h3>🌊 <strong>海啸应对指南</strong></h3>
  <h4><strong>海啸前</strong></h4>
  <ul>
    <li>了解您所在沿海地区的<strong>海啸预警系统</strong></li>
    <li>与家人<strong>分享避难地点和联系方式</strong></li>
  </ul>

  <h4><strong>海啸发生时</strong></h4>
  <ul>
    <li>如在海边，请<strong>立即撤离至高地</strong></li>
    <li>如果步行更快，<strong>步行撤离</strong>而非驾车</li>
    <li><strong>警报后不要靠近海边或防波堤</strong></li>
  </ul>

  <h4><strong>海啸后</strong></h4>
  <ul>
    <li><strong>待在安全区域</strong>，避免干扰救援工作</li>
    <li>注意<strong>洪水、传染病等二次灾害</strong></li>
    <li>在<strong>收到官方通知前不要返回家中</strong></li>
  </ul>

  <p><strong>📞 紧急联系电话</strong><br>
  气象厅: 131<br>
  消防局: 119</p>
`
,


}

          },
      es: {
            appTitle: "🆘 Chatbot de Emergencia",
            chooseSituation: "¿Cuál es la situación actual?",
            wildfire: "🔥 Incendio",
            earthquake: "🌍 Terremoto",
            flood: "🌧️ Inundación",
            war: "⚔️ Guerra",
            typhoon: "🌪️ Tifón",
            tsunami: "🌊Tsunami",
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
              war: "Guía ante Guerra",
              typhoon: "Guía ante Tifón",
              tsunami: "Guía de seguridad ante un tsunami"
            },
            detailContent: {
  wildfire: `
    <h3>🏠 En interiores</h3>
    <ol>
      <li>Si es un <strong>incendio pequeño</strong>, utiliza un extintor.</li>
      <li><strong>Si no puedes controlarlo</strong>, llama al 119 y sigue las instrucciones.</li>
      <li>Cúbrete la cara con una toalla mojada y evacúa agachado.</li>
      <li>Verifica la temperatura de la puerta antes de salir.</li>
      <li><strong>No uses el ascensor.</strong></li>
    </ol>
    <h3>🔥 Al aire libre</h3>
    <ol>
      <li>Evacúa en dirección <strong>contraria al viento</strong>.</li>
      <li>Evita el humo espeso y muévete con <strong>postura baja</strong>.</li>
      <li><strong>Caminar</strong> puede ser más seguro que conducir.</li>
      <li>Evacúa a un lugar <strong>más bajo que el origen del fuego</strong>.</li>
    </ol>
    <p><strong>📞 Contactos de emergencia</strong><br>
    Servicio Forestal: 1688-3119<br>
    Bomberos: 119</p>
  `,
  earthquake: `
    <h3>🏢 Dentro de un edificio</h3>
    <ol>
      <li>Refúgiate debajo de una mesa y protege tu cabeza.</li>
      <li>Aléjate de ventanas y objetos que puedan caer.</li>
      <li>Evacúa después de que termine el temblor.</li>
    </ol>
    <h3>🚗 Dentro de un vehículo</h3>
    <ol>
      <li>Permanecer en el coche hasta que termine el fuerte temblor.</li>
      <li>Evita pasos elevados y túneles. Enciende las luces de emergencia y detente en un lugar seguro.</li>
    </ol>
    <h3>🏞️ Al aire libre</h3>
    <ol>
      <li>Aléjate de árboles, edificios y postes eléctricos.</li>
      <li>Refúgiate en un área abierta.</li>
    </ol>
    <p><strong>📞 Contactos de emergencia</strong><br>
    Bomberos: 119<br>
    Policía: 112<br>
    Ministerio del Interior y Seguridad - Sala de Situación: 044-205-1542</p>
  `,
  flood: `
    <h3>🏠 En interiores</h3>
    <ol>
      <li><strong>Evacúa al segundo piso o superior</strong>.</li>
      <li><strong>No uses aparatos eléctricos</strong> y aléjate del agua.</li>
      <li>Cierra la válvula de gas.</li>
      <li>Escucha noticias locales o transmisiones de emergencia.</li>
    </ol>
    <h3>💧 Al aire libre</h3>
    <ol>
      <li><strong>Muévete a zonas más altas</strong>.</li>
      <li>No te acerques a ríos ni carreteras inundadas.</li>
      <li>Evita el uso del vehículo.</li>
    </ol>
    <p><strong>📞 Contactos de emergencia</strong><br>
    Bomberos: 119<br>
    Policía: 112<br>
    Ministerio del Interior y Seguridad - Sala de Situación: 044-205-1542</p>
  `,
  war: `
    <h3>🚨 Justo después del inicio de la guerra</h3>
    <ol>
      <li>Al oír la alerta aérea, <strong>ve inmediatamente a un refugio</strong>.</li>
      <li>Prepara suministros de emergencia y establece un <strong>plan de contacto</strong> con tu familia.</li>
      <li><strong>Evita instalaciones militares</strong> y permanece dentro de casa.</li>
      <li>Designa un <strong>punto de encuentro</strong> en caso de pérdida de comunicación.</li>
      <li>Sigue las <strong>instrucciones del gobierno</strong> por TV, radio o alertas del móvil.</li>
    </ol>
    <h3>🛡️ Durante la guerra</h3>
    <ol>
      <li>Permanecer en interiores y <strong>reducir la exposición al exterior</strong>.</li>
      <li><strong>Racionar alimentos y agua</strong>.</li>
      <li><strong>Revisar periódicamente</strong> las alertas públicas y transmisiones gubernamentales.</li>
    </ol>
    <p><strong>📞 Contactos de emergencia</strong><br>
    Sede Central de Gestión de Desastres: 044-205-1542<br>
    Cruz Roja de Corea: 1577-8179<br>
    Bomberos: 119<br>
    Policía: 112<br>
    <strong>🌐 Avisos oficiales:</strong> <a href="https://www.gov.kr" target="_blank">www.gov.kr</a></p>
  `,
  typhoon: `
  <h3>🌪️ Guía de Seguridad para Tifones</h3>
  <h4><strong>Antes del tifón</strong></h4>
  <ul>
    <li>Consulta el clima y evita salir</li>
    <li>Asegura las ventanas y prepara suministros de emergencia</li>
    <li>Guarda objetos exteriores dentro de casa</li>
  </ul>
  <h4><strong>Durante el tifón</strong></h4>
  <ul>
    <li>Quédate en casa y aléjate de las ventanas</li>
    <li>Prepárate para apagones y ten cuidado con los aparatos eléctricos</li>
    <li>Desconecta la electricidad si hay inundación</li>
  </ul>
  <h4><strong>Después del tifón</strong></h4>
  <ul>
    <li>Evita zonas peligrosas</li>
    <li>Revisa el gas y la electricidad, ten precaución con enfermedades</li>
    <li>Reporta daños en las instalaciones</li>
  </ul>
  <p><strong>📞 Contactos de emergencia</strong><br>
  Meteorología: 131<br>
  Bomberos: 119</p>
`,
tsunami: `
  <h3>🌊 <strong>Guía de actuación ante un tsunami</strong></h3>
  <h4><strong>Antes del tsunami</strong></h4>
  <ul>
    <li>Conozca los <strong>sistemas de alerta de tsunami</strong> en su zona costera</li>
    <li>Comparta con su familia <strong>rutas de evacuación y formas de contacto</strong></li>
  </ul>

  <h4><strong>Durante el tsunami</strong></h4>
  <ul>
    <li>Si está cerca del mar, <strong>evacúe inmediatamente a zonas altas</strong></li>
    <li>Si es más rápido, <strong>evacúe caminando</strong> en lugar de conducir</li>
    <li>No se acerque a la <strong>playa o rompeolas después de una alerta</strong></li>
  </ul>

  <h4><strong>Después del tsunami</strong></h4>
  <ul>
    <li><strong>Permanezca en un lugar seguro</strong> y no obstaculice los rescates</li>
    <li>Esté atento a <strong>riesgos secundarios</strong> como inundaciones o enfermedades</li>
    <li>No regrese a casa <strong>hasta que lo autoricen oficialmente</strong></li>
  </ul>

  <p><strong>📞 Contactos de emergencia</strong><br>
  Agencia Meteorológica: 131<br>
  Bomberos: 119</p>
`
,
}

          }
          
    }
    
    export default translations
    