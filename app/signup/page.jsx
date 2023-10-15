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
import { PasswordInput } from '@mantine/core';
import MainAppShell from "../components/MainAppShell";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useForm, isNotEmpty, isEmail, hasLength } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { register } from "../utils/apis";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/authStore";
import Loader from "../components/Loader";

export default function Signup() {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [signupUser, setSignupUser] = useState(null);
  const { push } = useRouter();
  const { setIsAuth, setUser } = useAuthStore();
  useEffect(() => {
    if (signupUser) {
      setIsAuth(true);
      setUser(signupUser);
    }
  }, [signupUser, setIsAuth, setUser]);
  const signUpUser = async (user) => {
    setLoading(true);
    try {
      user = { ...user.personalDetails, ...user.collegeDetails };
      const res = await register(user);
      if (res.status === 201) {
        notifications.show({
          title: "Success",
          message: "Registered successfully",
          color: "green",
          autoClose: 2000,
        });
        setSignupUser(res.data.user);
        setActive(2);
      }
    } catch (error) {
      notifications.show({
        title: "Error",
        message: error.response.data.message,
        color: "red",
        autoClose: 2000,
      });
    }
    setLoading(false);
  };

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
        referredBy: ""
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

    transformValues: (values) => {
      values = { ...values };
      delete values.personalDetails.confirmPassword;
      return values;
    },
  });
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
      } else {
        signUpUser(form.getTransformedValues());
      }
    }

    if (active === 2) return push("/verify-email");

    setActive((current) => (current < 1 ? current + 1 : current));
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const { isAuth, isloading, user } = useAuthStore();
  const router = useRouter();
  if (isloading) return <Loader />;
  else if (isAuth && user.verifyToken == "*") return router.push("/profile");
  else if (isAuth && user.verifyToken != "*")
    return router.push("/verify-email");
  else
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
                  disabled={active !== 0}
                >
                  <StepOne isMobileView={isMobileView} form={form} />
                </Stepper.Step>
                <Stepper.Step
                  label="Second step"
                  description="College Information"
                  disabled={active !== 1}
                >
                  <StepTwo isMobileView={isMobileView} form={form} />
                </Stepper.Step>
                <Stepper.Step
                  label="Final step"
                  description="Confirmation"
                  disabled={active !== 2}
                >
                  <StepThree isMobileView={isMobileView} />
                </Stepper.Step>
              </Stepper>
              <Group justify="center" mt="3rem">
                <Button
                  variant="default"
                  size={isMobileView ? "sm" : "md"}
                  radius={0}
                  onClick={prevStep}
                  leftSection={<IconArrowLeft />}
                  disabled={active > 1}
                >
                  Go Back
                </Button>
                <Button
                  onClick={nextStep}
                  color="black"
                  size={isMobileView ? "sm" : "md"}
                  radius={0}
                  loading={loading}
                  rightSection={<IconArrowRight />}
                >
                  {active === 2 ? "Finish" : "Next Step"}
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
        />
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
       <PasswordInput
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
      <PasswordInput
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
      <Grid.Col span={isMobileView ? 12 : 6}>
      <TextInput
          label="Referral Code (Eg. TRNG-123456)"
          type="text"
          placeholder="Your Friend's Tarang-ID (optional)"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          radius={0}
          {...form.getInputProps("personalDetails.referredBy")}
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
        <Select
          label="Year of Study"
          placeholder="Your Current Study"
          styles={{
            input: { border: "1px solid #000", marginTop: 6 },
          }}
          data={["First", "Second", "Third", "Fourth", "Fifth"]}
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
          Thank you for registering with us!
        </Text>
        <Text w={isMobileView ? "100%" : "50%"} align="center" mt="md">
          Great news! You are now a part of the largest community driven event
          in India. We are excited to have you on board and look forward to your
          participation in the event.
        </Text>
      </Stack>
    </>
  );
};
