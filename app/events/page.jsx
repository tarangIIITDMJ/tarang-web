import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "@/app/components/EventPageSections/HeroSection";
import { getAllEvents } from "../utils/apis";
import EventMain from "../components/EventPageSections/EventMain";

export default async function Events() {
  const eventDetails = await getAllEvents();
  const events = eventDetails.data.events;

  const event = {
    name: "Events",
    images: ["/EventPageHeroImage2.webp"],
  }

  return (
    <MainAppShell>
      <HeroSection />
      <EventMain events={events} />
    </MainAppShell>
  );
}
