"use client";
import { Stack, Text, Accordion, BackgroundImage } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import cssStyles from "@/app/styles/faqs.module.css";

export default function FaqsBody({ faqsData }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const faqs = faqsData.map((faq) => (
    <Accordion.Item key={faq.qno} value={faq.question} mb={"2rem"}>
      <Accordion.Control c={"#24292E"} pl="0" mb={"1rem"}>
        <Text size="1.3rem">{faq.question}</Text>
      </Accordion.Control>
      <Accordion.Panel c={"#24292E"} mb={"1rem"}>
        <Text size="1.2rem" style={{ lineHeight: "1.3" }}>
          {faq.answer}
        </Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Stack gap={isMobile ? "3rem" : "4rem"} pt="3rem" bg="#EFDEE3">
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
  );
}
