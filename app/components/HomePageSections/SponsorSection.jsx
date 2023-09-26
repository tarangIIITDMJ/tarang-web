"use client";

import { Box, Stack, Text, Group } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function SponsorSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box style={styles.sponsorUs}>
      <Stack align="center" gap="2rem">
        <Text size={isMobileView ? "20px" : "48px"} c="#F2F2F2">
          Our sponsors
        </Text>
        <Group gap="1.5rem" justify="center" w={isMobileView ? "18rem" : null}>
          {Array(6)
            .fill()
            .map((_, index) => (
              <Box
                key={index}
                w={isMobileView ? "6.25rem" : "10.5rem"}
                h={isMobileView ? "6.25rem" : "6.5rem"}
                bg="#3D3D3D"
              ></Box>
            ))}
        </Group>
      </Stack>
    </Box>
  );
}

const styles = {
  sponsorUs: {
    backgroundColor: "#150D0C",
    padding: "6rem 0",
  },
};
