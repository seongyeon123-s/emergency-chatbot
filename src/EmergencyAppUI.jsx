// EmergencyAppUI.jsx (음성 컴포넌트 + 위치 + 오프라인 메뉴얼 + 음성 인식 상황 매칭)
import { useState, useEffect,useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Mic, Languages, Settings } from "lucide-react"
import MarkerClusterGroup from "react-leaflet-cluster"
import { getDistance, findNearestShelter } from "@/lib/utils"
import { drawRoute } from "@/utils/drawRoute"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import translations from "@/lib/i18n"
import VoiceAssistant from "@/components/VoiceAssistant"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"
import ShelterSearch from './components/ShelterSearch';
import ShelterEmergencySMS from "@/components/ShelterEmergencySMS";



// 마커 아이콘 설정
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const shelterIcon = new L.Icon({
  iconUrl: "/shelter-icon.png",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -35],
  shadowUrl: markerShadow,
})

const getUserLocation = (setLocation) => {
  if (!navigator.geolocation) {
    console.warn("이 브라우저는 위치 정보를 지원하지 않음")
    return
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords
      console.log("📍 위치 확인됨:", latitude, longitude)
      setLocation({ latitude, longitude })
    },
    (error) => {
      console.error("위치 가져오기 실패:", error)
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  )
}

const getAddressFromCoords = async (lat, lon, setAddress, lang) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=${lang}`
    )
    if (!res.ok) throw new Error("API 응답 오류")
    const data = await res.json()
    setAddress(data.display_name || null)
  } catch (err) {
    console.error("주소 변환 실패:", err)
    setAddress(null)
  }
}

export default function EmergencyAppUI() {
  const [language, setLanguage] = useState("ko")
  const [selected, setSelected] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [gpsEnabled, setGpsEnabled] = useState(true)
  const [location, setLocation] = useState(null)
  const [address, setAddress] = useState(null)
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false)
  const [shelters, setShelters] = useState([])
  const [directions, setDirections] = useState([]);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const mapRef = useRef(null)
  



  const privacyPolicyText = `
개인정보 보호법 제1조(목적)
이 법은 개인정보의 수집, 이용, 제공 등 처리에 있어
개인의 권익을 보호하고 국민의 권익 증진에 이바지함을 목적으로 한다.

제15조(개인정보의 수집·이용)
① 개인정보처리자는 정보주체의 동의를 받아 개인정보를 수집·이용할 수 있다.

제17조(개인정보의 제공)
① 개인정보처리자는 정보주체의 동의 없이 제3자에게 개인정보를 제공할 수 없다.

