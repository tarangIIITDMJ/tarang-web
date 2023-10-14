"use client";
import {
  ActionIcon,
  Box,
  Center,
  Group,
  Image,
  Pagination,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import Lightbox from "react-spring-lightbox";
import cssStyles from "@/app/styles/gallery.module.css";

const images = [
  {
    src: "/galleryViewImages/galleryView7.webp",
  },
  {
    src: "/galleryViewImages/galleryView6.webp",
  },
  {
    src: "/galleryViewImages/galleryView5.webp",
  },
  {
    src: "/galleryViewImages/galleryView4.webp",
  },
  {
    src: "/galleryViewImages/galleryView2.webp",
  },
  {
    src: "/galleryViewImages/galleryView3.webp",
  },
  {
    src: "/galleryViewImages/galleryView1.webp",
  },
  {
    src: "/galleryViewImages/galleryView6.webp",
  },
  {
    src: "/galleryViewImages/galleryView7.webp",
  },
];

const ImageGridCol = ({ row, setCurrentIndex, setOpen }) => {
  const imagesPerRow = Math.ceil(images.length / 3);
  const start = row * imagesPerRow;
  const end = Math.min(start + imagesPerRow, images.length);

  return (
    <div>
      <Stack>
        {images.slice(start, end).map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt=""
            onClick={() => {
              setOpen(true);
              setCurrentIndex(index + start);
            }}
          />
        ))}
      </Stack>
    </div>
  );
};

const ImagesGrid = ({ setCurrentIndex, setOpen }) => {
  return (
    <Center>
      <SimpleGrid className={cssStyles.sg} w={"70%"} cols={3} gap={0}>
        {[0, 1, 2].map((row) => (
          <ImageGridCol
            key={row}
            images={images}
            row={row}
            setCurrentIndex={setCurrentIndex}
            setOpen={setOpen}
          />
        ))}
      </SimpleGrid>
    </Center>
  );
};
export default function ImageView() {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [activePage, setPage] = useState(1);
  const [isOpen, setOpen] = useState(false);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);
  return (
    <Box bg={"#1A1919"}>
      <Text
        className={cssStyles.HeadingLine}
        c={"white"}
        fz={"2rem"}
        p={"5rem"}
        align="center"
      >
        A line related to gallery or something related to the event? maybe?
      </Text>
      <ImagesGrid setCurrentIndex={setCurrentIndex} setOpen={setOpen} />
      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        /* Add your own UI */
        renderHeader={() => (
          <Group justify="end" p={"xs"}>
            <ActionIcon radius={0} color="#FFC900" c={"black"}>
              <IconX onClick={() => setOpen(false)} />
            </ActionIcon>
          </Group>
        )}
        renderFooter={() => (
          <>
            <Group mb={"5%"} justify="center" gap="20%">
              <ActionIcon
                radius={0}
                color="#FFC900"
                c={"black"}
                onClick={() => gotoPrevious()}
              >
                <IconArrowLeft />
              </ActionIcon>
              <ActionIcon
                radius={0}
                color="#FFC900"
                c={"black"}
                onClick={() => gotoNext()}
              >
                <IconArrowRight />
              </ActionIcon>
            </Group>
          </>
        )}
        // renderPrevButton={() => (
        //   <Button  color="black" onClick={() => gotoNext()}>
        //     <IconArrowLeft/>
        //   </Button>
        // )}
        // renderNextButton={() => (
        //   <ActionIcon color="black" onClick={() => gotoNext()}>
        //     <IconArrowRight />
        //   </ActionIcon>
        // )}
        // renderImageOverlay={() => (<ImageOverlayComponent >)}

        /* Add styling */
        // className="cool-class"
        style={{ background: "#000000b3", transition: "0s" }}
        /* Handle closing */
        onClose={() => setOpen(false)}
        /* Use single or double click to zoom */
        singleClickToZoom
        /* react-spring config for open/close animation */
        pageTransitionConfig={{
          from: { transform: "scale(0.75)", opacity: 0 },
          enter: { transform: "scale(1)", opacity: 1 },
          leave: { transform: "scale(0.75)", opacity: 0 },
          config: { mass: 1, tension: 320, friction: 32 },
        }}
      />
      <Center py={"8rem"}>
        <Pagination
          value={activePage}
          onChange={setPage}
          total={10}
          radius={"xl"}
          color={"black"}
        />
      </Center>
    </Box>
  );
}
