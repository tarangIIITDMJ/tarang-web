"use client";

import { Box, Stack, Text, List, Grid, Flex, Image } from "@mantine/core";
import MainAppShell from "../components/MainAppShell";
import { useMediaQuery } from "@mantine/hooks";

export default function Referral() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <MainAppShell>
      <Box bg="#0F0F0F" p={0}>
        <Stack
          align="flex-start"
          pt={isMobileView ? "8rem" : "5rem"}
          px={isMobileView ? "2rem" : "4rem"}
          pb={isMobileView ? "3rem" : "5rem"}
          gap={isMobileView ? "2rem" : "4.5rem"}
        >
          <Text
            c="#F6F4C8"
            fz={isMobileView ? "2rem" : "4rem"}
            fw={500}
            lh={isMobileView && "2.4rem"}
          >
            So, here&apos;s how it works.
          </Text>
          <Stack align="flex-start" gap="2rem">
            <Text c="#E5E7EA" fz={isMobileView ? "1rem" : "2rem"} fw={500}>
              It's simple! When your friends or group sign up, they just need to
              enter {!isMobileView && <br />} your user ID in the referral code
              tab.
            </Text>
            <Box>
              <Text c="#E5E7EA" fz={isMobileView ? "0.75rem" : "1.125rem"}>
                Here's what you all get:
              </Text>
              <List
                withPadding
                c="#E5E7EA"
                fz={isMobileView ? "0.75rem" : "1.125rem"}
              >
                <List.Item>Discounts on Events</List.Item>
                <List.Item>Discounts on Pro Nights</List.Item>
                <List.Item>Discounts on Accommodation</List.Item>
              </List>
            </Box>
          </Stack>
          <Text c="#E5E7EA" fz={isMobileView ? "1rem" : "2rem"} fw={500}>
            The more referrals, the bigger the rewards! Start spreading the word
            {!isMobileView && <br />}and enjoy the benefits together!
          </Text>

          <Grid gutter={!isMobileView && "2.5rem"}>
            {[
              "bronzeCard",
              "silverCard",
              "goldCard",
              "platinumCard",
              "diamondCard",
            ].map((card, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <Image
                  mt={isMobileView && "1rem"}
                  src={`/referralPageImages/${card}.svg`}
                  alt=""
                />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Box>
    </MainAppShell>
  );
}
