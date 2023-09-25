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
  Paper,
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

function createNavItem(isMobileView, text) {
  const fontSize = isMobileView ? "2rem" : "2.5rem";

  return (
    <Box key={text}>
      <Text
        pl={isMobileView ? "2.5rem" : "0"}
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

  return (
    <AppShell>
      {isMobileView !== undefined && (
        <AppShell.Navbar
          h={"min-content"}
          zIndex={201}
          withBorder={isMobileView ? false : true}
          bg={isMobileView ? "transparent" : "#FFFAEF"}
        >
          {!isMobileView ? (
            <Stack
              align="center"
              w={96}
              p={20}
              justify="space-between"
              h="100vh"
            >
              <Burger opened={opened} onClick={toggle} />
              <Text style={textStyles}>Tarang 23</Text>
              <Text style={{ ...textStyles, ...homeTextStyles }}>Home</Text>
            </Stack>
          ) : (
            <Paper
              radius={"50%"}
              bg={"#FFF4E2"}
              pos={"relative"}
              p={10}
              top={25}
              left={15}
              withBorder
              style={{ border: "1px solid black" }}
            >
              <Burger
                opened={opened}
                onClick={toggle}
                size={"md"}
                styles={{
                  root: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
              />
            </Paper>
          )}
        </AppShell.Navbar>
      )}
      <AppShell.Main>{children}</AppShell.Main>

      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={isMobileView ? "100%" : "calc(100% - 96px)"}
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
              : "4.5rem 1.0rem 0 1.0rem",
            marginTop: isMobileView ? "20px" : "0px",
          }}
        >
          {navItems.map((item, index) => (
            <Box style={{ width: "100%" }} key={item}>
              {createNavItem(isMobileView, item)}
            </Box>
          ))}
        </Stack>
      </Drawer>
    </AppShell>
  );
}
