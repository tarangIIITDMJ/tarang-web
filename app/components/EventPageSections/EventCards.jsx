"use client";
import { Text, Stack, Grid, Flex, Box, Image, Paper } from "@mantine/core";
import cssStyles from "@/app/styles/events.module.css";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";

export default function EventCards({ selectedEvents, events }) {
  function CardComp({ event }) {
    const isMobileView = useMediaQuery("(max-width: 768px)");

    return (
      <Link href={`/events/${event.slug}`}>
        <Paper radius={0} p={0} bg={"transparent"}>
          <Flex
            justify={"space-between"}
            p={0}
            direction={"column"}
            className={cssStyles.EventCardsFlex}
          >
            <Box
              style={{ overflow: "hidden" }}
              w={"100%"}
              className={cssStyles.EventCardsBox}
            >
              <Image
                src={event.images.mainPhone}
                h={300}
                w={"100%"}
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
                border: "2px solid #000",
              }}
              className={cssStyles.EventCardsStack}
              bg={"white"}
            >
              <Text
                size={"lg"}
                fw={500}
                lineClamp={1}
                className={cssStyles.EventCardText}
              >
                {event.name}
              </Text>
              <Text
                c="#676E76"
                size="sm"
                style={{
                  wordBreak: "break-word",
                }}
                lineClamp={2}
                className={cssStyles.EventCardText}
              >
                {event.description}
              </Text>
              <Text
                variant="gradient"
                size="sm"
                gradient={{ from: "blue", to: "cyan", deg: 90 }}
              >
                Read more
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
      pt={"1rem"}
      pb={"4rem"}
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
