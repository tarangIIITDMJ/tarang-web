"use client";

import { Box, Text, Grid, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import cssStyles from "@/app/styles/contact.module.css";

const eventsData = [
  {
    eventName: "Event Name",
    person1Name: "Aditya Raj",
    person1Number: "+1 (432) 568-98-01",
    person2Name: "Swastik Bhowmik",
    person2Number: "+1 (432) 568-98-01",
  },
  // Add more event data here
];

const EventContact = ({
  makeMobile,
  eventName,
  person1Name,
  person1Number,
  person2Name,
  person2Number,
}) => {
  return (
    <Stack gap="1rem">
      <Text fz="1.5rem" c="#E5E7EA" lh="1.5rem">
        {eventName}
      </Text>
      <Box>
        <Text c="#E5E7EA" fz={makeMobile ? "1rem" : "1.125rem"} lh={"1.5rem"}>
          {person1Name} -{" "}
          <span className={cssStyles.boldText}>{person1Number}</span>
        </Text>
        <Text c="#E5E7EA" fz={makeMobile ? "1rem" : "1.125rem"} lh={"1.5rem"}>
          {person2Name} -{" "}
          <span className={cssStyles.boldText}>{person2Number}</span>
        </Text>
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
      py={isMobileView ? "2rem" : "3rem"}
    >
      <Text fz={isMobileView ? "2rem" : "4rem"} c="#E5E7EA" lh="100%">
        Need help about a specific event?
      </Text>
      <Text fz={isMobileView ? "2rem" : "4rem"} c="#E5E7EA" lh="100%">
        Contact the coordinators.
      </Text>

      <Grid pt={isMobileView ? "2rem" : "4.5rem"}>
        {eventsData.map((event, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <EventContact makeMobile={isMobileView} {...event} />
          </Grid.Col>
        ))}
        {eventsData.map((event, index) => (
          <Grid.Col
            key={index + eventsData.length}
            span={{ base: 12, md: 6, lg: 4 }}
          >
            <EventContact makeMobile={isMobileView} {...event} />
          </Grid.Col>
        ))}
        {eventsData.map((event, index) => (
          <Grid.Col
            key={index + 2 * eventsData.length}
            span={{ base: 12, md: 6, lg: 4 }}
          >
            <EventContact makeMobile={isMobileView} {...event} />
          </Grid.Col>
        ))}
      </Grid>

      <Grid pt={isMobileView ? "1rem" : "3.5rem"}>
        {eventsData.map((event, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
            <EventContact makeMobile={isMobileView} {...event} />
          </Grid.Col>
        ))}
        {eventsData.map((event, index) => (
          <Grid.Col
            key={index + eventsData.length}
            span={{ base: 12, md: 6, lg: 4 }}
          >
            <EventContact makeMobile={isMobileView} {...event} />
          </Grid.Col>
        ))}
        {eventsData.map((event, index) => (
          <Grid.Col
            key={index + 2 * eventsData.length}
            span={{ base: 12, md: 6, lg: 4 }}
          >
            <EventContact makeMobile={isMobileView} {...event} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactDetails;
