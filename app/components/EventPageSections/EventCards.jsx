"use client";
import { Text, Stack, Grid, Card, Flex, Box, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/events.module.css";
import Link from "next/link";

export default function EventCards({ events }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  function CardComp({ makeMobile = false, event }) {
    return (
      <Link href={`/events/${event.slug}`}>
        <Card radius={0} p={0}>
          <Flex p={0} direction={makeMobile ? "row" : "column"}>
            <Box>
              <Image
                src={"/EventCard.webp"}
                w={makeMobile ? 120 : "100%"}
                h={"100%"}
                style={{ objectPosition: "0% 0%", transition: "0.3s" }}
                alt="eventImage"
              />
            </Box>
            <Stack
              p={"12px 24px 32px 24px"}
              gap={8}
              align="flex-start"
              w={"100%"}
              style={{
                border: "2px solid #000",
              }}
            >
              <Text
                size={isMobile ? "0.85rem" : "1.25rem"}
                fw={500}
                className={cssStyles.EventCardText}
                lineClamp={1}
              >
                {event.name}
              </Text>
              <Text
                c="#676E76"
                size={isMobile ? "0.75rem" : "1.25rem"}
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
      px={isMobile ? "" : "5.5rem"}
      className={cssStyles.EventCardStack}
    >
      <Grid
        gutter={isMobile ? "1.875rem" : "1.75rem"}
        px={isMobile ? "1rem" : 0}
      >
        {events.map((event, index) => {
          return (
            <Grid.Col span={isMobile ? 12 : 4} key={index}>
              <CardComp makeMobile={isMobile} event={event} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
}
