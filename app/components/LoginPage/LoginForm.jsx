"use client";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Box, Code, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const LoginForm = ({ isMobileView }) => {
  const [submittedValues, setSubmittedValues] = useState("");

  const form = useForm({
    initialValues: {
      eeemail: "",
      password: "",
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
          onSubmit={form.onSubmit((values) =>
            setSubmittedValues(JSON.stringify(values, null, 2))
          )}
        >
          <TextInput
            label="Email"
            placeholder="Enter your email"
            styles={{
              input: { border: "1px solid #000", marginTop: 6 },
            }}
            radius={0}
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Password"
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
          <Button
            color="black"
            size={isMobileView ? "md" : "lg"}
            mt="1.5rem"
            mx="auto"
            rightSection={<IconArrowRight />}
          >
            Sign in
          </Button>
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
