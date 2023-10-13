"use client";
import { BackgroundImage, Text, Box, Container } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/events.module.css";

export default function HeroSection({ event }) {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box>
      <Container
        h={"60vh"}
        m={0}
        p={0}
        miw="100%"
        pos={"relative"}
        className={cssStyles.HeroSectionContainer}
      >
        <BackgroundImage
          src={
            isMobileView ? event.images.headerPhone : event.images.headerDesktop
          }
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
            lineClamp={1}
            className={cssStyles.HeroSectionHeading}
          >
            {event.name}
          </Text>
        </BackgroundImage>
      </Container>
    </Box>
  );
}
