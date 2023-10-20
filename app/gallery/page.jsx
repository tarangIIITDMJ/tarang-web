import React from "react";
import MainAppShell from "../components/MainAppShell";
import ImageView from "../components/GalleryPageSections/ImageView";
import HeroSection from "../components/GalleryPageSections/HeroSection";
import Head from "next/head";

export const metadata = {
  title: "Gallery | Tarang'23",
  description:
    " A blast from the past where the hype of the previous times of the cultural fest of IIITDMJ are shown. Check out the gallery here.",
  keywords:
    "Tarang, Tarang'23, IIITDMJ Cultural Fest, Gallery, Photos, Videos, Past Events, Previous Events",
};

export default function Gallery() {
  return (
    <>
      <MainAppShell>
        <HeroSection />
        <ImageView />
      </MainAppShell>
    </>
  );
}
