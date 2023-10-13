"use client";

import React, { useEffect, useState } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Text,
  Drawer,
  Stack,
  Box,
  Divider,
  Group,
  Transition,
  Center,
  Button,
} from "@mantine/core";
import { IconArrowUpRight, IconUserCircle } from "@tabler/icons-react";
import Footer from "./uiComponents/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthStore } from "../store/authStore";

const commonTextStyles = {
  fontSize: "2rem",
  fontWeight: 400,
  color: "#F8F8F8",
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
  color: "#292929",
};

function createNavItem(isMobileView, item, hovered, sethovered) {
  const fontSize = isMobileView ? "2rem" : "2.5rem";

  return (
    <Box
      key={item.name}
      onMouseEnter={() => sethovered(item.name)}
      onMouseLeave={() => sethovered("")}
    >
      <Link href={item.link}>
        <Group
          justify="space-between"
          align="center"
          pr={20}
          style={{ cursor: "pointer" }}
        >
          <Text
            pl={isMobileView ? "2.5rem" : "0"}
            style={{
              ...navItemsStyles,
              fontSize: fontSize,
            }}
          >
            {item.name}
          </Text>
          <Transition
            mounted={hovered == item.name}
            transition="slide-right"
            duration={300}
            timingFunction="ease"
          >
            {(styles) => (
              <div style={styles}>
                <IconArrowUpRight
                  size={"3.5rem"}
                  stroke={1}
                  style={{ marginBottom: "-0.75rem" }}
                />
              </div>
            )}
          </Transition>
        </Group>
      </Link>
      <Divider color="#9A9A9A" size={"md"} mt={25} />
    </Box>
  );
}
export default function MainAppShell({ children }) {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact-us" },
    { name: "FAQ", link: "/faqs" },
  ];

  const [opened, { toggle, close }] = useDisclosure(false);
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [hovered, sethovered] = useState("");
  const { isAuth } = useAuthStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setIsScrolled(currentPosition > scrollPosition);
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  const pathName = usePathname();

  const styles = {
    navbar: {
      backgroundColor: "#1E1E1E",
      border: "2px solid #000",
    },
    header: {
      borderRadius: "50%",
      border: `2px solid ${opened ? "black" : "white"}`,
    },
  };

  return (
    <AppShell
      navbar={{
        width: 96,
        breakpoint: "sm",
        collapsed: { mobile: true },
      }}
    >
      <AppShell.Navbar style={styles.navbar}>
        <Stack align="center" w={96} p={20} justify="space-between" h="100vh">
          <Burger color="#FFF" opened={opened} onClick={toggle} />
          <Text style={textStyles}>
            <Link href={"/"}>Tarang 23</Link>
          </Text>
          <Text style={{ ...textStyles, ...homeTextStyles }}>
            {pathName === "/"
              ? "Home"
              : (
                  navItems.slice(1).find((el) => pathName.includes(el.link)) ||
                  {}
                ).name}
          </Text>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Header
        style={styles.header}
        pos={"fixed"}
        top={48}
        left={16}
        zIndex={201}
        h={56}
        w={56}
        bg={opened ? "#FFF4E2" : "#000"}
        hiddenFrom="sm"
      >
        <Center w={"100%"} h={"100%"}>
          <Burger
            opened={opened}
            onClick={toggle}
            color={opened ? "black" : "white"}
            hiddenFrom="sm"
          />
        </Center>
      </AppShell.Header>
      <AppShell.Main>
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
              <Box onClick={toggle} style={{ width: "100%" }} key={item.name}>
                {createNavItem(isMobileView, item, hovered, sethovered)}
              </Box>
            ))}
          </Stack>
        </Drawer>
        {children}
        {pathName !== "/login" &&
          pathName !== "/profile" &&
          pathName !== "/signup" && (
            <ScrollVisibleBox isScrolled={isScrolled} isAuth={isAuth} />
          )}
        <Link href={isAuth ? "/profile" : "/login"}>
          <Box
            hiddenFrom="sm"
            pos="fixed"
            top={48}
            right={16}
            bg={"#D0EB4C"}
            h={48}
            w={48}
            style={{ borderRadius: "50%" }}
          >
            <IconUserCircle size={48} strokeWidth={1} color="black" />
          </Box>
        </Link>
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

function ScrollVisibleBox({ isScrolled, isAuth }) {
  return (
    <Box
      visibleFrom="sm"
      pos="fixed"
      left="85vw"
      top="20px"
      style={{
        opacity: isScrolled ? 0 : 1,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <Link href={isAuth ? "/profile" : "/login"}>
        <Button
          size="lg"
          color="#D0EB4C"
          leftSection={
            <IconUserCircle size={32} strokeWidth={1} color="black" />
          }
          style={{
            fontSize: "1.125rem",
            fontWeight: 500,
            border: "2px solid black",
          }}
          c="#000"
          py="0.3125rem"
          radius="2.5rem"
        >
          {isAuth ? "Dashboard" : "Login"}
        </Button>
      </Link>
    </Box>
  );
}
