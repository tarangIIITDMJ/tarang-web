"use client";

import { Box, Flex, Image, Text, Button, Stack, Center, Divider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/events.module.css";
import { IconLogout } from "@tabler/icons-react";

export default function Ticket(){
    const isMobileView = useMediaQuery("(max-width: 768px)");
    const user = {
        name:"Aditya Rana",
        tarangId:"xxx xxx"
    }
    const initials = user.name.split(" ").map((n)=>(n[0])).join("");
    const firstName = user.name.split(" ")[0];

    const icon = (
        <Image
          src={"/Frame.svg"}
          style={{ width: isMobileView ? "3rem" : "4.5rem", height: "100%" }}
          alt=""
        />
      );

    return(
        <Box m={0} p={0}>
            <Stack px="1rem" py="2rem" pt={isMobileView?"4rem":"2rem"} bg="#D0EB4C" gap={isMobileView?"0.5rem":"2rem"} w="auto" miw="22.5rem" h="auto" ta="center" mx="auto" >
                <Flex gap="1rem" direction={isMobileView?"row":"column"} justify={isMobileView?"left":"center"} align="center">
                    <Center w={isMobileView?"4.5rem":"6rem"} p="1rem" bg="#ED3C71" style={{borderRadius:"50%",aspectRatio:"1/1"}}>
                        <Text size="2.5rem" fw={500} c="white">{initials}</Text>
                    </Center>
                    <Stack gap={isMobileView?"0.5rem":"1rem"} justify="center" align="center">
                        <Text size={isMobileView?"1.5rem":"2rem"} fw={500} c="#24292E">
                            Hi {firstName}!
                        </Text>
                        <Text size={isMobileView?"0.75rem":"1.125rem"} fw={500} c="#454C52">
                            Tarang ID: {user.tarangId}
                        </Text>
                    </Stack>
                </Flex>
                <Divider display={isMobileView?"none":""} c="#9EA5AD" size="sm"/>
                <Flex display={isMobileView?"none":""} direction="column" px="1.5rem" py="1.85rem" justify="center" align="center" bg="#e3f394" gap="2rem" style={{border:"2px solid #FF6300",borderRadius:"1rem"}}>
                    <Box>
                        {icon}
                    </Box>
                    <Stack fw={500}>
                        <Text size="1.5rem" c="#1A1D1F">
                            Unlock Free Entry
                        </Text>
                        <Text size="1.125rem" c="#383F45">
                        Enjoy complimentary entry by registering for any paid event!
                        </Text>
                    </Stack>
                </Flex>
                <Button py="0.5rem" px={isMobileView?"1.25rem":"1.5rem"} style={{borderRadius:"0"}} w={isMobileView?"50%":"auto"} h="auto" bg="#F34141">
                    <Flex justify="center" align="center" gap="0.75rem">
                        <Text size="1.125rem" fw={600}>Log out</Text>
                        <IconLogout/>
                    </Flex>
                </Button>
            </Stack>
                <Flex display={isMobileView?"":"none"} m="auto" px="1.5rem" py="0.75rem" justify="center" align="center" w="95%" bg="#e3f394" gap="1rem" style={{border:"2px solid #FF6300",borderRadius:"1rem"}} my="2rem">
                    <Box>
                        {icon}
                    </Box>
                    <Stack fw={500} gap="0.5rem">
                        <Text size="1rem" c="#1A1D1F">
                            Unlock Free Entry
                        </Text>
                        <Text size="0.75rem" c="#383F45">
                        Enjoy complimentary entry by registering for any paid event!
                        </Text>
                    </Stack>
                </Flex>
        </Box>
    )
}