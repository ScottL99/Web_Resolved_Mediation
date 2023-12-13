import React from "react";
import { colonPng } from "../assets";
import { navLinks, heroTitle } from "../constants";
import { Link } from "react-scroll";
import LogoHeader from "./LogoHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdMenuOpen, MdOutlineCancelPresentation } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const closeMenu = () => setToggle(false);

  return (
    <header
      className="bg-orange flex flex-col text-white pt-6 px-4 sm:px-6 lg:px-10 mx-4 sm:mx-12 lg:mx-20"
      id="header"
    >
      <nav className="flex flex-row items-center">
        <LogoHeader />
        <ul className="list-none hidden lg:flex flex-1 justify-end lg:text-xl xl:text-2xl font-HN_Thin">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className="cursor-pointer border-2 border-white/0 hover:border-white flex lg:px-2 xl:px-3 py-1 
              transition-all duration-500"
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
        <button
          className="flex flex-1 lg:hidden justify-end z-20"
          onClick={() => setToggle((prog) => !prog)}
        >
          {toggle ? (
            <MdOutlineCancelPresentation size="2.5rem" />
          ) : (
            <MdMenuOpen size="2.5rem" />
          )}
        </button>
        <div
          className={`${
            toggle ? "translate-y-0" : "-translate-y-full"
          } absolute w-full h-[50vh] bg-orange/95 right-0 z-10 transition-all duration-1000 top-0 lg:hidden p-20 text-2xl`}
        >
          <ul className="list-none flex flex-1 flex-col justify-center items-center font-HN_Thin">
            <li
              className="flex m-4 p-2 cursor-pointer leading-4 border-b-white/50 border-2 border-white/0 hover:border-white
              transition-all duration-500"
            >
              <Link
                to={navLinks[0].id}
                smooth={true}
                offset={-20}
                duration={700}
                delay={100}
                onClick={closeMenu}
              >
                <span> {navLinks[0].title} </span>
              </Link>
            </li>
          </ul>
          <ul className="list-none flex flex-1 flex-col justify-center items-center font-HN_Thin">
            <li
              className="flex m-4 p-2 cursor-pointer leading-4 border-b-white/50 border-2 border-white/0 hover:border-white
              transition-all duration-500"
            >
              <Link
                to={navLinks[2].id}
                smooth={true}
                offset={-20}
                duration={700}
                delay={100}
                onClick={closeMenu}
              >
                <span> {navLinks[2].title} </span>
              </Link>
            </li>
            <ul className="list-none flex flex-1 flex-col justify-center items-center font-HN_Thin">
              <li
                className="flex m-4 p-2 cursor-pointer leading-4 border-b-white/50 border-2 border-white/0 hover:border-white
              transition-all duration-500"
              >
                <Link
                  to={navLinks[4].id}
                  smooth={true}
                  offset={-20}
                  duration={700}
                  delay={100}
                  onClick={closeMenu}
                >
                  <span> {navLinks[4].title} </span>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </nav>

      <motion.div
        className="flex flex-row items-end"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 100,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <h1
          className="mt-2 sm:mt-5 xl:mt-10 text-[4rem] sm:text-[6.5rem] lg:text-[10rem] xl:text-[14rem] 
          leading-4rem sm:leading-[7.5rem] lg:leading-[10rem] xl:leading-[14rem]
           text-white font-HN_Bold tracking-tighter"
        >
          {heroTitle}
        </h1>
        <img
          src={colonPng}
          alt="colon"
          className="h-[2.25rem] sm:h-[3.5rem] lg:h-[5.5rem] xl:h-[8rem] 
          mb-6 sm:mb-5 lg:mb-6 xl:mb-8 ml-1 sm:ml-2 lg:ml-4"
        ></img>
      </motion.div>
    </header>
  );
};

export default Header;
