// VoiceAssistant.jsx
import { useEffect, useState, useRef } from "react"

export default function VoiceAssistant({ lang = "ko", onResult, autoStart = false }) {
  const [transcript, setTranscript] = useState("")
  const [listening, setListening] = useState(false)
  const recognitionRef = useRef(null)

  const langMap = {
    ko: "ko-KR",
    en: "en-US",
    zh: "zh-CN",
    ja: "ja-JP",
    es: "es-ES"
  }

  const textMap = {
    ko: {
      title: "🎤 현재 무슨 상황인가요",
      speak: "말하기",
      read: "읽어주기",
      result: "인식 결과",
      none: "없음"
    },
    en: {
      title: "🎤 What is the current situation?",
      speak: "Speak",
      read: "Read",
      result: "Result",
      none: "None"
    },
    zh: {
      title: "🎤 当前是什么情况？",
      speak: "说话",
      read: "朗读",
      result: "识别结果",
      none: "无"
    },
    ja: {
      title: "🎤 現在の状況は何ですか？",
      speak: "話す",
      read: "読む",
      result: "認識結果",
      none: "なし"
    },
    es: {
      title: "🎤 ¿Cuál es la situación actual?",
      speak: "Hablar",
      read: "Leer",
      result: "Resultado",
      none: "Ninguno"
    }
  }

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.")
      return
    }

    const SpeechRecognition = window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = langMap[lang] || "ko-KR"
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.continuous = false

    recognition.onstart = () => setListening(true)
    recognition.onend = () => setListening(false)

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript
      setTranscript(result)
      if (onResult) onResult(result)
    }

    recognition.onerror = (event) => {
      console.error("🎤 인식 오류:", event.error)
      setListening(false)
    }

    recognitionRef.current = recognition

    if (autoStart) recognition.start()

    return () => recognition.stop()
  }, [lang, autoStart, onResult])

  const startRecognition = () => {
    if (recognitionRef.current && !listening) {
      recognitionRef.current.start()
    }
  }

  const t = textMap[lang] || textMap.ko

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{t.title}</h2>
      <div className="mt-2 flex space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={startRecognition}
          disabled={listening}
        >
          {listening ? "..." : t.speak}
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => {
            const utterance = new SpeechSynthesisUtterance(t.title.replace("🎤 ", ""))
            utterance.lang = langMap[lang] || "ko-KR"
            window.speechSynthesis.speak(utterance)
          }}
        >
          {t.read}
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-700">🗣 {t.result}: {transcript || t.none}</p>
    </div>
  )
}
