"use client";
import React, { useState } from "react";
import { Button, Group, Container, ScrollArea } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

export default function EventCategories() {
  const [clicked, setClicked] = useState("");

  const eventsList = [
    "Art",
    "Bazooka",
    "Drama",
    "Dance",
    "Photpgraphy",
    "Literature",
    "Others",
  ];

  const isMobileView = useMediaQuery("(max-width: 768px)");

  function handleClick(event) {
    setClicked(event);
  }

  function EventsButtonGroup({ isMobileView }) {
    return (
      <Group
        gap={isMobileView ? "sm" : "30"}
        ml={isMobileView ? "1rem" : "5.5rem"}
        wrap={"no"}
        w={isMobileView ? "fit-content" : "100%"}
        py={isMobileView ? "" : "3rem"}
      >
        {eventsList.map((events, index) => {
          return (
            <Button
              key={index}
              onClick={() => handleClick(events)}
              rightSection={events === clicked ? <IconX /> : ""}
              bg={events === clicked ? "white" : "black"}
              c={events === clicked ? "black" : "white"}
              size={isMobileView ? "md" : "lg"}
              style={{ border: "1px solid white" }}
              radius="xl"
              px="1rem"
            >
              {events}
            </Button>
          );
        })}
      </Group>
    );
  }

  return (
    <Container pos="relative" m={0} p={0} miw="100%" bg={"#0F0F0F"}>
      {isMobileView ? (
        <ScrollArea pt="3rem" pb="3rem">
          <EventsButtonGroup isMobileView={isMobileView} />
        </ScrollArea>
      ) : (
        <EventsButtonGroup isMobileView={isMobileView}/>
      )}
    </Container>
  );
}
