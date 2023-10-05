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
      title: "Prize Pool",
      content: [],
    },
    {
      title: "Dance style and duration",
      content: [
        "All forms of dance are allowed.",
        "Duration: 7 to 9 minutes",
        "Penalized points for exceeding time limits.",
      ],
    },
    {
      title: "Coordinators",
      content: ["Rakshit Goel (8941842574)", "Priyank Bhaskar (6232997288)"],
    },
    {
      title: "Prize pool",
      content: ["40,000/-"],
    },
  ];
  return (
    <Flex
      px={isMobileView ? "2rem" : "6.75rem"}
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
                  <List.Item key={index} my="xs">
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
