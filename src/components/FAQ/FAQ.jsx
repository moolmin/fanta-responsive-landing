import React from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  const { t } = useTranslation();

  // Dummy data, replace `faqItems` with actual IDs or unique keys for FAQ items
  const faqItems = [1, 2, 3, 4]; 

  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">
        {t("faq.title")}
      </h1>

      <Accordion type="single" collapsible>
        {faqItems.map((id) => (
          <AccordionItem key={id} value={`item-${id}`}>
            <AccordionTrigger>
              {t(`faq.faqData.${id}.question`)}
            </AccordionTrigger>
            <AccordionContent>
              {t(`faq.faqData.${id}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
