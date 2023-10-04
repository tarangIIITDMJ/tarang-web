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

export default function EventDetails(event) {
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
            h="auto"
            mr={isMobileView ? "1.5rem" : "0rem"}
            c="white"
          >
            <Text fw="500" size={isMobileView ? "2rem" : "5.5vw"} ta="start">
              Jhankaar
            </Text>
            <Text size={isMobileView ? "1.5rem" : "2.5vw"} my="2rem" fw="500" className={cssStyles.EventDetailsContainer}>
              Witness the power of unity in dance!
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
                {/* {event.description} */} Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore libero distinctio, ipsam necessitatibus voluptates. Culpa nisi autem reprehenderit vitae dolores aliquid! Recusandae fugiat sed temporibus doloribus quas? Quo, labore?
                At nostrum quas adipisci fuga, sequi, alias, iste pariatur esse libero eligendi quos nulla consequuntur? Adipisci quasi vel delectus laudantium neque inventore possimus amet nemo minima eum, voluptates maxime at?
                Labore, dolores tempora? Nihil suscipit laborum dolorum voluptates? Natus, saepe accusamus, odit dolor vero asperiores sint quod sit laboriosam nulla molestias, facere qui expedita reprehenderit enim atque ab eius tenetur?
                Saepe iusto laboriosam facere, esse inventore, explicabo culpa temporibus hic in dolor illo et eaque accusantium voluptatem officia reiciendis nulla, soluta ab qui! At reprehenderit suscipit vitae fuga libero natus.
              </Text>
            <Flex
              m={0}
              p={0}
              direction="column"
              justify="center"
              gap={isMobileView ? "0.5rem" : "1rem"}
              w={isMobileView ? "8.5rem" : "12.75rem"}
              c="#F6F7F9"
              my="2rem"
              className={cssStyles.EventDetailsContainer}
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
                  size={isMobileView ? "2rem" : "4.8vw"}
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
                  size={isMobileView ? "0.5625rem" : "1vw"}
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
                  size={isMobileView ? "0.5625rem" : "1vw"}
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
              className={cssStyles.EventDetailsContainer}
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
