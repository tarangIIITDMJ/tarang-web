"use client";
import MainAppShell from "../components/MainAppShell";
import { useAuthStore } from "../store/authStore";
import { Box, Flex, Tabs } from "@mantine/core";
import ValidateAuth from "../components/ValidateAuth";
import Ticket from "../components/ProfilePageSections/Ticket";
import UserEvents from "../components/ProfilePageSections/UserEvents";
import UserProfile from "../components/ProfilePageSections/UserProfile";
import cssStyles from "@/app/styles/events.module.css";
import { useMediaQuery } from "@mantine/hooks";

export default function Profile() {
  // const { user, isloading } = useAuthStore();
  const isMobileView = useMediaQuery("(max-width: 768px)");
  return (
    <MainAppShell>
      {/* <ValidateAuth>
        <h1>Profile</h1>
        {isloading ? <div>Loading...</div> : <div>{JSON.stringify(user)}</div>}
      </ValidateAuth> */}
      <Box m={0} p={0} bg="black">
        {isMobileView?<Ticket/>:""}
        <Flex direction={isMobileView?"column":"row"} w="auto" bg="black" gap={isMobileView?"0rem":"1.5rem"} px={isMobileView?"0rem":"3.75rem"} py={isMobileView?"0rem":"2.5rem"} className={cssStyles.ProfileContainer}>
          {isMobileView?"":<Ticket/>}
          <Tabs color="#ED3C71" defaultValue="myProfile" w="100%" fw={600} fs="2.25rem">
            <Tabs.List c="#ED3C71">
              <Tabs.Tab value="myProfile" >
                My Profile
              </Tabs.Tab>
              <Tabs.Tab value="myEvents" >
                My Events
              </Tabs.Tab>
              <Tabs.Tab value="paymentHistory" disabled>
                Payment History
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="myProfile">
              <UserProfile/>
            </Tabs.Panel>

            <Tabs.Panel value="myEvents">
              <UserEvents/>
            </Tabs.Panel>

            <Tabs.Panel value="paymentHistory">
              Payment History
            </Tabs.Panel>
          </Tabs>
        </Flex>
      </Box>
    </MainAppShell>
  );
}