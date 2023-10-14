import { Box, Stack, Text } from "@mantine/core";
import cssStyles from "@/app/styles/about.module.css";

const ContentSection = () => (
  <Box bg="#0F0F0F">
    <Stack
      gap="1.5rem"
      py={"3rem"}
      px={"5rem"}
      className={cssStyles.ContentSectionContainer}
    >
      <Text
        c="#FAFAFA"
        size="4rem"
        fw={500}
        className={cssStyles.ContentSectionTitle}
      >
        The Tide is turning!
      </Text>
      <Text
        c="#CED2D6"
        size="1.25rem"
        lh={1.2}
        className={cssStyles.ContentSectionText}
      >
        TARANG, IIITDM Jabalpur's very own cultural fest, the largest in Central
        India, reemerges after 5 years! Strap in, for an epic revival!
      </Text>
      <Text
        c="#CED2D6"
        size="1.25rem"
        lh={1.2}
        className={cssStyles.ContentSectionText}
      >
        Tarang has been met with unending fervor since 2007, featuring multiple
        events from various cultural domains. It's attracted a surge of creative
        zeal from some incredible artists all over the country; from the
        soothing symphonies of "Unplugged" to the verbal warfare of "The Great
        Debate," dance battles of "Jhankar" to creative clashes like "Spirit of
        Art," flash mobs and workshops and so much more. Tarang promises to
        sweep everyone in its wake, leaving them full of enthusiasm, no matter
        where they come from!
      </Text>
      <Text
        c="#CED2D6"
        size="1.25rem"
        lh={1.2}
        className={cssStyles.ContentSectionText}
      >
        Witnessing glorious performances from top artists such as Jassie Gill
        and Babbal Rai, it's no surprise that TARANG has received footfalls of
        thousands from technical colleges across the country. We provide a
        platform to students from all over to get a chance to interact, enhance
        and demonstrate their creativity while competing in exciting contests
        and challenges, flooding our campus with their immense talent.
      </Text>
    </Stack>
  </Box>
);

export default ContentSection;
