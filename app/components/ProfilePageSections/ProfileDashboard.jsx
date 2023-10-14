"use client";
import { Divider, Group, Paper, Stack, Tabs, Text } from "@mantine/core";
import React, { useState } from "react";
import classes from "@/app/styles/profile.module.css";

export default function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState("first");
  return (
    <>
      <Paper
        style={{ border: "1px solid #383F45" }}
        w={"100%"}
        bg={"transparent"}
        radius={0}
        py={40}
        visibleFrom="sm"
      >
        <Stack h={"100%"} px={32}>
          <Text fz={48} c={"#CED2D6"}>
            Dashboard
          </Text>
          <Tabs
            value={activeTab}
            c={"#CED2D6"}
            fw={600}
            classNames={classes}
            onChange={setActiveTab}
            h={"100%"}
            styles={{ list: { border: "none" } }}
          >
            <Tabs.List>
              <Tabs.Tab fz={20} value="first">
                My Profile
              </Tabs.Tab>
              <Tabs.Tab fz={20} value="second">
                My Events
              </Tabs.Tab>
              <Tabs.Tab fz={20} value="Third">
                Payment History
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel miw={500} value="first">
              <Stack p={32} w={"100%"} gap={10} c={"#CED2D6"}>
                <Text fz={32}>Personal Details</Text>
                <Divider c={"#9EA5AD"} w={"90%"} />
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Name:
                  </Text>
                  <Text fz={18}>Name+Surname</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Age:
                  </Text>
                  <Text fz={18}>89 yrs</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Contact:
                  </Text>
                  <Text fz={18}>94408460546</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    E-mail:
                  </Text>
                  <Text fz={18}>abc@gmail.com</Text>
                </Group>
              </Stack>
              <Stack p={32} w={"100%"} c={"#CED2D6"} gap={10}>
                <Text fz={32}>College Details</Text>
                <Divider c={"#9EA5AD"} w={"90%"} />
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Your College/Institute:
                  </Text>
                  <Text fz={18}>Name+Surname</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Address:
                  </Text>
                  <Text fz={18}>89 yrs</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Degree:
                  </Text>
                  <Text fz={18}>94408460546</Text>
                </Group>
                <Group gap={64}>
                  <Text fz={18} w={200}>
                    Year of Study:
                  </Text>
                  <Text fz={18}>20xx</Text>
                </Group>
              </Stack>
            </Tabs.Panel>
            <Tabs.Panel value="second">Second panel</Tabs.Panel>
            <Tabs.Panel value="Third">Third panel</Tabs.Panel>
          </Tabs>
        </Stack>
      </Paper>

      <Paper w={"100%"} bg={"transparent"} radius={0} p={15} hiddenFrom="sm">
        <Stack gap={32} c={"#CED2D6"}>
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
                <Text fz={16}>Name+Surname</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Age:</Text>
                <Text fz={16}>89 yrs</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Contact:</Text>
                <Text fz={16}>94408460546</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>E-mail:</Text>
                <Text fz={16}>abc@gmail.com</Text>
              </Group>
            </Stack>
            <Stack gap={8}>
              <Text fz={24}>College Details</Text>
              <Divider c={"#9EA5AD"} />
              <Group justify="space-between">
                <Text fz={16}>Your College/Institute:</Text>
                <Text fz={16}>Name</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Address:</Text>
                <Text fz={16}>District</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Degree:</Text>
                <Text fz={16}>Bdes</Text>
              </Group>
              <Group justify="space-between">
                <Text fz={16}>Year:</Text>
                <Text fz={16}>20xx</Text>
              </Group>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
