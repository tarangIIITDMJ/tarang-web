"use client";
import { Box, Flex, Group, Stack, Text, Image, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import homeStyles from "@/app/styles/home.module.css";

export default function SubMainSection() {
  return (
    <Flex
      bg="#D0EB4C"
      className={homeStyles.SubMainParentFlex}
      px={"6.25rem"}
      py={"6rem"}
      style={{ border: "3px solid black" }}
      direction={"row"}
      align="center"
      gap={"3rem"}
    >
      <Box pos="relative">
        <Image
          src={"homePageImages/TARANG 23 IIITDMJ_circle.svg"}
          alt=""
          className={homeStyles.SubMainImage}
          w={"32rem"}
          h={"32rem"}
        />
        <Image
          pos="absolute"
          top={8}
          left={60}
          w={"24.6rem"}
          h={"30.5rem"}
          src={"homePageImages/tide.svg"}
          alt=""
          className={homeStyles.SubMainInsideImage}
        />
      </Box>
      <Stack
        align="flex-start"
        justify="center"
        gap={"2rem"}
        className={homeStyles.SubMainTextStack}
      >
        <Text className={homeStyles.SubMainText} size={"4rem"} c="#000">
          The tide is turning!
        </Text>
        <Text
          size={"1.25rem"}
          ta={"justify"}
          c="#1A1D1F"
          maw={"90%"}
          lh={"1.5rem"}
          className={homeStyles.SubMainParaText}
        >
          Tarang is where students can let loose and exhibit their real
          passions—whether it&apos;s dance, music, drama, literature,
          photography or anything, really. It&apos;s like a convergence of
          cultures and talents, an ocean where the rivers of everyone&apos;s
          unique skills combine and blossom.
        </Text>
        <Group gap="2rem">
          {[
            { number: "100+", text: "Participating colleges" },
            { number: "30+", text: "Events" },
          ].map(({ number, text }) => (
            <Stack key={number}>
              <Text
                c="#000"
                fz={"3rem"}
                lh={"2rem"}
                className={homeStyles.SubMainNumberText}
              >
                {number}
              </Text>
              <Text
                c="#1A1D1F"
                className={homeStyles.SubMainSmallText}
                fz={"1.25rem"}
                lh={null}
              >
                {text}
              </Text>
            </Stack>
          ))}
        </Group>
        <Link href="/about">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size={"lg"}
              rightSection={<IconArrowRight />}
              px={"1.125rem"}
              py={"1.125rem"}
              color="#000"
              h="auto"
              radius={0}
              className={homeStyles.SubMainReadMore}
            >
              Read More
            </Button>
          </motion.div>
        </Link>
      </Stack>
    </Flex>
  );
}
