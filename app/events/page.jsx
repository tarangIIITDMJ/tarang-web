import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "@/app/components/uiComponents/HeroSection";
import EventCategories from "@/app/components/EventPageSections/EventCategories";
import EventCards from "@/app/components/EventPageSections/EventCards";
import { getAllEvents } from "../utils/apis";

export default async function Events() {
  const eventDetails = await getAllEvents();
  const events = eventDetails.data.events;

  const event = {
    name: "Events",
    images: ["/EventPageHeroImage2.webp"],
  }

  return (
    <MainAppShell>
      <HeroSection event={event}/>
      <EventCategories />
      <EventCards events={events} />
    </MainAppShell>
  );
}
