"use client";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Badge,
  Button,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Breadcrumbs, Anchor } from "@mantine/core";

const items = [
  { title: "Home", href: "#" },
  { title: "Events", href: "#" },
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

export default function EventDetails() {
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
        mt={isMobileView ? "1.5rem" : "4.5rem"}
        mx={isMobileView ? "1rem" : "6.75rem"}
      >
        <Breadcrumbs separator=">">{itemArray}</Breadcrumbs>
      </Box>
      <Box
        mt={isMobileView ? "2.5rem" : "4.5rem"}
        mx={isMobileView ? "1rem" : "6.75rem"}
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
              src={`/Jhankaar.jpeg`}
              w="100%"
              style={styles.image}
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
            <Text fw="500" size={isMobileView ? "2rem" : "2.875rem"}>
              Jhankaar
            </Text>
            <Text size="1.5rem" my="2rem" fw="500">
              Witness the power of unity in dance!
            </Text>
            <Image
              src={`/Jhankaar.jpeg`}
              style={{ objectFit: "contain" }}
              w="100%"
              display={!isMobileView ? "none" : ""}
              mb="2rem"
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
              w={isMobileView ? "8.5rem" : "12.75rem"}
              h={isMobileView ? "4rem" : "6.5rem"}
              c="#F6F7F9"
              my="2rem"
            >
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                Date: 03 November 2023
              </Text>
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                Time: 11 AM
              </Text>
              <Text size={isMobileView ? "0.75rem" : "1.125rem"} fw="500">
                Venue: L105
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
                  ₹ 200
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
                    Registration Fee
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
              <Flex h={isMobileView ? "0.75rem" : "1.5rem"} align="center">
                <Badge
                  variant="transparent"
                  c="#F6F7F9"
                  pr={isMobileView ? "1rem" : "2rem"}
                  pl={0}
                  m={0}
                  w="auto"
                  size={isMobileView ? "0.5625rem" : "0.8725rem"}
                  fw="500"
                  leftSection={icon}
                  radius="0"
                >
                  <span
                    style={{ marginLeft: isMobileView ? "0.5rem" : "1rem" }}
                  >
                    ₹ 40,000 Prize pool
                  </span>
                </Badge>
                <Badge
                  variant="transparent"
                  c="#F6F7F9"
                  pr={isMobileView ? "1rem" : "2rem"}
                  pl={0}
                  m={0}
                  w="auto"
                  leftSection={icon}
                  size={isMobileView ? "0.5625rem" : "0.8725rem"}
                  fw="500"
                  radius="0"
                >
                  <span
                    style={{ marginLeft: isMobileView ? "0.5rem" : "1rem" }}
                  >
                    word
                  </span>
                </Badge>
                <Badge
                  variant="transparent"
                  c="#F6F7F9"
                  pr={isMobileView ? "1rem" : "2rem"}
                  pl={0}
                  m={0}
                  w="auto"
                  leftSection={icon}
                  size={isMobileView ? "0.5625rem" : "0.8725rem"}
                  fw="500"
                  radius="0"
                >
                  <span
                    style={{ marginLeft: isMobileView ? "0.5rem" : "1rem" }}
                  >
                    Features
                  </span>
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
