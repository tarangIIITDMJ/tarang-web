"use client";

import React, { useEffect, useState } from "react";
import {
  Divider,
  Group,
  Paper,
  Stack,
  Tabs,
  Text,
  Button,
  Flex,
  Alert,
  ScrollArea,
  Center,
  Image,
} from "@mantine/core";
import {
  IconArrowUpRight,
  IconPlus,
  IconInfoCircle,
  IconDiscountCheckFilled,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";
import Loader from "@/app/components/Loader/index";
import { getEvent } from "@/app/utils/apis";
import { useMediaQuery } from "@mantine/hooks";
import ProfileEventCard from "./ProfileEventCard";
import { motion } from "framer-motion";
import classes from "@/app/styles/profile.module.css";

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

  const handleEventRemoved = (removedEventSlug) => {
    setEventsLoader(true);
    const updatedEvents = eventDetails.filter(
      (event) => event.slug !== removedEventSlug
    );
    setEventDetails(updatedEvents);
    setEventsLoader(false);
  };

  useEffect(
    () => {
      setEventsLoader(true);
      Promise.all(
        user.events.map((event) => fetchEventDetails(event.slug))
      ).then((details) => {
        setEventDetails(details.filter((detail) => detail !== null));
        setEventsLoader(false);
      });
    },
    [user.events],
    []
  );

  function UserDetails({ heading, value }) {
    return (
      <Group align="flex-start">
        <Text
          c="#454C52"
          w={isMobile ? "7rem" : "9rem"}
          fz={isMobile ? 15 : 18}
        >
          {heading}:
        </Text>
        <Text fz={isMobile ? 15 : 18}>{value}</Text>
      </Group>
    );
  }
  return (
    <>
      <Paper
        bg={"transparent"}
        style={{ border: !isMobile ? "1px solid #383F45" : "" }}
        w={"100%"}
        py={isMobile ? "1rem" : "2.5rem"}
        radius={0}
      >
        <Stack h={"100%"} px={32} className={classes.DashboardStack}>
          <Text fz={isMobile ? 32 : 48} c="#24292E">
            Dashboard
          </Text>
          <Tabs
            value={activeTab}
            classNames={classes}
            onChange={setActiveTab}
            h={"100%"}
            styles={{ list: { border: "none" } }}
          >
            <Tabs.List>
              <Tabs.Tab
                fz={20}
                fw={activeTab === "first" ? 600 : 500}
                value="first"
              >
                My Events
              </Tabs.Tab>
              <Tabs.Tab
                fz={20}
                fw={activeTab === "second" ? 600 : 500}
                value="second"
              >
                My Profile
              </Tabs.Tab>
              <Tabs.Tab
                fz={20}
                fw={activeTab === "third" ? 600 : 500}
                value="third"
              >
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
                  radius={0}
                >
                  <Flex
                    align={"start"}
                    gap={"0.5rem"}
                    className={classes.completePaymentFlex}
                  >
                    <IconDiscountCheckFilled />
                    <Text
                      lh={"1.35rem"}
                      fz={isMobile ? "1rem" : "1.125rem"}
                      px={"8px"}
                    >
                      Congratulations! Your Tarang Card payment has been
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
                  radius={0}
                  icon={<IconInfoCircle />}
                >
                  <Flex className={classes.completePaymentFlex}>
                    <Text
                      lh={"1.35rem"}
                      fz={isMobile ? "1rem" : "1.125rem"}
                      pb={"1rem"}
                      px={"5px"}
                    >
                      Payment complete! We're verifying it now. Verification
                      usually takes within 12 hours. For any assistance or
                      questions, reach us via WhatsApp. Your Tarang experience
                      awaits!
                    </Text>
                  </Flex>
                  <Group pt={"md"}>
                    <Link href="https://wa.me/+918010726595">
                      <Text fw={600}>Contact Us on WhatsApp </Text>
                    </Link>
                    <IconArrowRight />
                  </Group>
                </Alert>
              ) : (
                <Alert
                  mb={"xl"}
                  mt={"md"}
                  variant="filled"
                  color="red"
                  radius={0}
                  icon={<IconInfoCircle />}
                >
                  <Flex
                    align={"space-between"}
                    gap="1rem"
                    className={classes.completePaymentFlex}
                  >
                    <Text
                      lh={"1.35rem"}
                      fz={isMobile ? "1rem" : "1.125rem"}
                      pb={"1rem"}
                      px={"5px"}
                    >
                      To confirm your registration, make sure to buy your Tarang
                      Card! After that, you can add as many events as you'd
                      like.
                    </Text>
                    <Link
                      target="_blank"
                      href={`https://docs.google.com/forms/d/e/1FAIpQLSd7Bs0uQayl1GSOaB_dwZFYtpRBAO67iehIgOC88eOD-lhOFA/viewform?usp=pp_url&entry.275844225=${
                        user.fname + " " + user.lname
                      }&entry.1392576540=${user.tarang_id}&entry.272288439=${
                        user.email
                      }&entry.610706180=${user.phone}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Button
                          bg="#FFF"
                          c="black"
                          radius={0}
                          size={isMobile ? "sm" : "xl"}
                          style={{ fontWeight: "600" }}
                          rightSection={<IconArrowUpRight />}
                          fullWidth={isMobile ? true : false}
                        >
                          Complete Payment
                        </Button>
                      </motion.div>
                    </Link>
                  </Flex>
                </Alert>
              )}
              <Flex justify={"space-between"} align={"center"}>
                <Text c="#383F45" size={"lg"} style={{ fontWeight: "600" }}>
                  {eventDetails.length} Events
                </Text>
                <Link href="/events">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      size="md"
                      variant="filled"
                      rightSection={<IconPlus />}
                      mr={"-1rem"}
                      className={classes.profileAddEventButton}
                    >
                      Add more events
                    </Button>
                  </motion.div>
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
                          hasPaid={user.paymentVerified}
                          formFilled={user.paymentFormFilled}
                          event={event}
                          onEventRemoved={handleEventRemoved}
                        />
                      ))
                    ) : (
                      <Center h={"100%"} w={"100%"} mt="3rem">
                        <Stack gap={10} align="center">
                          <Image src="/empty.svg" alt="empty" w={300} />
                          <Text fz={24} mt={10}>
                            No Events Added
                          </Text>
                        </Stack>
                      </Center>
                    )}
                  </ScrollArea>
                </>
              )}
            </Tabs.Panel>

            <Tabs.Panel value="second">
              <Stack
                w={"100%"}
                p={32}
                gap={10}
                className={classes.PersonalDetailsStack}
              >
                <Text fz={isMobile ? 25 : 32}>Personal Details</Text>
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
                <Text fz={isMobile ? 25 : 32}>College Details</Text>
                <Divider w={"90%"} />
                <UserDetails
                  heading={"College/Institute"}
                  value={user.college}
                />
                <UserDetails
                  heading={"Address"}
                  value={user.district + ", " + user.state}
                />
                <UserDetails heading={"Degree"} value={user.degree} />
                <UserDetails
                  heading={"Year of Study"}
                  value={user.yearOfStudy}
                />
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="third">
              {" "}
              <Center h={"100%"} w={"100%"} mt="3rem">
                <Stack gap={10} align="center">
                  <Image src="/empty.svg" alt="empty" w={300} />
                  <Text fz={24} mt={10}>
                    No Payment Yet
                  </Text>
                </Stack>
              </Center>
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Paper>
    </>
  );
}
