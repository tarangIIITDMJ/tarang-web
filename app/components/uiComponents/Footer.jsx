"use client";
import { Divider, Group, Image, Stack, Text, Flex, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import Link from "next/link";

const styles = {
  text: {
    textDecoration: "underline",
    fontSize: "20px",
    color: "#fff",
    cursor: "pointer",
  },
};

function renderLink(href, text) {
  return (
    <Link href={href}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
}

export default function Footer() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Box>
      <Flex
        py={isMobileView ? "4.5rem" : "7rem"}
        px={"1rem"}
        gap={isMobileView ? 50 : 83}
        align={"center"}
        justify={"center"}
        wrap={"wrap"}
        bg={"#1E1E1E"}
      >
        <Image
          src={"/tarangHeading_2.svg"}
          alt=""
          w={isMobileView ? 175 : 375}
        />
        <Divider
          visibleFrom="lg"
          orientation="vertical"
          size={"sm"}
          p={0}
          color="white"
          h={350}
        />

        <Group justify="center" gap={isMobileView ? 63 : 73}>
          <Flex
            direction={isMobileView ? "row" : "column"}
            gap={"1.5rem"}
            w={isMobileView ? 350 : 100}
            justify={"center"}
          >
            <Stack gap={"1.5rem"}>
              {renderLink("/", "Home")}
              {renderLink("/about", "About")}
              {renderLink("/events", "Events")}
            </Stack>
            <Stack gap={"1.5rem"}>
              {renderLink("#", "Gallery")}
              {renderLink("#", "Contact us")}
              {renderLink("#", "FAQ")}
            </Stack>
          </Flex>
          <Divider
            hiddenFrom="sm"
            orientation="horizontal"
            size={"sm"}
            color="white"
            w={300}
          />
          <Stack
            w={350}
            justify="center"
            gap={"xl"}
            px={isMobileView ? "3rem" : "0"}
          >
            <Image src={"/map.webp"} alt="" radius={"md"} />
            <Text
              fz={isMobileView ? 12 : 18}
              ta={isMobileView ? "center" : "left"}
              c="#fff"
            >
              52GG+H4G, Airport Rd, PDPM IIITDM Jabalpur Campus, Khamaria,
              Jabalpur, Madhya Pradesh 482005
            </Text>
            {isMobileView && (
              <Group justify="center" gap={20}>
                <IconBrandFacebook size={28} />
                <IconBrandYoutubeFilled size={28} />
                <IconBrandInstagram size={28} />
              </Group>
            )}
            {isMobileView && (
              <Text c={"#979797"} fz={isMobileView ? 16 : 20} ta={"center"}>
                Tarang’23 © 2023
              </Text>
            )}
          </Stack>
        </Group>
      </Flex>
    </Box>
  );
}
