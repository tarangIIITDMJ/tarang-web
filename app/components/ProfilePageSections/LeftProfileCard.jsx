import { Button, Card, Divider, Paper, Stack, Text } from "@mantine/core";
import { IconLogout, IconUserCircle } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import ProfileStar from "@/public/ProfileStar.svg";
export default function LeftProfileCard() {
  return (
    <Card bg={"#D0EB4C"} miw={"18rem"} w={"18rem"} p={0} radius={0}>
      <Stack
        align="center"
        py={36}
        px={16}
        w={"100%"}
        h={"100%"}
        gap={32}
        justify="space-between"
      >
        <Stack w={"100%"} gap={24} align="center">
          <IconUserCircle color="#ED3C71" size={96} stroke={1} />
          <Text fz={32}>Hi Aditya !</Text>
          <Text fz={18} c={"#454C52"}>
            Tarang ID: xxx xxx
          </Text>
          <Divider
            color="#9EA5AD"
            size={"sm"}
            w={"100%"}
            orientation="horizontal"
          />
        </Stack>
        <Paper px={23} py={29} radius={"lg"} bg={"#ebff8a"}>
          <Stack align="center" gap={0}>
            <Image src={ProfileStar} alt="Profile Star" />
            <Text fz={24} mt={32}>
              Unlock Free Entry
            </Text>
            <Text fz={18} mt={36} ta={"center"} c={"#383F45"}>
              Enjoy complimentary entry by registering for any paid event!
            </Text>
          </Stack>
        </Paper>
        <Button
          radius={0}
          fullWidth
          size="xl"
          color="#F34141"
          fz={18}
          rightSection={<IconLogout size={25} stroke={1.5} />}
        >
          Log out
        </Button>
      </Stack>
    </Card>
  );
}
