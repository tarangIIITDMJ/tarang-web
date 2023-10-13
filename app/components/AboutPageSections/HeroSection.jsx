import { BackgroundImage, Text, Container } from "@mantine/core";
import cssStyles from "@/app/styles/about.module.css";

export default function HeroSection() {
  return (
    <Container
      h={"60vh"}
      m={0}
      p={0}
      miw="100%"
      pos={"relative"}
      className={cssStyles.HeroSectionContainer}
    >
      <BackgroundImage
        src={"/bgImage.jpg"}
        miw={"100%"}
        h={"100%"}
        style={{
          hero: {
            objectFit: "cover",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            position: "relative",
          },
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderBottom: "3px solid #000000",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%)",
          }}
        />
        <Text
          fz={"8rem"}
          c="white"
          pos="absolute"
          fw={500}
          bottom={"2rem"}
          left={"5rem"}
          className={cssStyles.HeroSectionHeading}
        >
          About
        </Text>
      </BackgroundImage>
    </Container>
  );
}
