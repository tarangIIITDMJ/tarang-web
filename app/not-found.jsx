"use client";
import {Text, Flex, Box , Button} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function NotFound() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box style={styles.container}>
      <Flex gap={isMobileView ? '2rem' : '6rem'} 
       align={'center'}
       direction={isMobileView ? 'column' : 'row'} 
       >
        <Box 
         w={isMobileView ? "15rem" : "30rem"}
         h={isMobileView ? "15rem" : "30rem"}
         bg={"#CCCCCC"}></Box>
        <Flex  direction={'column'}    align={isMobileView ? 'center' : 'flex-start'}>
          <Text fw={"500"} ta={isMobileView?"center":""} size={isMobileView ? '4rem' : '6rem'} pb={"1rem"}>
            404
          </Text>
          <Text fw={"600"} ta={isMobileView ? "center" : ""}  size="md" pb={"3.5rem"}>
            Oops! Looks like you've taken a wrong turn. <br/>
            The page you're looking for couldn't be found.  <br/> Let's get you back on track.
          </Text>
          <Link href="/">
            <Button
              bg="#ffc40c"
              c="black"
              radius={0}
              size={"lg"}
              fw={"600"}
              leftSection={<IconArrowLeft />}
            >
               Go to homepage
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
  },
};

