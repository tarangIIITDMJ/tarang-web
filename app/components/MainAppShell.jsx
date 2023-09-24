"use client";

import React from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Text,
  Drawer,
  Stack,
  Box,
  Divider,
} from "@mantine/core";

const commonTextStyles = {
  fontFamily: "General Sans",
  fontSize: "2rem",
  fontWeight: 500,
  color: "#292929",
  whiteSpace: "nowrap",
};

const textStyles = {
  ...commonTextStyles,
  transform: "rotate(-90deg)",
};

const homeTextStyles = {
  ...commonTextStyles,
  transform: "rotate(-90deg) translateX(45%)",
  color: "#8C8C8C",
};

const navItemsStyles = {
  ...commonTextStyles,
  lineHeight: "143.98%",
  marginTop: "0.75rem",
};

function createNavItem(text) {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const fontSize = isMobileView ? "2rem" : "2.5rem";

  return (
    <Box key={text}>
      <Text
        style={{
          ...navItemsStyles,
          fontSize: fontSize,
        }}
      >
        {text}
      </Text>
      <Divider color="#9A9A9A" size={"md"} mt={25} />
    </Box>
  );
}
export default function MainAppShell({ children }) {
  const navItems = ["Home", "About", "Events", "Gallery", "Contact Us", "FAQ"];

  const [opened, { toggle, close }] = useDisclosure(false);
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const drawerSize = isMobileView ? "100%" : "calc(100% - 96px)";

  return (
    <AppShell navbar={{ width: 96 }} padding="md">
      {!isMobileView ? (
        <AppShell.Navbar bg="#FFFAEF" p={20}>
          <Stack align="center" justify="space-between" h="100vh">
            <Burger opened={opened} onClick={toggle} />
            <Text style={textStyles}>Tarang 23</Text>
            <Text style={{ ...textStyles, ...homeTextStyles }}>Home</Text>
          </Stack>
        </AppShell.Navbar>
      ) : (
        <Box p={20}>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            styles={{
              root: {
                position: "relative",
                zIndex: "201",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              },
            }}
            w={"2.5rem"}
            h={"2.5rem"}
            bg={"#FFFAEF"}
          />
        </Box>
      )}
      <AppShell.Main>{children}</AppShell.Main>

      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={drawerSize}
        position="right"
        styles={{
          content: {
            backgroundColor: "#FFF4E2",
          },
        }}
        transitionProps={{
          transition: "scale-x",
          duration: 150,
          timingFunction: "linear",
        }}
        overlayProps={{ backgroundOpacity: 0 }}
      >
        <Stack
          align="flex-start"
          style={{
            padding: !isMobileView
              ? "2.5rem 6.5rem 5rem 2.5rem"
              : "1.5rem 1.5rem 0 2rem",
            marginTop: isMobileView ? "20px" : "0px",
          }}
        >
          {navItems.map((item, index) => (
            <Box style={{ width: "100%" }} key={item}>
              {createNavItem(item)}
            </Box>
          ))}
        </Stack>
      </Drawer>
    </AppShell>
  );
}
