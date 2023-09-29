"use client";
import { Button, Container, Grid, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import React from "react";

function SponsorUsSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Container m={0} pt={60} p={0} miw={"100%"}>
      <Grid gutter={0} columns={isMobileView ? 1 : 2}>
        <Grid.Col bg="black" order={isMobileView ? 2 : ""} span={1}>
          <Container
            my={"2rem"}
            ml={isMobileView ? "0rem" : "5rem"}
            mr={isMobileView ? "6rem" : "10rem"}
          >
            <Text
              style={{ lineHeight: isMobileView ? "2rem" : "4rem" }}
              c={"white"}
              fz={isMobileView ? "2rem" : "4rem"}
            >
              Interested about Tarang?
            </Text>
            <Text mt={"2.25rem"} c={"white"} fz={"1.25rem"}>
              The booklet contains(proceed to explain the content, its use, in 2
              lines.)
            </Text>
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
          </Container>
        </Grid.Col>
        <Grid.Col span={1} order={isMobileView ? 3 : ""}>
          <Image h={"100%"} src={"/MobileFrame.webp"} alt=""/>
        </Grid.Col>
        <Grid.Col order={isMobileView ? 1 : ""} span={1}>
          <Image
            h={"100%"}
            style={{
              transform: "scaleX(-1)",
            }}
            src={"/MobileFrame.webp"}
            alt=""
          />
        </Grid.Col>
        <Grid.Col bg="black" order={isMobileView ? 4 : ""} span={1}>
          <Container
            my={"2rem"}
            ml={isMobileView ? "0rem" : "5rem"}
            mr={isMobileView ? "6rem" : "10rem"}
          >
            <Text
              style={{ lineHeight: isMobileView ? "2rem" : "4rem" }}
              c={"white"}
              fz={isMobileView ? "2rem" : "4rem"}
            >
              Want 2 sponsor Tarang?
            </Text>
            <Text mt={"2.25rem"} c={"white"} fz={"1.25rem"}>
              The booklet contains(proceed to explain the content, its use, in 2
              lines.)
            </Text>
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
          </Container>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default SponsorUsSection;
