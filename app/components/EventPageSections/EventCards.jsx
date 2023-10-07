"use client";
import {
  Text,
  Stack,
  Grid,
  Card,
  Flex,
  Box,
  Image,
  Paper,
} from "@mantine/core";
import cssStyles from "@/app/styles/events.module.css";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

export default function EventCards({ selectedEvents, events }) {
  function CardComp({ event }) {
    const isMobileView = useMediaQuery("(max-width: 768px)");

    return (
      <Link href={`/events/${event.slug}`}>
        <Paper radius={0} p={0} bg={"transparent"}>
          <Flex p={0} direction={"column"} className={cssStyles.EventCardsFlex}>
            <Box style={{ overflow: "hidden" }}>
              <Image
                src={event.images.mainPhone}
                h={isMobileView ? "100%" : 300}
                style={{
                  objectPosition: "50% 20%",
                  transition: "0.3s",
                  aspectRatio: "1/1",
                }}
                alt={event.name}
                className={cssStyles.EventCardsImage}
              />
            </Box>
            <Stack
              p={"12px 24px 24px 24px"}
              gap={8}
              align="flex-start"
              w={"100%"}
              style={{
                border: "1px solid #000",
              }}
              className={cssStyles.EventCardsStack}
              bg={"white"}
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
                className={cssStyles.EventCardText}
              >
                {event.description}
              </Text>
            </Stack>
          </Flex>
        </Paper>
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
