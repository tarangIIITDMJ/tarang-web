"use client";

import { Box, Image, Text } from "@mantine/core";
import cssstyles from "@/app/styles/home.module.css";
export default function SponsorSection() {
  const sponsors = [
    "/sponsors/hp.png",
    "/sponsors/asanzo.png",
    "/sponsors/bostin-cafe.png",
    "/sponsors/hatchers.png",
    "/sponsors/indianbank.png",
    "/sponsors/kathination.png",
    "/sponsors/kitchenopolis.png",
    "/sponsors/lofa.png",
    "/sponsors/lord-of-the-drinks.png",
    "/sponsors/mocha.png",
    "/sponsors/redfm.png",
    "/sponsors/sardar-g-malai-chaap.png",
    "/sponsors/titan.png",
  ];

  return (
    <>
      <Box bg={"#1E1E1E"} pt="4rem" pb="2rem">
        <Text ta="center" c="#fff" size={"3rem"} fw={500}>
          Our Sponsors
        </Text>
        <div className={cssstyles.marquee}>
          <Box className={cssstyles.marqueeContent} py={50}>
            {sponsors.map((sponsor, i) => (
              <Image key={i} src={sponsor} alt="jupyter" w={100} />
            ))}
            {sponsors.slice(0, 6).map((sponsor, i) => (
              <Image key={i} src={sponsor} alt="jupyter" w={100} />
            ))}
          </Box>
        </div>
      </Box>
    </>
  );
}
