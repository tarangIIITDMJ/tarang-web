"use client";
import { Button, Container, Flex, Grid, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import React from "react";

function SponsorUsSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Container m={0} pt={60} p={0} miw={"100%"}>
      <Grid gutter={0} columns={isMobileView ? 1 : 2}>
        <Grid.Col bg="black" order={isMobileView ? 2 : ""} span={1}>
          <Flex justify={"center"} align={"center"} h={"100%"}>
            <Container my={"2rem"}>
              <Text
                style={{ lineHeight: isMobileView ? "2rem" : "4rem" }}
                c={"white"}
                fz={isMobileView ? "2rem" : "4rem"}
              >
                Interested about Tarang?
              </Text>
              <Text mt={"2.25rem"} c={"white"} fz={"1.25rem"}>
              Discover Tarang's rich lineup and event details in the booklet.
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
          </Flex>
        </Grid.Col>
        <Grid.Col span={1} order={isMobileView ? 3 : ""}>
          <Image h={"100%"} src={"/MobileFrame.webp"} alt="" />
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
          <Flex justify={"center"} align={"center"} h={"100%"}>
            <Container my={"2rem"}>
              <Text
                style={{ lineHeight: isMobileView ? "2rem" : "4rem" }}
                c={"white"}
                fz={isMobileView ? "2rem" : "4rem"}
              >
                Here’s how to sponsor us
              </Text>
              <Text mt={"2.25rem"} c={"white"} fz={"1.25rem"}>
              Explore sponsorship opportunities and benefits in the booklet.
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
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default SponsorUsSection;
