"use client";
import {
    BackgroundImage,
    Text,
    Box,
    Container,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function HeroSection(){
    const isMobileView = useMediaQuery("(max-width: 768px)");
    return(
        <Box>
                <Container
                h={isMobileView ? "50vh" : "60vh"}
                m={0}
                p={0}
                miw="100%"
                style={styles.container}
                >
                <BackgroundImage src={`/EventDetailsHeroSection.png`} style={styles.hero}>
                    <Text
                    size={isMobileView ? "3.5rem" : "8rem"}
                    c="white"
                    pos="absolute"
                    fw={500}
                    bottom={isMobileView ? "1.25rem" : "3.5rem"}
                    left={isMobileView ? "2.5rem" : "6.75rem"}
                    >
                    Jhankaar
                    </Text>
                </BackgroundImage>
                </Container>
            </Box>
    )
}

const styles = {
    container: {
      position: "relative",
    },
    hero: {
        minWidth: "100%",
        height: "100%",
        objectFit: "cover",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
};