"use client";

import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Text, Drawer, Stack } from "@mantine/core";

const textStyles = {
  transform: "rotate(-90deg)",
  fontFamily: "Inter",
  fontSize: "2rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
  color: "#292929",
};

const homeTextStyles = {
  transform: "rotate(-90deg) translateX(45%)",
  color: "#8C8C8C",
};

export default function MainAppShell({ children }) {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <AppShell navbar={{ width: 96 }} padding="md">
      <AppShell.Navbar bg="#FFFAEF" p={20}>
        <Stack align="center" justify="space-between" h="100vh">
          <Burger opened={opened} onClick={toggle} />
          <Text style={textStyles}>Tarang 23</Text>
          <Text style={{ ...textStyles, ...homeTextStyles }}>Home</Text>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>

      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="calc(100% - 96px)"
        position="right"
        styles={{
          content: {
            backgroundColor: "#FFFAEF",
          },
        }}
        transitionProps={{
          transition: "scale-x",
          duration: 150,
          timingFunction: "linear",
        }}
        overlayProps={{ backgroundOpacity: 0 }}
      >
        <div>Drawer Content</div>
      </Drawer>
    </AppShell>
  );
}
