"use client";
import { Box } from "@mantine/core";
import HeroSection from "@/app/components/EventDetailsSection/HeroSection";
import EventDetails from "@/app/components/EventDetailsSection/EventDetails";
import EventGuidelines from "@/app/components/EventDetailsSection/EventGuidelines";

export default function Events() {
  return (
    <Box style={{backgroundColor: "#0F0F0F"}}>
      <HeroSection />
      <EventDetails />
      <EventGuidelines />
    </Box>
  );
}
