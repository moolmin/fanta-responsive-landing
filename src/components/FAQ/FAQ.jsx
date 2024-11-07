import React from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const [active, setActive] = React.useState(null);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  const faqItems = [1, 2, 3, 4]; 

  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">
        {t("faq.title")}
      </h1>

      {faqItems.map((id, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {t(`faq.faqData.${id}.question`)}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && (
            <p className="text-gray-600">
              {t(`faq.faqData.${id}.answer`)}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
