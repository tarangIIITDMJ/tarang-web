"use client";
import MainAppShell from "./components/MainAppShell";
import HeroMain from "./components/HomePageSections/HeroMain";
import SubMainSection from "./components/HomePageSections/SubMainSection";
import EventSection from "./components/HomePageSections/EventSection";
import GalleryView from "./components/HomePageSections/GalleryView";
import SponsorUsSection from "./components/HomePageSections/SponsorUsSection";
import DateRevealSection from "./components/HomePageSections/DateRevealSection";
import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <MainAppShell>
      <HeroMain />
      {/* <SponsorSection /> */}
      <DateRevealSection isMobileView={isMobileView} />
      <SubMainSection isMobileView={isMobileView} />
      <EventSection isMobileView={isMobileView} />
      <GalleryView isMobileView={isMobileView} />
      <SponsorUsSection />
    </MainAppShell>
  );
}
