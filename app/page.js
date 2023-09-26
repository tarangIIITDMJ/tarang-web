import MainAppShell from "./components/MainAppShell";
import { Box, Button, Container, Flex, Stack, Text } from "@mantine/core";
import Image from "next/image";
import TarangHeading from "../public/tarangHeading.svg";
import { IconArrowRight } from "@tabler/icons-react";
import EventSection from "./components/HomePageSections/EventSection";

export default function Home() {
  return (
    <MainAppShell>
      <Container h="100vh" m={0} bg="blue" miw="100%" style={styles.container}>
        <video loop muted autoPlay style={styles.video}>
          <source
            src="https://res.cloudinary.com/prajjwalcdn/video/upload/v1695590772/video_seh4ks.mp4"
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
            <Image src={TarangHeading} alt="Tarang Heading" priority={true} />
            <Text size="28px" c="white" mt={22}>
              Glimmer in the wake of escapism
            </Text>

            <Button
              color="black"
              size="lg"
              mt={44}
              rightSection={<IconArrowRight />}
            >
              Explore Now
            </Button>
          </Container>
        </Box>
      </Container>
      <Box style={styles.sponsorUs}>
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="2rem"
          wrap="wrap"
        >
          <Text size="3rem" c="#F2F2F2">
            Our sponsors
          </Text>
          <Flex align="flex-start" gap="1.5rem">
            {Array(6)
              .fill()
              .map((_, index) => (
                <Box key={index} w="10.5rem" h="6.5rem" bg="#3D3D3D"></Box>
              ))}
          </Flex>
        </Flex>
      </Box>
      <EventSection />
    </MainAppShell>
  );
}

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
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    pointerEvents: "none",
    padding: "0 6rem 0 6rem",
  },
  sponsorUs: {
    backgroundColor: "#150D0C",
    padding: "6rem",
  },
};
