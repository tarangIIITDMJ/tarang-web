"use client";
import { Divider, Stack, Text, List, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function EventGuidelines({ event }) {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const guidelines = [
    {
      title: "Instructions",
      content: event.instructions.map((instruction) => instruction),
    },
    {
      title: "Participation Type",
      content: ['You can participate as "' + event.event_type + '".'],
    },
    {
      title: "Participation Criteria",
      content: [
        `A minimum of ${event.min_participants} and a maximum of 
        ${event.max_participants} participants are required to participate in this event.`,
      ],
    },
    {
      title: "Coordinators",
      content: event.coordinators.map(
        (coordinator) => coordinator.name + " (+91 " + coordinator.pno + ")"
      ),
    },
    {
      title: "Prize Pool",
      content: [`There is a prize pool of ₹${event.prize_pool} to be won.`],
    },
  ];

  return (
    <Stack
      px={isMobileView ? "2rem" : "6.75rem"}
      py={isMobileView ? "2rem" : "4.5rem"}
    >
      <Text c="#fff" size={isMobileView ? "1.5rem" : "2rem"} fw="500">
        Guidelines
      </Text>
      <Divider mt={isMobileView ? "1rem" : "2rem"} size="1.5px" />

      {guidelines.map((event, index) => {
        return (
          <Box key={index}>
            <Text
              c="#fff"
              size={isMobileView ? "0.75rem" : "1.125rem"}
              fw="500"
              my="lg"
            >
              {event.title}:
            </Text>
            <List withPadding c="#9EA5AD" spacing="xs">
              {event.content.map((item, index) => {
                return (
                  <List.Item key={index}>
                    <Text fz={isMobileView ? "0.75rem" : "1.125rem"}>
                      {item}
                    </Text>
                  </List.Item>
                );
              })}
            </List>
          </Box>
        );
      })}
    </Stack>
  );
}
