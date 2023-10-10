import { Flex } from "@mantine/core";
import Image from "next/image";
import loader from "@/public/loader.gif";
import loadingStyles from "@/app/styles/loading.module.css";

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
      <Image
        className={loadingStyles.loader}
        priority
        src={loader}
        alt="loader"
      />
    </Flex>
  );
}
