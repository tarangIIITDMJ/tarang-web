import { Flex } from "@mantine/core";
import Image from "next/image";
import loader from "@/public/loader2.gif";
import loadingStyles from "@/app/styles/loading.module.css";
export default function Loading() {
  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      bg={"black"}
      align={"center"}
      justify={"center"}
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