※ 본 앱은 위치 정보, 음성 입력 데이터 등을 수집하여 긴급 상황 대응에만 사용하며,
다른 목적으로는 이용되지 않습니다.
`
useEffect(() => {
  fetch("/shelters.json")
    .then(res => res.json())
    .then(setShelters)
}, [])

  useEffect(() => {
    if (gpsEnabled) {
      getUserLocation((coords) => {
        setLocation(coords)
        getAddressFromCoords(coords.latitude, coords.longitude, setAddress, language)
      })
    } else {
      setLocation(null)
      setAddress(null)
    }
  }, [gpsEnabled, language])

  useEffect(() => {
  const interval = setInterval(() => {
    if (!location || directions.length === 0) return;

    let minDistance = Infinity;
    let nearestIdx = -1;

    directions.forEach((step, idx) => {
      if (!step.location) return;
      const d = getDistance(
        { latitude: location.latitude, longitude: location.longitude },
        { latitude: step.location[0], longitude: step.location[1] }
      );
      if (d < minDistance) {
        minDistance = d;
        nearestIdx = idx;
      }
    });

    setActiveStepIndex(nearestIdx);
  }, 3000);

  return () => clearInterval(interval);
}, [location, directions]);


  const t = (key) => translations[language]?.[key] || key
  const titleMap = t("detailTitle")
  const contentMap = t("detailContent")

  const renderCurrentLocation = () => {
    const label = {
      ko: "현재 위치:",
      en: "Current location:",
      zh: "当前位置:",
      ja: "現在地:",
      es: "Ubicación actual:",
    }
    return `${label[language] || label.ko} ${address || `위도 ${location?.latitude.toFixed(4)}, 경도 ${location?.longitude.toFixed(4)}`}`
  }

  const handleVoiceInputClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      stream.getTracks().forEach((track) => track.stop())
      setShowVoiceAssistant(true)
    } catch (err) {
      alert("마이크 사용이 허용되지 않았습니다. 브라우저 설정을 확인하세요.")
      console.error("🎙️ 마이크 접근 실패:", err)
    }
  }

  const handleVoiceResult = (text) => {
    const keywords = {
      wildfire: ["불", "산불", "wildfire"],
      earthquake: ["지진", "흔들려", "진동"],
      flood: ["홍수", "물", "침수"],
      war: ["전쟁", "폭격", "총"]
    }

    const found = Object.entries(keywords).find(([_key, values]) =>
      values.some((word) => text.includes(word))
    )

    if (found) {
      setSelected(found[0])
      setModalOpen(true)
    }
  }

  const cycleLanguage = () => {
    const langs = ["ko", "en", "zh", "ja", "es"]
    const nextIndex = (langs.indexOf(language) + 1) % langs.length
    setLanguage(langs[nextIndex])
  }

  return (
    <div className="min-h-screen bg-white p-4 space-y-6">
      <Card className="p-6 shadow-xl rounded-2xl">
        <CardContent className="space-y-4">
          <h1 className="text-2xl font-bold text-center">{t("appTitle")}</h1>
          <p className="text-center text-gray-600">{t("chooseSituation")}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {["wildfire", "earthquake", "flood", "war","typhoon","tsunami"].map((key) => (
              <Button
                key={key}
                className="text-lg py-6"
                onClick={() => {
                  setSelected(key)
                  setModalOpen(true)
                }}
              >
                {t(key)}
              </Button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <Button variant="outline" className="w-full mr-2" onClick={handleVoiceInputClick}>
              <Mic className="mr-2" /> {t("voiceInput")}
            </Button>
            <Button
              variant="outline"
              className="w-full ml-2"
              onClick={cycleLanguage}
            >
              <Languages className="mr-2" /> {t("changeLanguage")}
            </Button>
          </div>
        </CardContent>
      </Card>

      {showVoiceAssistant && <VoiceAssistant lang={language} onResult={handleVoiceResult} />}

      <Card className="p-6 shadow-xl rounded-2xl">
        <CardContent className="space-y-4">
          <div className="flex items-center text-gray-700 mb-2">
            <Settings className="mr-2" />
            <span className="text-xl font-semibold">{t("settings")}</span>
          </div>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center justify-between">
              <span><strong>{t("languageSetting")}</strong> {language.toUpperCase()}</span>
              <Button variant="outline" size="sm" onClick={cycleLanguage}>{t("change")}</Button>
            </div>
            <div className="flex items-center justify-between">
              <span><strong>{t("voiceSetting")}</strong> {t("enableVoice")}</span>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <span><strong>{t("offlineManual")}</strong></span>
              <a
                href={`/manual/manual_${language}.pdf`}
                download
                className="text-blue-600 underline text-sm ml-2"
              >
                {t("download")}
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span><strong>{t("gpsSetting")}</strong> {t("sendGPS")}</span>
              <Switch
                checked={gpsEnabled}
                onCheckedChange={(checked) => setGpsEnabled(checked)}
              />
            </div>
            {gpsEnabled && location && (
              <>
                            <div className="absolute top-4 left-4 z-[1000]">
  <ShelterSearch mapRef={mapRef} shelters={shelters} />
</div>
                <div className="text-sm text-green-600 mt-2">
                  📍 {renderCurrentLocation()}
                </div>
                <div className="h-64 mt-2 rounded-xl overflow-hidden">
                  <MapContainer
                    ref={mapRef}
                    center={[location.latitude, location.longitude]}
                    zoom={13}
                    scrollWheelZoom={false}
                    className="w-full h-full z-0"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                     <Marker position={[location.latitude, location.longitude]}>
                      <Popup>{t("currentLocation")}</Popup>
                    </Marker>
                    <MarkerClusterGroup>
                      {shelters.map((shelter, idx) => (
                        <Marker key={idx} position={[shelter.lat, shelter.lng]} icon={shelterIcon}>
                          <Popup>{shelter.name}</Popup>
                        </Marker>
                      ))}
                    </MarkerClusterGroup>
                  </MapContainer>
                </div>
              </>
            )}
            <div className="flex justify-end mt-2 space-x-2">
  <Button
    onClick={() => {
      const nearest = findNearestShelter(location.latitude, location.longitude, shelters)
      if (nearest && mapRef.current) {
        mapRef.current.setView([nearest.lat, nearest.lng], 17)
      }
    }}
    className="bg-blue-600 text-white px-3 py-1 rounded shadow"
  >
    📍 {t("nearestShelter") || "가까운 대피소"}
  </Button>

  <Button
    onClick={async () => {
      const mapInstance = mapRef.current
      const nearest = findNearestShelter(location.latitude, location.longitude, shelters)
      if (nearest && mapInstance) {
        const steps = await drawRoute(
          mapInstance,
          { lat: location.latitude, lng: location.longitude },
          { lat: nearest.lat, lng: nearest.lng }
        );
        setDirections(steps);
      }
    }}
    className="bg-green-600 text-white px-3 py-1 rounded shadow"
  >
    🚶 {t("navigationGuide") || "길 안내"}
  </Button>
</div>
{directions.length > 0 && (
  <div className="bg-white border rounded-xl p-4 mt-4 shadow space-y-2">
    <h2 className="text-lg font-bold">🚶 길 안내</h2>
    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
      {directions.map((step, idx) => (
        <li
          key={idx}
          className={`transition-all duration-500 ${
            idx === activeStepIndex ? "bg-yellow-200 font-bold animate-pulse rounded-md px-2" : ""
          }`}
        >
          {step.text}
        </li>
      ))}
    </ul>
  </div>
)}  
{/* 🔴 긴급 문자 전송 버튼 추가 */}
<div className="flex justify-end mt-4">
  <ShelterEmergencySMS location={location} language={language} />
</div>
</div>
        </CardContent>
      </Card>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{titleMap[selected]}</DialogTitle>
          </DialogHeader>
          <div
  className="text-gray-800 text-lg space-y-2 leading-relaxed"
  dangerouslySetInnerHTML={{ __html: contentMap[selected] }}
/>
        </DialogContent>
      </Dialog>

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>📃 개인정보 처리방침</DialogTitle>
          </DialogHeader>
          <p className="text-gray-800 whitespace-pre-wrap text-sm">
            {privacyPolicyText}
          </p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
