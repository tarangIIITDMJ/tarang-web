"use client";
import {
  Button,
  Center,
  Container,
  Group,
  Image,
  ScrollArea,
  Text,
} from "@mantine/core";
import React from "react";
import FlowerElement from "../uiComponents/FlowerElement";
import { IconArrowRight, IconSignRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const galleryImages = [
  "GalleryImage1.jpeg",
  "GalleryImage2.jpeg",
  "GalleryImage3.jpeg",
  "GalleryImage4.jpeg",
  "GalleryImage5.jpeg",
];

const ImageAccordion = ({ isMobileView }) => {
  const initialWidth = "13.75rem";
  const hoverWidth = "20.75rem";
  return (
    <Group
      mt="4"
      gap={"0"}
      wrap={"no"}
      w={isMobileView ? "fit-content" : "100%"}
      justify="center"
    >
      {galleryImages.map((Img, index) => (
        <div
          key={index}
          style={{
            width: initialWidth,
            height: "28.125rem",
            overflow: "hidden",
            transition: "width 0.5s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.width = hoverWidth;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.width = initialWidth;
          }}
        >
          <Image
            alt="Images"
            w={"100%"}
            h={"100%"}
            src={`/assets/${Img}`}
            style={{
              objectFit: "cover",
              filter: "grayscale(100%)",
              transition: "filter 0.6s",
            }}
            onMouseEnter={(e) => {
              e.target.style.filter = "grayscale(0%)";
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "grayscale(100%)";
            }}
          />
        </div>
      ))}
    </Group>
  );
};

function GalleryView() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Container pr={0} h="100vh" maw="100%">
      <Group gap={isMobileView?"2rem":"3rem"} p={isMobileView?"3rem":"4rem"} justify="center">
        <FlowerElement size={isMobileView && 30} />
        <Text fz={isMobileView ? "2rem" : "4rem"}>Gallery</Text>
        <FlowerElement size={isMobileView && 30} />
      </Group>
      <ScrollArea>
        <ImageAccordion isMobileView={isMobileView} />
      </ScrollArea>
      <Center p={"4rem"}>
        <Button
          rightSection={<IconArrowRight />}
          size="lg"
          style={{ border: "2px solid black" }}
          bg="white"
          c={"black"}
          radius={0}
        >
          View more
        </Button>
      </Center>
    </Container>
  );
}

export default GalleryView;
