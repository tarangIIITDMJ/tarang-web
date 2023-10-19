import MainAppShell from "./components/MainAppShell";
import HeroMain from "./components/HomePageSections/HeroMain";
import DateRevealSection from "./components/HomePageSections/DateRevealSection";
import TarangCardSection from "./components/HomePageSections/TarangCardSection";
import SubMainSection from "./components/HomePageSections/SubMainSection";
import EventSection from "./components/HomePageSections/EventSection";
import GalleryView from "./components/HomePageSections/GalleryView";
import SponsorUsSection from "./components/HomePageSections/SponsorUsSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tarang 2023 | The Annual Cultural Fest of IIITDM Jabalpur</title>
        <meta
          title="Tarang 2023 | The Annual Cultural Fest of IIITDM Jabalpur"
          description="Tarang is the annual cultural fest of IIITDM Jabalpur. It is a three-day long extravaganza of fun, frolic, and festivity, where students from all over the country participate in a plethora of events and competitions."
        />
        <meta
          property="og:title"
          content="Tarang 2023 | The Annual Cultural Fest of IIITDM Jabalpur"
        />
        <meta
          property="og:description"
          content="Tarang is the annual cultural fest of IIITDM Jabalpur. It is a three-day long extravaganza of fun, frolic, and festivity, where students from all over the country participate in a plethora of events and competitions."
        />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <MainAppShell>
        <HeroMain />
        <DateRevealSection />
        <TarangCardSection />
        <SubMainSection />
        <EventSection />
        <GalleryView />
        <SponsorUsSection />
      </MainAppShell>
    </>
  );
}
