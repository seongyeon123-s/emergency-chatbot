// components/VoiceAssistant.jsx
import { useEffect, useRef, useState } from "react"
import { Mic, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VoiceAssistant({ lang = "ko", onResult }) {
  const recognitionRef = useRef(null)
  const [transcript, setTranscript] = useState("")
  const [listening, setListening] = useState(false)

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.")
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = lang
    recognition.interimResults = false
    recognition.continuous = false

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript
      setTranscript(text)
      if (onResult) onResult(text)
    }

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error)
    }

    recognition.onend = () => {
      setListening(false)
    }

    recognitionRef.current = recognition
  }, [lang, onResult])

  const handleStart = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start()
      setListening(true)
    }
  }

  const handleSpeak = () => {
    const msg = new SpeechSynthesisUtterance(transcript)
    msg.lang = lang
    window.speechSynthesis.speak(msg)
  }

  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
      <h2 className="text-lg font-semibold mb-2">🎤 음성 비서</h2>
      <div className="flex gap-2">
        <Button onClick={handleStart} className="bg-blue-500 text-white">
          <Mic className="inline-block mr-1" /> 말하기
        </Button>
        <Button onClick={handleSpeak} className="bg-green-500 text-white">
          <Volume2 className="inline-block mr-1" /> 읽어주기
        </Button>
      </div>
      <p className="text-sm text-gray-600 mt-2">🗣️ 인식 결과: {transcript || "없음"}</p>
    </div>
  )
}
