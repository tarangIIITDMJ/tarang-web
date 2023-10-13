import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "../components/FAQsPageSections/HeroSection";
import FaqsBody from "@/app/components/FAQsPageSections/FaqsBody";
import faqsData from "./faqsData.json";

export default function faqs() {
  return (
    <MainAppShell>
      <HeroSection />
      <FaqsBody faqsData={faqsData} />
    </MainAppShell>
  );
}
