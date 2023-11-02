import Head from "next/head";
import MainAppShell from "../components/MainAppShell";
import GetYourPassSection from "../components/TarangPassSections/GetYourPassSection";
import HeroSection from "../components/TarangPassSections/HeroMain";

export const metadata = {
  title: "Get Your Tarang Card | Tarang'23",
  description:
    "Get your Tarang Card and enjoy the perks of being a Tarang Card holder. After purchasing the Tarang Card, you can participate in all the events of Tarang'23 and you can enjoy for free.",
  keywords:
    "Tarang, Tarang'23, IIITDMJ Cultural Fest, Tarang Card, Tarang Pass, Tarang Card Holder, Tarang Pass Holder, Tarang Card Benefits, Tarang Pass Benefits, Tarang Card Perks, Tarang Pass Perks, Tarang Card, Tarang Pass, Tarang Card Events, Tarang Pass Events",
};

export default function TarangPassPage() {
  return (
    <>
      <MainAppShell>
        <HeroSection />
        <GetYourPassSection />
      </MainAppShell>
    </>
  );
}
