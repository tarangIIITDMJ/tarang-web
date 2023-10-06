"use client";
import { Button, Text, Container, Box, Flex } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import tarangHeading from "@/public/tarangHeading.svg";
import cssstyles from "@/app/styles/home.module.css";
import Link from "next/link";

const HeroMain = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Container h="100vh" m={0} bg="blue" miw="100%" style={styles.container}>
      <video loop muted autoPlay style={styles.video}>
        <source
          src={
            isMobileView
              ? "https://res.cloudinary.com/dxcjzquen/video/upload/v1696364452/mobile_bg_video_uqucru.mp4"
              : "https://res.cloudinary.com/dxcjzquen/video/upload/v1696364225/desktop_bg_video_asad_hmhmzn.mp4"
          }
          type="video/mp4"
        />
      </video>
      <Box style={styles.videoOverlay}>
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
            src={tarangHeading}
            className={cssstyles.HeroMaintarangHeadingImg}
            alt="Tarang Heading"
            width={375}
          />
          <Text
            size="28px"
            className={cssstyles.HeroMainTarangHeadingText}
            c="white"
            mt={22}
            ta={"center"}
            px={60}
          >
            The Tide is turning
          </Text>
          <Flex columnGap={"xl"} className={cssstyles.HeroMainButtonFlex}>
            <Button
              bg="#FFC900"
              c="black"
              radius={0}
              size={"lg"}
              mt={44}
              disabled // TODO: Remove this when registration opens
              className={cssstyles.HeroMainExploreButton}
              rightSection={<IconArrowRight />}
            >
              Register Now
            </Button>
            <Link href="/events">
              <Button
                color="transparent"
                size={"lg"}
                radius={0}
                mt={44}
                className={cssstyles.HeroMainExploreButton}
                style={{ border: "2px solid white" }}
                rightSection={<IconArrowRight />}
              >
                Explore Events
              </Button>
            </Link>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    position: "relative",
    overflow: "hidden", // Ensure video doesn't overflow the container
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    pointerEvents: "none",
  },
};

export default HeroMain;
