"use client"

import { Box, Stack, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

export default function About() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box >
      <Image
        src="/aboutbg.jpg"
        alt="About"
        style={styles.image}
        width={isMobileView ? "100%" : "auto"}
        height="auto"
      />
      <Box style={styles.imageOverlay}>
        <Stack gap={isMobileView ? "1rem" : "3.5rem"} justify="flex-end" h={isMobileView ? "40vh" : "50vh"} align="center">
          <Text size={isMobileView ? "4rem" : "6rem"} c="white" w="80vw" fw={550} p={"1rem"}>
            About
          </Text>
        </Stack>
        <Stack gap={isMobileView ? "1rem" : "2rem"} justify="center" align="center" h={isMobileView ? "60vh" : "50vh"} bg="#FFF4E2" py={"lg"}>
          <Text size={isMobileView ? "3rem" : "4rem"} w="80vw">
            Vibe with Tarang
          </Text>
          <Text c="#555555" size="1.5rem" w="80vw">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl.
          </Text>
          <Text c="#555555" size="1.5rem" w="80vw">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl nisl eget nisl.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

const styles = {
  image: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "50%",
    objectFit: "cover",
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    pointerEvents: "none",
  },
};