"use client";
import MainAppShell from "@/app/components/MainAppShell";
import HeroSection from "@/app/components/EventPageSections/HeroSection";
import EventCategories from "@/app/components/EventPageSections/EventCategories";
import EventCards from "@/app/components/EventPageSections/EventCards";

export default function EventPage() {
    return(
        <MainAppShell>
            <HeroSection />
            <EventCategories />
            <EventCards />
        </MainAppShell>
    );
}