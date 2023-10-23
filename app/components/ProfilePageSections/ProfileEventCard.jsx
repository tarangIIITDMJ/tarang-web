"use client";

import React, { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Text, Image, Button, Flex, Stack, Badge, Modal } from "@mantine/core";
import {
  IconTrash,
  IconAlertCircleFilled,
  IconDiscountCheckFilled,
} from "@tabler/icons-react";
import profileCSS from "@/app/styles/profile.module.css";
import { useDisclosure } from "@mantine/hooks";
import { getUser, removeRegisteredEvent } from "@/app/utils/apis";
import { notifications } from "@mantine/notifications";
import { useAuthStore } from "@/app/store/authStore";
import { motion } from "framer-motion";

export default function ProfileEventCard({
  event,
  hasPaid,
  formFilled,
  onEventRemoved,
}) {
  const [removeBtnVisibility, setRemoveBtnVisibility] = useState(false);
  const [cardBorder, setCardBorder] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuthStore();
  const handleRemoveEvent = async () => {
    setLoading(true);
    try {
      const response = await removeRegisteredEvent(event.slug);
      if (response.status === 200) {
        notifications.show({
          title: "Success",
          message: "Event removed successfully",
          autoClose: 2000,
        });
        onEventRemoved(event.slug);
        const newUser = await getUser();
        if (newUser.status === 200) setUser(newUser.data.user);
      }
      setLoading(false);
      close();
    } catch (error) {
      notifications.show({
        title: "Error",
        color: "red",
        message: "Something went wrong",
        autoClose: 2000,
      });
      setLoading(false);
      close();
    }
  };

  const isMobileView = useMediaQuery("(max-width: 768px)");

  const icon1 = (
    <IconAlertCircleFilled color="#CD3636" size={13} pl={"-1rem"} />
  );
  const icon2 = (
    <IconDiscountCheckFilled color="#2F9461" size={13} pl={"-1rem"} />
  );
  return (
    <>
      <Flex
        onMouseEnter={() => setRemoveBtnVisibility(true)}
        onMouseLeave={() => setRemoveBtnVisibility(false)}
        align={"start"}
        className={`${profileCSS.eventCard}`}
        my="md"
        p="sm"
        style={{
          overflow: "hidden",
          width: "100%",
        }}
        gap={"15"}
      >
        <Image
          miw="6rem"
          src={event.images.mainPhone}
          alt={event.name}
          aspectRatio={1}
        />
        <Stack w={"70%"}>
          <Flex
            direction={isMobileView ? "column" : "row"}
            align={isMobileView ? "flex-start" : "center"}
            justify="start"
          >
            <Text size="md" fw={625} mr="md">
              {event.name.toUpperCase()}
            </Text>
            {hasPaid ? (
              <Badge
                leftSection={icon2}
                p={"0.85rem"}
                lh={"1.5rem"}
                size={"0.95rem"}
                radius={5}
                color="#B8F1D2"
                className={profileCSS.eventCardBadge2}
              >
                Paid & Confirmed
              </Badge>
            ) : formFilled ? (
              <Badge
                leftSection={icon1}
                p={"0.85rem"}
                lh={"1.5rem"}
                size={"0.95rem"}
                radius={5}
                mt={isMobileView ? "0.5rem" : "0"}
                color="#FDE57E"
                className={profileCSS.eventCardBadge3}
              >
                Verification Pending
              </Badge>
            ) : (
              <Badge
                leftSection={icon1}
                p={isMobileView ? "0.5rem" : "0.85rem"}
                lh={"1.5rem"}
                size={isMobileView ? "0.6rem" : "0.95rem"}
                radius={5}
                color="#FAC7C7"
                className={profileCSS.eventCardBadge1}
              >
                Purchase Tarang Card
              </Badge>
            )}
          </Flex>
          <Text
            color="#383F45"
            weight={600}
            size="md"
            style={{ wordBreak: "break-word", fontWeight: "500" }}
          >
            {event.event_date}, {event.event_time}
          </Text>
        </Stack>
        {isMobileView && !formFilled  && <IconTrash onClick={open} size={25} color="#676e76" />}
        {removeBtnVisibility && !formFilled && !isMobileView ? (
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              pl={"2rem"}
              onMouseEnter={() => setCardBorder(true)}
              onMouseLeave={() => setCardBorder(false)}
              className={profileCSS.profileEventCardButton}
              size="md"
              c="#676e76"
              variant="filled"
              leftSection={<IconTrash size={20} />}
              onClick={open}
            >
              Remove Event
            </Button>
          </motion.div>
        ) : (
          <></>
        )}
      </Flex>
      <Modal opened={opened} onClose={close} title="Remove Event" centered>
        <Stack
          pt={"3rem"}
          p={"1rem"}
          gap="3.5rem"
          ta="center"
          align={"center"}
          justify={"center"}
        >
          <Text size="lg" style={{ fontWeight: "600" }}>
            Are you sure you want to remove this event from your dashboard?
          </Text>
          <Flex align={"center"} gap="3rem">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                radius={0}
                onClick={close}
                color="black"
                style={{
                  height: "3rem",
                  width: "8rem",
                  fontWeight: "650",
                  border: "1.75px solid black",
                }}
                variant="outline"
              >
                Keep Event
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                radius={0}
                onClick={handleRemoveEvent}
                bg="#F34141"
                style={{ height: "3rem", width: "9rem", fontWeight: "650" }}
                variant="filled"
                loading={loading}
              >
                Remove Event
              </Button>
            </motion.div>
          </Flex>
        </Stack>
      </Modal>
    </>
  );
}
