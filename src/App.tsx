import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import FlightsPage from "./pages/Flights";
import DealsPage from "./pages/Deals";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/deals" element={<DealsPage />} />
      </Routes>
    </Router>
  );
}