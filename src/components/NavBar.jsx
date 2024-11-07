import React from "react";
import Logo from "../assets/logo.png";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select"; 
import { useTranslation } from "react-i18next"; 

const Navbar = () => {
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const NavbarMenu = [
    { id: 1, title: t('navbar.title.home'), link: "#" },
    { id: 2, title: t('navbar.title.categories'), link: "#" },
    { id: 3, title: t('navbar.title.blog'), link: "#" },
    { id: 4, title: t('navbar.title.about'), link: "#" },
    { id: 5, title: t('navbar.title.contact'), link: "#" },
  ];

  return (
    <div className="text-white py-3 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        {/* Logo Section */}
        <div>
          <img src={Logo} alt="Logo" className="max-w-[100px] invert" />
        </div>

        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <a
                    href={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}

            {/* Language Selector */}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <div className="ps-14">
                <Select onValueChange={changeLanguage}>
                  <SelectTrigger className="text-base font-semibold py-2 px-3 uppercase">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="kr">한국어</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </UpdateFollower>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
