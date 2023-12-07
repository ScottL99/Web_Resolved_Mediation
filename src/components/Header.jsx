import React from "react";
import { colonPng } from "../assets";
import { navLinks, heroTitle } from "../constants";
import { Link } from "react-scroll";
import LogoHeader from "./LogoHeader";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="bg-orange flex flex-col text-white pt-6 px-10 mx-20"
      id="header"
    >
      <div className="flex flex-row items-center">
        <LogoHeader />
        <ul className="list-none hidden xl:flex flex-1 justify-end text-2xl font-HN_Thin">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className="cursor-pointer border-2 border-white/0 hover:border-white flex px-3 py-1 transition-all duration-500"
            >
              <Link
                to={nav.id}
                smooth={true}
                offset={-20}
                duration={700}
                delay={100}
              >
                <span> {nav.title} </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-end">
        <motion.h1
          className=" mt-10 text-[16rem] leading-[16rem] text-white font-HN_Bold tracking-tighter"
          inherit={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 100,
            y: 0,
          }}
          transition={{
            duration: 1000,
          }}
        >
          {heroTitle}
        </motion.h1>
        <img src={colonPng} alt="colon" className="h-[8rem] mb-8 ml-4"></img>
      </div>
    </div>
  );
};

export default Header;
