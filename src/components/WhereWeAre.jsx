import {
  navLinks,
  whereWeAreTitle,
  whereWeAreContent1,
  whereWeAreContent2,
} from "../constants";
import { motion } from "framer-motion";

const WhereWeAre = () => {
  return (
    <div className="mx-20" id={navLinks[4].id}>
      <motion.h1
        className="mt-20 p-5 text-[9.5rem] leading-[8rem] font-HN_Bold tracking-tighter"
        initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
        transition={{ duration: 0.75, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {[whereWeAreTitle[0]]} <br /> {[whereWeAreTitle[1]]}
      </motion.h1>
      <div className="flex flex-1 flex-row mt-6 py-10 px-16 bg-gray justify-around tracking-tight  ">
        <div className="flex w-[60%] flex-col">
          {whereWeAreContent1.map((text, index) => (
            <p
              key={index}
              className=" text-6xl  font-HN_Bold tracking-tight hover:scale-105 transition-all hover:text-charcoal"
            >
              {text.content}
              <br />
            </p>
          ))}
        </div>
        <div className="flex flex-1 flex-col">
          {whereWeAreContent2.map((text, index) => (
            <p key={index} className=" text-2xl pl-10 font-HN_Regular">
              {text.content}
              <br />
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

("flex flex-1 text-2xl pl-10 font-HN_Regular");

export default WhereWeAre;
