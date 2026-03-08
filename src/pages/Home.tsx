import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DealsSection from "../components/DealsSection";
import ExploreSection from "../components/ExploreSection";
import PriceAlertsSection from "../components/PriceAlertsSection";
import WhyChooseSection from "../components/WhyChooseSection";
import MobileAppSection from "../components/MobileAppSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DealsSection />
      <ExploreSection />
      <PriceAlertsSection />
      <WhyChooseSection />
      <MobileAppSection />
      <Footer />
    </div>
  );
}