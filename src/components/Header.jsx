import {
  LogoHeader,
  Title,
  HeroAnimate,
  Appointment,
  Intro,
  WhereWeAre,
} from "./subComponents";

import { arrow_icon_orange } from "../assets";

import { navLinks, navMap, heroContent, socialMedia } from "../constants";

import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [mapToggle, setMapToggle] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      viewport={{ once: true }}
      className="relative flex flex-col z-0 mx-0 sm:mx-12 lg:mx-20 overflow-hidden"
    >
      {/* The part with the orange background */}
      <section
        id="header"
        className="flex flex-col pt-6 px-4 sm:px-6 lg:px-10  bg-orange text-white"
      >
        <div className="flex flex-row items-center">
          {/* Logo */}
          <LogoHeader />
          {/* navbar for large viewport, include map button */}
          <nav className="hidden lg:flex flex-1 justify-end lg:text-xl xl:text-2xl font-HN_Regular">
            {/* iterate navbar list */}
            {navLinks.map((nav, index) => (
              <ul key={index} className="flex flex-row items-center">
                <li
                  className="flex lg:px-2 xl:px-3 py-1 border-2 border-white/0 hover:border-white  
              transition-all duration-500 cursor-pointer"
                >
                  <Link
                    to={nav.id}
                    href={nav.id}
                    smooth={true}
                    offset={-20}
                    duration={700}
                    delay={100}
                    onClick={() => setMapToggle(false)}
                  >
                    {nav.title}
                  </Link>
                </li>
                <p className="lg:px-2 xl:px-3">|</p>
              </ul>
            ))}
            {/* map switcher "where we are" button */}
            <button
              onClick={() => setMapToggle((prog) => !prog)}
              className="flex lg:px-2 xl:px-3 py-1 border-2 border-white/0 hover:border-white  
              transition-all duration-500 cursor-pointer"
            >
              {navMap}
            </button>
          </nav>
        </div>
        {/* heading, resolved: */}
        <Title />
      </section>
      {/* hero video animation */}
      <HeroAnimate />
      {/* Appointment part for large viewport */}
      <section className="hidden lg:flex flex-row justify-between p-10 items-center">
        <p className="text-base lg:text-2xl xl:text-3xl font-HN_Medium">
          {heroContent}
        </p>
        <Appointment />
      </section>
      {/* Appointment and navbar part for mobile devices viewport */}
      <section className="flex lg:hidden flex-col mx-3 sm:mx-0">
        <nav className="flex flex-col py-2 my-3 text-2xl font-HN_Bold sm:text-4xl transition-all">
          {navLinks.map((nav, index) => (
            <Link
              key={index}
              to={nav.id}
              href={nav.id}
              smooth={true}
              offset={-20}
              duration={700}
              delay={100}
              onClick={() => setMapToggle(false)}
              className="relative flex flex-1 flex-row items-center leading-4 group cursor-pointer "
            >
              <div className="absolute w-full h-full border-y-[1px] border-charcoal opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full duration-700"></div>
              <img
                src={arrow_icon_orange}
                alt="orange_arrow_icon"
                className="w-[1.25rem] sm:w-[1.75rem] mx-4 sm:mx-6 mb-1 mt-2"
              ></img>
              {nav.title}
            </Link>
          ))}
          {/* map switcher "where we are" button */}
          <button
            onClick={() => setMapToggle((prog) => !prog)}
            className="relative flex flex-1 flex-row items-center leading-4 group cursor-pointer "
          >
            <div className="absolute w-full h-full border-y-[1px] border-charcoal opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-full duration-700"></div>
            <img
              src={arrow_icon_orange}
              alt="orange_arrow_icon"
              className="w-[1.25rem] sm:w-[1.75rem] mx-4 sm:mx-6 mb-1 mt-2"
            ></img>
            {navMap}
          </button>
        </nav>
        <div className=" flex lg:hidden flex-row justify-between items-center mb-5 mx-1 sm:mx-0 px-2 sm:px-6 ">
          <Appointment />
          <div className="flex flex-row">
            {socialMedia.map((i, index) => (
              <a
                key={index}
                href={i.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={i.srcMobile}
                  alt={i.alt}
                  className="w-[2.25rem] sm:w-[3rem] mr-2 sm:mr-4 rounded-lg sm:rounded-xl  hover:scale-110 hover:bg-gray transition-all"
                ></img>
              </a>
            ))}
          </div>
        </div>
      </section>
      <WhereWeAre mapSwitch={mapToggle} callback={(x) => setMapToggle(x)} />
      <Intro />
    </motion.header>
  );
};

export default Header;
