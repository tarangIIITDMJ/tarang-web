"use client";

import { Flex, Image } from "@mantine/core";
import MainAppShell from "../components/MainAppShell";
import LoginForm from "../components/LoginPage/LoginForm";
import { useMediaQuery } from "@mantine/hooks";

export default function Login() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <MainAppShell>
      <Flex
        h={isMobileView ? "100%" : "100vh"}
        bg="#D0EB4C"
        miw="100%"
        m={0}
        justify="center"
        align="center"
      >
        <Flex
          justify="space-evenly"
          w="100%"
          wrap="wrap"
          gap={40}
          my={isMobileView ? 72 : ""}
        >
          <Image
            src="/login-page.svg"
            alt="login"
            w={isMobileView ? "50%" : "525"}
          />
          <LoginForm isMobileView={isMobileView} />
        </Flex>
      </Flex>
    </MainAppShell>
  );
}
