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
import Link from "next/link";
import cssStyles from "@/app/styles/home.module.css";

const galleryImages = [
  "https://res.cloudinary.com/dss8aihs0/image/upload/v1697367216/homepage_event/webp/IMG_6758_ohpxfw.webp",
  "https://res.cloudinary.com/dss8aihs0/image/upload/v1697367216/homepage_event/webp/IMG_7043_zmw9bi.webp",
  "https://res.cloudinary.com/dss8aihs0/image/upload/v1697367214/homepage_event/webp/IMG_7023_udkhy3.webp",
  "https://res.cloudinary.com/dss8aihs0/image/upload/v1697367216/homepage_event/webp/DSC_8155__1_krkdzd.webp",
  "https://res.cloudinary.com/dss8aihs0/image/upload/v1697319621/homepage_event/png%20and%20jpg/IMG_7540_1_xxtt4o.png",
  // "https://res.cloudinary.com/dss8aihs0/image/upload/v1697319617/homepage_event/png%20and%20jpg/IMG_6905_1_yeothv.png",
];

const ImageAccordion = () => {
  const initialWidth = "13.75rem";
  const hoverWidth = "20.75rem";
  const initialHeight = "28.125rem";
  const hoverHeight = "30rem";

  return (
    <Group
      mt="4"
      gap={"0"}
      wrap={"no"}
      className={cssStyles.GalleryViewGroup}
      w={"100%"}
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
  return (
    <Container
      maw="100%"
      bg="#FFF4E2"
      style={{
        border: "3px solid black",
        borderBottomWidth: "1.5px",
      }}
    >
      <Box className={cssStyles.GalleryViewBox} p={"4rem"}>
        <Group justify="center" align="center">
          <Text
            ta="center"
            fz={"3rem"}
            style={{
              borderRadius: "4rem",
            }}
            className={cssStyles.GalleryViewHeading}
          >
            A peek into our pompous past
          </Text>
        </Group>
      </Box>
      <ScrollArea className={cssStyles.GalleryScrollAr}>
        <ImageAccordion />
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
          >
            View more
          </Button>
        </Link>
      </Center>
    </Container>
  );
}

export default GalleryView;
