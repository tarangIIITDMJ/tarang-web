"use client";

import {
  Image,
  Box,
  Text,
  Stack,
  Flex,
  BackgroundImage,
  Center,
  Button,
} from "@mantine/core";
import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";
import DateRevealSection from "./DateRevealSection";
import SubMainSection from "./SubMainSection";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";
import { useAuthStore } from "@/app/store/authStore";

const HeroSection = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const { user, isAuth } = useAuthStore();

  const headingImageSrc = isMobileView
    ? "/tarangCardPageImages/heading-mobile.svg"
    : "/tarangCardPageImages/heading-desktop.svg";

  return (
    <BackgroundImage
      src={
        isMobileView
          ? "/tarangCardPageImages/tarang-card-bg-mob.jpg"
          : "/tarangCardPageImages/tarang-card-bg-web.jpg"
      }
      miw="100%"
    >
      <Box
        pt={isMobileView ? "7rem" : "6rem"}
        px={isMobileView ? "2rem" : "5rem"}
        pb={isMobileView ? "2rem" : "7rem"}
      >
        <Stack gap="2rem">
          <Text
            c="#FFF"
            fz={isMobileView ? "0.75rem" : "1.5rem"}
            fw={400}
            style={{ textTransform: "uppercase", fontStyle: "italic" }}
          >
            Unleash the magic of Tarang, Central India's premier
            {!isMobileView && <br />} cultural fest, with the all-inclusive
            Tarang Card.
          </Text>
          <Image src={headingImageSrc} alt="" />
        </Stack>
        <Flex
          direction={isMobileView ? "column" : "row"}
          align={isMobileView ? "flex-start" : "center"}
          gap={isMobileView && "2rem"}
          justify="space-between"
          mt={isMobileView ? "2rem" : "5rem"}
        >
          <Text
            c="#FFF"
            fz={isMobileView ? "1rem" : "1.5rem"}
            fw={400}
            ta="left"
            lh={isMobileView ? "1.2rem" : "1.8rem"}
            maw={isMobileView ? "100%" : "50%"}
          >
            For just ₹1999, enjoy three unforgettable days of non-stop
            entertainment, workshops, and pro nights. With seamless access to
            every event, the Tarang Card makes your festival experience
            effortless and extraordinary.
          </Text>
          {!isMobileView && <DateRevealSection />}
        </Flex>
        {isAuth ? (
          <Link
            target="_blank"
            href={`https://docs.google.com/forms/d/e/1FAIpQLSd7Bs0uQayl1GSOaB_dwZFYtpRBAO67iehIgOC88eOD-lhOFA/viewform?usp=pp_url&entry.275844225=${
              user.fname + " " + user.lname
            }&entry.1392576540=${user.tarang_id}&entry.272288439=${
              user.email
            }&entry.610706180=${user.phone}`}
          >
            <Button
              size={isMobileView ? "sm" : "lg"}
              bg="#FFF"
              c="#000"
              rightSection={<IconArrowUpRight />}
              h="auto"
              px={isMobileView ? "1.25rem" : "1.625rem"}
              py={isMobileView ? "0.75rem" : "1.125rem"}
              radius={0}
              mt={isMobileView ? "1.5rem" : "2rem"}
              lh={1.2}
            >
              Get Your Tarang Card
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button
              size={isMobileView ? "sm" : "lg"}
              bg="#FFF"
              c="#000"
              rightSection={<IconArrowUpRight />}
              h="auto"
              px={isMobileView ? "1.25rem" : "1.625rem"}
              py={isMobileView ? "0.75rem" : "1.125rem"}
              radius={0}
              mt={isMobileView ? "1.5rem" : "2rem"}
              lh={1.2}
            >
              Get Your Tarang Card
            </Button>
          </Link>
        )}
        {isMobileView && (
          <Center
            w="8.5rem"
            h="8.5rem"
            style={{ border: "1px solid #FFF", borderRadius: "50%" }}
            cursor="pointer"
            mt="4rem"
          >
            <IconArrowDown size={60} strokeWidth={1} color={"#FFF"} />;
          </Center>
        )}
      </Box>
      <SubMainSection />
    </BackgroundImage>
  );
};

export default HeroSection;
