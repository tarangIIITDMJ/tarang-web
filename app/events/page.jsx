import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "@/app/components/EventPageSections/HeroSection";
import { getAllEvents } from "../utils/apis";
import EventMain from "../components/EventPageSections/EventMain";
import Head from "next/head";

export default async function Events() {
  const eventDetails = await getAllEvents();
  const events = eventDetails.data.events;

  return (
    <>
      <Head>
        <title>Events | Tarang'23</title>
        <meta
          name="description"
          content="Dance, Music, Drama, Fashion, Art, Literature, Photography, Design, and many more. Tarang'23 has it all. Check out the events here. "
        />
        <meta
          name="keywords"
          content="Tarang, Tarang'23, IIITDMJ Cultural Fest, Events, Dance, Music, Drama, Fashion, Art, Literature, Photography, Design"
        />
      </Head>
      <MainAppShell>
        <HeroSection />
        <EventMain events={events} />
      </MainAppShell>
    </>
  );
}
