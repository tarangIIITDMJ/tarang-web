"use client";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function EventSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  function CardComp({ data, makeMobile = false }) {
    return (
      <Card radius={0} w={"100%"} p={0} h={"100%"}>
        <Flex
          p={0}
          direction={makeMobile ? "row" : "column"}
          h={makeMobile ? 128 : "max-content"}
        >
          <Box>
            <Image w={makeMobile ? 120 : "100%"} alt="" {...data.imgData} />
          </Box>
          <Stack
            p={isMobile ? "12px 24px 24px 24px" : "12px 32px 24px 32px"}
            gap={5}
            align="flex-start"
            w={"100%"}
          >
            <Text fw={500} size="lg">
              {data.title ?? "Title"}
            </Text>

            <Text
              c="#676E76"
              size="sm"
              style={{
                wordBreak: "break-word",
              }}
              lineClamp={3}
            >
              {data.desc ?? "Description"}
            </Text>
          </Stack>
        </Flex>
      </Card>
    );
  }

  return (
    <Box>
      <Box bg={"#2E75FF"} py={"3rem"}>
        <Image src={"/highlightEvents.webp"} alt="" />
      </Box>
      <Box
        bg={"#0F0F0F"}
        py={isMobile ? "3rem" : "6rem"}
        px={isMobile ? "1rem" : "6.75rem"}
      >
        <Stack gap={"3.5rem"} align="center">
          <Text size={isMobile ? "2rem" : "4rem"} c="#F2F2F2">
            Here’s what to expect!
          </Text>
          <Grid gutter={20} justify="center" align="stretch">
            <Grid.Col span={isMobile ? 12 : 6}>
              <Stack gap={20}>
                <CardComp
                  data={{
                    title: "The Big Picture",
                    desc: "Unleash your artistic flair with The Big Picture's canvas creativity and conquer the Photoshop Battle for graphic design supremacy!",
                    imgData: {
                      h: isMobile ? 150 : 300,
                      src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448432/the_big_picture_b6y9pq.webp",
                    },
                  }}
                />
                <Grid>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      data={{
                        title: "Picxellence",
                        desc: "Embark on a journey where creativity and precision conver...",
                        imgData: {
                          h: 193,
                          src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448288/pixcillance_1_x64mhv.webp",
                        },
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      data={{
                        title: "Pen It Down",
                        desc: "An online-only event where participants are given the space...",
                        imgData: {
                          h: 193,
                          src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448287/pen_it_down_1_erqnku.webp",
                        },
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                </Grid>
              </Stack>
            </Grid.Col>
            <Grid.Col span={isMobile ? 12 : 6}>
              <Flex
                direction={isMobile ? "column-reverse" : "column"}
                align={"center"}
                gap={20}
              >
                <Grid>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      data={{
                        title: "Theater Wars",
                        desc: "your chance to set the stage ablaze in a glorious stage-act competition!",
                        imgData: {
                          h: 193,
                          src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448288/Theater_wars_1_pbw4ib.webp",
                        },
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      data={{
                        title: "Jhankaar",
                        desc: "Unleash your dance crew's energy and creativity in JHANKAAR...",
                        imgData: {
                          h: 193,
                          src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448288/Jhankaar_1_sr4l5a.webp",
                        },
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                </Grid>
                <CardComp
                  data={{
                    title: "Mural Painting",
                    desc: "Express your creativity through art with our Mural Painting competition or get hands-on with Bamboo furniture crafting and Pottery at our Creative Workshop!",
                    imgData: {
                      h: isMobile ? 150 : 300,
                      src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448287/Mural-painting_1_h4s6ko.webp",
                    },
                  }}
                />
              </Flex>
            </Grid.Col>
          </Grid>
          <Link href="/events">
            <Button
              rightSection={<IconArrowRight />}
              size="lg"
              bg="white"
              c={"black"}
              radius={0}
            >
              More Events
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
