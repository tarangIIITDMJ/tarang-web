import MainAppShell from "../components/MainAppShell";
import HeroSection from "../components//uiComponents/HeroSection";
import ContentSection from "../components/AboutPageSections/ContentSection";
import AboutTarangSection from "../components/AboutPageSections/AboutTarangSection";
import SubMainSection from "../components/AboutPageSections/SubMainSection";
import PastTarangSection from "../components/AboutPageSections/PastTarangSection";
import CelebSection from "../components/AboutPageSections/CelebSection";

export default function EventPage() {
  const event = {
    name: 'About',
    images: ['https://res.cloudinary.com/prajjwalcdn/image/upload/v1696502907/about-header_wjneka.png'],
  }
  return (
    <MainAppShell>
      <HeroSection event={event}/>
      <ContentSection />
      <AboutTarangSection />
      <SubMainSection />
      <PastTarangSection />
      <CelebSection />
    </MainAppShell>
  );
}
