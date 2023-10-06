import React from "react";
import { Center, Loader as MantineLoader } from "@mantine/core";

const Loader = () => {
  return (
    <Center h="100vh">
      <MantineLoader size={50} color="#FFC900" />
    </Center>
  );
};

export default Loader;
