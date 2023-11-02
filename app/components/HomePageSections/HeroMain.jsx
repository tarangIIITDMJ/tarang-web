"use client";
import { useEffect, useRef, useState } from "react";
import { Button, Text, Container, Box, Flex, Stack } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import tarangHeading from "@/public/tarangHeading.svg";
import iiitdmLogo from "@/public/iiitdmj-logo.png";
import cssstyles from "@/app/styles/home.module.css";
import Loading from "@/app/loading";

const HeroMain = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [videoLoaded, setvideoLoaded] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current.readyState == 4) {
      setvideoLoaded(true);
    }
  }, []);
  return (
    <Container h="100vh" m={0} bg="blue" miw="100%" style={styles.container}>
      <video
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
          src={isMobileView ? "/bg-video-mob.webm" : "/bg-video.webm"}
          type="video/webm"
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
          <Flex
            gap="1rem"
            justify="center"
            align="center"
            wrap="wrap"
            mb="2rem"
            className={cssstyles.HereMainTarangContainer}
          >
            <Stack align="center">
              <Image 
                src={iiitdmLogo} 
                alt="IIITDM Jabalpur" 
                height={isMobileView ? 48 : 72} 
                // style={{
                //   position:"absolute",
                //   top:isMobileView ? "48px" : "20px",
                //   left:isMobileView ? "68%" : "20px",
                // }}
              />
              <Text
                fz="1.9rem"
                c="#FFF"
                ta="center"
                className={cssstyles.HeroMainTarangSubText}
              >
                PDPM IIITDM Jabalpur Presents
              </Text>
            </Stack>
          </Flex>
          <Image
            src={tarangHeading}
            className={cssstyles.HeroMaintarangHeadingImg}
            alt="Tarang Heading"
            width={430}
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
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
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
              </motion.div>
            </Link>
            <Link href="/events">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
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
              </motion.div>
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
