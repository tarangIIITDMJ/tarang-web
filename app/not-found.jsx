"use client";
import {Text, Flex, Box , Button} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import NotFoundImage from "@/public/NotFoundImage.svg";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const isMobileView = useMediaQuery("(max-width: 768px)");

  return (
    <Box style={styles.container}>
      <Flex  
       align={'center'}
       direction={'column'} 
       >
           <Box
          w={isMobileView ? "20rem" : "55rem"}
          h={isMobileView ? "15rem" : "30rem"}
          mb={isMobileView ? "0rem" : "-5rem"}
          style={{ position: "relative" }}
        >
          <Image
            src={NotFoundImage}
            alt="Not Found"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Flex  direction={'column'}    align={'center'}>
          <Text lh={isMobileView?'2rem':'2.5rem'} fw={"500"} color={'#FFFFFF'} ta={"center"} size={isMobileView ? '1.5rem' : '2rem'} pb={isMobileView?"1rem":"2rem"}>
            Oops, We can't seem <br/> to find the page you are looking for.
          </Text>
          <Text fw={"600"} color={'#B4B4B4'} ta={isMobileView ? "center" : ""}  size="md" pb={isMobileView?"3rem":"3.5rem"}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable
          </Text>
          <Link href="/">
            <Button
              bg="#ffc40c"
              c="black"
              radius={0}
              size={isMobileView?"md":"lg"}
              fw={"600"}
            >
               Back to homepage
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
    backgroundColor: '#2B2B2B', 
  },
};

