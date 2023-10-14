"use client";

import { Box, Group, Stack, Text, Image } from "@mantine/core";
import { useState } from "react";
import homeStyles from "@/app/styles/home.module.css";

const images = [
  "dateSectionImages/sticker_1.svg",
  "dateSectionImages/sticker_2.svg",
  "dateSectionImages/sticker_3.svg",
];
const hoverImages = [
  "dateSectionImages/sticker_4.svg",
  "dateSectionImages/sticker_5.svg",
  "dateSectionImages/sticker_6.svg",
];

export default function DateRevealSection() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  const handleImageLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <Stack
      className={homeStyles.DateRevealParentStack}
      bg={"#FFF4E2"}
      py={"7.5rem"}
      gap={"4rem"}
      align="center"
    >
      <Text
        className={homeStyles.DateRevealText}
        c={"var(--grey-900, #24292E)"}
        size={"3rem"}
        fw={500}
        ta={"center"}
      >
        Discover the days
      </Text>
      <Group className={homeStyles.DateRevealGroup} pos="relative" px={"0rem"}>
        {images.map((src, index) => (
          <Box
            key={index}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={handleImageLeave}
            style={{
              position: "relative",
              marginLeft: index > 0 ? "-60px" : "0",
              zIndex: index + 1,
            }}
          >
            <Image
              src={hoveredIndex === index ? hoverImages[index] : src}
              alt=""
              className={homeStyles.DateRevealImage}
              width={250}
              height={250}
              style={{
                transform:
                  hoveredIndex === index
                    ? "rotateY(180deg) scaleX(-1)"
                    : "rotateY(0deg)",
                transformStyle: "preserve-3d",
                transition: "transform 0.6s ease",
              }}
            />
          </Box>
        ))}
      </Group>
    </Stack>
  );
}
