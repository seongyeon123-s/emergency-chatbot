import L from 'leaflet';

const instructionTranslations = {
  "Head": "이동 시작",
  "Turn right": "오른쪽으로 이동",
  "Turn left": "왼쪽으로 이동",
  "Turn sharp right": "급우회전",
  "Turn sharp left": "급좌회전",
  "Continue straight": "직진",
  "Arrive": "목적지 도착",
};

function translateInstruction(text) {
  for (const [key, value] of Object.entries(instructionTranslations)) {
    if (text.startsWith(key)) {
      return text.replace(key, value);
    }
  }
  return text; // 기본은 영어 유지
}

export async function drawRoute(map, start, end) {
  const apiKey = '5b3ce3597851110001cf6248ed532f445b274406bedcb9c62a4bb153';
  const url = `https://api.openrouteservice.org/v2/directions/foot-walking?api_key=${apiKey}&start=${start.lng},${start.lat}&end=${end.lng},${end.lat}`;

  const response = await fetch(url);
  const data = await response.json();

  const coordinates = data.features[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);

  map.eachLayer(layer => {
    if (layer instanceof L.Polyline && !(layer instanceof L.Marker)) {
      map.removeLayer(layer);
    }
  });

  const polyline = L.polyline(coordinates, { color: 'blue', weight: 5 }).addTo(map);
  map.fitBounds(polyline.getBounds());

  const steps = data.features[0].properties.segments[0].steps;

  return steps.map(step => {
    const coord = step.way_points ? coordinates[step.way_points[0]] : null;
    return {
      text: `${translateInstruction(step.instruction)} (${step.distance}m)`,
      location: coord, // [위도, 경도] 형태 좌표
    };
  });
}
