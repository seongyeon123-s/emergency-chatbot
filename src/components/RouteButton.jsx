// src/components/RouteButton.jsx
import { useMap } from 'react-leaflet';
import { drawRoute } from '../utils/drawRoute';

export default function RouteButton({ currentLocation, nearestShelter }) {
  const map = useMap();

  const handleRoute = async () => {
    const instructions = await drawRoute(map, currentLocation, nearestShelter);
    alert("이동 경로 안내:\n\n" + instructions.join("\n"));
  };

  return (
    <button
      onClick={handleRoute}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
    >
      🚶 가장 가까운 대피소로 길 안내
    </button>
  );
}
