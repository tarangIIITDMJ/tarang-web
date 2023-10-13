"use client";

import { useState, useEffect } from "react";
import { Box, Flex, Group, Stack, Text, Image, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function SubMainSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((current) => current + 1);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      bg="#D0EB4C"
      px={isMobileView ? "2rem" : "6.25rem"}
      py={isMobileView ? "4rem" : "6rem"}
      style={{ border: "3px solid black" }}
    >
      <Flex
        direction={isMobileView ? "column" : "row"}
        align="center"
        gap={"3rem"}
      >
        <Box pos="relative">
          <Image
            src={"homePageImages/tarangCircle.svg"}
            alt=""
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.3s ease",
            }}
            w={isMobileView ? "20.5rem" : "32rem"}
            h={isMobileView ? "20.5rem" : "32rem"}
          />
          <Image
            pos="absolute"
            top={isMobileView ? 5 : 8}
            left={isMobileView ? 4 : 60}
            w={isMobileView ? "19.8rem" : "24.6rem"}
            h={isMobileView ? "auto" : "30.5rem"}
            src={"homePageImages/tide.svg"}
            alt=""
          />
        </Box>
        <Box>
          <Stack
            align="flex-start"
            justify="center"
            gap={isMobileView ? "1.5rem" : "2rem"}
          >
            <Text size={isMobileView ? "2rem" : "4rem"} c="#000">
              A Display of Dedication
            </Text>
            <Text
              size={isMobileView ? "0.75rem" : "1.25rem"}
              ta={isMobileView ? "left" : "justify"}
              c="#1A1D1F"
              maw={isMobileView ? "100%" : "90%"}
              lh={isMobileView ? "1rem" : "1.5rem"}
            >
              Tarang is where students can let loose and exhibit their real
              passions—whether it&apos;s dance, music, drama, literature,
              photography or anything, really. It&apos;s like a convergence of
              cultures and talents, an ocean where the rivers of everyone&apos;s
              unique skills combine and blossom.
            </Text>
            <Group>
              {[
                { number: "100+", text: "Over 100+ participating colleges" },
                { number: "30+", text: "30+ events" },
              ].map(({ number, text }) => (
                <Stack key={number}>
                  <Text
                    c="#000"
                    fz={isMobileView ? "1.5rem" : "3rem"}
                    lh={isMobileView ? "1rem" : "2rem"}
                  >
                    {number}
                  </Text>
                  <Text
                    c="#1A1D1F"
                    fz={isMobileView ? "0.75rem" : "1.25rem"}
                    lh={isMobileView ? "1rem" : null}
                  >
                    {text}
                  </Text>
                </Stack>
              ))}
            </Group>
            <Link href="/about">
              <Button
                size={isMobileView ? "sm" : "lg"}
                rightSection={<IconArrowRight />}
                px={isMobileView ? "1.25rem" : "1.125rem"}
                py={isMobileView ? "0.75rem" : "1.125rem"}
                color="#000"
                h="auto"
                radius={0}
              >
                Read More
              </Button>
            </Link>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
