"use client";

import { Box, Flex, Image, Text, Badge, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Breadcrumbs, Anchor } from "@mantine/core";

const items = [
  { title: "Home", href: "/" },
  { title: "Events", href: "/events" },
  { title: "Jhankaar", href: "#" },
];

const itemArray = items.map((item, index) => (
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
        pt={isMobileView ? "1.5rem" : "4.5rem"}
        px={isMobileView ? "1.5rem" : "6.75rem"}
      >
        <Breadcrumbs separator=">">{itemArray}</Breadcrumbs>
      </Box>
      <Box
        pt={isMobileView ? "2.5rem" : "4.5rem"}
        px={isMobileView ? "1.5rem" : "6.75rem"}
      >
        <Flex m={0} p={0} w="100%" justify="center" gap="1.5rem">
          <Box
            m={0}
            p={0}
            w="100%"
            h={isMobileView ? "328px" : "801px"}
            display={isMobileView ? "none" : ""}
          >
            <Image
              src={`/jhankaar.webp`}
              w="100%"
              style={styles.image}
              mb="2rem"
              alt=""
            />
          </Box>
          <Box
            ta="left"
            m={0}
            p={0}
            w={isMobileView ? "100%" : "auto"}
            h="auto"
            mr={isMobileView ? "1.5rem" : "0rem"}
            c="white"
          >
            <Text fw="500" size={isMobileView ? "2rem" : "4rem"} lineClamp={1}>
              {event.name}
            </Text>
            <Text size={isMobileView ? "1.5rem" : "2rem"} my="2rem" fw="500">
              {event.tagline}
            </Text>
            <Image
              src={`/jhankaar.webp`}
              style={{ objectFit: "contain" }}
              w="100%"
              display={!isMobileView ? "none" : ""}
              alt=""
            />
            <Flex
              m={0}
              p={0}
              direction="column"
              justify="space-between"
              gap={isMobileView ? "sm" : "xl"}
              h="auto"
              c="#9EA5AD"
            >
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                This group dance competition that pits diverse dance groups
                against each other in a battle of rhythm and creativity.
              </Text>
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                Dance enthusiasts from various backgrounds and styles, including
                Bollywood, hip hop, jazz, and more, come together to showcase
                their talent and passion on one vibrant stage.
              </Text>
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                It's a celebration of movement, music, and the infectious energy
                that dance brings, promising an unforgettable experience for
                both participants and spectators.
              </Text>
            </Flex>
            <Flex
              m={0}
              p={0}
              direction="column"
              justify="center"
              gap={isMobileView ? "0.5rem" : "1rem"}
              c="#F6F7F9"
              my="2rem"
            >
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                Date: {event.event_date}
              </Text>
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                Time: {event.event_time}
              </Text>
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                Event Type: {event.event_type}
              </Text>
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                Event Category: {event.event_category}
              </Text>
            </Flex>
            <Flex
              direction="column"
              h="auto"
              p={isMobileView ? "1rem" : "2rem"}
              gap={isMobileView ? "1rem" : "2rem"}
              w="auto"
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
                <Flex
                  direction="column"
                  justify="center"
                  w="auto"
                  gap={isMobileView ? "0.25rem" : "0.5rem"}
                  m={0}
                  p={0}
                >
                  <Text
                    c="#FAFAFA"
                    fw="500"
                    size={isMobileView ? "0.75rem" : "1.125rem"}
                  >
                    Registration Fee (Per Head)
                  </Text>
                  <Text
                    c="#9EA5AD"
                    fw="500"
                    size={isMobileView ? "0.75rem" : "1.125rem"}
                  >
                    Free Entry with purchase
                  </Text>
                </Flex>
              </Flex>
              <Flex align="center">
                <Badge
                  variant="transparent"
                  c="#F6F7F9"
                  pr={isMobileView ? "0.5rem" : "1rem"}
                  pl={0}
                  m={0}
                  w="auto"
                  size={isMobileView ? "0.5625rem" : "0.8725rem"}
                  fw="500"
                  leftSection={icon}
                  radius="0"
                >
                  <span>₹ 40,000 Prize pool</span>
                </Badge>
                <Badge
                  variant="transparent"
                  c="#F6F7F9"
                  pr={isMobileView ? "0.5rem" : "1rem"}
                  pl={0}
                  m={0}
                  w="auto"
                  leftSection={icon}
                  size={isMobileView ? "0.5625rem" : "0.8725rem"}
                  fw="500"
                  radius="0"
                >
                  <span>word</span>
                </Badge>
                <Badge
                  variant="transparent"
                  c="#F6F7F9"
                  pr={isMobileView ? "0.5rem" : "1rem"}
                  pl={0}
                  m={0}
                  w="auto"
                  leftSection={icon}
                  size={isMobileView ? "0.5625rem" : "0.8725rem"}
                  fw="500"
                  radius="0"
                >
                  <span>Features</span>
                </Badge>
              </Flex>
            </Flex>
            <Button
              size={isMobileView ? "0.75rem" : "1.125rem"}
              h="auto"
              bg="white"
              c="black"
              radius={0}
              w="100%"
              px={isMobileView ? "1.25rem" : "1.625rem"}
              py={isMobileView ? "0.75rem" : "1.125rem"}
              mt="2rem"
              mb={isMobileView ? "2rem" : "0rem"}
              fw="600"
              disabled
            >
              Register Now
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

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
