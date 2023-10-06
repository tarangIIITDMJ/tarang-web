"use client";

import { Box, Flex, Image, Text, Badge, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/events.module.css";
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
        px={isMobileView ? "1.5rem" : "4rem"}
        className={cssStyles.EventDetails}
      >
        <Breadcrumbs separator=">">{itemArray}</Breadcrumbs>
      </Box>
      <Box
        pt={isMobileView ? "2.5rem" : "4.5rem"}
        px={isMobileView ? "1.5rem" : "4rem"}
        className={cssStyles.EventDetails}
      >
        <Flex m={0} p={0} w="100%" justify="center" gap="1.5rem">
          <Box
            m={0}
            p={0}
            w="100%"
            display={isMobileView ? "none" : ""}
          >
            <Image
              src={`/jhankaar.webp`}
              w="100%"
              miw="26rem"
              style={styles.image}
              display={isMobileView ? "none" : ""}
              mb="2rem"
              alt=""
              className={cssStyles.EventDetailsImage}
            />
          </Box>
          <Box
            ta="left"
            m={0}
            p={0}
            w={isMobileView ? "100%" : "auto"}
            mr={isMobileView ? "1.5rem" : "0rem"}
            c="white"
          >

            <Text fw="500" size={isMobileView ? "2rem" : "5.5vw"} ta="start">
               {event.name}
            </Text>
            <Text size={isMobileView ? "1.5rem" : "2.5vw"} my="2rem" fw="500" className={cssStyles.EventDetailsContainer}>
            {event.tagline}

            </Text>
            <Image
              src={`/jhankaar.webp`}
              style={{ objectFit: "contain" }}

              w="100%"
              pb="1rem"
              display={!isMobileView ? "none" : ""}
              alt=""
            />
            <Text size={isMobileView ? "0.75rem" : "1.125rem"} c="#9EA5AD" fw="500" className={cssStyles.EventDetailsDescription}>
            <p>{event.description}</p>
              </Text>

            <Flex
              m={0}
              p={0}
              direction="column"
              justify="center"
              gap={isMobileView ? "0.5rem" : "1rem"}
              c="#F6F7F9"
              my="2rem"
              className={cssStyles.EventDetailsContainer}
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
                  size={isMobileView ? "2rem" : "4.8vw"}
                >
                  ₹ {event.reg_fees}
                </Text>
                <Flex
                  direction="column"
                  justify="center"
                  gap={isMobileView ? "0.25rem" : "0.5rem"}
                >
                  <Text
                    c="#FAFAFA"
                    fw="500"
                    size={isMobileView ? "0.75rem" : "1.24vw"}
                  >
                    Registration Fee
                  </Text>
                  <Text
                    c="#9EA5AD"
                    fw="500"
                    size={isMobileView ? "0.75rem" : "1.24vw"}
                  >
                    Free Entry with purchase
                  </Text>
                </Flex>
              </Flex>
              <Flex align="center" >
                <Badge
                  variant="transparent"
                  c="#F6F7F9"
                  pr={isMobileView ? "0.5rem" : "1rem"}
                  pl={0}
                  m={0}
                  w="auto"
                  size={isMobileView ? "0.5625rem" : "1vw"}
                  fw="500"
                  leftSection={icon}
                  radius="0"
                >
                  <span>{event.prize_pool}/- Prize Pool</span>
                </Badge>
                <Badge
                  variant="transparent"
                  c="#F6F7F9"
                  pr={isMobileView ? "0.5rem" : "1rem"}
                  pl={0}
                  m={0}
                  w="auto"
                  leftSection={icon}
                  size={isMobileView ? "0.5625rem" : "1vw"}
                  fw="500"
                  radius="0"
                >
                  <span>{event.event_type}</span>
                </Badge>
                <Badge
                  variant="transparent"
                  c="#F6F7F9"
                  pr={isMobileView ? "0.5rem" : "1rem"}
                  pl={0}
                  m={0}
                  w="auto"
                  leftSection={icon}
                  size={isMobileView ? "0.5625rem" : "1vw"}
                  fw="500"
                  radius="0"
                >
                  <span>{event.event_category}</span>
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
              className={cssStyles.EventDetailsContainer}
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

