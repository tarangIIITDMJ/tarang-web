"use client";
import {
    Text,
    Stack, 
    Grid, 
    Card, 
    Flex, 
    Box, 
    Image 
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function EventCards() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  function CardComp({ Imgprop, makeMobile = false }) {
    return (
      <Card radius={0} w={isMobile ? "95%" : "100%"} p={0}>
        <Flex
          p={0}
          direction={makeMobile ? "row" : "column"}
          h={makeMobile ? 140 : 350}
        >
          <Box>
            <Image
              w={makeMobile ? 135 : "100%"}
              style={{ objectPosition: "0% 0%", transition: "0.3s" }}
              {...Imgprop}
            />
          </Box>
          <Stack
            p={"12px 32px 24px 32px"}
            gap={10}
            align="flex-start"
            w={"100%"}
          >
            <Text fw={500} size={isMobile ? "lg" : "1.3rem"}>
              Event name
            </Text>

            <Text c="#676E76" size={isMobile ? "sm" : "1rem"} style={{ wordBreak: "break-word" }}>
              Quidam officiis similique sea ei, vel tollit indoctum efficiendi
            </Text>
          </Stack>
        </Flex>
      </Card>
    );
  }

  return (
    <Stack bg={"#0F0F0F"} align="flex-start" pl={isMobile ? "1.5rem" : "5rem"} py={isMobile ? "1rem" : "4rem"} pr={isMobile ? 0 : "5rem"}>
      <Text c="#9EA5AD" size={isMobile ? "1.2rem" : "2rem"} mb={isMobile ? "md" : "lg"}>{`Bazooka (5 events)`}</Text>
      <Grid gutter={isMobile ? 30 : 100}>
        <Grid.Col span={isMobile ? 12 : 4}>
          <CardComp
            Imgprop={{ h: 230, src: "/assets/EventCard.png" }}
            makeMobile={isMobile}
          />
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 4}>
          <CardComp
            Imgprop={{ h: 230, src: "/assets/EventCard.png" }}
            makeMobile={isMobile}
          />
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 4}>
          <CardComp
            Imgprop={{ h: 230, src: "/assets/EventCard.png" }}
            makeMobile={isMobile}
          />
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 4}>
          <CardComp
            Imgprop={{ h: 230, src: "/assets/EventCard.png" }}
            makeMobile={isMobile}
          />
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 4}>
          <CardComp
            Imgprop={{ h: 230, src: "/assets/EventCard.png" }}
            makeMobile={isMobile}
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
