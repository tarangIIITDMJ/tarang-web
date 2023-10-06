"use client";
import React from "react";
import { Box, Flex, Image, Text, Button, Stack, Center, Divider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/events.module.css";
import { IconPlus } from "@tabler/icons-react";
import EventCards from "../EventPageSections/EventCards";

export default function UserEvents(){
    const isMobileView = useMediaQuery("(max-width: 768px)");
    const userEvents = [
        {
            name: "Event Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            slug: "event-name",
        },
        {
            name: "Event Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            slug: "event-name",
        },
        {
            name: "Event Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            slug: "event-name",
        },
        {
            name: "Event Name",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            slug: "event-name",
        },
    ]
    
    return(
        <Box>
            <Stack w="auto" px="2rem" py="3.125rem">
                <Flex display={isMobileView?"none":""} justify="space-between" align="center" gap="1rem" >
                <Text size="1.5rem" fw={500} c="#CED2D6">
                    "Count" Events
                </Text>
                <Button bg="white" h="auto"  style={{borderRadius:"0"}} py="0.75rem" px="1.125rem">
                    <Flex justify="center" align="center" gap="0.5rem" c="black">
                        <Text fw={600} size="1.125rem">
                            Add more events
                        </Text>
                        <IconPlus/>
                    </Flex>
                </Button>
                </Flex>
                <Flex wrap="wrap">
                    <EventCards events={userEvents}/>
                </Flex>
                <Flex display={isMobileView?"":"none"} justify="center" align="center" gap="1rem">
                <Button w="100%" bg="white" h="auto" style={{borderRadius:"0"}} py="0.75rem" px="1.25rem">
                    <Flex justify="center" align="center" gap="0.2rem" c="black">
                        <Text fw={600} size="4.5vw">
                            Add more events
                        </Text>
                        <IconPlus size="4.5vw"/>
                    </Flex>
                </Button>
                </Flex>
            </Stack>
        </Box>
    )
}
