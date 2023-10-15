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
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315512/Gallery/IMG_6242_r9smxw.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315512/Gallery/IMG_5098_ui8w5c.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315512/Gallery/IMG_5465_as61fv.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315512/Gallery/IMG_4169_g996ls.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315511/Gallery/IMG_3590_eqfckl.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315489/Gallery/IMG_7195_ktvxw4.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },

  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315509/Gallery/IMG_2948_copy_1_irva2t.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315509/Gallery/IMG_3457_kdcibe.webp",
  },

  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315508/Gallery/IMG_1718_copy_hujshz.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315508/Gallery/IMG_1390_pq2ddr.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315507/Gallery/IMG_1267_npcfkh.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315505/Gallery/IMG_8690_p2ino5.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315504/Gallery/IMG_7023_iqlvbd.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315510/Gallery/IMG_3789_eed6vf.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315505/Gallery/IMG_8387_uef9mk.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315506/Gallery/_MG_8631_hfruqn.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315507/Gallery/IMG_1277_szhlvd.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315504/Gallery/IMG_7043_mdb1zq.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315495/Gallery/DSC_8155_1_mvaxgh.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315503/Gallery/IMG_6958_zsexsz.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315504/Gallery/IMG_6920_q9xwdy.webp",
  },

  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315503/Gallery/IMG_6975_kht6zt.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315494/Gallery/_MG_0280_ykl4z7.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315502/Gallery/IMG_1929_h5fmsc.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315502/Gallery/IMG_6085_gmlfch.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315501/Gallery/IMG_6758_zbuol4.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315501/Gallery/IMG_6723_ekhpha.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315500/Gallery/IMG_6002_mu4ged.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315500/Gallery/IMG_6327_c6nb4s.webp",
  },

  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315498/Gallery/IMG_5769_rsxl0l.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315497/Gallery/IMG_5677_lmy88y.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315487/Gallery/IMG_7029_eyhefv.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315495/Gallery/IMG_6828_ss2oc3.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315494/Gallery/IMG_0311_dcsspd.webp",
  },

  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315491/Gallery/IMG_7540_b297sq.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315491/Gallery/IMG_7486_ypfp7y.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315488/Gallery/IMG_5460_rjf3xr.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315493/Gallery/IMG_6469_firqql.webp",
  },

  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315509/Gallery/IMG_7047_ea1ouv.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315491/Gallery/IMG_7361_n7agx7.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315494/Gallery/_MG_4652-01_u63mdj.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315491/Gallery/_MG_0056_flmie3.webp",
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315489/Gallery/IMG_7110_i24re5.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315488/Gallery/IMG_5808_opfmtw.webp",
    rotate: true,
    style: { rotate: "-90deg" },
  },
  {
    src: "https://res.cloudinary.com/dss8aihs0/image/upload/v1697315498/Gallery/IMG_6675_knefwz.webp",
  },
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
      <ImagesGrid
        activePage={activePage}
        setCurrentIndex={setCurrentIndex}
        setOpen={setOpen}
      />
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
          total={Math.ceil(images.length / 12)}
          radius={"xl"}
          color={"black"}
        />
      </Center>
    </Box>
  );
}
