import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "@/app/components/EventPageSections/HeroSection";
import EventCategories from "@/app/components/EventPageSections/EventCategories";
import EventCards from "@/app/components/EventPageSections/EventCards";
import { getAllEvents } from "../utils/apis";

export default async function Events() {
  const eventDetails = await getAllEvents();
  const events = eventDetails.data.events;

  return (
    <MainAppShell>
      <HeroSection />
      <EventCategories />
      <EventCards events={events} />
    </MainAppShell>
  );
}
