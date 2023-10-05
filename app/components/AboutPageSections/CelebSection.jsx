"use client";

import { Stack, Text, Image, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const CelebSection = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      p={0}
      direction={isMobileView ? "column" : "row"}
      justify="space-between"
    >
      <Stack
        gap={isMobileView ? "2rem" : "3rem"}
        bg={"#FFF4E2"}
        py={isMobileView ? "2rem" : "4rem"}
        px={isMobileView ? "0.5rem" : "2rem"}
      >
        <Text c={"#000"} fz={isMobileView ? "2rem" : "3rem"}>
          Star-Studded Spectacle
        </Text>
        <Text c={"#000"} fz={isMobileView ? "0.75rem" : "1.125rem"}>
          Of course, there have also been great stars that have graced the fest,
          proving to be a beacon of inspiration. Aakash Mehta, renowned comedian
          had the entire campus roaring with laughter. We would tell you his
          jokes, but you just HAD to be there!
        </Text>
        <Text c={"#000"} fz={isMobileView ? "0.75rem" : "1.125rem"}>
          Obviously no fest is complete without a DJ Night and boy was the last
          DJ night WILD! After tremendous success at sunburn, Julia Bliss
          herself was the DJ of the night in question, making the campus jive
          and groove to her sick EDM vibes. Her beats are playing in our heads
          to this day!
        </Text>
      </Stack>
      <Image src={"/aboutSectionImg(2).jpg"} alt="" />
    </Flex>
  );
};

export default CelebSection;
