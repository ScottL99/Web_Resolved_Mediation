import { Services, Policy } from "./subComponents";
import {
  navLinks,
  whereWeAreTitle,
  whereWeAreContent1,
  whereWeAreContent2,
} from "../constants";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <section
      id={navLinks[1].id}
      className="relative mx-6 sm:mx-12 lg:mx-20 overflow-hidden"
    >
      <motion.h1
        className="mt-10 lg:mt-20 ml-6 sm:ml-14 lg:ml-0 p-0 xs:p-5 text-[2.5em] sm:text-[4rem] lg:text-[7rem] xl:text-[9.5rem] 
        leading-10 sm:leading-[4rem] lg:leading-[6rem] xl:leading-[8rem] font-HN_Bold tracking-tighter"
        initial={{ opacity: 0, y: -75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {[whereWeAreTitle[0]]} <br />{" "}
        <span className="mr-1">{[whereWeAreTitle[1]]}</span>
        {whereWeAreTitle[2]}
      </motion.h1>
      <div className="flex flex-1 flex-col lg:flex-row mt-6 py-5 px-8 lg:px-16 bg-gray items-start lg:items-center justify-around tracking-tight  ">
        <div className="flex lg:w-[59%] flex-col justify-center">
          {whereWeAreContent1.map((text, index) => (
            <h5
              key={index}
              className="whitespace-nowrap xs:mx-3 sm:mx-12 lg:mx-0 leading-tight lg:leading-normal text-xl sm:text-3xl xl:text-5xl xxl:text-6xl font-HN_Bold tracking-tight hover:scale-105 transition-all hover:text-charcoal"
            >
              {text.content}
              <br />
            </h5>
          ))}
        </div>
        <div className="flex flex-1 flex-col xs:mx-3 sm:mx-12 lg:mx-0 justify-center max-w-[330px] sm:max-w-[420px] lg:max-w-[100%] mt-5 sm:mt-10 lg:mt-0">
          {whereWeAreContent2.map((text, index) => (
            <p
              key={index}
              className=" text-sm sm:text-base xl:text-2xl xxl:text-3xl pl-0 lg:pl-10 py-2 font-HN_Regular"
            >
              {text.content}

              <br />
            </p>
          ))}
        </div>
      </div>
      <Services />
      <Policy />
    </section>
  );
};
export default WhatWeDo;
