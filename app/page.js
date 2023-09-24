import MainAppShell from "./components/MainAppShell";
import { Button, Container, Text } from "@mantine/core";
import Image from "next/image";
import TarangHeading from "../public/tarangHeading.svg";
import { IconArrowRight } from "@tabler/icons-react";

export default function Home() {
  return (
    <MainAppShell>
      <Container
        h="100vh"
        p={0}
        m={0}
        bg="blue"
        miw="100%"
        style={styles.container}
      >
        <video loop muted autoPlay style={styles.video}>
          <source
            src="https://res.cloudinary.com/prajjwalcdn/video/upload/v1695590772/video_seh4ks.mp4"
            type="video/mp4"
          />
        </video>
        <div style={styles.videoOverlay}>
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
            <Image src={TarangHeading} alt="Tarang Heading" />
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
        </div>
      </Container>
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
    // zIndex: -1,
  },
  videoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    pointerEvents: "none",
  },
};
