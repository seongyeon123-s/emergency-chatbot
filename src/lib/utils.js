// src/lib/utils.js

// 📌 거리 계산 함수
export function getDistance(lat1, lon1, lat2, lon2) {
    const toRad = (val) => (val * Math.PI) / 180
    const R = 6371 // 지구 반지름 (km)
    const dLat = toRad(lat2 - lat1)
    const dLon = toRad(lon2 - lon1)
  
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }
  
  // 📌 가장 가까운 대피소 찾기
  export function findNearestShelter(userLat, userLng, shelters) {
    if (!shelters.length) return null
  
    let nearest = shelters[0]
    let minDistance = getDistance(userLat, userLng, nearest.lat, nearest.lng)
  
    for (const shelter of shelters) {
      const dist = getDistance(userLat, userLng, shelter.lat, shelter.lng)
      if (dist < minDistance) {
        nearest = shelter
        minDistance = dist
      }
    }
  
    return nearest
  }
  