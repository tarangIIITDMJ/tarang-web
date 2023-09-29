import { Box, Container, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function ContentSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <Box bg={"#FFFAEF"} py={"3rem"}>
      <Container>
        <Stack gap={"1.5rem"}>
          <Text c={"#555"} size={isMobileView ? "3rem" : "4rem"} fw={500}>
            Vibe tarang lmfaooo
          </Text>
          <Text c={"#252525"} size={isMobileView ? "1rem" : "1.25rem"} fw={500}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          <Text c={"#252525"} size="1.25rem" fw={500}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
