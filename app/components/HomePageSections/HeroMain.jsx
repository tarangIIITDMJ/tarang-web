"use client";
import { Button, Text, Container, Image, Box } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const HeroMain = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Container h="100vh" m={0} bg="blue" miw="100%" style={styles.container}>
      <video loop muted autoPlay style={styles.video}>
        <source
          src={
            isMobileView
              ? "https://res.cloudinary.com/prajjwalcdn/video/upload/v1696021679/mobile_bg_video_bt9ial.mp4"
              : "https://res.cloudinary.com/prajjwalcdn/video/upload/v1696021675/dektop_bg_video_jjfbtl.mp4"
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
            src={"/tarangHeading.svg"}
            alt="Tarang Heading"
            w={isMobileView ? 250 : 375}
          />
          <Text
            size={isMobileView ? "20px" : "28px"}
            c="white"
            mt={22}
            ta={"center"}
            px={60}
          >
            Glimmer in the wake of escapism
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
