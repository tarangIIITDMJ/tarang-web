"use client";

import { Box, Group, Image } from "@mantine/core";
import { useState } from "react";

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
    <Group pos="relative">
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
            width={180}
            height={180}
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
  );
}
