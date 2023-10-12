"use client";

import {
  Box,
  Group,
  Stack,
  Image,
  Text,
  Container,
  Button,
} from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const GetYourPassSection = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      bg="#FFF4E2"
      py={isMobileView ? "3rem" : "8rem"}
      style={{ border: "3px solid #000" }}
    >
      <Container>
        <Stack align="center" justify="center" gap="1.5rem">
          <Group align="center">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Image key={index} src={"/star-icon.svg"} alt="" />
              ))}
          </Group>
          <Text
            c={"#24292E"}
            ta="center"
            fz={isMobileView ? "2rem" : "4rem"}
            fw={500}
            lh={isMobileView ? "2.4rem" : "4.2rem"}
          >
            Join the Epic Revival. Get
            {!isMobileView && <br />} Your Tarang Card{" "}
            <span style={{ color: "#2E27EF" }}>Today!</span>
          </Text>
          <Text
            c={"#1A1D1F"}
            fz={isMobileView ? "1.5rem" : "2rem"}
            fw={500}
            lh={isMobileView ? "1.8rem" : "2.4rem"}
          >
            All this for just ₹1999!
          </Text>
          <Button
            size={isMobileView ? "sm" : "lg"}
            color="#000"
            rightSection={<IconArrowUpRight />}
            h="auto"
            px={isMobileView ? "1.25rem" : "1.625rem"}
            py={isMobileView ? "0.75rem" : "1.125rem"}
            radius={0}
            mt={isMobileView ? "1.5rem" : "3rem"}
          >
            Get Your Tarang Card
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default GetYourPassSection;
