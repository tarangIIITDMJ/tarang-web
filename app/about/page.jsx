"use client";

import MainAppShell from "../components/MainAppShell";
import HeroSection from "../components/AboutPageSections/HeroSection";
import ContentSection from "../components/AboutPageSections/ContentSection";

export default function EventPage() {
  return (
    <MainAppShell>
      <HeroSection />
      <ContentSection />
    </MainAppShell>
  );
}
