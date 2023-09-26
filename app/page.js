import MainAppShell from "./components/MainAppShell";
import EventSection from "./components/HomePageSections/EventSection";
import HeroMain from "./components/HomePageSections/HeroMain";
import SponsorSection from "./components/HomePageSections/SponsorSection";
import SubMainSection from "./components/HomePageSections/SubMainSection";

export default function Home() {
  return (
    <MainAppShell>
      <HeroMain />
      <SponsorSection />
      <SubMainSection />
      <EventSection />
      <GalleryView />
    </MainAppShell>
  );
}
