import { BackgroundImage, Text, Box, Container } from "@mantine/core";
import cssStyles from "@/app/styles/events.module.css";

export default function HeroSection({event}) {

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
          src={event.images[0]}
          miw={"100%"}
          h={"100%"}
          style={{
            hero: {
              objectFit: "cover",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          <Text
            fz={"8rem"}
            c="white"
            pos="absolute"
            fw={500}
            bottom={"2rem"}
            left={"5rem"}
            className={cssStyles.HeroSectionHeading}
          >
            {event.name}
          </Text>
        </BackgroundImage>
      </Container>
    </Box>
  );
}
