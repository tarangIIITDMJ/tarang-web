"use client";

import { Box, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";

const images = ["/sticker_1.png", "/sticker_2.png", "/sticker_3.png"];
const hoverImages = ["/sticker_4.png", "/sticker_5.png", "/sticker_6.png"];

export default function DateRevealSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  const handleImageLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <Box bg={"#FFF4E2"} py={"7.5rem"}>
      <Stack gap={isMobileView ? "2rem" : "4rem"} align="center">
        <Text
          c={"var(--grey-900, #24292E)"}
          size={isMobileView ? "1.5rem" : "3rem"}
          fw={500}
          ta={"center"}
        >
          3rd, 4th and 5th November
        </Text>
        <Group pos="relative" px={isMobileView ? "1rem" : "0rem"}>
          {images.map((src, index) => (
            <div
              key={index}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
              style={{
                position: "relative",
                marginLeft: index > 0 ? "-60px" : "0",
                zIndex: index + 1,
                transform:
                  hoveredIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s ease",
              }}
            >
              <Image
                src={hoveredIndex === index ? hoverImages[index] : src}
                alt=""
                width={isMobileView ? 125 : 200}
                height={isMobileView ? 125 : 200}
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          ))}
        </Group>
      </Stack>
    </Box>
  );
}
