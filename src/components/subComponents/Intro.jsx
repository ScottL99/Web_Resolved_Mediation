import { squarePortrait, arrow_icon } from "../../assets";
import { navLinks, introPortrait, introContent } from "../../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Intro = () => {
  return (
    <motion.section
      className="flex flex-col mx-0 lg:mx-20 "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-1 flex-col lg:flex-row mt-2 lg:mt-10 p-5 lg:p-10 bg-gray justify-around items-center relative group/mobile">
        <div className="flex w-[40%] group  overflow-hidden ">
          <div
            className=" flex-1 relative lg:h-[300px] xl:h-[450px] xxl:h-[530px] group transition-all duration-1000 
          [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] "
          >
            <img
              src={squarePortrait}
              alt="portrait"
              className="flex object-contain lg:absolute"
            ></img>
            <div className="sm:hidden lg:flex absolute inset-0 bg-charcoal [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="flex items-center justify-center text-white text-xs  xl:text-base xxl:text-xl font-HN_Regular p-5">
                {introPortrait[0]}
              </p>
            </div>
            <img
              src={arrow_icon}
              alt="arrow_icon"
              className="absolute w-[2.5rem] h-[2.5rem] -right-1 sm:right-1 lg:right-3 xxl:left[1000px] -top-1 sm:top-1 lg:top-3 [backface-visibility:hidden] scale-50 sm:scale-75 lg:scale-90 xl:scale-100"
            ></img>
          </div>
        </div>
        <div className="flex flex-1 mt-10 lg:mt-0 justify-center flex-col">
          {introContent.map((text, index) => (
            <p
              key={index}
              className="text-lg sm:text-2xl lg:text-3xl xl:text-5xl xxl:text-7xl ml-8 lg:ml-16 xl:ml-24 font-HN_Bold tracking-tight 
              hover:scale-105 transition-all hover:text-charcoal"
            >
              {text.content}
              <br />
            </p>
          ))}
        </div>
        <div className="lg:hidden flex flex-1 absolute opacity-0 group-hover/mobile:opacity-100 bg-charcoal h-full top-0 right-0 transition-all duration-500 ">
          <p className="flex flex-1 text-white text-xs xs:text-sm sm:text-lg font-HN_Regular p-5 sm:p-16 ">
            {introPortrait[0]}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Intro;
