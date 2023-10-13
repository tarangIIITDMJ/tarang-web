"use client";

import {
  Image,
  Box,
  Text,
  Stack,
  Flex,
  BackgroundImage,
  Center,
} from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import DateRevealSection from "./DateRevealSection";
import SubMainSection from "./SubMainSection";
import { useMediaQuery } from "@mantine/hooks";

const HeroSection = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  const headingImageSrc = isMobileView
    ? "/heading-mobile.svg"
    : "/heading-desktop.svg";

  return (
    <BackgroundImage
      src={`https://res.cloudinary.com/dxcjzquen/image/upload/v1696865384/wubchn2ldtcr2iuaz9os.png`}
      miw="100%"
      bg={"#1E1E1E"}
    >
      <Box
        pt={isMobileView ? "7rem" : "6rem"}
        px={isMobileView ? "2rem" : "5rem"}
        pb={isMobileView ? "2rem" : "7rem"}
      >
        <Stack gap="2rem">
          <Text
            c="#FFF"
            fz={isMobileView ? "0.75rem" : "1.5rem"}
            fw={400}
            style={{ textTransform: "uppercase", fontStyle: "italic" }}
          >
            Unleash the magic of Tarang, Central India's premier
            {!isMobileView && <br />} cultural fest, with the all-inclusive
            Tarang Pass.
          </Text>
          <Image src={headingImageSrc} alt="" />
        </Stack>
        <Flex
          direction={isMobileView ? "column" : "row"}
          align={isMobileView ? "flex-start" : "center"}
          gap={isMobileView && "2rem"}
          justify="space-between"
          mt={isMobileView ? "2rem" : "5rem"}
        >
          <Text
            c="#FFF"
            fz={isMobileView ? "1rem" : "1.5rem"}
            fw={500}
            ta="justify"
            lh={isMobileView ? "1.2rem" : "1.8rem"}
            maw={isMobileView ? "100%" : "60%"}
          >
            For just ₹2000, enjoy three unforgettable days of non-stop
            entertainment, workshops, and pro nights. With seamless access to
            every event, the Tarang Pass makes your festival experience
            effortless and extraordinary.
          </Text>
          {!isMobileView && <DateRevealSection />}
          {isMobileView && (
            <Center
              w="8.5rem"
              h="8.5rem"
              style={{ border: "1px solid #FFF", borderRadius: "50%" }}
              cursor="pointer"
            >
              <IconArrowDown size={60} strokeWidth={1} color={"#FFF"} />;
            </Center>
          )}
        </Flex>
      </Box>
      <SubMainSection />
    </BackgroundImage>
  );
};

export default HeroSection;
