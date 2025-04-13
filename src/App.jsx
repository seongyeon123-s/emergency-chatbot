import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EmergencyAppUI from "./EmergencyAppUI"
import WildfirePage from "./pages/WildfirePage"
import EarthquakePage from "./pages/EarthquakePage"
import FloodPage from "./pages/FloodPage"
import WarPage from "./pages/WarPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmergencyAppUI />} />
        <Route path="/wildfire" element={<WildfirePage />} />
        <Route path="/earthquake" element={<EarthquakePage />} />
        <Route path="/flood" element={<FloodPage />} />
        <Route path="/war" element={<WarPage />} />
      </Routes>
    </Router>
  )
}
