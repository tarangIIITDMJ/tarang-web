"use client";
import { Flex, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMailCheck } from "@tabler/icons-react";
import ValidateAuth from "../components/ValidateAuth";
function VerifyEmailPage() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <ValidateAuth>
      <Flex justify="center" align="center" h="100vh" bg="#D0EB4C">
        <Stack
          justify="center"
          align="center"
          bg="#F6F4C8"
          w={isMobileView ? "90%" : "50%"}
          h="50%"
          p="2rem"
          style={{ border: "2px solid black" }}
        >
          <IconMailCheck size={64} />
          <Text size={"32px"} fw={600}>
            Verify Your Email!
          </Text>
          <Text align="center" mt="md">
            We have sent a verification link to your email address. Please click
            on the link to verify your email. If you have not received the
            email, please check your spam folder.
          </Text>
        </Stack>
      </Flex>
    </ValidateAuth>
  );
}

export default VerifyEmailPage;
