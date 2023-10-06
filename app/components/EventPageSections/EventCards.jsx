"use client";
import { Text, Stack, Grid, Card, Flex, Box, Image } from "@mantine/core";
import cssStyles from "@/app/styles/events.module.css";
import Link from "next/link";

export default function EventCards({ selectedEvents, events }) {
  function CardComp({ event }) {
    return (
      <Link href={`/events/${event.slug}`}>
        <Card radius={0} p={0}>
          <Flex p={0} direction={"column"} className={cssStyles.EventCardsFlex}>
            <Box>
              <Image
                src={"/EventCard.webp"}
                w={"100%"}
                h={"100%"}
                style={{ objectPosition: "0% 0%", transition: "0.3s" }}
                alt="eventImage"
                className={cssStyles.EventCardsImage}
              />
            </Box>
            <Stack
              p={"12px 24px 24px 24px"}
              gap={8}
              align="flex-start"
              w={"100%"}
              style={{
                border: "2px solid #000",
              }}
            >
              <Text size={"lg"} fw={500} className={cssStyles.EventCardText}>
                {event.name}
              </Text>
              <Text
                c="#676E76"
                size="sm"
                style={{
                  wordBreak: "break-word",
                }}
                lineClamp={3}
              >
                {event.description}
              </Text>
            </Stack>
          </Flex>
        </Card>
      </Link>
    );
  }

  return (
    <Stack
      bg={"#0F0F0F"}
      align="flex-start"
      py={"1rem"}
      px={"5.5rem"}
      className={cssStyles.EventCardStack}
    >
      <Grid gutter={"1.75rem"} px={0}>
        {selectedEvents.length == 0
          ? events.map((event, index) => {
              return (
                <Grid.Col
                  className={cssStyles.EventCardsGridCol}
                  span={4}
                  key={index}
                >
                  <CardComp event={event} />
                </Grid.Col>
              );
            })
          : events
              .filter((el) => selectedEvents.includes(el.event_category))
              .map((event, index) => {
                return (
                  <Grid.Col
                    className={cssStyles.EventCardsGridCol}
                    span={4}
                    key={index}
                  >
                    <CardComp event={event} />
                  </Grid.Col>
                );
              })}
      </Grid>
    </Stack>
  );
}
