import { Box, Container, Stack, Text } from "@mantine/core";
import React from "react";

export default function EventSection() {
  return (
    <Box h={"100vh"} bg={"#0F0F0F"} py={"6rem"} px={"6.75rem"}>
      <Stack gap={"3.5rem"} align="center">
        <Text size="3rem" c="#F2F2F2" ta={"center"}>
          Glimmer in the wake escapism
        </Text>
      </Stack>
    </Box>
  );
}
