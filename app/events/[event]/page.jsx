"use client";
import { Box } from "@mantine/core";
import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "@/app/components/EventDetailsSection/HeroSection";
import EventDetails from "@/app/components/EventDetailsSection/EventDetails";
import EventGuidelines from "@/app/components/EventDetailsSection/EventGuidelines";

export default function Events() {
  return (
    <MainAppShell>
      <Box style={{ backgroundColor: "#0F0F0F" }}>
        <HeroSection />
        <EventDetails />
        <EventGuidelines />
      </Box>
    </MainAppShell>
  );
}
