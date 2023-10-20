"use client";
import { Button, Container, Grid, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function SponsorUsSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Container m={0} p={0} miw={"100%"}>
      <Grid
        gutter={0}
        columns={isMobileView ? 1 : 2}
        style={{
          border: "3px solid black",
          borderTopWidth: "1.5px",
        }}
      >
        <Grid.Col
          bg="#ED3C71"
          order={isMobileView ? 2 : ""}
          span={1}
          py={isMobileView ? "4rem" : "4.5rem"}
          px={isMobileView ? "0" : "3rem"}
          style={style.borderBox}
        >
          <Stack justify={"center"} align={"center"} h={"100%"}>
            <Container>
              <Text
                style={{ lineHeight: isMobileView ? "2rem" : "4rem" }}
                fz={isMobileView ? "2rem" : "4rem"}
                c="#FFF"
              >
                Interested in Tarang?
              </Text>
              <Text
                c="#FFF"
                mt={"2.25rem"}
                fz={isMobileView ? "1.125rem" : "1.25rem"}
              >
                Discover Tarang's rich lineup and event details in the booklet.
              </Text>
              <Link
                href="https://res.cloudinary.com/dgnsogmh4/image/upload/v1696759577/Tarang_23_Event_Brochure_hnbhi1.pdf"
                target="_blank"
                download="Sponsor Tarang"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    rightSection={<IconDownload />}
                    mt={"3rem"}
                    size="lg"
                    style={{ border: "2px solid black" }}
                    bg="black"
                    c={"white"}
                    radius={0}
                  >
                    Download PDF
                  </Button>
                </motion.div>
              </Link>
            </Container>
          </Stack>
        </Grid.Col>
        <Grid.Col
          style={style.borderBox}
          span={1}
          order={isMobileView ? 3 : ""}
        >
          <Image
            h={"100%"}
            src={
              "https://res.cloudinary.com/dss8aihs0/image/upload/v1697319617/homepage_event/png%20and%20jpg/IMG_2363_i94mam.png"
            }
            alt=""
          />
        </Grid.Col>
        <Grid.Col
          style={style.borderBox}
          order={isMobileView ? 1 : ""}
          span={1}
        >
          <Image
            h={"100%"}
            style={{
              transform: "scaleX(-1)",
            }}
            src={
              "https://res.cloudinary.com/dss8aihs0/image/upload/v1697319614/homepage_event/png%20and%20jpg/IMG_2376_j80lqi.png"
            }
            alt=""
          />
        </Grid.Col>
        <Grid.Col
          bg="#9a0cca"
          order={isMobileView ? 4 : ""}
          span={1}
          py={isMobileView ? "4rem" : "4.5rem"}
          px={isMobileView ? "0" : "3rem"}
          style={style.borderBox}
        >
          <Stack justify={"center"} align={"center"} h={"100%"}>
            <Container>
              <Text
                style={{ lineHeight: isMobileView ? "2rem" : "4rem" }}
                c="#FFF"
                fz={isMobileView ? "2rem" : "4rem"}
              >
                Here&apos;s how to sponsor us
              </Text>
              <Text
                mt={"2.25rem"}
                c="#FFF"
                fz={isMobileView ? "1.125rem" : "1.25rem"}
              >
                Explore sponsorship opportunities and benefits in the booklet.
              </Text>
              <Link
                href=""
                target="_blank"
                download="Sponsor Tarang"
                rel="noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    rightSection={<IconDownload />}
                    mt={"3rem"}
                    size="lg"
                    style={{ border: "2px solid black" }}
                    bg="black"
                    c={"white"}
                    radius={0}
                  >
                    Download Sponsor PDF
                  </Button>
                </motion.div>
              </Link>
            </Container>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

const style = {
  borderBox: {
    border: "1.5px solid black",
  },
};

export default SponsorUsSection;
