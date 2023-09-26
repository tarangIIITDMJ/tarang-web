"use client";
import { Button, Text, Container } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import TarangHeading from "../../public/TarangHeading.svg";
import { useMediaQuery } from "@mantine/hooks";

const HeroMain = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Container
      h="100%"
      p={0}
      m={0}
      miw="100%"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "auto",
      }}
    >
      <Image
        src={TarangHeading}
        alt="Tarang Heading"
        priority={true}
        width={isMobileView && 300}
      />
      <Text
        size={isMobileView ? "20px" : "28px"}
        c="white"
        mt={22}
        ta={"center"}
        px={60}
      >
        One line about Tarang 2023 cultural fest
      </Text>

      <Button
        color="black"
        size={isMobileView ? "md" : "lg"}
        mt={isMobileView ? 20 : 44}
        rightSection={<IconArrowRight />}
      >
        Explore Now
      </Button>
    </Container>
  );
};

export default HeroMain;
