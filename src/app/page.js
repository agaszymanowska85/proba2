import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProgramTimeline from "@/components/ProgramTimeline";
import RankingBadge from "@/components/RankingBadge";
import InfoSection from "@/components/InfoSection";
import Gallery from "@/components/Gallery";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="pt-20 md:pt-24">
      <Navbar />
      <Hero />
      <Stats />
      <ProgramTimeline />
      <RankingBadge />
      <InfoSection />
      <Gallery />
      <FinalCta />
      <Footer />
    </main>
  );
}
