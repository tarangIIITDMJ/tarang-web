"use client";

import MainAppShell from "../components/MainAppShell";
import HeroSection from "../components//uiComponents/HeroSection";
import ContentSection from "../components/AboutPageSections/ContentSection";

export default function EventPage() {
  const event = {
    name: 'About',
    images: ['https://res.cloudinary.com/prajjwalcdn/image/upload/v1696502907/about-header_wjneka.png'],
  }
  return (
    <MainAppShell>
      <HeroSection event={event}/>
      <ContentSection />
    </MainAppShell>
  );
}
