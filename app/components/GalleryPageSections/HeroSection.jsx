import { BackgroundImage, Box, Divider, Group, Text } from "@mantine/core";
import React from "react";
import cssStyles from "@/app/styles/gallery.module.css";

export default function HeroSection() {
  return (
    <>
      <Box bg={"#1A1919"}>
        <BackgroundImage
          className={cssStyles.BgImage}
          src={"/GalleryGridBG.png"}
        >
          <Group align="stretch">
            <Text
              py={"1.5rem"}
              px={"5.75rem"}
              fz={"8rem"}
              fw={500}
              c={"var(--grey-200, #E5E7EA)"}
              className={cssStyles.HeroSectionHeading}
            >
              Gallery
            </Text>
          </Group>
        </BackgroundImage>
        <Divider color="#676E76" size="sm" />
      </Box>
    </>
  );
}
