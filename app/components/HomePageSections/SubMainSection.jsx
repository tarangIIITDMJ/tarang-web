"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Flex, Group, Stack, Text, Button, Image } from "@mantine/core";
import Link from "next/link";
import {
  IconPlayerPlay,
  IconPlayerPause,
  IconArrowRight,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

export default function SubMainSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [rotationPaused, setRotationPaused] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((current) => current + 1);
    }, 40);

    const video = videoRef.current;
    if (video) {
      video.play();
      setIsVideoPlaying(true);
    }

    return () => clearInterval(interval);
  }, []);

  const handlePlayPauseToggle = () => {
    const video = videoRef.current;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setRotationPaused(rotation);
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <Box
      bg="#FFC900"
      px={isMobileView ? "1rem" : "6.25rem"}
      py={isMobileView ? "4rem" : "6rem"}
      style={{ border: "3px solid black" }}
    >
      <Flex
        direction={isMobileView ? "column" : "row"}
        align="center"
        gap={"3rem"}
      >
        <Text hiddenFrom="sm" size={"2.5rem"} ta={"center"} c="#252525">
          The Tide is turning!
        </Text>
        <Box
          style={styles.container}
          w={isMobileView ? "20.5rem" : "32rem"}
          h={isMobileView ? "20.5rem" : "32rem"}
        >
          <video loop muted style={styles.video} ref={videoRef}>
            <source
              src="https://res.cloudinary.com/dxcjzquen/video/upload/v1696364452/mobile_bg_video_uqucru.mp4"
              type="video/mp4"
            />
          </video>
          <Image
            src={"/Group.webp"}
            alt=""
            pos="absolute"
            style={{
              transform: isVideoPlaying
                ? `rotate(${rotation}deg)`
                : `rotate(${rotationPaused}deg)`,
              transition: "transform 0.3s ease",
            }}
          />
          <Group
            align="center"
            justify="center"
            w={isMobileView ? "3.125rem" : "5.75rem"}
            h={isMobileView ? "3.125rem" : "5.75rem"}
            style={styles.playBtn}
            onClick={handlePlayPauseToggle}
          >
            {isVideoPlaying ? (
              <IconPlayerPause size={isMobileView ? 20 : 40} fill="#000" />
            ) : (
              <IconPlayerPlay size={isMobileView ? 20 : 40} fill="#000" />
            )}
          </Group>
        </Box>
        <Box>
          <Stack align="flex-start" justify="center" gap={"2.25rem"}>
            <Text visibleFrom="sm" size={"4rem"} c="#252525">
              The Tide is turning!
            </Text>
            <Text
              size={isMobileView ? "1.125rem" : "1.25rem"}
              ta={isMobileView ? "left" : "justify"}
              c="#252525"
            >
              Experience the cultural renaissance at Tarang: Central India's
              grandest fest. Dive into a world of creativity, talent, and epic
              performances!
            </Text>
            <Button
              color="black"
              size={isMobileView ? "md" : "lg"}
              mt={isMobileView ? "1rem" : "1.5rem"}
              rightSection={<IconArrowRight />}
              style={isMobileView ? { display: "block", margin: "0 auto" } : {}}
            >
              <Link href={"/about"}>Read More</Link>
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}

const styles = {
  container: {
    position: "relative",
    flexShrink: 0,
    borderRadius: "50%",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  playBtn: {
    position: "absolute",
    top: "85%",
    left: "85%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0.75rem",
    border: "2px solid #000",
    background: "#F7AD1A",
    cursor: "pointer",
  },
};
