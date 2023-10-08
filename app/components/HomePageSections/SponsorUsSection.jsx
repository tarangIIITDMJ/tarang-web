"use client";
import { Button, Container, Grid, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

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
          bg="#FE73E7"
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
                c="#1a1d1f"
              >
                Interested about Tarang?
              </Text>
              <Text
                c="#1a1d1f"
                mt={"2.25rem"}
                fz={isMobileView ? "1.125rem" : "1.25rem"}
              >
                Discover Tarang's rich lineup and event details in the booklet.
              </Text>
              <Link href="https://res.cloudinary.com/dgnsogmh4/image/upload/v1696759577/Tarang_23_Event_Brochure_hnbhi1.pdf" target="_blank" download="Sponsor Tarang">
                <Button
                  rightSection={<IconDownload />}
                  mt={"3rem"}
                  size="lg"
                  style={{ border: "2px solid black" }}
                  bg="white"
                  c={"black"}
                  radius={0}
                >
                  Download PDF
                </Button>
                </Link>
            </Container>
          </Stack>
        </Grid.Col>
        <Grid.Col
          style={style.borderBox}
          span={1}
          order={isMobileView ? 3 : ""}
        >
          <Image h={"100%"} src={"/MobileFrame.webp"} alt="" />
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
            src={"/MobileFrame.webp"}
            alt=""
          />
        </Grid.Col>
        <Grid.Col
          bg="#2E75FF"
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
                c="#1a1d1f"
                fz={isMobileView ? "2rem" : "4rem"}
              >
                Here&apos;s how to sponsor us
              </Text>
              <Text
                mt={"2.25rem"}
                c="#1a1d1f"
                fz={isMobileView ? "1.125rem" : "1.25rem"}
              >
                Explore sponsorship opportunities and benefits in the booklet.
              </Text>
              <Link href="https://res.cloudinary.com/dgnsogmh4/image/upload/v1696742894/Sponsor-Tarang.pdf" target="_blank" download="Sponsor Tarang" rel="noreferrer">
                <Button
                  rightSection={<IconDownload />}
                  mt={"3rem"}
                  size="lg"
                  style={{ border: "2px solid black" }}
                  bg="white"
                  c={"black"}
                  radius={0}
                >
                  Download Sponsor PDF
                </Button>
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
    border: "1px solid black",
  },
};

export default SponsorUsSection;
