"use client";
import {
  Button,
  Center,
  Container,
  Group,
  Image,
  ScrollArea,
  Text,
  Box,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

const galleryImages = [
  "https://res.cloudinary.com/dxcjzquen/image/upload/v1696365168/GalleryImage1_1_txilwo.webp",
  "https://res.cloudinary.com/dxcjzquen/image/upload/v1696365167/GalleryImage2_1_a8p9vh.webp",
  "https://res.cloudinary.com/dxcjzquen/image/upload/v1696365167/GalleryImage3_1_qtzjjh.webp",
  "https://res.cloudinary.com/dxcjzquen/image/upload/v1696365167/GalleryImage5_1_kilgqt.webp",
  "https://res.cloudinary.com/dxcjzquen/image/upload/v1696365167/GalleryImage4_1_lqmh4m.webp",
];

const ImageAccordion = ({ isMobileView }) => {
  const initialWidth = "13.75rem";
  const hoverWidth = "20.75rem";
  const initialHeight = "28.125rem";
  const hoverHeight = "30rem";

  return (
    <Group
      mt="4"
      gap={"0"}
      wrap={"no"}
      w={isMobileView ? "fit-content" : "100%"}
      justify="center"
      h={480}
    >
      {galleryImages.map((Img, index) => (
        <Box
          key={index}
          style={{
            width: initialWidth,
            height: initialHeight,
            overflow: "hidden",
            transition: "width 0.5s, height 0.5s",
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.width = hoverWidth;
            e.currentTarget.style.height = hoverHeight;
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.width = hoverWidth;
            e.currentTarget.style.height = hoverHeight;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.width = initialWidth;
            e.currentTarget.style.height = initialHeight;
          }}
        >
          <Image
            alt="Images"
            w={"100%"}
            h={"100%"}
            src={Img}
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
        </Box>
      ))}
    </Group>
  );
};

function GalleryView() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Container
      maw="100%"
      bg="#FFF4E2"
      style={{
        border: "3px solid black",
        borderBottomWidth: "1.5px",
      }}
    >
      <Box p={isMobileView ? "3rem" : "4rem"}>
        <Group justify="center" align="center">
          <Text
            ta="center"
            fz={isMobileView ? "2rem" : "3rem"}
            style={{
              borderRadius: "4rem",
            }}
          >
            A peek into our pompous past
          </Text>
        </Group>
      </Box>
      <ScrollArea mr={isMobileView ? "-20px" : ""}>
        <ImageAccordion isMobileView={isMobileView} />
      </ScrollArea>
      <Center p={"4rem"}>
        <Link href="/gallery">
          <Button
            rightSection={<IconArrowRight />}
            size="lg"
            style={{ border: "2px solid black" }}
            bg="white"
            c={"black"}
            radius={0}
            disabled
          >
            View more
          </Button>
        </Link>
      </Center>
    </Container>
  );
}

export default GalleryView;
