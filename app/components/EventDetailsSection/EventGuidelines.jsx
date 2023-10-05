"use client";
import { Divider, Flex, Text, List } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function EventGuidelines({ event }) {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  console.log(event);
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
        "Minimum " +
          event.min_participants +
          " and Maximum " +
          event.max_participants +
          " participants are required to participate in this event.",
      ],
    },
    {
      title: "Coordinators",
      content: event.coordinators.map(
        (coordinator) => coordinator.name + " (+91 " + coordinator.pno + ")"
      ),
    },
    {
      title: "Prize pool",
      content: [`Prize pool of ₹${event.prize_pool} to be won.`],
    },
  ];
  return (
    <Flex
      px={isMobileView ? "2rem" : "4rem"}
      pb={isMobileView ? "3rem" : "5rem"}
      direction="column"
      mt={isMobileView ? "2rem" : "4.5rem"}
    >
      <Text c="#fff" size={isMobileView ? "1.5rem" : "2rem"} fw="500">
        Guidelines
      </Text>
      <Divider mt={isMobileView ? "1rem" : "2rem"} size="1.5px" />
      {guidelines.map((event, index) => {
        return (
          <div key={index}>
            <Text
              c="#fff"
              size={isMobileView ? "0.75rem" : "1.125rem"}
              fw="500"
              mt="xl"
            >
              {event.title}:
            </Text>
            <List
              withPadding
              c="#9EA5AD"
              size={isMobileView ? "0.75rem" : "1.125rem"}
              fw="500"
            >
              {event.content.map((item, index) => {
                return (
                  <List.Item key={index} my="xs" lh="1.3">
                    {item}
                  </List.Item>
                );
              })}
            </List>
          </div>
        );
      })}
    </Flex>
  );
}
