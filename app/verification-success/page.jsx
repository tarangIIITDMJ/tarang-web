"use client";
import { useEffect } from "react";
import { verifyEmail } from "../utils/apis";
import { useSearchParams } from "next/navigation";
import { Button, Flex, Stack, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { motion } from "framer-motion";
function VerificationSuccess() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const isMobileView = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    const verifyEmailHandler = async () => {
      try {
        const response = await verifyEmail(code);
        if (response.status === 200) {
        }
      } catch (error) {}
    };
    if (code) {
      verifyEmailHandler();
    }
  }, [code]);
  return (
    <>
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
          <IconCheck size={64} />
          <Text size={"32px"} fw={600}>
            Email Verified!
          </Text>
          <Text align="center" mt="md">
            Your email has been verified successfully. You can now login to your
            account.
          </Text>
          <Link href="/profile">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button bg="black" color="white" mt="md">
                Go to Dashboard
              </Button>
            </motion.div>
          </Link>
        </Stack>
      </Flex>
    </>
  );
}

export default VerificationSuccess;
