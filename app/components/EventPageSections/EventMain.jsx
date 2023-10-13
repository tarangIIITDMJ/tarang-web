"use client";
import React, { useState } from "react";
import EventCategories from "./EventCategories";
import EventCards from "./EventCards";

export default function EventMain({ events }) {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const list = [...new Set(events.map((el) => el.event_category))];

  return (
    <>
      <EventCategories
        selectedEvents={selectedEvents}
        setSelectedEvents={setSelectedEvents}
        eventList={list}
        events={events}
      />
      <EventCards selectedEvents={selectedEvents} events={events} />
    </>
  );
}
