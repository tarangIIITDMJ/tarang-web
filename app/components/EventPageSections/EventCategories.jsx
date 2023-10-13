"use client";
import React, { useState } from "react";
import { Container, ScrollArea, Text, Flex, Chip, Space } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/events.module.css";

export default function EventCategories({
  selectedEvents,
  eventList: list,
  setSelectedEvents,
  events,
}) {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Container
      pos="relative"
      m={0}
      pl="5.5rem"
      miw="100%"
      bg="#EFDEE3"
      className={cssStyles.EventCategoriesContainer}
    >
      <Space h={"md"} />
      <ScrollArea
        style={{
          borderRadius: "10px",
          boxShadow: isMobile ? "inset -20px 0 20px -20px #7f7f7f" : "none",
        }}
        type={"never"}
      >
        <Flex
          gap={15}
          py={"2rem"}
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
                  icon={<IconX size={22} color={"white"} />}
                  variant="outline"
                  styles={{
                    label: {
                      background: selected ? "black" : "transparent",
                      color: selected ? "white" : "black",
                      paddingBlock: "24px",
                      fontWeight: "600",
                      gap: 10,
                      border: "2px solid #000",
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
        c="#24292E"
        className={cssStyles.EventCategoriesText}
        mt={10}
        fz={"1.5rem"}
      >
        {events.filter((el) => selectedEvents.includes(el.event_category))
          .length || events.length}{" "}
        Events in{" "}
        {selectedEvents.length !== 0
          ? selectedEvents
              .map((eventCategory, index) =>
                index === selectedEvents.length - 1
                  ? `and ${eventCategory}`
                  : eventCategory
              )
              .join(", ")
          : "Total"}
      </Text>
    </Container>
  );
}
