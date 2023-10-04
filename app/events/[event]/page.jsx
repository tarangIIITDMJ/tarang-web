import { Box } from "@mantine/core";
import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "@/app/components/EventDetailsSection/HeroSection";
import EventDetails from "@/app/components/EventDetailsSection/EventDetails";
import EventGuidelines from "@/app/components/EventDetailsSection/EventGuidelines";
import { getAllEvents, getEvent } from "@/app/utils/apis";

export default async function Events({ params: { event } }) {
  const eventDetail = await getEvent(event);
  const eventData = eventDetail.data.event;

  return (
    <MainAppShell>
      <Box style={{ backgroundColor: "#0F0F0F" }}>
        <HeroSection event={eventData} />
        <EventDetails event={eventData} />
        <EventGuidelines />
      </Box>
    </MainAppShell>
  );
}

export async function getStaticPaths() {
  const eventDetails = await getAllEvents();
  const events = eventDetails.data.events;
  return {
    paths: events.map((event) => ({
      params: { event: event.slug },
    })),
    fallback: false,
  };
}
