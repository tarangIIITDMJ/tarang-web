"use client";

import MainAppShell from "../components/MainAppShell";
import LeftProfileCard from "../components/ProfilePageSections/LeftProfileCard";
import ProfileDashboard from "../components/ProfilePageSections/ProfileDashboard";
import { useAuthStore } from "../store/authStore";
import ValidateAuth from "../components/ValidateAuth";
import { Flex } from "@mantine/core";
import profileCSS from "@/app/styles/profile.module.css";

export default function Profile() {
  const { user } = useAuthStore();
  return (
    <ValidateAuth>
      <MainAppShell>
        <Flex
          mih={"100vh"}
          px={60}
          py={30}
          bg={"#F6F4C8"}
          gap={24}
          className={profileCSS.MainFlex}
        >
          <LeftProfileCard user={user} />
          <ProfileDashboard user={user} />
        </Flex>
      </MainAppShell>
    </ValidateAuth>
  );
}
