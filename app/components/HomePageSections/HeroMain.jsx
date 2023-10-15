"use client";
import { Button, Text, Container, Box, Flex } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import tarangHeading from "@/public/tarangHeading.svg";
import cssstyles from "@/app/styles/home.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Loading from "@/app/loading";

const HeroMain = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [videoLoaded, setvideoLoaded] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("canplay", () => {
        videoElement.play().catch((error) => {
          console.error("Video playback error:", error);
        });
        setvideoLoaded(true);
      });
    }
  }, []);
  return (
    <Container h="100vh" m={0} bg="blue" miw="100%" style={styles.container}>
      <video
        preload="none"
        ref={videoRef}
        onCanPlay={() => {
          setvideoLoaded(true);
        }}
        playsInline
        loading="eager"
        loop
        muted
        autoPlay
        style={styles.video}
      >
        <source
          src={
            isMobileView
              ? "https://tarangfrontdoor-hhgtfrc4efa3g3b9.z01.azurefd.net/video/video-mob.mp4"
              : "https://tarangfrontdoor-hhgtfrc4efa3g3b9.z01.azurefd.net/video/video-desktop.mp4"
          }
          type="video/mp4"
        />
      </video>
      {!videoLoaded && <Loading />}

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
            <Link href="/signup">
              <Button
                bg="#D0EB4C"
                c="black"
                radius={0}
                size={"lg"}
                mt={44}
                // disabled // TODO: Remove this when registration opens
                className={cssstyles.HeroMainExploreButton}
                rightSection={<IconArrowRight />}
              >
                Register Now
              </Button>
            </Link>
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
