"use client";
import { Divider, Group, Image, Stack, Text, Flex, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
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

        <Group justify="center" gap={63}>
          <Flex
            direction={isMobileView ? "row" : "column"}
            gap={"1.5rem"}
            w={isMobileView ? 380 : 110}
            justify={"center"}
          >
            <Stack gap={"1.5rem"}>
              {renderLink("/", "Home")}
              {renderLink("/about", "About")}
              {renderLink("/events", "Events")}
            </Stack>
            <Stack gap={"1.5rem"}>
              {renderLink("#", "Gallery")}
              {renderLink("/contact-us", "Contact us")}
              {renderLink("/faqs", "FAQ")}
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3174.631325012539!2d80.02390068793628!3d23.17681212828739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a94397365dd3%3A0x5f9aeb812c2678c9!2sIIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1696615484249!5m2!1sen!2sin"
              // width="350"
              // height="132"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
                <IconBrandFacebook size={28} color="#fff" />
                <IconBrandYoutube size={28} color="#fff" />
                <IconBrandInstagram size={28} color="#fff" />
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
