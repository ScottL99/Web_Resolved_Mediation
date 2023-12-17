import React from "react";
import {
  colonPng,
  resolved_mediation_map,
  hero_video,
  arrow_icon_orange,
  hero_video_mobile,
} from "../assets";
import {
  navLinks,
  heroTitle,
  navMap,
  address,
  contactInfo,
  heroContent,
  button,
  socialMediaMobile,
} from "../constants";

import { Intro, LogoHeader } from "./subComponents";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdMenuOpen, MdOutlineCancelPresentation } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const closeMenu = () => setToggle(false);

  const [mapToggle, setMapToggle] = useState(false);
  const showMap = () => setMapToggle(true);
  const closeMap = () => setMapToggle(false);

  return (
    <>
      <header
        className="bg-orange flex flex-col text-white pt-6 px-4 sm:px-6 lg:px-10 lg:mx-20 relative overflow-x-clip z-10"
        id="header"
      >
        <div
          className={` ${
            mapToggle ? "translate-x-0" : "translate-x-[100vw]"
          } transition-all duration-1000 flex flex-col items-center absolute z-20 top-24 right-0 overflow-hidden min-h-[43vh] p-4 sm:p-8 lg:p-12  bg-gradient-to-b from-white/80 to-white rounded-3xl cursor-pointer`}
          onClick={closeMap}
        >
          <img
            src={resolved_mediation_map}
            alt="map"
            className="flex flex-1 object-cover max-h-[30vh] sm:max-h-[45vh] lg:max-h-[60vh] "
          ></img>
          <div className="flex flex-1 flex-col self-start mt-4 px-3 sm:px-10 lg:px-14 rounded-2xl w-full">
            {address.map((add, index) => (
              <p
                key={index}
                className="flex text-base leading-5 sm:text-lg sm:leading-[22px] lg:text-xl lg:leading-6 text-black font-HN_Light border-b-[1px] border-charcoal hover:text-orange transition-all"
              >
                {add}
              </p>
            ))}
            <div className="h-[1.25rem]"></div>
            {contactInfo.map((info) => (
              <p
                key={info.title}
                className="flex text-base leading-5 sm:text-lg sm:leading-[22px] lg:text-xl lg:leading-6 text-black font-HN_Light border-b-[1px] border-charcoal hover:text-orange transition-all"
              >
                <span className="font-HN_Bold mr-2"> {`${info.title}`} </span>
                {info.info}
              </p>
            ))}
          </div>
        </div>
        <nav className="flex flex-row items-center">
          <LogoHeader />
          <ul className="list-none hidden lg:flex flex-1 justify-end lg:text-xl xl:text-2xl font-HN_Regular">
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
                  onClick={closeMap}
                >
                  <span> {nav.title} </span>
                </Link>
              </li>
            ))}
            <li
              className="cursor-pointer border-2 border-white/0 hover:border-white flex lg:px-2 xl:px-3 py-1 
              transition-all duration-500"
            >
              <button onClick={() => setMapToggle((prog) => !prog)}>
                {navMap[0].title}
              </button>
            </li>
          </ul>
          <button
            className="flex flex-1 lg:hidden justify-end z-50"
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
            } absolute flex items-center justify-center w-full h-[50vh] bg-orange/95 right-0 z-30 transition-all duration-1000 top-0 lg:hidden text-2xl sm:text-3xl leading-4 sm:leading-5`}
          >
            <ul className="list-none flex flex-col items-center font-HN_Regular">
              <li
                className="flex m-4 pb-2 cursor-pointer border-b-white border-[1px] border-white/0 hover:border-white
              transition-all duration-500"
              >
                <Link
                  to={navLinks[0].id}
                  smooth={true}
                  offset={-20}
                  duration={700}
                  delay={100}
                  onClick={() => {
                    closeMap();
                    closeMenu();
                  }}
                >
                  <span> {navLinks[0].title} </span>
                </Link>
              </li>

              <li
                className="flex m-4 pb-2 cursor-pointer border-b-white border-[1px] border-white/0 hover:border-white
              transition-all duration-500"
              >
                <Link
                  to={navLinks[2].id}
                  smooth={true}
                  offset={-20}
                  duration={700}
                  delay={100}
                  onClick={() => {
                    closeMap();
                    closeMenu();
                  }}
                >
                  <span> {navLinks[2].title} </span>
                </Link>
              </li>
              <li
                className="flex m-4 pb-2 cursor-pointer border-b-white border-[1px] border-white/0 hover:border-white
              transition-all duration-500"
              >
                <button
                  onClick={() => {
                    showMap();
                    closeMenu();
                  }}
                >
                  {navMap[0].title}{" "}
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <motion.div
          className="flex flex-row items-end mt-5 "
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
            className="mb-2 mt-2 sm:mt-5 xl:mt-10 text-[4.5rem] sm:text-[8.5rem] lg:text-[10rem] xl:text-[14rem] 
          leading-none 
           text-white font-HN_Bold tracking-tighter"
          >
            {heroTitle}
          </h1>
          <img
            src={colonPng}
            alt="colon"
            className="h-[2.25rem] sm:h-[4.25rem] lg:h-[5rem] xl:h-[7rem] 
          mb-4 sm:mb-6 lg:mb-[26px] xl:mb-8 ml-1 sm:ml-2 lg:ml-4"
          ></img>
        </motion.div>
      </header>
      <section className="flex flex-col lg:mx-20 lg:h-auto">
        <div className="-z-10">
          <img></img>
          <video
            src={hero_video}
            type="video/mp4"
            autoPlay
            muted
            loop
            webkit-playsinline="true"
            playsInline
            className="-z-50 hidden lg:flex flex-1 w-full aspect-auto object-cover -mt-1 [-webkit-transform-style:preserve-3d] [transform:translateZ(1000px)]  "
          ></video>
          <video
            src={hero_video_mobile}
            type="video/mp4"
            autoPlay
            muted
            loop
            webkit-playsinline="true"
            playsInline
            className="-z-50 lg:hidden flex flex-1 w-full aspect-auto object-cover -mt-1 [-webkit-transform-style:preserve-3d] [transform:translateZ(1000px)]"
          ></video>
        </div>
        <motion.div
          className="hidden lg:flex flex-col sm:flex-row justify-between p-5 lg:p-10 items-center"
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
            delay: 0.5,
          }}
        >
          <p className="text-base lg:text-2xl xl:text-3xl font-HN_Medium">
            {heroContent}
          </p>

          <Link
            to="footer"
            smooth={true}
            offset={0}
            duration={1500}
            delay={0}
            className="flex flex-row items-center"
          >
            <button className=" bg-black text-white text-base lg:text-2xl xl:text-3xl my-4 sm:my-0 py-1 px-3 lg:py-2 lg:px-5 rounded-3xl font-HN_Bold tracking-tight hover:bg-orange transition-all hover:scale-105 duration-300">
              {button}
            </button>
          </Link>
        </motion.div>
        <div
          className={`flex lg:hidden
        } transition-all py-2 my-3`}
        >
          <ul className="list-none flex flex-1 flex-col text-2xl sm:text-4xl font-HN_Bold">
            <li className="flex flex-1 flex-row items-center  cursor-pointer leading-4 relative group overflow-hidden">
              <div className="border-y-[1px] border-charcoal absolute w-full h-full group-hover:translate-x-0 translate-x-full transition-all duration-700"></div>
              <img
                src={arrow_icon_orange}
                alt="orange_arrow_icon"
                className="w-[1.25rem] sm:w-[1.75rem] ml-6 sm:ml-8 mr-4 sm:mr-6 mb-1 mt-2"
              ></img>
              <Link
                to={navLinks[0].id}
                smooth={true}
                offset={-20}
                duration={700}
                delay={100}
              >
                {navLinks[0].title}
              </Link>
            </li>
            <li className="flex flex-1 flex-row items-center cursor-pointer leading-4 relative group overflow-hidden">
              <div className="border-y-[1px] border-charcoal absolute w-full h-full group-hover:translate-x-0 translate-x-full transition-all duration-700"></div>

              <img
                src={arrow_icon_orange}
                alt="orange_arrow_icon"
                className="w-[1.25rem] sm:w-[1.75rem] ml-6 sm:ml-8 mr-4 sm:mr-6 mb-1 mt-2"
              ></img>
              <Link
                to={navLinks[2].id}
                smooth={true}
                offset={-20}
                duration={700}
                delay={100}
              >
                {navLinks[2].title}
              </Link>
            </li>
            <li className="flex flex-1 flex-row items-center cursor-pointer leading-4 relative group overflow-hidden">
              <div className="border-y-[1px] border-charcoal absolute w-full h-full group-hover:translate-x-0 translate-x-full transition-all duration-700"></div>
              <img
                src={arrow_icon_orange}
                alt="orange_arrow_icon"
                className="w-[1.25rem] sm:w-[1.75rem] ml-6 sm:ml-8 mr-4 sm:mr-6 mb-1 mt-2"
              ></img>
              <button onClick={() => setMapToggle((prog) => !prog)}>
                {navMap[0].title}
              </button>
            </li>
          </ul>
        </div>
        <div className=" flex lg:hidden flex-row justify-between items-center px-6 mb-5">
          <Link
            to="footer"
            smooth={true}
            offset={0}
            duration={1500}
            delay={0}
            className="flex flex-row items-center"
          >
            <button className=" bg-black text-white text-base sm:text-2xl my-4 sm:my-0 py-1 sm:py-2 px-3 sm:px-5 rounded-3xl font-HN_Bold tracking-tight hover:bg-orange transition-all hover:scale-105 duration-300">
              {button}
            </button>
          </Link>
          <div className="flex flex-row">
            {socialMediaMobile.map((i, index) => (
              <a key={index} href={i.url}>
                <img
                  src={i.src}
                  alt={i.alt}
                  className="w-[2.25rem] sm:w-[3rem] mr-2 sm:mr-4 hover:scale-110 transition-all hover:bg-gray rounded-lg sm:rounded-xl"
                ></img>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Intro />
    </>
  );
};

export default Header;
