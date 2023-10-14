"use client";
import { Button, Card, Center, Flex, TextInput } from "@mantine/core";
import { useState } from "react";
import { verifyPayment } from "../utils/apis";
import ValidateAuth from "../components/ValidateAuth";
import MainAppShell from "../components/MainAppShell";

const Admin = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [refStatus, setRefStatus] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await verifyPayment(value);
      if (response.status == 200) {
        setSuccessMessage(response.data.message);
        setRefStatus(response.data.refStatus);
        setValue("");
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <ValidateAuth>
      <MainAppShell>
        <Center mt={40}>
          <Flex
            direction={"column"}
            gap={24}
            px={60}
            py={30}
            w="35rem"
            mih={"50rem"}
          >
            <TextInput
              placeholder="Enter Tarang ID"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
            <Button
              loading={loading}
              onClick={handleSubmit}
              variant={error ? "light" : "outline"}
              color={error ? "red" : "blue"}
            >
              Submit
            </Button>
            {error && <p style={{ color: "red" }}>{errorMessage}</p>}
            <Card
              shadow="sm"
              padding={20}
              radius={8}
              style={{ width: "100%", textAlign: "center" }}
            >
              {!error && (
                <div>
                  <p style={{ color: "green" }}>{successMessage}</p>
                  <p style={{ color: "green" }}>RefStatus: {refStatus}</p>
                </div>
              )}
            </Card>
          </Flex>
        </Center>
      </MainAppShell>
    </ValidateAuth>
  );
};

export default Admin;
