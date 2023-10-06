import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "../components/ContactPageSections/HereSection";
import ContactFormSection from "../components/ContactPageSections/ContactFormSection";
import ContactDetails from "../components/ContactPageSections/ContactDetails";

const ContactUs = () => {
  return (
    <MainAppShell>
      <HeroSection />
      <ContactFormSection />
      <ContactDetails />
    </MainAppShell>
  );
};

export default ContactUs;
