import React from "react";
import P1 from "../../assets/fanta1.png";
import P2 from "../../assets/fanta2.png";
import P3 from "../../assets/fanta3.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } },
});

const Products = () => {
  const { t } = useTranslation();

  // Product data without hardcoded text
  const ProductsData = [
    { id: 1, image: P1, delay: 0.5 },
    { id: 2, image: P2, delay: 0.8 },
    { id: 3, image: P3, delay: 1.1 },
  ];

  // Helper function to truncate text for `desc`
  const truncateText = (text, maxLength = 50) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container py-14">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold text-center pb-10"
        >
          {t("products.title")}
        </motion.h1>
        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ProductsData.map((item) => {
            const title = t(`headphoneData.product${item.id}.title`);
            const subtitle = t(`headphoneData.product${item.id}.subtitle`);
            const desc = truncateText(subtitle, 50); // Truncate `subtitle` for `desc`

            return (
              <motion.div
                variants={fadeUp(item.delay)}
                key={item.id}
                initial="hidden"
                whileInView="show"
                className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
              >
                <img
                  src={item.image}
                  alt={title}
                  className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
                />
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold font-handwriting text-center">
                    {title}
                  </h1>
                  <p className="text-center text-sm text-gray-600">{desc}</p>
                  <button className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200">
                    {t("products.buyNow")}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
