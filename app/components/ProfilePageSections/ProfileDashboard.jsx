"use client";
import {
  Divider,
  Group,
  Paper,
  Stack,
  Tabs,
  Text,
  Button,
  Flex,
  Badge,
  Alert,
  ScrollArea,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import classes from "@/app/styles/profile.module.css";
import { getEvent } from "@/app/utils/apis";
import ProfileEventCard from "./ProfileEventCard";
import {
  IconArrowUpRight,
  IconPlus,
  IconAlertCircleFilled,
  IconInfoCircle,
  IconDiscountCheck,
  IconDiscountCheckFilled,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";
import Loader from "@/app/components/Loader/index";
import { useMediaQuery } from "@mantine/hooks";

async function fetchEventDetails(eventSlug) {
  try {
    const eventDetail = await getEvent(eventSlug);
    return eventDetail.data.event;
  } catch (error) {
    console.error("Error fetching event details:", error);
    return null;
  }
}

export default function ProfileDashboard({ user }) {
  const [activeTab, setActiveTab] = useState("first");
  const [eventDetails, setEventDetails] = useState([]);
  const [eventsLoader, setEventsLoader] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const icon = <IconAlertCircleFilled color="#CD3636" size={25} />;

  const handleEventRemoved = (removedEventSlug) => {
    setEventsLoader(true);
    const updatedEvents = eventDetails.filter((event) => event.slug !== removedEventSlug);
    setEventDetails(updatedEvents);
    setEventsLoader(false);
  };


  useEffect(() => {
    setEventsLoader(true);
    Promise.all(user.events.map((event) => fetchEventDetails(event.slug))).then(
      (details) => {
        setEventDetails(details.filter((detail) => detail !== null));
        setEventsLoader(false);
      }
    );
  }, [user.events],[]);

  function UserDetails({ heading, value }) {
    return (
      <Group  align="flex-start">
        <Text c={"#454C52"} w={isMobile?"7rem":"9rem"} fz={isMobile?15:18} >
          {heading}:
        </Text>
        <Text  fz={isMobile?15:18} >
          {value}
        </Text>
      </Group>
    );
  }
  return (
    <>
      <Paper
        style={{ border: "1px solid #383F45" }}
        m={isMobile ? "2px" : ""}
        w={"100%"}
        bg={"transparent"}
        radius={0}
        py={40}
        // visibleFrom="sm"
      >
        <Stack h={"100%"} px={32} className={classes.DashboardStack}>
          <Text fz={isMobile?35:48}>Dashboard</Text>
          <Tabs
            value={activeTab}
            fw={600}
            classNames={classes}
            onChange={setActiveTab}
            h={"100%"}
            styles={{ list: { border: "none" } }}
          >
            <Tabs.List>
              <Tabs.Tab fz={20} value="first">
                My Events
              </Tabs.Tab>
              <Tabs.Tab fz={20} value="second">
                My Profile
              </Tabs.Tab>
              <Tabs.Tab fz={20} value="Third">
                Payment History
              </Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="first">
              {user.paymentVerified ? (
                <Alert
                  mt={"md"}
                  mb={"xl"}
                  variant="filled"
                  color="green"
                  // title="Payment done and verified"
                >
                  <Flex align={"center"} gap={"0.5rem"} className={classes.completePaymentFlex}>
                    <IconDiscountCheckFilled />
                    <Text lh={"1.35rem"} fz={isMobile?"1rem":"1.125rem"} pb={"1rem"} px={"8px"}>
                      Congratulations! Your Tarang Pass payment has been
                      verified. You're all set to enjoy all selected events. Get
                      ready for a fantastic Tarang experience!
                    </Text>
                  </Flex>
                </Alert>
              ) : user.paymentFormFilled ? (
                <Alert
                  mt={"md"}
                  mb={"xl"}
                  variant="filled"
                  color="yellow"
                  // title="verification pending"
                  icon={<IconInfoCircle />}
                >
                  <Flex className={classes.completePaymentFlex}>
                    <Text lh={"1.35rem"} fz={isMobile?"1rem":"1.125rem"} pb={"1rem"} px={"5px"}>
                      Payment complete! We're verifying it now. Verification
                      usually takes within 12 hours. For any assistance or
                      questions, reach us via WhatsApp. Your Tarang experience
                      awaits!
                    </Text>
                  </Flex>
                  <Group pt={"md"}>
                    <Text fw={600}>Contact Us on WhatsApp </Text>
                    <IconArrowRight />
                  </Group>
                </Alert>
              ) : (
                <Alert
                  mb={"xl"}
                  mt={"md"}
                  variant="filled"
                  color="red"
                  // title="Payment not done yet"
                  icon={<IconInfoCircle />}
                >
                  <Flex align={"flex-start"}  className={classes.completePaymentFlex}>
                    <Text lh={"1.35rem"} fz={isMobile?"1rem":"1.125rem"} pb={"1rem"} px={"5px"}>
                      You've added events to your dashboard, but your Tarang
                      Pass payment is pending. Secure your spot for all selected
                      events now to avoid missing out!
                    </Text>
                    <Link href="/tarang-pass">
                      <Button
                        radius={0}
                        bg={"#FFFFFF"}
                        size={isMobile?"sm":"xl"}
                        c={"black"}
                        style={{ fontWeight: "650" }}
                        rightSection={<IconArrowUpRight />}
                        fullWidth={isMobile ? true : false}
                      >
                        Complete Payment
                      </Button>
                    </Link>
                  </Flex>
                </Alert>
              )}
              <Flex justify={"space-between"} align={"center"}>
                <Text
                  style={{ fontWeight: "600" }}
                  size={"lg"}
                  color={"#383F45"}
                >
                  {eventDetails.length} Events
                </Text>
                <Link href="/events">
                  {" "}
                  <Button
                  mr={"-1rem"}
                    className={classes.profileAddEventButton}
                    size="md"
                    variant="filled"
                    rightSection={<IconPlus />}
                  >
                    Add more events
                  </Button>
                </Link>
              </Flex>
              {eventsLoader ? (
                <Loader />
              ) : (
                <>
                  <ScrollArea h={"50vh"}>
                    {eventDetails.length ? (
                      eventDetails.map((event, index) => (
                        <ProfileEventCard
                          key={index}
                          hasPaid={user.hasPaid}
                          event={event}
                            onEventRemoved={handleEventRemoved}
                        />
                      ))
                    ) : (
                      <Alert
                        variant="light"
                        color="yellow"
                        title="No Event Registered"
                        icon={<IconInfoCircle />}
                      >
                        You haven't added any events so far.
                      </Alert>
                    )}
                  </ScrollArea>
                </>
              )}
            </Tabs.Panel>

            <Tabs.Panel value="second">
              <Stack
                p={32}
                className={classes.PersonalDetailsStack}
                w={"100%"}
                gap={10}
              >
                <Text fz={isMobile?25:32}>Personal Details</Text>
                <Divider w={"90%"} />

                <UserDetails
                  heading={"Name"}
                  value={user.fname + " " + user.lname}
                />
                <UserDetails heading={"Age"} value={user.age} />
                <UserDetails heading={"Contact"} value={user.phone} />
                <UserDetails heading={"E-mail"} value={user.email} />
              </Stack>

              <Stack
                p={32}
                w={"100%"}
                gap={10}
                className={classes.PersonalDetailsStack}
              >
                <Text fz={isMobile?25:32}>College Details</Text>
                <Divider w={"90%"} />
                <UserDetails
                  heading={"College/Institute"}
                  value={user.college}
                />
                <UserDetails
                  heading={"Address"}
                  value={user.district + " " + user.state}
                />
                <UserDetails heading={"Degree"} value={user.degree} />
                <UserDetails
                  heading={"Year of Study"}
                  value={user.yearOfStudy}
                />
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="Third">Third panel</Tabs.Panel>
          </Tabs>
        </Stack>
      </Paper>
    </>
  );
}
