"use client";

import {
  Box,
  Flex,
  Image,
  Text,
  Badge,
  Button,
  Stack,
  Modal,
  TextInput,
  Group,
  Radio,
  CheckIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Breadcrumbs, Anchor, Divider } from "@mantine/core";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { getUser, registerEvent } from "@/app/utils/apis";
import { useAuthStore } from "@/app/store/authStore";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";
const items = (name) => {
  return [
    { title: "Home", href: "/" },
    { title: "Events", href: "/events" },
    { title: name, href: "#" },
  ];
};

const styles = {
  image: {
    minWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
  card: {
    borderRadius: "20px",
    border: "1.5px solid rgba(255, 255, 255, 0.76)",
    background:
      " linear-gradient(102deg, #D0EB4C 0.41%, #E4FF60 40.1%, #CAFC02 98.65%)",
    color: "black",
  },
};

const itemArray = (name) => {
  return items(name).map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      underline="false"
      fw="500"
      c={index == items.length - 1 ? "#fff" : "#676E76"}
    >
      {item.title}
    </Anchor>
  ));
};

export default function EventDetails({ event }) {
  const isMobileView = useMediaQuery("(max-width: 768px)");
  const [hasTarangPass, setHasTarangPass] = useState(false); // TODO: get this from the backend
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [teamName, setTeamName] = useState();
  const [teamLeader, setTeamLeader] = useState();
  const [canRegister, setCanRegister] = useState(true);
  const { push } = useRouter();
  const { user, setUser, isAuth } = useAuthStore();
  const [registerAs, setRegisterAs] = useState("leader");

  useEffect(() => {
    if (user) {
      if (user.paymentVerified && user.purchaseTarangCard) {
        setHasTarangPass(true);
      }
      if (!user.purchaseTarangCard) {
        setCanRegister(false);
      }
      if (user.events.some((usrEvent) => usrEvent.slug === event.slug)) {
        setIsRegistered(true);
      } else {
        setIsRegistered(false);
      }
    } else {
      setIsRegistered(false);
    }
  }, [event.slug, user]);

  const handleRegisterEvent = async () => {
    if (isRegistered) {
      push("/profile");
      return;
    }
    if (!isAuth) {
      notifications.show({
        title: "Error",
        message: "You need to be logged in to register for this event",
        color: "red",
        autoClose: 2000,
      });
      return;
    }
    setLoading(true);
    try {
      if (event.event_type === "Solo") {
        const response = await registerEvent(event.slug);
        if (response?.status === 200) {
          setIsRegistered(true);
          notifications.show({
            title: "Success",
            message: "Registered Successfully",
            color: "green",
            autoClose: 2000,
          });
          const newUserData = await getUser(); // TODO: get this from the backend
          if (newUserData?.status === 200) {
            setUser(newUserData.data.user);
          }
        }

        setLoading(false);
      } else {
        open();
      }
    } catch (error) {
      if (error.response.status === 401) {
        notifications.show({
          title: "Error",
          message: "You need to be logged in to register for this event",
          color: "red",
          autoClose: 2000,
        });
      }
    }
    setLoading(false);
  };
  const icon = (
    <Image
      src={"/eventDetailsPageImages/check-badge.svg"}
      style={{
        width: isMobileView ? "0.85rem" : "1.2rem",
        height: isMobileView ? "0.85rem" : "1.2rem",
      }}
      alt=""
    />
  );

  const handleTeamRegistration = async (teamName, teamLeader) => {
    try {
      setLoading(true);
      const response = await registerEvent(event.slug, teamName, teamLeader, registerAs);
      if (response?.status === 200) {
        setIsRegistered(true);
        notifications.show({
          title: "Success",
          message: "Registered Successfully",
          color: "green",
          autoClose: 2000,
        });
        close();
      }
    } catch (error) {
      notifications.show({
        title: "Error",
        message: "Something went wrong",
        color: "red",
        autoClose: 2000,
      });
    }
    setLoading(false);
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Team Registration"
        centered
        radius={0}
        style={{
          border: "2px solid #000",
        }}
      >
        <Radio.Group
          value={registerAs}
          onChange={setRegisterAs}
          label="Register As: "
          mb={10}
        >
          <Group gap={"1.5rem"}>
            <Radio icon={CheckIcon} value="leader" label="Leader" />
            <Radio icon={CheckIcon} value="member" label="Member" />
          </Group>
        </Radio.Group>
        <Stack>
          {
            registerAs === "leader" ?
              <TextInput
                placeholder="Enter Your Team Name"
                style={{
                  border: "2px solid #000",
                }}
                onChange={(e) => setTeamName(e.target.value)}
              /> :
              <TextInput
                placeholder={`Enter Your Team Leader tarandID (for eg: TRNG-97294)`}
                style={{
                  border: "2px solid #000",
                }}
                onChange={(e) => setTeamLeader(e.target.value)}
              />
          }
        </Stack>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button
            bg="#000"
            color="#fff"
            loading={loading}
            fullWidth
            onClick={() => handleTeamRegistration(teamName, teamLeader)}
            mt={15}
          >
            Register
          </Button>
        </motion.div>
        <Group py={5} mt={10}>
          <Text c="#676E76" fz="0.75rem">
            Note: Ensure Each Team Member Individually registers in this event
            and provides same leader ID.
          </Text>
        </Group>
      </Modal>
      <Box>
        <Box
          py={isMobileView ? "1.5rem" : "4.5rem"}
          px={isMobileView ? "1.5rem" : "6.75rem"}
        >
          <Breadcrumbs separator=">">{itemArray(event.name)}</Breadcrumbs>
        </Box>
        <Box
          pl={isMobileView ? "0rem" : "6.75rem"}
          pr={isMobileView ? "1.5rem" : "6.75rem"}
        >
          <Flex
            w="100%"
            justify={isMobileView ? "center" : "space-between"}
            gap="1.5rem"
          >
            <Box>
              <Image
                src={event.images.mainDesktop}
                style={styles.image}
                visibleFrom="sm"
                mb="2rem"
                w={isMobileView ? "100%" : "34.5rem"}
                alt=""
              />
            </Box>
            <Stack gap={"2rem"}>
              <Text fw="500" c="#fff" size={isMobileView ? "2rem" : "4rem"}>
                {event.name}
              </Text>
              <Text c="#fff" size={isMobileView ? "1.5rem" : "2rem"} fw="500">
                {event.tagline}
              </Text>
              <Image
                src={event.images.mainPhone}
                style={{ objectFit: "contain" }}
                hiddenFrom="sm"
                alt=""
              />
              <Text
                c="#9EA5AD"
                lh="1.5rem"
                size={isMobileView ? "1rem" : "1.125rem"}
              >
                {event.description}
              </Text>
              <Stack justify="center" gap={isMobileView ? "0.5rem" : "1rem"}>
                {[
                  { label: "Date", value: event.event_date },
                  { label: "Time", value: event.event_time },
                  { label: "Event Category", value: event.event_category },
                  { label: "Event Mode", value: event.mode },
                  { label: "Location", value: event.location}
                ].map((item, index) => 
                    item.value ?
                    (<Text
                      key={index}
                      size={isMobileView ? "0.75rem" : "1.125rem"}
                      c="#F6F7F9"
                      fw="500"
                    >
                      {item.label}:
                      {item.value !== "" ? ` ${item.value}` : " To be decided"}
                    </Text>) :
                    (<></>)
                )}
              </Stack>
              {hasTarangPass ? (
                <>
                  <Flex
                    style={{ borderRadius: "5px" }}
                    bg={"#303030"}
                    h="auto"
                    w="100%"
                    px={isMobileView ? "1.25rem" : "1.625rem"}
                    py={isMobileView ? "0.5rem" : "1.125rem"}
                  >
                    <Image
                      mt={isMobileView ? "0.4rem" : "0.3rem"}
                      mr={"md"}
                      src={"/eventDetailsPageImages/alert-circle.svg"}
                      w={isMobileView ? "1.5rem" : "1rem"}
                      h={isMobileView ? "1.5rem" : "1rem"}
                      alt=""
                    />
                    <Text
                      c="#FFF"
                      lh={isMobileView ? "1.2rem" : "1.5rem"}
                      size={isMobileView ? "0.85rem" : "1.125rem"}
                      fw={400}
                    >
                      You already have the Tarang card! Register for this event
                      now!
                    </Text>
                  </Flex>
                </>
              ) : (
                <>
                  <Link href="/tarang-card">
                    <motion.div
                      // shift up on hover and scale on tap
                      whileHover={{ translateY: -5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Stack
                        p={isMobileView ? "0.7rem" : "1.5rem"}
                        gap="1rem"
                        style={styles.card}
                      >
                        <Flex gap="1rem" justify="space-between" align="center">
                          <Text
                            lh={isMobileView ? "1.5rem" : "2.5rem"}
                            fw={500}
                            size={isMobileView ? "1.2rem" : "2rem"}
                          >
                            Experience it all with the Tarang Card!
                          </Text>
                          <Image
                            mt={"0.2rem"}
                            mr={"0.85rem"}
                            src={"/eventDetailsPageImages/LearnMore.svg"}
                            w={isMobileView ? "3rem" : "5rem"}
                            h={isMobileView ? "3rem" : "5rem"}
                            alt=""
                          />
                        </Flex>
                        <Stack align="flex-start" gap={"0.5rem"}>
                          {[
                            "Get access to every event and workshop.",
                            "Save events to your Dashboard, pay with Tarang Card.",
                            "All this for just ₹799!",
                          ].map((text, index) => (
                            <Badge
                              variant="transparent"
                              c={"black"}
                              pl={"0rem"}
                              h="fit-content"
                              leftSection={icon}
                              style={{ textTransform: "none" }}
                              key={index}
                            >
                              <Text
                                lh={isMobileView ? "1rem" : "1.5rem"}
                                fw="500"
                                size={isMobileView ? "0.6rem" : "1rem"}
                                ml={isMobileView ? "0rem" : "0.5rem"}
                              >
                                {text}
                              </Text>
                            </Badge>
                          ))}
                        </Stack>
                      </Stack>
                    </motion.div>
                  </Link>

                  <Divider
                    my="xs"
                    label="Or pay individually"
                    labelPosition="center"
                  />

                  <Flex
                    gap="1rem"
                    justify="left"
                    align="center"
                    wrap="wrap"
                    pl={10}
                  >
                    <Text
                      lh={isMobileView ? "2rem" : "2.5rem"}
                      fw={800}
                      size={isMobileView ? "2.2rem" : "3rem"}
                      c="#FFF"
                    >
                      ₹ {event.reg_fees}
                    </Text>
                    <Stack align="flex-start" gap={"0.1rem"}>
                      <Text
                        lh={isMobileView ? "1rem" : "1.5rem"}
                        fw="600"
                        size={isMobileView ? "0.8rem" : "1rem"}
                        ml={isMobileView ? "0rem" : "0.5rem"}
                        c="#FFF"
                      >
                        Registration Fee if you pay individually
                        {
                          event.event_type !== "Solo" ?
                            " (Only the team leader must pay registration amount)" :
                            <></>
                        }
                      </Text>
                      {
                        event.mode === "offline" ?
                        <Text
                          lh={isMobileView ? "1rem" : "1.5rem"}
                          fw="400"
                          size={isMobileView ? "0.8rem" : "1rem"}
                          ml={isMobileView ? "0rem" : "0.5rem"}
                          c="#868e96"
                        >
                          An additional entry pass worth ₹300 must be purchased
                        </Text> :
                        <></>
                      }
                    </Stack>
                  </Flex>
                </>
              )}
              {
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {
                    event.mode === "online" ?
                      (
                        <Link
                          href={event.reg_link}
                          target="_blank"
                        >
                          <Button
                            h="auto"
                            bg={"#fff"}
                            c={"#000"}
                            w="100%"
                            py={isMobileView ? "0.75rem" : "1rem"}
                            loading={loading}
                          >
                            <Text
                              fw={"500"}
                              size={isMobileView ? "0.85rem" : "1.35rem"}
                              lh={isMobileView ? "1.5rem" : "2.5rem"}
                            >
                              Register for this event
                            </Text>
                          </Button>
                        </Link>
                      ) :
                      (
                        <Button
                          h="auto"
                          bg={!canRegister ? "#d6d6d6" : "#fff"}
                          c={!canRegister ? "#878787" : "#000"}
                          w="100%"
                          py={isMobileView ? "0.75rem" : "1rem"}
                          onClick={handleRegisterEvent}
                          loading={loading}
                          disabled={!canRegister}
                        >
                          {isRegistered ? (
                            <>
                              <Text
                                fw={"500"}
                                size={isMobileView ? "0.85rem" : "1.25rem"}
                              >
                                Go to Dashboard{" "}
                              </Text>
                              <Box ml="0.5rem">
                                <IconArrowUpRight
                                  size={32}
                                  strokeWidth={2}
                                  color={"black"}
                                />
                              </Box>
                            </>
                          ) : (
                            <Text
                              fw={"500"}
                              size={isMobileView ? "0.85rem" : "1.35rem"}
                              lh={isMobileView ? "1.5rem" : "2.5rem"}
                            >
                              Add to My Events
                            </Text>
                          )}
                        </Button>
                      )
                  }
                </motion.div>
              }
              <Text
                mt={"-1.5rem"}
                size={isMobileView ? "0.75rem" : "1rem"}
                ta="center"
                c="#BDBDBD"
              >
                {
                  (canRegister || event.mode === "online") ?
                    "" :
                    "You've already paid for some selected events, can't add more"
                }
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
