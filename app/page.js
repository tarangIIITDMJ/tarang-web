import MainAppShell from "./components/MainAppShell";
import HeroMain from "./components/HomePageSections/HeroMain";
import DateRevealSection from "./components/HomePageSections/DateRevealSection";
import TarangCardSection from "./components/HomePageSections/TarangCardSection";
import SubMainSection from "./components/HomePageSections/SubMainSection";
import EventSection from "./components/HomePageSections/EventSection";
import GalleryView from "./components/HomePageSections/GalleryView";
import SponsorUsSection from "./components/HomePageSections/SponsorUsSection";

export default function Home() {
  return (
    <MainAppShell>
      <HeroMain />
      {/* <SponsorSection /> */}
      <DateRevealSection />
      <TarangCardSection />
      <SubMainSection />
      <EventSection />
      <GalleryView />
      <SponsorUsSection />
    </MainAppShell>
  );
}
