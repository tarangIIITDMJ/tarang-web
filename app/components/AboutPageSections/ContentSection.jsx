"use client";

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
          <Text c={"#252525"} size={isMobileView ? "1rem" : "1.125rem"} lh={1.2}>
            TARANG, IIITDM Jabalpur's very own cultural fest, the largest in
            Central India, reemerges after 5 years! Strap in, for an epic
            revival! Tarang has been met with unending fervour since 2007,
            featuring multiple events from various cultural domains. It's
            attracted a surge of creative zeal from some incredible artistes all
            over the country; from the soothing symphonies of "Unplugged" to the
            verbal warfare of "The Great Debate", dance battles of "Jhankar" to
            creative clashes like "Spirit of Art", flash mobs and workshops and
            so much more. Tarang promises to sweep everyone in its wake, leaving
            them full of enthusiasm, no matter where they come from! Witnessing
            glorious performances from top artistes such as Jassie Gill and
            Babbal Rai, it's no surprise that TARANG has received footfalls of
            thousands from technical colleges across the country. We provide a
            platform to students from all over to get a chance to interact,
            enhance and demonstrate their creativity while competing in exciting
            contests and challenges, flooding our campus with their immense
            talent.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
