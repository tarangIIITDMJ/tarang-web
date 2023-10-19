"use client";

import { Flex, Image } from "@mantine/core";
import MainAppShell from "../components/MainAppShell";
import LoginForm from "../components/LoginPage/LoginForm";
import { useMediaQuery } from "@mantine/hooks";
import { useAuthStore } from "../store/authStore";
import Loader from "../components/Loader";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Login | Tarang'23",
  description:
    "Login to your Tarang'23 account to register for events, workshops, and much more.",
  keywords:
    "Tarang, Tarang'23, IIITDMJ Cultural Fest, Login, Register, Sign In",
};

export default function Login() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const { isAuth, isloading, user } = useAuthStore();
  const router = useRouter();
  if (isloading) return <Loader />;
  else if (isAuth && user.verifyToken == "*") return router.push("/profile");
  else if (isAuth && user.verifyToken != "*")
    return router.push("/verify-email");
  else
    return (
      <>
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
      </>
    );
}
