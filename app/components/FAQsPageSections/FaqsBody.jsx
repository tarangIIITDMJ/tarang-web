"use client";
import { Stack, Text, Accordion, BackgroundImage } from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import cssStyles from "@/app/styles/faqs.module.css";

export default function FaqsBody({ faqsData }) {
  const backgroundImage = "/faqsBackground.webp";
  const isMobile = useMediaQuery("(max-width: 768px)");

  const faqs = faqsData.map((faq) => (
    <Accordion.Item 
      key={faq.qno} 
      value={faq.question} 
      mb={"2rem"}
    >
      <Accordion.Control 
        c={"white"} 
        pl="0" 
        mb={"1rem"}
      >
        <Text size="1.3rem">
          {faq.question}
        </Text>
      </Accordion.Control>
      <Accordion.Panel 
        c={"white"} 
        mb={"1rem"}
      >
        <Text size="1.2rem" style={{ lineHeight: "1.3" }}>
          {faq.answer}
        </Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <BackgroundImage src={backgroundImage}>
      <Stack gap={isMobile ? "3rem" : "4rem"}>
        <Text 
          c={"white"} 
          mt={isMobile ? "7rem" : "6rem"} 
          ml={isMobile ? "1rem" : "3rem"} 
          size={isMobile ? "6rem" : "10rem"}
        >
          FAQs
        </Text>
        <Accordion
          w="95%"
          pl={isMobile ? "1rem" : "3rem"}
          classNames={cssStyles}
          variant="filled"
          chevron={<IconChevronDown className={cssStyles.icon} />}
        >
          {faqs}
        </Accordion>
      </Stack>
    </BackgroundImage>
  );
}
