"use client";
import { Text, Flex, Box, Button, Image, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

export default function NotFound() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
  
      <Stack gap={isMobileView ? "2rem" : "4rem"} bg="#1E1E1E" mih="100vh" justify="center" align={"center"}>
        <Box
          w={isMobileView ? "20rem" : "55rem"}
          h={isMobileView ? "10rem" : "25rem"}
          mt={isMobileView ? "0rem" : "-5rem"}
        >
          <Image src={"/notfoundImage.svg"} alt="404" px={isMobileView && "0.5rem"} />
        </Box>
        <Stack align={"center"} gap={isMobileView && "0.75rem"} px={isMobileView && "1.5rem"}>
          <Text
            c="#FFF"
            ta={"center"}
            fz={isMobileView ? "1.35rem" : "2.625rem"}
            lh={isMobileView ? "2rem" : "3.25rem"}
            fw={500}
          >
            Oops, We can't seem <br /> to find the page you are looking for.
          </Text>
          <Text
            c="#B4B4B4"
            fw={600}
            ta="center"
            fz={isMobileView ? "0.85rem" : "1.125rem"}
          >
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable
          </Text>
          <Link href="/">
            <Button
              bg="#FFC900"
              c="#000"
              radius={0}
              size={isMobileView ? "md" : "lg"}
              fw={600}
              mt={"1rem" }
            >
              Back to homepage
            </Button>
          </Link>
        </Stack>
      </Stack>
  );
}