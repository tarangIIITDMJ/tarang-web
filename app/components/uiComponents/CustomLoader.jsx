import { Flex } from "@mantine/core";
import loadingStyles from "@/app/styles/loading.module.css";
import { Controls, Player } from "@lottiefiles/react-lottie-player";

export default function CustomLoader() {
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
        src="https://lottie.host/58f5963f-1305-4aee-8eb2-8c12f9d04d0f/J19tFG0sNN.json"
        style={{ height: "300px", width: "300px" }}
        className={loadingStyles.loaderPlayer}
      >
        <Controls visible={false} />
      </Player>
    </Flex>
  );
}
