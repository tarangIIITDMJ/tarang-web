import React from "react";
import MainAppShell from "../components/MainAppShell";
import ImageView from "../components/GalleryPageSections/ImageView";
import HeroSection from "../components/GalleryPageSections/HeroSection";
import Head from "next/head";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | Tarang'23</title>
        <meta
          name="description"
          content=" A blast from the past where the hype of the previous times of the cultural fest of IIITDMJ are shown. Check out the gallery here."
        />
        <meta
          name="keywords"
          content="Tarang, Tarang'23, IIITDMJ Cultural Fest, Gallery, Photos, Videos, Past Events, Previous Events"
        />
      </Head>
      <MainAppShell>
        <HeroSection />
        <ImageView />
      </MainAppShell>
    </>
  );
}
