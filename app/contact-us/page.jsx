import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "../components/ContactPageSections/HereSection";
import ContactFormSection from "../components/ContactPageSections/ContactFormSection";
import ContactDetails from "../components/ContactPageSections/ContactDetails";
import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Tarang'23</title>
        <meta
          name="description"
          content="Contact us for any queries regarding Tarang'23 or any other information. All the contact details are provided here."
        />
        <meta
          name="keywords"
          content="Tarang, Tarang'23, IIITDMJ Cultural Fest, Contact Us, Queries, Information"
        />
      </Head>
      <MainAppShell>
        <HeroSection />
        <ContactFormSection />
        <ContactDetails />
      </MainAppShell>
    </>
  );
};

export default ContactUs;
