"use client";

import MainAppShell from "../components/MainAppShell";
import HeroSection from "../components//uiComponents/HeroSection";
import ContentSection from "../components/AboutPageSections/ContentSection";

export default function EventPage() {
  const event = {
    name: 'About',
    images: ['/aboutbg.webp'],
  }
  return (
    <MainAppShell>
      <HeroSection event={event}/>
      <ContentSection />
    </MainAppShell>
  );
}
