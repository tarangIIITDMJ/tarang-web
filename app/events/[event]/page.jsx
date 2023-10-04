"use client";
import { Box } from "@mantine/core";
import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "@/app/components//uiComponents/HeroSection";
import EventDetails from "@/app/components/EventDetailsSection/EventDetails";
import EventGuidelines from "@/app/components/EventDetailsSection/EventGuidelines";
import { getAllEvents } from "@/app/utils/apis";

export default function Events({ event }) {
  return (
    <MainAppShell>
      <Box style={{ backgroundColor: "#0F0F0F" }}>
        <HeroSection eventBackgroundImage={'/eventDetailsbg.webp'} eventName={event} />
        <EventDetails />
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
