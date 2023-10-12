"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "next/link";
import { Text, Image, Button, Flex, Stack, Badge, Modal } from "@mantine/core";
import {
  IconTrash,
  IconAlertCircleFilled,
  IconDiscountCheckFilled,
} from "@tabler/icons-react";
import profileCSS from "@/app/styles/profile.module.css";
import { useDisclosure } from "@mantine/hooks";
import { removeRegisteredEvent } from "@/app/utils/apis";
import { notifications } from "@mantine/notifications";

export default function ProfileEventCard({ event, hasPaid }) {
  const [removeBtnVisibility, setRemoveBtnVisibility] = useState(false);
  const [cardBorder, setCardBorder] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);

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

  const isMobileView = useMediaQuery("(max-width: 768px");

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
        align={"center"}
        className={`${profileCSS.eventCard} ${
          cardBorder ? profileCSS.cardHovered : ""
        }`}
        my="md"
        p="sm"
        h={"95"}
        style={{
          overflow: "hidden",
          width: "100%",
          backgroundColor: "#0000000D",
          "&:hover": {
            backgroundColor: "#0000000D",
          },
        }}
        gap={"15"}
      >
        <Image
          h={80}
          w={"20%"}
          src={event.images.mainPhone}
          alt={event.name}
          aspectRatio={1}
        />
        <Stack w={"70%"}>
          <Flex>
            <Text size="lg" style={{ fontWeight: "625", width: "10rem" }}>
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
            ) : (
              <Badge
                leftSection={icon1}
                p={"0.85rem"}
                lh={"1.5rem"}
                size={"0.95rem"}
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
        {removeBtnVisibility ? (
          <Button
            pl={"2rem"}
            onMouseEnter={() => setCardBorder(true)}
            onMouseLeave={() => setCardBorder(false)}
            className={profileCSS.profileEventCardButton}
            size="md"
            variant="filled"
            leftSection={<IconTrash size={20} />}
            onClick={open}
          >
            Remove Event
          </Button>
        ) : (
          <></>
        )}
      </Flex>
      <Modal opened={opened} onClose={close} title="Remove Event">
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
          </Flex>
        </Stack>
      </Modal>
    </>
  );
}
