"use client";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { Flex } from "@mantine/core";
import React from "react";
import loadingStyles from "@/app/styles/loading.module.css";

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
      <Player
        autoplay
        loop
        src="/loaderAnimation.json"
        style={{ height: "600px", width: "600px" }}
        className={loadingStyles.loaderPlayer}
      >
        <Controls visible={false} />
      </Player>
    </Flex>
  );
}
