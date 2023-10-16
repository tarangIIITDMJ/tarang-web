"use client";
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import cssStyles from "@/app/styles/home.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

export default function EventSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  function CardComp({ data, makeMobile = false }) {
    return (
      <Paper
        className={cssStyles.EventSectionPaper}
        bg={"transparent"}
        h={"100%"}
        radius={0}
        p={6}
      >
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
              p={"12px 32px 24px 32px"}
              gap={5}
              align="flex-start"
              h={130}
              w={makeMobile ? "65%" : "100%"}
              style={{
                border: "3px solid #000",
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
                lineClamp={3}
                className={cssStyles.EventCardDesc}
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
        {isMobileView ? (
          <Image
            src={"homePageImages/highlightEventsBannerMobile.svg"}
            alt=""
          />
        ) : (
          <Image src={"homePageImages/highlightEventsBanner.svg"} alt="" />
        )}
      </Box>
      <Box
        bg={"#D0EB4C"}
        className={cssStyles.EventSectionBox}
        py={"6rem"}
        px={"6.75rem"}
      >
        <Stack gap={"3.5rem"} align="center">
          <Text
            className={cssStyles.EventSectionBoxText}
            size={"4rem"}
            c="#24292E"
          >
            Here&apos;s what to expect!
          </Text>
          <Grid gutter={20} justify="center" align="stretch">
            <Grid.Col span={isMobileView ? 12 : 6}>
              <Stack gap={20}>
                <CardComp
                  data={{
                    title: "Artful Alteration",
                    desc: "Got the mad skills with brush and paints? Get ready for an electrifying three-hour challenge! Gather your dream team to create an unparalleled masterpiece.",
                    imgData: {
                      h: isMobileView ? 150 : 300,
                      src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448432/the_big_picture_b6y9pq.webp",
                    },
                    link: "/events/artful-alteration",
                  }}
                />
                <Grid>
                  <Grid.Col className={cssStyles.EventGridCol} span={6}>
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
                      makeMobile={isMobileView}
                    />
                  </Grid.Col>
                  <Grid.Col className={cssStyles.EventGridCol} span={6}>
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
                      makeMobile={isMobileView}
                    />
                  </Grid.Col>
                </Grid>
              </Stack>
            </Grid.Col>
            <Grid.Col className={cssStyles.EventGridCol} span={6}>
              <Flex
                className={cssStyles.EventSectionFlex}
                direction={"column"}
                align={"center"}
                gap={20}
              >
                <Grid>
                  <Grid.Col className={cssStyles.EventGridCol} span={6}>
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
                      makeMobile={isMobileView}
                    />
                  </Grid.Col>
                  <Grid.Col className={cssStyles.EventGridCol} span={6}>
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
                      makeMobile={isMobileView}
                    />
                  </Grid.Col>
                </Grid>
                <CardComp
                  data={{
                    title: "Off the wall",
                    desc: 'With the theme of "Fantasy", this event is sure to be one to look out for. Unleash your inner creativity and make sure our unsuspecting judges are in for a wild ride!',
                    imgData: {
                      h: isMobileView ? 150 : 300,
                      src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448287/Mural-painting_1_h4s6ko.webp",
                    },
                    link: "/events/off-the-wall",
                  }}
                />
              </Flex>
            </Grid.Col>
          </Grid>
          <Link href="/events">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
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
            </motion.div>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
