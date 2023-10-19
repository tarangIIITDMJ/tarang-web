import Head from "next/head";
import MainAppShell from "../components/MainAppShell";
import GetYourPassSection from "../components/TarangPassSections/GetYourPassSection";
import HeroSection from "../components/TarangPassSections/HeroMain";

export default function TarangPassPage() {
  return (
    <>
      <Head>
        <title>Get Your Tarang Card | Tarang'23</title>
        <meta
          property="og:title"
          content="Get Your Tarang Card | Tarang'23"
          key="title"
        />
        <meta
          property="og:description"
          content="Get your Tarang Card and enjoy the perks of being a Tarang Card holder. After purchasing the Tarang Card, you can participate in all the events of Tarang'23 and you can enjoy Pro Nights for free."
          key="description"
        />
        <meta
          name="description"
          content="Get your Tarang Card and enjoy the perks of being a Tarang Card holder. After purchasing the Tarang Card, you can participate in all the events of Tarang'23 and you can enjoy Pro Nights for free."
        />
        <meta
          name="keywords"
          content="Tarang, Tarang'23, IIITDMJ Cultural Fest, Tarang Card, Tarang Pass, Tarang Card Holder, Tarang Pass Holder, Tarang Card Benefits, Tarang Pass Benefits, Tarang Card Perks, Tarang Pass Perks, Tarang Card Pro Nights, Tarang Pass Pro Nights, Tarang Card Events, Tarang Pass Events"
        />
      </Head>
      <MainAppShell>
        <HeroSection />
        <GetYourPassSection />
      </MainAppShell>
    </>
  );
}
