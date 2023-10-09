"use client";

import { Box, Flex, Image, Text, Badge, Button, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Breadcrumbs, Anchor } from "@mantine/core";
import {useState} from 'react';
import Link from "next/link";


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
      "#D9F800",
      color:"black"
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
  const [hasTarangPass, setHasTarangPass] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const icon = (
    <Image
      src={"/check-badge.svg"}
      style={{ width: isMobileView ? "0.85rem" : "1.2rem", height:  isMobileView ? "0.85rem" : "1.2rem"}}
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
              src={event.images.mainDesktop}
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
              src={event.images.mainPhone}
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
            {hasTarangPass ? <>
        <Flex
        style={{borderRadius:"5px"}}
          bg={"#303030"}
          h="auto"
          w="100%"
          px={isMobileView ? "1.25rem" : "1.625rem"}
          py={isMobileView ? "0.5rem" : "1.125rem"}
        >
          <Image
          mt={isMobileView?"0.4rem":"0.3rem"}
          mr={"md"}
            src={"/alert-circle.svg"}
            style={{ width: isMobileView ? "1.5rem" : "1rem", height: isMobileView ? "1.5rem" : "1rem"}}
            alt=""
          />
          <Text color={"#FFFFFF"} lh={isMobileView ? "1.2rem" : "1.5rem"} size={isMobileView ? "0.85rem" : "1.125rem"} fw={"400"} >
            You already have the Tarang pass! Register for this event now!
          </Text>
        </Flex>
        </>
      : <>
            <Stack
              p={isMobileView ? "0.7rem" : "1.5rem"}
              gap={isMobileView ? "1rem" : "1rem"}
              style={styles.card}
            >
              <Flex
                gap={isMobileView ? "1rem" : "1rem"}
                justify={"space-between"}
                align={"center"}
              >
                <Text
                lh={isMobileView ? "1.5rem" : "2.5rem"}
                  fw={"500"}
                  size={isMobileView ? "1.2rem" : "2rem"}
                >
                  Experience it all with the Tarang Pass!
                </Text>
                <Link
                href="#"
                >
                    <Image
                        mt={isMobileView?"0.2rem":"0.2rem"}
                         mr={"0.85rem"}
                        src={"/LearnMore.svg"}
                        style={{ width: isMobileView ? "3rem" : "5rem", height: isMobileView ? "3rem" : "5rem"}}
                        alt=""
                    />
                </Link>
              </Flex>
              <Stack align="flex-start"  gap={"0.5rem"}>
                  <Badge
                    variant="transparent"
                    c={"black"}
                    pl={"0rem"}
                    h="fit-content"
                    leftSection={icon}
                    style={{ textTransform: "none" }} 
                  >
                      <Text lh={isMobileView ? "1rem" : "1.5rem"}  fw="600"  size={isMobileView ? "0.625rem" : "1rem"} ml={isMobileView ? "0rem" : "0.5rem"} >Get access to every event, workshop, and pro nights.</Text>
                  </Badge>
                  <Badge
                    variant="transparent"
                    c={"black"}
                    pl={"0rem"}
                    h="fit-content"
                    leftSection={icon}
                    style={{ textTransform: "none" }} 
                  > 
                      <Text lh={isMobileView ? "1rem" : "1.5rem"}  fw="500"  size={isMobileView ? "0.625rem" : "1rem"} ml={isMobileView ? "0rem" : "0.5rem"} >All this for just <b>₹2000!</b></Text>
                  </Badge>
              </Stack>
            </Stack>
      </>}
            <Button
              h="auto"
              bg="#999999"
              c="black"
              w="100%"
              py={isMobileView ? "0.75rem" : "1rem"}
              disabled
            >
              {
                isRegistered ?
                <>
                 <Text fw={"700"} size={isMobileView ? "0.85rem" : "1.25rem"} >Go to Dashboard </Text> 
                 <Image
                src={"/arrow-up-right.svg"}
                ml={"0.5rem"}
                style={{ width: isMobileView ? "1.35rem" : "2rem", height: isMobileView ? "1.35rem" : "2rem"}}
                alt=""
                  />
               </>
            : 
            <Text fw={"700"} size={isMobileView ? "0.85rem" : "1.35rem"}  lh={isMobileView?"1.5rem":"2.5rem"}>Register now</Text>
              }
            </Button>
            <Text mt={'-1.5rem'} size={isMobileView?"0.75rem":""} ta={"center"} c={"#BDBDBD"}>Save to your Dashboard, pay with Tarang Pass</Text>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
}
