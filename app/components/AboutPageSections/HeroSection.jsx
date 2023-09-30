import { BackgroundImage, Text, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function HeroSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Container
      h={isMobileView ? "50vh" : "45vh"}
      m={0}
      p={0}
      miw="100%"
      style={styles.container}
    >
      <BackgroundImage src={`/aboutbg.webp`} style={styles.image}>
        <Text
          size={isMobileView ? "3.5rem" : "8rem"}
          c="white"
          pos="absolute"
          fw={500}
          bottom={isMobileView ? "2rem" : "3rem"}
          left={isMobileView ? "2rem" : "5rem"}
        >
          About
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
    border: "2px solid black",
  },
};
