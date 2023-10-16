"use client";
import { Button, Card, Flex, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  verifyPayment,
  getUnverifiedUsers,
  rejectPayment,
  getRejectedUsers,
  updateRejection,
} from "../utils/apis";
import ValidateAuth from "../components/ValidateAuth";

const UserCard = ({ user, getUsers, getRejUser }) => {
  const [value, setValue] = useState("");

  const handleReject = async (id) => {
    try {
      const response = await rejectPayment(id, value);
      if (response.status == 200) {
        setValue("");
        getUsers();
        getRejUser();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async (id) => {
    try {
      const response = await verifyPayment(id);
      if (response.status == 200) {
        setRefStatus(response.data.refStatus);
        setValue("");
        getUsers();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      shadow="sm"
      padding={20}
      radius={8}
      style={{ width: "100%", textAlign: "left" }}
    >
      <Flex justify="space-between" align="center" style={{ width: "100%" }}>
        <div>
          <p style={{ color: "green" }}>Name: {user.fname}</p>
          <p style={{ color: "green" }}>Email: {user.email}</p>
          <p style={{ color: "green" }}>Tarang ID: {user.tarang_id}</p>
          <p style={{ color: "green" }}>Phone: {user.phone}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextInput
            placeholder="Comments for Rejection(optional)"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="light"
              color="green"
              onClick={() => handleVerify(user.tarang_id)}
            >
              Verify
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="light"
              color="red"
              onClick={() => handleReject(user.tarang_id)}
            >
              Reject
            </Button>
          </motion.div>
        </div>
      </Flex>
    </Card>
  );
};

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);

  const updateRej = async (id) => {
    try {
      const response = await updateRejection(id);
      if (response.status == 200) {
        getRejUser();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRejUser = async () => {
    try {
      const response = await getRejectedUsers();
      console.log(response);
      if (response.status == 200) {
        setRejectedUsers(response.data.users);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await getUnverifiedUsers();
      console.log(response);
      if (response.status == 200) {
        setUsers(response.data.users);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    getRejUser();
  }, []);

  return (
    <ValidateAuth>
      <Flex mt={20}>
        <Flex
          direction={"column"}
          gap={24}
          px={60}
          py={30}
          w="60rem"
          mih={"50rem"}
        >
          <h2>Unverified Users</h2>
          {users.map((user) => (
            <UserCard
              user={user}
              key={user._id}
              getRejUser={getRejUser}
              getUsers={getUsers}
            />
          ))}
        </Flex>
        <Flex
          direction={"column"}
          gap={24}
          px={60}
          py={30}
          w="60rem"
          mih={"50rem"}
        >
          <h2>Rejected Users</h2>
          {rejectedUsers.map((user) => (
            <Card
              shadow="sm"
              padding={20}
              radius={8}
              style={{ width: "100%", textAlign: "left" }}
              key={user._id}
            >
              <Flex
                justify="space-between"
                align="center"
                style={{ width: "100%" }}
              >
                <div>
                  <p style={{ color: "Red" }}>Name: {user.fname}</p>
                  <p style={{ color: "Red" }}>Email: {user.email}</p>
                  <p style={{ color: "Red" }}>Tarang ID: {user.tarang_id}</p>
                  <p style={{ color: "Red" }}>Phone: {user.phone}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      variant="light"
                      color="green"
                      onClick={() => updateRej(user.tarang_id)}
                    >
                      Verify
                    </Button>
                  </motion.div>
                </div>
              </Flex>
            </Card>
          ))}
        </Flex>
      </Flex>
    </ValidateAuth>
  );
};

export default Admin;
