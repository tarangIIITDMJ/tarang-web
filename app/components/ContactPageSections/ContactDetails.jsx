"use client";

import { Box, Text, Grid, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/contact.module.css";

const contactData_1 = [
  {
    clubName: "Abhivyakti",
    person1Name: "Rohan",
    person1Number: "+91 87450 99910",
    person2Name: "Tejas Suryawanshi",
    person2Number: "+91 94202 44605",
  },
  {
    clubName: "Aavartan",
    person1Name: "Ankur",
    person1Number: "+91 76199 84684",
    person2Name: "Ashish Choudhary",
    person2Number: "+91 99916 89805",
  },
  {
    clubName: "Samvaad",
    person1Name: "Kushagra",
    person1Number: "+91 75098 55423",
    person2Name: "Sambhav",
    person2Number: "+91 96672 82886",
  },
];

const contactData_2 = [
  {
    clubName: "Shutterbox",
    person1Name: "Hemanth",
    person1Number: "+91 79952 32738",
    person2Name: "Manjith",
    person2Number: "+91 93464 85364",
  },
  {
    clubName: "Jazbaat",
    person1Name: "Vedant Bande",
    person1Number: "+91 83808 06436",
    person2Name: "Abhishek Ranjan",
    person2Number: "+91 81020 41076",
  },
  {
    clubName: "Saaz",
    person1Name: "Aditya Ghai",
    person1Number: "+91 70003 25890",
    person2Name: "Prateek Pandey",
    person2Number: "+91 98925 37975",
  },
];

const EventContact = ({
  makeMobile,
  clubName,
  person1Name,
  person1Number,
  person2Name,
  person2Number,
}) => {
  return (
    <Stack gap="1rem">
      <Text fz="1.5rem" c="#E5E7EA" lh="1.5rem">
        {clubName}
      </Text>
      <Box>
        <Text c="#E5E7EA" fz={makeMobile ? "1rem" : "1.125rem"} lh={"1.5rem"}>
          {person1Name} -{" "}
          <span className={cssStyles.boldText}>{person1Number}</span>
        </Text>
        {person2Name && person2Number && (
          <Text c="#E5E7EA" fz={makeMobile ? "1rem" : "1.125rem"} lh={"1.5rem"}>
            {person2Name} -{" "}
            <span className={cssStyles.boldText}>{person2Number}</span>
          </Text>
        )}
      </Box>
    </Stack>
  );
};

const ContactDetails = () => {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      bg="#24292E"
      px={isMobileView ? "2rem" : "5rem"}
      py={isMobileView ? "2rem" : "4.5rem"}
    >
      <Text fz={isMobileView ? "2rem" : "3rem"} c="#E5E7EA" lh="100%">
        Need help about a specific event?
      </Text>
      <Text fz={isMobileView ? "2rem" : "3rem"} c="#E5E7EA" lh="100%">
        Contact the coordinators.
      </Text>

      <Grid pt={isMobileView ? "2rem" : "4.5rem"}>
        {contactData_1.map((event, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <EventContact makeMobile={isMobileView} {...event} />
          </Grid.Col>
        ))}
      </Grid>

      <Grid pt={isMobileView ? "1rem" : "3.5rem"}>
        {contactData_2.map((event, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <EventContact makeMobile={isMobileView} {...event} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactDetails;
