"use client";

import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Text, Drawer, Stack } from "@mantine/core";

const textStyles = {
  transform: "rotate(-90deg)",
  textEdge: "cap",
  fontFamily: "Inter",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  whiteSpace: "nowrap",
};

export default function Navbar({ children }) {
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleBurgerClick = () => {
    toggle();
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppShell.Navbar bg="#FFFAEF" p={50}>
        <Stack align="center" justify="space-between" h="100vh">
          <Burger opened={opened} onClick={toggle} />
          <Text style={textStyles} c="#292929">
            Tarang 23
          </Text>

          <Text style={textStyles} c="#8C8C8C">
            Home
          </Text>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>

      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size="100%"
        styles={{ content: { backgroundColor: "#FFFAEF" } }}
      >
        <div>
          Drawer Content
          {/* You can put your drawer content here */}
        </div>
      </Drawer>
    </>
  );
}
