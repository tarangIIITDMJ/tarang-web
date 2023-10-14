import { Box, Flex, Stack, Text, Image, Divider, Center } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

function SubMainSection() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const fontSize = isMobileView ? "1rem" : "2rem";
  const smallFontSize = isMobileView ? "0.75rem" : "1.125rem";

  return (
    <Box
      px={isMobileView ? "2rem" : "5rem"}
      pb={isMobileView ? "2rem" : "5rem"}
      py={isMobileView && "3rem"}
    >
      <Center
        visibleFrom="sm"
        bg="linear-gradient(100deg, rgba(208, 235, 76, 0.33) -13.04%, 
        rgba(208, 235, 76, 0.71) 17.6%, rgba(208, 235, 76, 0.76) 47.38%, 
        rgba(208, 235, 76, 0.64) 73.26%, rgba(208, 235, 76, 0.21) 112.42%)"
        h="22rem"
        mb="8rem"
        px={"13.625rem"}
        py={"5rem"}
        style={{ borderRadius: "2.5rem" }}
      >
        <Text c="#FFF" fz="4rem" lh="5.5rem" fw={500}>
          Tarang pass, hover-tilt-interactive card will be here.
        </Text>
      </Center>
      <Flex justify="space-around" align="center" gap="3rem">
        <Stack gap="2.5rem" visibleFrom="sm">
          <Text c="#FFF" fz="3.5rem" fw={600} lh="-0.125rem">
            What's in it for you:
          </Text>
          <Image src="/bgImage.svg" alt="" />
        </Stack>
        <Stack maw={isMobileView ? "100%" : "50%"}>
          <Text
            hiddenFrom="sm"
            c="#FFF"
            ta="left"
            fz="2rem"
            fw={600}
            lh="-0.125rem"
          >
            What's in it for you:
          </Text>
          {[1, 2, 3].map((number) => (
            <>
              <Flex key={number} gap="1rem">
                <Text c="#FFF" fz={fontSize}>{`0${number}.`}</Text>
                <Stack gap="1rem">
                  <Text c="#FFF" fz={fontSize}>
                    {number === 1
                      ? "One-Time Fee, Limitless Access"
                      : number === 2
                      ? "Explore Every Event, Workshop, and Pro Nights"
                      : "Connect, Create, and Learn"}
                  </Text>
                  <Text c="#CED2D6" fz={smallFontSize}>
                    {number === 1
                      ? `With the Tarang Pass, you pay once and enjoy everything! No more fumbling for change or missing out on 
                        exciting events – this pass is your golden ticket to an 
                        epic Tarang adventure.`
                      : number === 2
                      ? `Dive into the cultural extravaganza with access to every corner 
                      of Tarang. From electrifying performances to mind-boggling workshops 
                      and unforgettable pro nights, you're invited to it all!`
                      : `Make memories, forge friendships, and unleash your creativity at workshops that span 
                      various domains. Whether it's dance, art, or music, Tarang 
                      Pass holders get exclusive opportunities to learn from the best.`}
                  </Text>
                </Stack>
              </Flex>
              {number !== 3 && (
                <Divider
                  style={{
                    background:
                      "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.08%, rgba(16, 16, 16, 0.00) 100%, rgba(255, 255, 255, 0.00) 100%)",
                  }}
                  mt="1rem"
                  h="0.0625rem"
                />
              )}
            </>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
}

export default SubMainSection;
