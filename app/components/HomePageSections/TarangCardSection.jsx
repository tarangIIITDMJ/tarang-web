"use client";

import { Flex, Stack, Image, Text, Button } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { useAuthStore } from "@/app/store/authStore";
import Link from "next/link";

export default function TarangCardSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const { user, isAuth } = useAuthStore();

  return (
    <Flex
      style={{
        backgroundImage: `url(${
          isMobileView
            ? "/tarangCardPageImages/tarang-card-bg-mob.jpg"
            : "/tarangCardPageImages/tarang-card-bg-web.jpg"
        })`,
      }}
      direction={isMobileView ? "column" : "row"}
      justify="space-between"
      h="100vh"
      px={isMobileView ? "0rem" : "5rem"}
      py={isMobileView ? "4rem" : "0rem"}
      gap={isMobileView ? "4rem" : "2rem"}
    >
      <Stack
        justify="center"
        align={isMobileView ? "center" : "flex-start"}
        gap={isMobileView ? "1rem" : "3rem"}
        px={isMobileView && "2rem"}
      >
        <Text
          c="#FFF"
          maw={isMobileView ? "100%" : "75%"}
          ta={isMobileView && "center"}
          fz={isMobileView ? "2rem" : "4rem"}
          lh={isMobileView ? "2.4rem" : "4.2rem"}
        >
          Unlock the Ultimate Tarang Experience!
        </Text>
        <Text
          c="#FFF"
          fz={isMobileView ? "0.75rem" : "1.25rem"}
          ta={isMobileView ? "center" : "justify"}
          lh={"1.5rem"}
        >
          Get Your Tarang Card Today and Dive into a World of Creativity and
          Fun.
        </Text>
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
              mt={!isMobileView && "1.5rem"}
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
              mt={!isMobileView && "1.5rem"}
              lh={1.2}
            >
              Get Your Tarang Card
            </Button>
          </Link>
        )}
      </Stack>
      {isMobileView ? (
        <Image
          src="/homePageImages/tarangCardsMobile.png"
          alt=""
          style={{ cursor: "pointer" }}
        />
      ) : (
        <Image
          src="/homePageImages/tarangCards.png"
          alt=""
          w="40%"
          h="100vh"
          maw="40%"
          style={{ cursor: "pointer" }}
        />
      )}
    </Flex>
  );
}
