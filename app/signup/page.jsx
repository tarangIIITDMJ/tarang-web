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
import { useState } from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconArrowRight } from "@tabler/icons-react";

export default function Signup() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      personalDetails: {
        fname: "",
        lname: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },

      collegeDetails: {
        college: "",
        state: "",
        district: "",
        degree: "",
        yearOfStudy: "",
      },
    },

    validate: {
      personalDetails: {
        fname: isNotEmpty("First Name Required"),
        lname: isNotEmpty("Last Name Required"),
        age: isNotEmpty("Age Required"),
        gender: (value) =>
          ["Male", "Female", "Rather Not Say"].includes(value)
            ? null
            : "Gender Required",
        email: isEmail("Invalid email"),
        phone: (value) =>
          /^\d{10}$/.test(value) ? null : "Invalid phone number",
        password: hasLength(
          { min: 8 },
          "Password should be at least 8 characters long"
        ),
        confirmPassword: (value, values) =>
          value === values.personalDetails.password
            ? null
            : "Passwords do not match",
      },
      collegeDetails: {
        college: isNotEmpty("College Required"),
        state: isNotEmpty("State Required"),
        district: isNotEmpty("District Required"),
        degree: isNotEmpty("Degree Required"),
        yearOfStudy: isNotEmpty("Year of Study Required"),
      },
    },

    transformValues: (values) => ({ ...values }),
  });

  // console.log(form.getTransformedValues());

  const nextStep = () => {
    if (active === 0) {
      const validationErrors = form.validateField("personalDetails");

      if (validationErrors.hasError) {
        notifications.show({
          title: "Validation Error",
          message: validationErrors.error,
          color: "red",
          withCloseButton: false,
          autoClose: 3000,
        });
        return;
      }
    }

    if (active === 1) {
      const validationErrors = form.validateField("collegeDetails");

      if (validationErrors.hasError) {
        notifications.show({
          title: "Validation Error",
          message: validationErrors.error,
          color: "red",
          withCloseButton: false,
          autoClose: 3000,
        });
        return;
      }
    }

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
          px={isMobileView ? "1rem" : "4rem"}
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
              allowNextStepsSelect={false}
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
          type="text"
          placeholder="First Name"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("personalDetails.fname")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 3}>
        <TextInput
          label="Last Name"
          type="text"
          placeholder="Last Name"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("personalDetails.lname")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 3}>
        <TextInput
          label="Age"
          type="number"
          placeholder="Age"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("personalDetails.age")}
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
          {...form.getInputProps("personalDetails.gender")}
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
          {...form.getInputProps("personalDetails.email")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 3}>
        <TextInput
          label="Mobile Number"
          type="number"
          placeholder="Phone"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("personalDetails.phone")}
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
          {...form.getInputProps("personalDetails.password")}
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
          {...form.getInputProps("personalDetails.confirmPassword")}
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
          type="text"
          placeholder="Institute Name"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("collegeDetails.college")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="State"
          type="text"
          placeholder="Your State"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("collegeDetails.state")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="District"
          type="text"
          placeholder="Your District"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("collegeDetails.district")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="Degree"
          type="text"
          placeholder="Your Degree"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("collegeDetails.degree")}
        />
      </Grid.Col>
      <Grid.Col span={isMobileView ? 12 : 6}>
        <TextInput
          label="Year of Study"
          type="number"
          placeholder="Your Current Study"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("collegeDetails.yearOfStudy")}
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
