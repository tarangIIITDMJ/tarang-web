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
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import classes from "@/app/styles/profile.module.css";
import { getEvent } from "@/app/utils/apis";
import ProfileEventCard from "./ProfileEventCard";
import {
  IconArrowUpRight,
  IconPlus,
  IconAlertCircleFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import Loader from "@/app/components/Loader/index";

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

  const icon = <IconAlertCircleFilled color="#CD3636" size={25} />;

  useEffect(() => {
    setEventsLoader(true);
    Promise.all(user.events.map((event) => fetchEventDetails(event.slug))).then(
      (details) => {
        setEventDetails(details.filter((detail) => detail !== null));
        setEventsLoader(false);
      }
    );
  }, [user.events]);

  function UserDetails({ heading, value }) {
    return (
      <Group gap={64} className={classes.userDetailsGroup} align="flex-start">
        <Text fz={18} className={classes.userDetailsHeading}>
          {heading}:
        </Text>
        <Text className={classes.userDetailsValue} fz={18}>
          {value}
        </Text>
      </Group>
    );
  }
  return (
    <>
      <Paper
        style={{ border: "1px solid #383F45" }}
        w={"100%"}
        bg={"transparent"}
        radius={0}
        py={40}
        // visibleFrom="sm"
      >
        <Stack h={"100%"} px={32} className={classes.DashboardStack}>
          <Text fz={48}>Dashboard</Text>
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
              {user.hasPaid ? (
                <></>
              ) : (
                <Flex
                  my={"2rem"}
                  p={"0.875rem"}
                  w={"100%"}
                  bg={"#F34141"}
                  c={"#FFFFFF"}
                  gap={"1rem"}
                  align={"center"}
                  className={classes.completePaymentFlex}
                >
                  <Flex>
                    <span style={{ paddingBottom: "2rem" }}>{icon}</span>
                    <Text
                      lineClamp={5}
                      lh={"1rem"}
                      px={"0.5rem"}
                      size={"1.2rem"}
                    >
                      You've added events to your dashboard, but your Tarang
                      Pass payment is pending. Secure your spot for all selected
                      events now to avoid missing out!
                    </Text>
                  </Flex>
                  <Link href="/tarang-pass">
                    <Button
                      radius={0}
                      bg={"#FFFFFF"}
                      size="xl"
                      c={"black"}
                      style={{ fontWeight: "650", fontSize: "1.125rem" }}
                      rightSection={<IconArrowUpRight />}
                    >
                      Complete Payment
                    </Button>
                  </Link>
                </Flex>
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
                  {eventDetails.map((event, index) => (
                    <ProfileEventCard
                      key={index}
                      hasPaid={user.hasPaid}
                      event={event}
                    />
                  ))}
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
                <Text fz={32}>Personal Details</Text>
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
                <Text fz={32}>College Details</Text>
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
