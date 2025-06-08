
import React from "react";

export default function ShelterEmergencySMS({ location, situation }) {
  const handleSendSMS = () => {
    if (!location) {
      alert("📍 현재 위치를 먼저 확인해 주세요.");
      return;
    }

    const message = `
📍 현위치: 위도 ${location.latitude.toFixed(4)}, 경도 ${location.longitude.toFixed(4)}
🆘 상황: ${situation || "알 수 없음"} 발생, 대피 중입니다.
    `.trim();

    const encoded = encodeURIComponent(message);

    if (!/Android|iPhone|iPad/i.test(navigator.userAgent)) {
      alert("📱 이 기능은 모바일 환경에서만 사용할 수 있습니다.");
      return;
    }

    // 보호자 번호 설정 필요
    window.location.href = `sms:01012345678?body=${encoded}`;
  };

  return (
    <button
      onClick={handleSendSMS}
      className="bg-red-600 text-white px-4 py-2 rounded shadow"
    >
      📤 긴급 문자 전송
    </button>
  );
}
