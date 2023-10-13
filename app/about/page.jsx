import MainAppShell from "../components/MainAppShell";
import HeroSection from "../components/AboutPageSections/HeroSection";
import ContentSection from "../components/AboutPageSections/ContentSection";
import AboutTarangSection from "../components/AboutPageSections/AboutTarangSection";
import SubMainSection from "../components/AboutPageSections/SubMainSection";
import PastTarangSection from "../components/AboutPageSections/PastTarangSection";

export default function AboutPage() {
  return (
    <MainAppShell>
      <HeroSection />
      <ContentSection />
      <AboutTarangSection />
      <SubMainSection />
      <PastTarangSection />
    </MainAppShell>
  );
}
