"use client";
import React, { useState } from "react";
import EventCategories from "./EventCategories";
import EventCards from "./EventCards";

export default function EventMain({ events }) {
  const [selectedEvents, setSelectedEvents] = useState([]);

  return (
    <>
      <EventCategories
        selectedEvents={selectedEvents}
        setSelectedEvents={setSelectedEvents}
      />
      <EventCards selectedEvents={selectedEvents} events={events} />
    </>
  );
}
