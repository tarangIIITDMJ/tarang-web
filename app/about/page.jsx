import MainAppShell from "../components/MainAppShell";
import HeroSection from "../components/AboutPageSections/HeroSection";
import ContentSection from "../components/AboutPageSections/ContentSection";
import AboutTarangSection from "../components/AboutPageSections/AboutTarangSection";
import SubMainSection from "../components/AboutPageSections/SubMainSection";
import PastTarangSection from "../components/AboutPageSections/PastTarangSection";
import CelebSection from "../components/AboutPageSections/CelebSection";

export default function EventPage() {
  return (
    <MainAppShell>
      <HeroSection />
      <ContentSection />
      <AboutTarangSection />
      <SubMainSection />
      <PastTarangSection />
      <CelebSection />
    </MainAppShell>
  );
}
