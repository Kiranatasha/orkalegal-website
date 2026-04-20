import AboutSection from "../components/AboutSection";
import BottomCTA from "../components/BottomCTA";
import FeaturedWorksSection from "../components/FeaturedWorksSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import GlobalBackground from "../components/GlobalBackground";
import Hero from "../components/Hero";
import InsightsSection from "../components/InsightsSection";
import IntegritySection from "../components/IntegritySection";
import Navbar from "../components/Navbar";
import PracticeAreasSection from "../components/PracticeAreasSection";

export default function HomePage() {
  return (
    <>
      {/* Fixed behind the entire page */}
      <GlobalBackground />
      <Navbar />
      <main className="site-shell">
        <Hero />
        <AboutSection />
        <IntegritySection />
        <PracticeAreasSection />
        <InsightsSection />
        <FeaturedWorksSection />
        <BottomCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
