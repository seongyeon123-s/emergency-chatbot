// src/components/RouteButton.jsx
import { useMap } from 'react-leaflet';
import { drawRoute } from '../utils/drawRoute';

export default function RouteButton({ currentLocation, nearestShelter, setDirections }) {
  const map = useMap();

  const handleRoute = async () => {
    if (!map || !currentLocation || !nearestShelter) return;

    const steps = await drawRoute(map, currentLocation, nearestShelter);
    setDirections(steps);
  };

  return (
    <button
      onClick={handleRoute}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      🚶 가장 가까운 대피소로 길 안내
    </button>
  );
}
