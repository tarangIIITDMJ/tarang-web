"use client";

import {
  Box,
  Flex,
  Text,
  Stepper,
  Button,
  Group,
  Grid,
  TextInput,
  Select,
  Stack,
} from "@mantine/core";
import MainAppShell from "../components/MainAppShell";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { IconArrowRight } from "@tabler/icons-react";

export default function Signup() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [active, setActive] = useState(0);
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      fname: "",
      lname: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",

      college: "",
      state: "",
      district: "",
      degree: "",
      yearOfStudy: "",
    },

    transformValues: (values) => ({}),
  });
  const nextStep = () => {
    if (active === 1) form.onSubmit((values) => console.log(values)); // TODO: Add submit functionality
    setActive((current) => (current < 3 ? current + 1 : current));
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <MainAppShell>
      <Flex
        h={isMobileView ? "100%" : "100vh"}
        bg="#D0EB4C"
        miw="100%"
        m={0}
        justify="center"
        p={isMobileView ? "1rem" : "4rem"}
        align="center"
      >
        <Box
          p={isMobileView ? "1rem" : "4rem"}
          py="2rem"
          w="100%"
          bg="#F6F4C8"
          my={isMobileView ? 120 : ""}
          style={{ border: "2px solid #000" }}
        >
          <Text size="1.5rem" fw={500} mb="3rem">
            Sign Up
          </Text>
          <form>
            <Stepper
              active={active}
              onStepClick={setActive}
              color="#ED3C71"
              px="0.5rem"
              mx="auto"
              my="1rem"
              orientation={isMobileView ? "vertical" : "horizontal"}
            >
              <Stepper.Step
                label="First step"
                description="Personal Information"
              >
                <StepOne isMobileView={isMobileView} form={form} />
              </Stepper.Step>
              <Stepper.Step
                label="Second step"
                description="College Information"
              >
                <StepTwo isMobileView={isMobileView} form={form} />
              </Stepper.Step>
              <Stepper.Step label="Final step" description="Verification">
                <StepThree isMobileView={isMobileView} />
              </Stepper.Step>
              <Stepper.Completed>
                Completed, click back button to get to previous step
              </Stepper.Completed>
            </Stepper>
            <Group justify="center" mt="3rem">
              <Button
                variant="default"
                size={isMobileView ? "sm" : "md"}
                radius={0}
                onClick={prevStep}
              >
                Back
              </Button>
              <Button
                onClick={nextStep}
                color="black"
                size={isMobileView ? "sm" : "md"}
                radius={0}
                rightSection={<IconArrowRight />}
              >
                Next step
              </Button>
            </Group>
          </form>
        </Box>
      </Flex>
    </MainAppShell>
  );
}

const StepOne = ({ isMobileView, form }) => {
  return (
    <Grid justify="flex-start" align="stretch" w="100%" gutter={32}>
      <Grid.Col span={isMobileView ? 12 : 3}>
        <TextInput
          label="First Name"
          placeholder="First Name"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("fname")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 3}>
        <TextInput
          label="Last Name"
          placeholder="Last Name"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("lname")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 3}>
        <TextInput
          label="Age"
          placeholder="Age"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("age")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 3}>
        <Select
          label="gender"
          placeholder="Gender"
          data={["Male", "Female", "Rather Not Say"]}
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("gemder")}
        ></Select>
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 3}>
        <TextInput
          label="Email"
          type="email"
          placeholder="Email"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("email")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 3}>
        <TextInput
          label="Mobile Number"
          placeholder="Phone"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("phone")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="Password"
          type="password"
          placeholder="Password"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("password")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("confirmPassword")}
        />
      </Grid.Col>
    </Grid>
  );
};

const StepTwo = ({ isMobileView, form }) => {
  return (
    <Grid justify="flex-start" align="stretch" w="100%" gutter={32}>
      <Grid.Col span={12}>
        <TextInput
          label="Your College/Institute"
          placeholder="Institute Name"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("college")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="State"
          placeholder="Your State"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("state")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="District"
          placeholder="Your District"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("district")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="Degree"
          placeholder="Your Degree"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("degree")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="Year of Study"
          placeholder="Your Current Study"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("yearOfStudy")}
        />
      </Grid.Col>
    </Grid>
  );
};

const StepThree = ({ isMobileView }) => {
  return (
    <>
      <Stack justify="center" align="center" p="lg" mt="lg">
        <Text size={"32px"} fw={600}>
          Verify Your Email
        </Text>
        <Text w={isMobileView ? "100%" : "50%"} align="center" mt="md">
          Great news! We have just sent a verification link to your email.
          Simply click on it to complete the verification process. Thank you!
        </Text>
      </Stack>
    </>
  );
};
