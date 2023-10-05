"use client";
import { Box, Flex, Stack, Image, Text, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const styles = {
  container: {
    flexShrink: 0,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

const SubMainSection = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Box bg={"#FFC900"} px={isMobileView ? "2rem" : "5rem"} py={"4rem"}>
      <Flex
        direction={isMobileView ? "column" : "row"}
        align={"center"}
        gap={"3rem"}
      >
        <Box
          style={styles.container}
          w={isMobileView ? "20.5rem" : "32rem"}
          h={isMobileView ? "20.5rem" : "32rem"}
        >
          <Image src={"/aboutSectionImg(1).png"} alt="" style={styles.img} />
        </Box>
        <Box>
          <Stack
            align="flex-start"
            justify="center"
            gap={isMobileView ? "1.5rem" : "3rem"}
          >
            <Text size={isMobileView ? "2.5rem" : "4rem"} c="#000">
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
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default SubMainSection;
