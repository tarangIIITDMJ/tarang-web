import React from "react";
import MainAppShell from "../components/MainAppShell";
import ImageView from "../components/GalleryPageSections/ImageView";
import HeroSection from "../components/GalleryPageSections/HeroSection";

export default function Gallery() {
  return (
    <MainAppShell>
      <HeroSection />
      <ImageView />
    </MainAppShell>
  );
}
