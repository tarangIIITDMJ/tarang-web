import React, { useState } from "react";
import { Button, Card, Flex, Paper, Stack, Text } from "@mantine/core";
import { IconClipboard, IconLogout, IconUserCircle } from "@tabler/icons-react";
import { Image } from "@mantine/core";
import profileCSS from "@/app/styles/profile.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { logout } from "@/app/utils/apis";
import { notifications } from "@mantine/notifications";
import { useAuthStore } from "../../store/authStore";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LeftProfileCard({ user }) {
  const { setUser, setIsAuth } = useAuthStore();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const response = await logout();
      if (response.status === 200) {
        setUser(null);
        setIsAuth(false);
        notifications.show({
          title: "Success",
          message: "Logged out successfully",
          autoClose: 2000,
        });
      }
      setLoading(false);
    } catch (error) {
      notifications.show({
        title: "Error",
        color: "red",
        message: "Something went wrong",
        autoClose: 2000,
      });
      setLoading(false);
    }
  };

  function StarPaper({ pc }) {
    return (
      <Paper
        bg={"transparent"}
        p={15}
        visibleFrom={pc ? "sm" : null}
        hiddenFrom={pc ? null : "sm"}
      >
        <Flex
          direction={"column"}
          className={profileCSS.paperCardFlex}
          align="center"
          gap={30}
          px={23}
          py={29}
          bg={"#ebff8a"}
        >
          <Image
            src="/profileStar.svg"
            alt=""
            w="4.5rem"
            h="4.5rem"
            className={profileCSS.profileStar}
          />
          <Stack
            gap={"xs"}
            align="center"
            className={profileCSS.profileCardFlexStack}
          >
            <Text fz={24}>Refer a friend</Text>
            <Text
              c="#383F45"
              ta={isMobile ? "" : "center"}
              fz={18}
              lh="1.5rem"
              className={profileCSS.text}
            >
              Refer a friend or a group and unlock exciting offers for both of
              you!
            </Text>
            <Link href="/referral">
              <Text fw={500} style={{ textDecorationLine: "underline" }}>
                Learn More
              </Text>
            </Link>
          </Stack>
        </Flex>
      </Paper>
    );
  }

  return (
    <>
      <Card
        bg="#D0EB4C"
        miw="18rem"
        w={"18rem"}
        p={0}
        radius={0}
        className={profileCSS.leftCard}
      >
        <Stack py="2.25rem" px="1rem" w={"100%"} h={"100%"} gap="2rem">
          <Flex
            direction={"column"}
            align="center"
            w={"100%"}
            gap="0.5rem"
            className={profileCSS.profileFlex}
          >
            <IconUserCircle color="#ED3C71" size={96} stroke={1} />
            <Stack gap={0}>
              <Text fz={32}>Hi {user.fname}!</Text>
              <Text
                fz={18}
                mt={10}
                c="#454C52"
                fw={500}
                ta={isMobile ? "" : "center"}
              >
                Tarang ID:{" "}
                <Flex
                  justify="center"
                  align="center"
                  gap={4}
                  onClick={() => {
                    navigator.clipboard.writeText(user.tarang_id);
                    notifications.show({
                      title: "Success",
                      message: "Copied to clipboard",
                      autoClose: 2000,
                    });
                  }}
                  style={{ cursor: "pointer" }}
                  className={profileCSS.profileCardSubFlex}
                >
                  <Text fw={600} style={{ textDecorationLine: "underline" }}>
                    {user.tarang_id}
                  </Text>
                  <IconClipboard size={22} />
                </Flex>
              </Text>
            </Stack>
          </Flex>
          <StarPaper pc={true} />
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="xl"
              color="#F34141"
              fz={18}
              rightSection={<IconLogout size={25} stroke={1.5} />}
              radius={0}
              fullWidth={!isMobile}
              onClick={handleLogout}
              loading={loading}
              className={profileCSS.logoutButton}
            >
              Log out
            </Button>
          </motion.div>
        </Stack>
      </Card>
      <StarPaper pc={false} />
    </>
  );
}
