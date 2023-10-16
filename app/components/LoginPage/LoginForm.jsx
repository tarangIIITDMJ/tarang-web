"use client";
import { useForm, isEmail, hasLength } from "@mantine/form";
import { TextInput, Button, Box, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import Link from "next/link";
import { login } from "@/app/utils/apis";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/authStore";
import { PasswordInput } from "@mantine/core";
import { motion } from "framer-motion";
const LoginForm = ({ isMobileView }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const { setIsAuth, setUser } = useAuthStore();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: hasLength(
        { min: 8 },
        "Password should be at least 8 characters long"
      ),
    },
    transformValues: (values) => ({
      email: values.email.trim(),
      password: values.password.trim(),
    }),
  });

  return (
    <>
      <Box
        w="525"
        h="100%"
        bg="#F6F4C8"
        p="2rem"
        m="1rem"
        style={{ border: "2px solid #000" }}
      >
        <Text size="1.5rem" fw={500} mb="1.5rem">
          Sign In
        </Text>
        <form
          onSubmit={form.onSubmit(async (values) => {
            setIsLoading(true);
            try {
              const result = await login(values.email, values.password);
              setIsAuth(true);
              setUser(result.data.user);
              notifications.show({
                title: "Success",
                message: "Logged in successfully",
                color: "green",
                autoClose: 3000,
                onClose: () => {
                  push("/profile");
                },
              });
            } catch (error) {
              notifications.show({
                title: "Error",
                message: "Invalid credentials or server error",
                color: "red",
                autoClose: 2000,
              });
            }
            setIsLoading(false);
          })}
        >
          <TextInput
            type="email"
            label="Email"
            placeholder="Enter your email"
            styles={{ input: { border: "1px solid #000", marginTop: 6 } }}
            radius={0}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            type="password"
            placeholder="Enter password"
            mt="md"
            styles={{ input: { border: "1px solid #000", marginTop: 6 } }}
            radius={0}
            {...form.getInputProps("password")}
          />
          <Text
            size="md"
            mt="0.5rem"
            mb="1rem"
            align="right"
            style={{ textDecoration: "underline" }}
          >
            Forgot password?
          </Text>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              type="submit"
              color="black"
              size={isMobileView ? "md" : "lg"}
              mt="1.5rem"
              mx="auto"
              loading={isLoading}
              fullWidth
              rightSection={<IconArrowRight />}
            >
              Sign in
            </Button>
          </motion.div>
          <Text size="md" mt="3rem" mb="1rem" align="center">
            Don&apos;t have an account? &nbsp;
            <Link
              href="/signup"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              Sign up
            </Link>
          </Text>
        </form>
      </Box>
    </>
  );
};

export default LoginForm;
