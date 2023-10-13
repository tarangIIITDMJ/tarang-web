"use client";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import cssStyles from "@/app/styles/home.module.css";

export default function EventSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  function CardComp({ data, makeMobile = false }) {
    return (
      <Paper bg={"transparent"} h={"100%"} radius={0} p={0}>
        <Link href={data.link}>
          <Flex
            p={0}
            direction={makeMobile ? "row" : "column"}
            h={makeMobile ? 128 : "max-content"}
            className={cssStyles.EventCardsFlex}
            justify={"space-between"}
          >
            <Box style={{ overflow: "hidden" }} w={makeMobile ? "35%" : "100%"}>
              <Image
                w={"100%"}
                alt=""
                {...data.imgData}
                className={cssStyles.EventCardsImage}
              />
            </Box>
            <Stack
              p={isMobile ? "12px 24px 12px 24px" : "12px 32px 24px 32px"}
              gap={5}
              align="flex-start"
              h={"130"}
              w={makeMobile ? "65%" : "100%"}
              style={{
                border: isMobile ? "1px solid #000" : "3px solid #000",
              }}
              bg={"white"}
              className={cssStyles.EventCardsStack}
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
                lineClamp={isMobile ? 2 : 3}
              >
                {data.desc ?? "Description"}
              </Text>
              <Text
                variant="gradient"
                size="sm"
                gradient={{ from: "blue", to: "cyan", deg: 90 }}
                hiddenFrom="sm"
              >
                Read more
              </Text>
            </Stack>
          </Flex>
        </Link>
      </Paper>
    );
  }

  return (
    <Box>
      <Box
        bg={"#6421F4"}
        py={"3rem"}
        style={{ border: "3px solid black", borderTopWidth: "0px" }}
      >
        <Image src={"homePageImages/highlightEvents.webp"} alt="" />
      </Box>
      <Box
        bg={"#D0EB4C"}
        py={isMobile ? "3rem" : "6rem"}
        px={isMobile ? "1rem" : "6.75rem"}
      >
        <Stack gap={"3.5rem"} align="center">
          <Text size={isMobile ? "2rem" : "4rem"} c="#24292E">
            Here&apos;s what to expect!
          </Text>
          <Grid gutter={20} justify="center" align="stretch">
            <Grid.Col span={isMobile ? 12 : 6}>
              <Stack gap={20}>
                <CardComp
                  data={{
                    title: "Artful Alteration",
                    desc: "Unleash your artistic flair with The Big Picture's canvas creativity and conquer the Photoshop Battle for graphic design supremacy!",
                    imgData: {
                      h: isMobile ? 150 : 300,
                      src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448432/the_big_picture_b6y9pq.webp",
                    },
                    link: "#",
                  }}
                />
                <Grid>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      data={{
                        title: "Picxellence",
                        desc: "Where Pixels Meet Excellence.",
                        imgData: {
                          h: 193,
                          src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448288/pixcillance_1_x64mhv.webp",
                        },
                        link: "/events/pixcellence",
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      data={{
                        title: "Pen It Down",
                        desc: "An online-only event where participants are given the space to unleash their creativity through written material (storyline) based on topics given by the organizers.",
                        imgData: {
                          h: 193,
                          src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448287/pen_it_down_1_erqnku.webp",
                        },
                        link: "/events/pen-it-down",
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
                        link: "/events/theatre-wars",
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      data={{
                        title: "Jhankaar",
                        desc: "Unleash your dance crew's energy and creativity in JHANKAAR, the ultimate group dance competition with a chance to win from a generous prize pool!",
                        imgData: {
                          h: 193,
                          src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448288/Jhankaar_1_sr4l5a.webp",
                        },
                        link: "/events/jhankaar",
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                </Grid>
                <CardComp
                  data={{
                    title: "Off the wall",
                    desc: "Express your creativity through art with our Mural Painting competition or get hands-on with Bamboo furniture crafting and Pottery at our Creative Workshop!",
                    imgData: {
                      h: isMobile ? 150 : 300,
                      src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448287/Mural-painting_1_h4s6ko.webp",
                    },
                    link: "/events/off-the-wall",
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
              style={{ border: "3px solid black" }}
            >
              More Events
            </Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
