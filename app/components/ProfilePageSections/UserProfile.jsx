"use client";
import React from "react";
import { Box, Flex, Image, Text, Button, Stack, Center, Divider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import cssStyles from "@/app/styles/events.module.css";

export default function UserProfile(){
    const isMobileView = useMediaQuery("(max-width: 768px)");
    const userDetails = {
        personalDetails:{
            name: "Name+Surname",
            age: "99 Years",
            contact: "7061 664 185",
            email: "abc@email.com",
        },
        collegeDetails:{
            collegeName: "College Name",
            address: "District+State",
            degree: "Btech",
            yearOfStudy: "20xx",
        },
    }

    const [contactEditable, setContactEditable] = React.useState(userDetails.personalDetails.contact);
    const myRef = React.useRef(null);

    const handleContactEdit = () => {
        setContactEditable(myRef.current.innerText);
        userDetails.personalDetails.contact = myRef.current.innerText;
    }
    
    const styles = {
        profileHeading: {
            color: "#CED2D6",
            fontSize: isMobileView?"1.5rem":"2rem",
            fontWeight: 500,
        },
        profileData: {
            color: "#F6F7F9",
            fontWeight: 500,
        },
    }

    return(
        <Box m={0} p={0}>
            <Stack bg="black" w="auto" mx="auto" py="2rem" px={isMobileView?"1rem":"2rem"}>
                <Stack>
                    <Text style={styles.profileHeading}>
                        Personal Details
                    </Text>
                    <Divider c="#9EA5AD" size="sm" my="1rem" />
                    <Flex style={styles.profileData} gap={isMobileView?"2rem":"4rem"}>
                        <Stack gap={isMobileView?"0.5rem":"1rem"} w="25vw" >
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                Name:
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                Age:
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                Contact:
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                E-mail:
                            </Text>
                        </Stack>
                        <Stack gap={isMobileView?"0.5rem":"1rem"} c="white">
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                {userDetails.personalDetails.name}
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                {userDetails.personalDetails.age}
                            </Text>
                            <Flex justify="center" align="center" gap="0.5rem">
                                <Text  ref={myRef} defaultValue={contactEditable} onChange={handleContactEdit} size={isMobileView?"1.125rem":"1.25rem"}>{userDetails.personalDetails.contact}</Text>
                                <IconEdit fontWeight={400} />
                            </Flex>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                {userDetails.personalDetails.email}
                            </Text>
                        </Stack>
                    </Flex>
                </Stack>
                <Stack>
                    <Text style={styles.profileHeading}>
                        College Details
                    </Text>
                    <Divider c="#9EA5AD" size="sm" my="1rem" />
                    <Flex style={styles.profileData} gap={isMobileView?"2rem":"4rem"}>
                        <Stack gap={isMobileView?"0.5rem":"1rem"} w="25vw">
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                Your College/Institute:
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                Address:
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                Degree:
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                Year of Study:
                            </Text>
                        </Stack>
                        <Stack gap={isMobileView?"0.5rem":"1rem"} c="white">
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                {userDetails.collegeDetails.collegeName}
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                {userDetails.collegeDetails.address}
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                {userDetails.collegeDetails.degree}
                            </Text>
                            <Text size={isMobileView?"1.125rem":"1.25rem"}>
                                {userDetails.collegeDetails.yearOfStudy}
                            </Text>
                        </Stack>
                    </Flex>
                </Stack>
            </Stack>
        </Box>
    )
}