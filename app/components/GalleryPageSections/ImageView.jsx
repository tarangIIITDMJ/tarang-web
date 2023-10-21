"use client";
import {
  ActionIcon,
  Box,
  Center,
  Group,
  Image,
  Loader,
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
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_0.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_1.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_2.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_3.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_4.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873844/gallery_5.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_6.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_7.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_8.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873845/gallery_9.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_10.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_11.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_12.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_13.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873844/gallery_14.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_15.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873844/gallery_16.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_17.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_18.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_19.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_20.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_21.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_22.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_23.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_24.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_25.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_26.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_27.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_28.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873844/gallery_29.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_30.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_31.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_32.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_33.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873844/gallery_34.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873844/gallery_35.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_36.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_37.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_38.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_39.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_40.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_41.webp'
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_42.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_43.webp',
    rotate: true,
    style: { rotate: '-90deg' }
  },
  {
    src: 'https://res.cloudinary.com/dpkqrvt72/image/upload/v1697873843/gallery_44.webp'
  }
];

const ImageGridCol = ({ activePage, row, setCurrentIndex, setOpen }) => {
  const imagesPerRow = Math.ceil(images.length / 12);
  const start = row * imagesPerRow + (activePage - 1) * 12;
  const end = Math.min(start + imagesPerRow, images.length);

  return (
    <div>
      <Stack>
        {images.slice(start, end).map((image, index) => (
          <Box
            key={index}
            style={{
              rotate: image.rotate ? "-90deg" : "",
              marginTop: image.rotate ? "50%" : "",
            }}
          >
            <Image
              src={image.src}
              alt=""
              h={"100%"}
              w={image.rotate ? "150%" : "100%"}
              onClick={() => {
                setOpen(true);
                setCurrentIndex(index + start);
              }}
            />
          </Box>
        ))}
      </Stack>
    </div>
  );
};

const ImagesGrid = ({ activePage, setCurrentIndex, setOpen }) => {
  return (
    <Center>
      <SimpleGrid className={cssStyles.sg} w={"70%"} cols={3} gap={0}>
        {[0, 1, 2].map((row) => (
          <ImageGridCol
            activePage={activePage}
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

  const [loading, setLoading] = useState(false);

  const switchPage = (page) => {
    setLoading(true);
    setPage(page);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

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
        A Glimpse into our WILD past!
      </Text>
      {loading ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <ImagesGrid
          activePage={activePage}
          setCurrentIndex={setCurrentIndex}
          setOpen={setOpen}
        />
      )}

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
          onChange={switchPage}
          total={Math.ceil(images.length / 12)}
          radius={"xl"}
          color={"black"}
        />
      </Center>
    </Box>
  );
}
