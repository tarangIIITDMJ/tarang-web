import { Flex, Text } from "@mantine/core";
import React from "react";
import loadingStyles from "@/app/styles/loading.module.css";
import Image from "next/image";
import tarangLoader from "@/public/tarangLoader.gif";

export default function Customloader({ progress }) {
  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      bg={"black"}
      direction={"column"}
      align={"center"}
      justify={"center"}
      pos={"fixed"}
      left={0}
      top={0}
      style={{ zIndex: 999 }}
    >
      <Image
        priority
        src={tarangLoader}
        width={600}
        alt="Tarang Loader"
        className={loadingStyles.loaderPlayer}
      />
      {progress && (
        <Text c="#fff" className={loadingStyles.loaderProgress} fz={32}>
          {Math.round(progress)}%
        </Text>
      )}
    </Flex>
  );
}
