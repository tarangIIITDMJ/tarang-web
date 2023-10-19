import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "../components/ContactPageSections/HereSection";
import ContactFormSection from "../components/ContactPageSections/ContactFormSection";
import ContactDetails from "../components/ContactPageSections/ContactDetails";

export const metadata = {
  title: "Contact Us | Tarang'23",
  description:
    "Contact us for any queries regarding Tarang'23 or any other information. All the contact details are provided here.",
  keywords:
    "Tarang, Tarang'23, IIITDMJ Cultural Fest, Contact Us, Queries, Information",
};

const ContactUs = () => {
  return (
    <>
      <MainAppShell>
        <HeroSection />
        <ContactFormSection />
        <ContactDetails />
      </MainAppShell>
    </>
  );
};

export default ContactUs;
