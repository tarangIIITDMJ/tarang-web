"use client";
import React, { useState } from "react";
import {
  Button,
  Group,
  Container,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import eventsList from "./EventsList";

export default function EventCategories() {
  const [list, setList] = useState(eventsList);
  const [selectedEvent, setSelectedEvent] = useState("Art"); // default value for selected event.
  const [selectedEventNum, setSelectedEventNum] = useState(5);
  const isMobileView = useMediaQuery("(max-width: 768px)");

  function handleClick(index, clicked) {
    setSelectedEvent(list[index].name)
    setSelectedEventNum(list[index].eventsNum);

    setList((prev) => {
      let updated = prev,
        temp;

      // for ensuring that only one button can be active at a time
      for (let i = 0; i < prev.length; i++) {
        if (updated[i].clicked) updated[i].clicked = false;
      }

      // main working code for button selection
      updated = updated.map((event, pos) => {
        return pos == index ? { ...event, clicked: !clicked } : { ...event };
      });

      // making the selected button to be at first in the button group
      temp = updated[0];
      updated[0] = updated[index];
      updated[index] = temp;

      return updated;
    });
  }

  function EventsButtonGroup({ isMobileView }) {
    return (
      <Stack pl={isMobileView ? "1rem" : "5.5rem"}>
        <Group
          gap={isMobileView ? "sm" : "30"}
          w={isMobileView ? "fit-content" : "100%"}
          wrap={"no"}
          py={isMobileView ? "" : "3rem"}
        >
          {list.map((event, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleClick(index, event.clicked)}
                rightSection={event.clicked ? <IconX /> : ""}
                bg={event.clicked ? "white" : "black"}
                c={event.clicked ? "black" : "white"}
                size={isMobileView ? "md" : "lg"}
                style={{ border: "1px solid white" }}
                radius="xl"
                px="1rem"
              >
                {event.name}
              </Button>
            );
          })}
        </Group>
        <Text
          c="#9EA5AD"
          size={isMobileView ? "1.2rem" : "2rem"}
          mb={isMobileView ? "md" : "lg"}
        >{`${selectedEvent} (${selectedEventNum} events)`}</Text>
      </Stack>
    );
  }

  return (
    <Container pos="relative" m={0} p={0} miw="100%" bg={"#0F0F0F"}>
      {isMobileView ? (
        <ScrollArea pt="3rem" pb="3rem">
          <EventsButtonGroup isMobileView={isMobileView} />
        </ScrollArea>
      ) : (
        <EventsButtonGroup isMobileView={isMobileView} />
      )}
    </Container>
  );
}
