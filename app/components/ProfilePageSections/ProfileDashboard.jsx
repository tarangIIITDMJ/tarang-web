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
        <Stack h={"100%"} px={32}>
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
                  h={"5.75rem"}
                  c={"#FFFFFF"}
                  gap={"1rem"}
                  align={"center"}
                >
                  <span style={{ paddingBottom: "2rem" }}>{icon}</span>
                  <Text lh={"1rem"} px={"0.5rem"} size={"1.2rem"}>
                    You've added events to your dashboard, but your Tarang Pass
                    payment is pending. Secure your spot for all selected events
                    now to avoid missing out!
                  </Text>
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

            <Tabs.Panel miw={500} value="second">
              <Stack p={32} w={"100%"} gap={10}>
                <Text fz={32}>Personal Details</Text>
                <Divider w={"90%"} />
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Name:
                  </Text>
                  <Text fz={18}>
                    {user.fname} {user.lname}
                  </Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Age:
                  </Text>
                  <Text fz={18}>{user.age} yrs</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Contact:
                  </Text>
                  <Text fz={18}>{user.phone}</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    E-mail:
                  </Text>
                  <Text fz={18}>{user.email}</Text>
                </Group>
              </Stack>
              <Stack p={32} w={"100%"} gap={10}>
                <Text fz={32}>College Details</Text>
                <Divider w={"90%"} />
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Your College/Institute:
                  </Text>
                  <Text fz={18}>{user.college}</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Address:
                  </Text>
                  <Text fz={18}>
                    {user.district}, {user.state}
                  </Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Degree:
                  </Text>
                  <Text fz={18}>{user.degree}</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Year of Study:
                  </Text>
                  <Text fz={18}>{user.yearOfStudy}</Text>
                </Group>
              </Stack>
            </Tabs.Panel>

            <Tabs.Panel value="Third">Third panel</Tabs.Panel>
          </Tabs>
        </Stack>
      </Paper>

      {/* <Paper w={"100%"} bg={"transparent"} radius={0} p={15} hiddenFrom="sm">
        <Stack gap={32}>
          <Text fz={32}>Dashboard</Text>
          <Text fz={18} c={"#ED3C71"}>
            My Profile
          </Text>
          <Stack
            py={32}
            px={16}
            gap={32}
            style={{ border: "1px solid #383F45" }}
          >
            <Stack gap={8}>
              <Text fz={24}>Personal Details</Text>
              <Divider c={"#9EA5AD"} />
              <Group justify="space-between">
                <Text fz={16}>Name:</Text>
                <Text fz={16}>
                  {user.fname} {user.lname}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Age:</Text>
                <Text fz={16}>{user.age} yrs</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Contact:</Text>
                <Text fz={16}>{user.phone}</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>E-mail:</Text>
                <Text fz={16}>{user.email}</Text>
              </Group>
            </Stack>
            <Stack gap={8}>
              <Text fz={24}>College Details</Text>
              <Divider c={"#9EA5AD"} />
              <Group justify="space-between">
                <Text fz={16}>Your College/Institute:</Text>
                <Text fz={16}>{user.college}</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Address:</Text>
                <Text fz={16}>
                  {user.district}, {user.state}
                </Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Degree:</Text>
                <Text fz={16}>{user.degree}</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Year:</Text>
                <Text fz={16}>{user.yearOfStudy}</Text>
              </Group>
            </Stack>
          </Stack>
        </Stack>
      </Paper> */}
    </>
  );
}
