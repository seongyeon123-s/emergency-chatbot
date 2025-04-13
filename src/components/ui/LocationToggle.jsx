import React, { useState, useEffect } from 'react';

const LocationToggle = () => {
  const [isGpsEnabled, setIsGpsEnabled] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleToggle = () => {
    setIsGpsEnabled(!isGpsEnabled);
  };

  useEffect(() => {
    if (!isGpsEnabled) {
      setLocation(null);
      setError(null);
      return;
    }

    if (!navigator.geolocation) {
      setError("이 브라우저는 위치 정보 API를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setError(null);
        console.log("📍 위치:", latitude, longitude);
      },
      (err) => {
        setError("위치 정보를 가져오는 데 실패했습니다. 권한을 확인해주세요.");
        console.error("위치 오류:", err);
        setLocation(null);
      }
    );
  }, [isGpsEnabled]);

  return (
    <div className="p-4 rounded-xl shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">📡 위치 정보 사용</h2>
      
      <label className="flex items-center gap-3">
        <span>GPS 전송</span>
        <input
          type="checkbox"
          checked={isGpsEnabled}
          onChange={handleToggle}
          className="w-5 h-5"
        />
      </label>

      {location && (
        <div className="mt-4 text-green-600">
          ✅ 위치 확인됨: 위도 {location.latitude}, 경도 {location.longitude}
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          ⚠️ {error}
        </div>
      )}
    </div>
  );
};

export default LocationToggle;
