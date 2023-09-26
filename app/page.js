import MainAppShell from "./components/MainAppShell";

import EventSection from "./components/HomePageSections/EventSection";
import HeroMain from "./components/HomePageSections/HeroMain";
import GalleryView from "./components/HomePageSections/GalleryView";
import SponsorSection from "./components/HomePageSections/SponsorSection";

export default function Home() {
  return (
    <MainAppShell>
      <HeroMain />
      <SponsorSection />
      <EventSection />
      <GalleryView />
    </MainAppShell>
  );
}
