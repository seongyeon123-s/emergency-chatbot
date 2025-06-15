import { useState, useRef } from "react";

export default function ShelterSearch({ mapRef, shelters }) {
  const [query, setQuery] = useState("");
  const [matched, setMatched] = useState([]);
  const matchIndex = useRef(0);

  const filtered = shelters.filter(s =>
    s.name.includes(query.trim()) && query.trim().length > 0
  );

  const handleSearch = () => {
    if (filtered.length === 0) {
      alert("❌ 일치하는 대피소를 찾을 수 없습니다.");
      return;
    }

    setMatched(filtered);
    matchIndex.current = 0;
    showMatched(filtered[0]);
  };

  const showMatched = (shelter) => {
    const map = mapRef.current;
    if (!map) return;

    map.setView([shelter.lat, shelter.lng], 17);
    L.popup()
      .setLatLng([shelter.lat, shelter.lng])
      .setContent(`<b>${shelter.name}</b>`)
      .openOn(map);
  };

  const handleNext = () => {
    if (matched.length <= 1) return;
    matchIndex.current = (matchIndex.current + 1) % matched.length;
    showMatched(matched[matchIndex.current]);
  };

  const handleSelectSuggestion = (name) => {
    setQuery(name);
    const selected = shelters.find(s => s.name === name);
    if (selected) {
      showMatched(selected);
      setMatched([selected]);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2 bg-white p-2 rounded shadow">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="대피소 이름 입력"
          className="border p-2 rounded w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          검색
        </button>
        {matched.length > 1 && (
          <button
            onClick={handleNext}
            className="bg-gray-500 text-white px-3 py-2 rounded"
          >
            다음 위치
          </button>
        )}
      </div>

      {/* 자동완성 드롭다운 */}
      {filtered.length > 0 && (
        <ul className="absolute bg-white border w-full mt-1 max-h-40 overflow-y-auto z-50 shadow rounded">
          {filtered.map((shelter, idx) => (
            <li
              key={idx}
              onClick={() => handleSelectSuggestion(shelter.name)}
              className="px-3 py-1 hover:bg-blue-100 cursor-pointer text-sm"
            >
              {shelter.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
