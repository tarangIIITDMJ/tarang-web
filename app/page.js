import MainAppShell from "./components/MainAppShell";
import HeroMain from "./components/HomePageSections/HeroMain";
import SponsorSection from "./components/HomePageSections/SponsorSection";
import SubMainSection from "./components/HomePageSections/SubMainSection";
import EventSection from "./components/HomePageSections/EventSection";
import GalleryView from "./components/HomePageSections/GalleryView";
import SponsorUsSection from "./components/HomePageSections/SponsorUsSection";
import DateRevealSection from "./components/HomePageSections/DateRevealSection";

export default function Home() {
  return (
    <MainAppShell>
      <HeroMain />
      {/* <SponsorSection /> */}
      <DateRevealSection />
      <SubMainSection />
      <EventSection />
      <GalleryView />
      <SponsorUsSection />
    </MainAppShell>
  );
}
