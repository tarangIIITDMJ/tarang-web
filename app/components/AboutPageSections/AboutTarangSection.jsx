import { Box, Group, Stack, Text } from "@mantine/core";

const AboutTarangSection = () => (
  <Box bg="#D0EB4C" py="4rem" px="5rem" style={{ border: "3px solid #000" }}>
    <Group align="center" justify="space-around" gap="2rem">
      {[
        { number: "2007", text: "Since 2007" },
        { number: "100+", text: "Over 100+ participating colleges" },
        { number: "8000", text: "Footfall of over 8000" },
        { number: "30+", text: "30+ events" },
      ].map((item) => (
        <Stack key={item.number} align="center">
          <Text c="#1A1D1F" fz="3.5rem" fw={600} lh="4rem" ta="center">
            {item.number}
          </Text>
          <Text c="#24292E" fz="1.125rem" lh="1.5rem" ta="center">
            {item.text}
          </Text>
        </Stack>
      ))}
    </Group>
  </Box>
);

export default AboutTarangSection;
