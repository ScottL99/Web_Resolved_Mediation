import { whatWeDoContents, navLinks, whatWeDoTitle } from "../constants";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <div id={navLinks[2].id} className="mx-6 sm:mx-12 lg:mx-20">
      <motion.h1
        className=" mt-10 xl:mt-20 mb-4 p-5  text-[2.5em] sm:text-[4rem] lg:text-[7rem] xl:text-[9.5rem] 
         leading-10 sm:leading-[4rem] lg:leading-[6rem] xl:leading-[8rem] font-HN_Bold tracking-tighter"
        initial={{ opacity: 0, y: -75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {whatWeDoTitle[0]} <br></br> {whatWeDoTitle[1]}
      </motion.h1>
      <motion.div
        className="flex flex-1 flex-col lg:flex-row justify-between"
        initial={{ opacity: 0, y: -75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {whatWeDoContents.map((text, index) => (
          <motion.li
            key={index}
            className="flex flex-col list-none p-5 hover:scale-105 transition-all "
          >
            <div className="flex h-[1px] bg-black "></div>
            <h5 className="flex mb-2 mt-6 lg:text-lg xl:text-xl font-HN_Medium">
              {text.title}
            </h5>
            <p className="flex flex-1 lg:mb-6 font-HN_Regular lg:text-sm xl:text-lg ">
              {text.content}
            </p>
            <div className="hidden lg:flex h-[1px] bg-black "></div>
          </motion.li>
        ))}
        <div className="lg:hidden h-[1px] bg-black mx-5 mt-3" />
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
