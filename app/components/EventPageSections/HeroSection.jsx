"use client";
import { BackgroundImage, Text, Box, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function HeroSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Container
      h={isMobileView ? "50vh" : "60vh"}
      m={0}
      p={0}
      miw="100%"
      style={styles.container}
    >
      <BackgroundImage
        src="/assets/EventPageHeroImage2.webp"
        style={styles.image}
      >
        <Text
          size={isMobileView ? "3.5rem" : "8rem"}
          c="white"
          pos="absolute"
          fw={500}
          bottom={isMobileView ? "2rem" : "3rem"}
          left={isMobileView ? "2rem" : "5rem"}
        >
          Events
        </Text>
      </BackgroundImage>
    </Container>
  );
}

const styles = {
  container: {
    position: "relative",
  },
  image: {
    minWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
