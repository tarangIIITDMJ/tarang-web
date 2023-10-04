"use client";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function EventSection() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  function CardComp({ Imgprop, makeMobile = false }) {
    return (
      <Card radius={0} w={"100%"} p={0}>
        <Flex
          p={0}
          direction={makeMobile ? "row" : "column"}
          h={makeMobile ? 120 : "max-content"}
        >
          <Box>
            <Image
              w={makeMobile ? 120 : "100%"}
              style={{ objectPosition: "0% 0%", transition: "0.3s" }}
              alt=""
              {...Imgprop}
            />
          </Box>
          <Stack
            p={"12px 32px 24px 32px"}
            gap={5}
            align="flex-start"
            w={"100%"}
          >
            <Text fw={500} size="lg">
              Event name
            </Text>

            <Text c="#676E76" size="sm" style={{ wordBreak: "break-word" }}>
              Quidam officiis similique sea ei, vel tollit indoctum efficiendi
            </Text>
          </Stack>
        </Flex>
      </Card>
    );
  }

  return (
    <Box>
      <Box bg={"#2E27EF"} py={"3rem"}>
        <Image src={"/highlightEvents.webp"} alt="" />
      </Box>
      <Box
        bg={"#0F0F0F"}
        py={isMobile ? "3rem" : "6rem"}
        px={isMobile ? "1rem" : "6.75rem"}
      >
        <Stack gap={"3.5rem"} align="center">
          <Text size={isMobile ? "2rem" : "4rem"} c="#F2F2F2">
          Here’s what to expect!
          </Text>
          <Grid gutter={20} justify="center">
            <Grid.Col span={isMobile ? 12 : 6}>
              <Stack gap={20}>
                <CardComp
                  Imgprop={{
                    h: isMobile ? 150 : 300,
                    src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448432/the_big_picture_b6y9pq.webp",
                  }}
                />
                <Grid>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      Imgprop={{
                        h: 193,
                        src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448288/pixcillance_1_x64mhv.webp",
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      Imgprop={{
                        h: 193,
                        src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448287/pen_it_down_1_erqnku.webp",
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                </Grid>
              </Stack>
            </Grid.Col>
            <Grid.Col span={isMobile ? 12 : 6}>
              <Flex
                direction={isMobile ? "column-reverse" : "column"}
                align={"center"}
                gap={20}
              >
                <Grid>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      Imgprop={{
                        h: 193,
                        src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448288/Theater_wars_1_pbw4ib.webp",
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                  <Grid.Col span={isMobile ? 12 : 6}>
                    <CardComp
                      Imgprop={{
                        h: 193,
                        src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448288/Jhankaar_1_sr4l5a.webp",
                      }}
                      makeMobile={isMobile}
                    />
                  </Grid.Col>
                </Grid>
                <CardComp
                  Imgprop={{
                    h: isMobile ? 150 : 300,
                    src: "https://res.cloudinary.com/dxcjzquen/image/upload/v1696448287/Mural-painting_1_h4s6ko.webp",
                  }}
                />
              </Flex>
            </Grid.Col>
          </Grid>
          <Button size="lg" bg="white" c={"black"} radius={0}>
            More Events
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
