import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import FlightsPage from "./pages/Flights";
import DealsPage from "./pages/Deals";
import LoginPage from "./pages/LoginPage";
import ExplorePage from "./pages/Explorepage"
import SignupPage from "./pages/SignupPage";
import HelpPage from "./pages/Helppage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/explorepage" element={<ExplorePage />} />
        <Route path="/helppage" element={<HelpPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/deals" element={<DealsPage />} />
      </Routes>
    </Router>
  );
}