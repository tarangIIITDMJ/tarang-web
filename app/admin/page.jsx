"use client";
import { Button, Card, Flex, Group, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  getAllUsers,
} from "../utils/apis";
import ValidateAuth from "../components/ValidateAuth";
import Link from "next/link";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await getAllUsers();
    setUsers(res.data?.users);
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ValidateAuth>
      <Title order={1}>
        Admin Panel
      </Title>
      <Flex align={"center"} justify={"space-around"} wrap={"wrap"} >
        <Card padding={"xl"} radius={"xl"} m={10} shadow="sm" withBorder bg={"rgba(10, 161, 255, 0.1)"} c={"rgba(56, 63, 69, 1)"}>
          <Group>
            <Text fw={700}>Total Registered Users:</Text>
            <Text>{users.length}</Text>
          </Group>
        </Card>
        <Card padding={"xl"} radius={"xl"} m={10} shadow="sm" withBorder bg={"rgba(64, 192, 87, 0.1)"} c={"rgba(56, 63, 69, 1)"}>
          <Group>
            <Text fw={700}>Total Verified Users:</Text>
            <Text>{users.filter(usr => usr.paymentVerified).length}</Text>
          </Group>
        </Card>
        <Card padding={"xl"} radius={"xl"} m={10} shadow="sm" withBorder bg={"rgba(255, 50, 87, 0.1)"} c={"rgba(56, 63, 69, 1)"}>
          <Group>
            <Text fw={700}>Total Unverified Users:</Text>
            <Text>{users.filter(usr => !usr.paymentFormFilled).length}</Text>
          </Group>
        </Card>
        <Card padding={"xl"} radius={"xl"} m={10} shadow="sm" withBorder bg={"rgba(248, 255, 53, 0.1)"} c={"rgba(56, 63, 69, 1)"}>
          <Group>
            <Text fw={700}>Total Users with verification pending:</Text>
            <Text>{users.filter(usr => usr.paymentFormFilled && !usr.paymentVerified && !usr.paymentRejected).length}</Text>
          </Group>
        </Card>
      </Flex>
      <Flex wrap={"wrap"} justify={"center"} align={"center"} mt={30} gap={50}>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href={"/admin/user"}>
            <Button
              variant="light"
              color="blue"
            >
              All Users
            </Button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href={"/admin/verify"}>
            <Button
              variant="light"
              color="green"
            >
              Verify Users
            </Button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href={"/admin/user/verified"}>
            <Button
              variant="light"
              color="red"
            >
              Verified Users
            </Button>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href={"/admin/events"}>
            <Button
              variant="light"
              color="pink"
            >
              Users by Events
            </Button>
          </Link>
        </motion.div>
      </Flex>
    </ValidateAuth>
  );
};

export default Admin;
