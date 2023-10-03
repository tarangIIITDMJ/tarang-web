"use client";
import { Text, Stack, Grid, Card, Flex, Box, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/events.module.css";

const eventCardData = [
  {
    name: "Clash of Melodies",
    description: "A mesmerizing showcase of vocal talent like no other!",
    img: "/EventCard.webp",
  },
  {
    name: "Clash of Melodies",
    description: "A mesmerizing showcase of vocal talent like no other!",
    img: "/EventCard.webp",
  },
  {
    name: "Clash of Melodies",
    description: "A mesmerizing showcase of vocal talent like no other!",
    img: "/EventCard.webp",
  },
  {
    name: "Clash of Melodies",
    description: "A mesmerizing showcase of vocal talent like no other!",
    img: "/EventCard.webp",
  },
  {
    name: "Clash of Melodies",
    description: "A mesmerizing showcase of vocal talent like no other!",
    img: "/EventCard.webp",
  },
];

export default function EventCards() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  function CardComp({ Imgprop, makeMobile = false, name, description }) {
    return (
      <Card radius={0} p={0}>
        <Flex p={0} direction={makeMobile ? "row" : "column"}>
          <Box>
            <Image
              w={makeMobile ? 120 : "100%"}
              h={"100%"}
              style={{ objectPosition: "0% 0%", transition: "0.3s" }}
              alt="eventImage"
              {...Imgprop}
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
            <Text fw={500} className={cssStyles.EventCardText}>
              {name}
            </Text>
            <Text
              c="#676E76"
              size={isMobile ? "0.75rem" : "1.25rem"}
              style={{ wordBreak: "break-word" }}
            >
              {description}
            </Text>
          </Stack>
        </Flex>
      </Card>
    );
  }

  return (
    <Stack
      bg={"#0F0F0F"}
      align="flex-start"
      className={cssStyles.EventCardStack}
    >
      <Grid
        gutter={isMobile ? "1.875rem" : "1.75rem"}
        px={isMobile ? "1rem" : 0}
      >
        {eventCardData.map((event, index) => {
          return (
            <Grid.Col span={isMobile ? 12 : 4} key={index}>
              <CardComp
                Imgprop={{ src: event.img }}
                makeMobile={isMobile}
                name={event.name}
                description={event.description}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
}
