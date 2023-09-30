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

export default function EventCategories() {
  const [list, setList] = useState([
    "Art",
    "Bazooka",
    "Drama",
    "Dance",
    "Music",
    "Photography",
    "Literature",
    "Others",
  ]);
  const [selectedEvents, setSelectedEvents] = useState([]); // default value for selected event.
  const isMobileView = useMediaQuery("(max-width: 768px)");
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
                onClick={() => {
                  if (selectedEvents.includes(event)) {
                    setSelectedEvents(
                      selectedEvents.filter((item) => item !== event)
                    );
                  } else {
                    setSelectedEvents([...selectedEvents, event]);
                  }
                }}
                rightSection={selectedEvents.includes(event) ? <IconX /> : ""}
                bg={selectedEvents.includes(event) ? "white" : "black"}
                c={selectedEvents.includes(event) ? "black" : "white"}
                size={isMobileView ? "md" : "lg"}
                style={{ border: "1px solid white" }}
                radius="xl"
                px="1rem"
              >
                {event}
              </Button>
            );
          })}
        </Group>
        <Text
          c="#9EA5AD"
          size={isMobileView ? "1.2rem" : "2rem"}
          mb={isMobileView ? "md" : "lg"}
        >
          &quot;Count&quot; Events
        </Text>
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
