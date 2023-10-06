"use client";

import { Box, Flex, Image, Text, Badge, Button, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Breadcrumbs, Anchor } from "@mantine/core";

const items = (name) => {
  return [
    { title: "Home", href: "/" },
    { title: "Events", href: "/events" },
    { title: name, href: "#" },
  ];
};

const styles = {
  image: {
    minWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
  card: {
    borderRadius: "16px",
    border: "1.5px solid rgba(255, 255, 255, 0.76)",
    background:
      "linear-gradient(98deg, rgba(46, 39, 239, 0.35) -61.16%, rgba(46, 39, 239, 0.00) 178.71%)",
  },
};

const itemArray = (name) => {
  return items(name).map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      underline="false"
      fw="500"
      c={index == items.length - 1 ? "#fff" : "#676E76"}
    >
      {item.title}
    </Anchor>
  ));
};

export default function EventDetails({ event }) {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  const icon = (
    <Image
      src={"/check-badge.svg"}
      style={{ width: isMobileView ? "0.65rem" : "1.2rem", height: "100%" }}
      alt=""
    />
  );

  return (
    <Box>
      <Box
        py={isMobileView ? "1.5rem" : "4.5rem"}
        px={isMobileView ? "1.5rem" : "6.75rem"}
      >
        <Breadcrumbs separator=">">{itemArray(event.name)}</Breadcrumbs>
      </Box>
      <Box
        pl={isMobileView ? "0rem" : "6.75rem"}
        pr={isMobileView ? "1.5rem" : "6.75rem"}
      >
        <Flex
          w="100%"
          justify={isMobileView ? "center" : "space-between"}
          gap="1.5rem"
        >
          <Box>
            <Image
              src={`/jhankaar.webp`}
              style={styles.image}
              visibleFrom="sm"
              mb="2rem"
              w={isMobileView ? "100%" : "34.5rem"}
              alt=""
            />
          </Box>
          <Stack gap={"2rem"}>
            <Text fw="500" c="#fff" size={isMobileView ? "2rem" : "4rem"}>
              {event.name}
            </Text>
            <Text c="#fff" size={isMobileView ? "1.5rem" : "2rem"} fw="500">
              {event.tagline}
            </Text>
            <Image
              src={`/jhankaar.webp`}
              style={{ objectFit: "contain" }}
              hiddenFrom="sm"
              alt=""
            />
            <Text c="#9EA5AD" size={isMobileView ? "1rem" : "1.125rem"}>
              {event.description}
            </Text>
            <Stack justify="center" gap={isMobileView ? "0.5rem" : "1rem"}>
              {[
                { label: "Date", value: event.event_date },
                { label: "Time", value: event.event_time },
                { label: "Event Type", value: event.event_type },
                { label: "Event Category", value: event.event_category },
              ].map((item, index) => (
                <Text
                  key={index}
                  size={isMobileView ? "0.75rem" : "1.125rem"}
                  c="#F6F7F9"
                  fw="500"
                >
                  {item.label}: {item.value}
                </Text>
              ))}
            </Stack>
            <Stack
              p={isMobileView ? "1rem" : "2rem"}
              gap={isMobileView ? "1rem" : "2rem"}
              style={styles.card}
            >
              <Flex
                gap={isMobileView ? "0.5rem" : "1rem"}
                direction={isMobileView ? "column" : "row"}
              >
                <Text
                  c="#F6F7F9"
                  fw="600"
                  size={isMobileView ? "2rem" : "4rem"}
                >
                  ₹ {event.reg_fees}
                </Text>
                <Stack
                  justify="center"
                  gap={isMobileView ? "0.25rem" : "0.5rem"}
                >
                  <Text
                    c="#FAFAFA"
                    fw="500"
                    size={isMobileView ? "0.75rem" : "1.125rem"}
                  >
                    Registration Fee
                  </Text>
                  <Text
                    c="#9EA5AD"
                    fw="500"
                    size={isMobileView ? "0.75rem" : "1.125rem"}
                  >
                    Free Entry with purchase
                  </Text>
                </Stack>
              </Flex>
              <Flex align="center">
                {[
                  { label: `₹ ${event.prize_pool} Prize Pool` },
                  { label: event.event_type },
                  { label: event.event_category },
                ].map((item, index) => (
                  <Badge
                    key={index}
                    variant="transparent"
                    c="#F6F7F9"
                    pr={isMobileView ? "0.5rem" : "1rem"}
                    pl={0}
                    h="fit-content"
                    leftSection={icon}
                    size={isMobileView ? "0.5625rem" : "0.8725rem"}
                    fw="500"
                  >
                    <span>{item.label}</span>
                  </Badge>
                ))}
              </Flex>
            </Stack>
            <Button
              size={isMobileView ? "0.75rem" : "1.125rem"}
              h="auto"
              bg="white"
              c="black"
              w="100%"
              px={isMobileView ? "1.25rem" : "1.625rem"}
              py={isMobileView ? "0.75rem" : "1.125rem"}
              fw="600"
              disabled
            >
              Register Now
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
