import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";

const styles = {
  sponsorUs: {
    backgroundColor: "#150D0C",
    padding: "6rem",
  },
};

function SponsorSection() {
  return (
    <Box style={styles.sponsorUs}>
      <Stack align="center" gap="2rem">
        <Text size="3rem" c="#F2F2F2">
          Our sponsors
        </Text>
        <Group gap="1.5rem" justify="center">
          {Array(6)
            .fill()
            .map((_, index) => (
              <Box key={index} w="10.5rem" h="6.5rem" bg="#3D3D3D"></Box>
            ))}
        </Group>
      </Stack>
    </Box>
  );
}

export default SponsorSection;
