import MainAppShell from "../components/MainAppShell";
import GetYourPassSection from "../components/TarangPassSections/GetYourPassSection";
import HeroSection from "../components/TarangPassSections/HeroMain";

export default function TarangPassPage() {
  return (
    <MainAppShell>
      <HeroSection />
      <GetYourPassSection />
    </MainAppShell>
  );
}
