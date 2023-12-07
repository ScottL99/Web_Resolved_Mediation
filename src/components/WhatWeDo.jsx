import { whatWeDoContents, navLinks, whatWeDoTitle } from "../constants";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <div id={navLinks[2].id} className="mx-20">
      <motion.h1
        className=" mt-20 mb-4 p-6 text-[9.5rem] leading-[8rem] font-HN_Bold tracking-tighter"
        initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
        transition={{ duration: 0.75, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {whatWeDoTitle[0]} <br></br> {whatWeDoTitle[1]}
      </motion.h1>
      <div className="flex flex-row justify-between">
        {whatWeDoContents.map((text, index) => (
          <li
            key={index}
            className="flex flex-col list-none p-6 hover:scale-105 transition-all"
          >
            <motion.div
              initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
              whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
              transition={{ duration: 0.75, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-1 h-[1px] bg-black "></div>
              <h5 className="flex flex-1 mb-2 mt-6 text-xl font-HN_Medium">
                {text.title}
              </h5>
              <p className="flex flex-1 mb-16 font-HN_Regular text-lg">
                {text.content}
              </p>
              <div className="flex flex-1 h-[1px] bg-black "></div>
            </motion.div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
