"use client";
import React, { useState } from "react";
import { Container, ScrollArea, Text, Flex, Chip } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/events.module.css";

export default function EventCategories({
  selectedEvents,
  eventList: list,
  setSelectedEvents,
}) {
  return (
    <Container
      pos="relative"
      m={0}
      pl={"5.5rem"}
      miw="100%"
      bg={"#0F0F0F"}
      className={cssStyles.EventCategoriesContainer}
    >
      <ScrollArea
        styles={{
          scrollbar: { background: "transparent", height: 8 },
          thumb: { background: "white" },
        }}
      >
        <Flex
          gap={15}
          py={"3rem"}
          className={cssStyles.EventCategoriesButtonsGrp}
        >
          <Chip.Group
            multiple
            value={selectedEvents}
            onChange={setSelectedEvents}
          >
            {list.map((event, index) => {
              let selected = selectedEvents.includes(event);
              return (
                <Chip
                  icon={
                    <IconX size={22} color={selected ? "black" : "white"} />
                  }
                  variant="outline"
                  styles={{
                    label: {
                      background: selected ? "white" : "transparent",
                      color: selected ? "black" : "white",
                      paddingBlock: "22px",
                      fontWeight: "600",
                      gap: 10,
                      flexDirection: "row-reverse",
                    },
                  }}
                  size="lg"
                  color="white"
                  key={index}
                  value={event}
                  className={cssStyles.EventCategoriesChips}
                >
                  {event}
                </Chip>
              );
            })}
          </Chip.Group>
        </Flex>
      </ScrollArea>

      <Text
        c="#9EA5AD"
        className={cssStyles.EventCategoriesText}
        mt={10}
        fz={"2rem"}
      >
        &quot;Count&quot; Events
      </Text>
    </Container>
  );
}
