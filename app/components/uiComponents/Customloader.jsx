import { Flex, Text } from "@mantine/core";
import React from "react";
import loadingStyles from "@/app/styles/loading.module.css";
import Image from "next/image";
import tarangLoader from "@/public/tarangLoader.gif";

export default function Customloader() {
  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      bg={"black"}
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
        loading="eager"
      />
    </Flex>
  );
}
