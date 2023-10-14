"use client";
import { Box, Stack, Container, Text } from "@mantine/core";
import cssStyles from "@/app/styles/about.module.css";
import { useMediaQuery } from "@mantine/hooks";

const PastTarangSection = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      py={"6rem"}
      bg={"#0F0F0F"}
      className={cssStyles.PastTarangSectionContainer}
    >
      <Container>
        <Stack
          style={{ gap: "3rem" }}
          className={cssStyles.PastTarangSectionSubContainer}
        >
          <Text
            fz={"4rem"}
            c={"#fff"}
            ta={"center"}
            className={cssStyles.PastTarangSectionTitle}
          >
            Student Spirit
          </Text>
          <Text
            fz={"1.125rem"}
            c={"#CED2D6"}
            ta={"center"}
            className={cssStyles.PastTarangSectionText}
          >
            Tarang represents the spirit of student culture at IIITDMJ. Every
            Tarang has been able to showcase the best of student cultural
            activity from various colleges across the nation, and there's no
            doubt Tarang '23 will continue a legacy of hard-work, talent and
            skill.
          </Text>
          <iframe
            width="100%"
            height={isMobileView ? "300" : "500"}
            src="https://www.youtube.com/embed/GIhUJZUovRo?si=bE3GCzdLQN0lfPxO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Stack>
      </Container>
    </Box>
  );
};

export default PastTarangSection;
