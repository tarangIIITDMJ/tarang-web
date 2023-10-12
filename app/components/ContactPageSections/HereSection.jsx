import { BackgroundImage, Text, Box, Container } from "@mantine/core";
import cssStyles from "@/app/styles/contact.module.css";

export default function HeroSection() {
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
        <BackgroundImage src={"/bgImage.jpg"} miw={"100%"} h={"100%"}>
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
            Contact Us
          </Text>
        </BackgroundImage>
      </Container>
    </Box>
  );
}
