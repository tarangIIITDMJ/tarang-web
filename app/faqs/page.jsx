import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "../components/FAQsPageSections/HeroSection";
import FaqsBody from "@/app/components/FAQsPageSections/FaqsBody";
import faqsData from "./faqsData.json";

export const metadata = {
  title: "FAQs | Tarang'23",
  description:
    "All the frequently asked questions regarding Tarang'23 are answered here. If you have any other queries, feel free to contact us.",
  keywords:
    "Tarang, Tarang'23, IIITDMJ Cultural Fest, FAQs, Frequently Asked Questions, What is Tarang, How to register, How to participate, How to contact us",
};

export default function faqs() {
  return (
    <>
      <MainAppShell>
        <HeroSection />
        <FaqsBody faqsData={faqsData} />
      </MainAppShell>
    </>
  );
}
