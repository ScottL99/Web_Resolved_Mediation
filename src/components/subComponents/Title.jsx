import { heroTitle } from "../../constants";
import { colonPng } from "../../assets";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <motion.div
      className="flex flex-row items-end lg:mt-5 "
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
            leading-none font-HN_Bold tracking-tighter  text-white "
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
  );
};

export default Title;
