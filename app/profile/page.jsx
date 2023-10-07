"use client";

import MainAppShell from "../components/MainAppShell";
import LeftProfileCard from "../components/ProfilePageSections/LeftProfileCard";
import ProfileDashboard from "../components/ProfilePageSections/ProfileDashboard";
import { useAuthStore } from "../store/authStore";
import ValidateAuth from "../components/ValidateAuth";
import { Flex } from "@mantine/core";

export default function Profile() {
  const { user } = useAuthStore();
  return (
    <MainAppShell>
      <ValidateAuth>
        {/* {<div>{JSON.stringify(user)}</div>} */}
        <Flex mih={"100vh"} px={60} py={30} bg={"black"} gap={24}>
          <LeftProfileCard />
          <ProfileDashboard />
        </Flex>
      </ValidateAuth>
    </MainAppShell>
  );
}
