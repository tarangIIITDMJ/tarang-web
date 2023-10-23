"use client";
import {
  Button,
  Center,
  Container,
  Group,
  ScrollArea,
  Text,
  Box,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import cssStyles from "@/app/styles/home.module.css";
import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    minSrc: "https://res.cloudinary.com/dss8aihs0/image/upload/c_scale,w_15/f_auto/v1697478126/homepage_event/webp/compressed/IMG_6758_ohpxfw_11zon_zvfrtl.webp",
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697478126/homepage_event/webp/compressed/IMG_6758_ohpxfw_11zon_zvfrtl.webp"
  },
  {
    minSrc: "https://res.cloudinary.com/dss8aihs0/image/upload/c_scale,w_15/f_auto/v1697478125/homepage_event/webp/compressed/IMG_7043_zmw9bi_11zon_zcy715.webp",
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697478125/homepage_event/webp/compressed/IMG_7043_zmw9bi_11zon_zcy715.webp",
  },
  {
    minSrc: "https://res.cloudinary.com/dss8aihs0/image/upload/c_scale,w_15/f_auto/v1697478125/homepage_event/webp/compressed/DSC_8155__1_krkdzd_11zon_d4962v.webp",
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697478125/homepage_event/webp/compressed/DSC_8155__1_krkdzd_11zon_d4962v.webp",
  },
  {
    minSrc: "https://res.cloudinary.com/dss8aihs0/image/upload/c_scale,w_15/f_auto/v1697478125/homepage_event/webp/compressed/IMG_7023_udkhy3_11zon_lfbsqh.webp",
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697478125/homepage_event/webp/compressed/IMG_7023_udkhy3_11zon_lfbsqh.webp",
  },
  {
    minSrc: "https://res.cloudinary.com/dss8aihs0/image/upload/c_scale,w_15/f_auto/v1697478125/homepage_event/webp/compressed/IMG_7540_1_xxtt4o_mzhgym.webp",
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697478125/homepage_event/webp/compressed/IMG_7540_1_xxtt4o_mzhgym.webp"
  }
];

const ImageAccordion = () => {
  const initialWidth = "13.75rem";
  const hoverWidth = "20.75rem";
  const initialHeight = "28.125rem";
  const hoverHeight = "30rem";
  const [loaded, setLoaded] = useState([]);

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
          <div
            className={loaded.includes(index) ? cssStyles.loaded : cssStyles.blur}
            style={{
              backgroundImage: `url(${Img.minSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
              position: "relative",
              filter: "grayscale(100%)"
            }}
          >

            <Image
              alt="Images"
              width={0}
              height={0}
              loading="lazy"
              src={Img.src}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(100%)",
                transition: "filter 0.6s",
                opacity: "0",
                transition: "opacity 400ms ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.target.style.filter = "grayscale(0%)";
              }}
              onMouseLeave={(e) => {
                e.target.style.filter = "grayscale(100%)";
              }}
              onLoadingComplete={() => {
                setLoaded((prevIndex) => [...prevIndex, index])
                console.log(loaded)
              }
              }
            />
          </div>
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
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
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
          </motion.div>
        </Link>
      </Center>
    </Container>
  );
}

export default GalleryView;
