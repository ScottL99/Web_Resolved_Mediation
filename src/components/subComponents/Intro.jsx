import { squarePortrait, arrow_icon } from "../../assets";
import { navLinks, introPortrait, introContent } from "../../constants";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.section
      className="flex flex-col mx-6 sm:mx-0"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      viewport={{ once: true }}
    >
      <div className="relative flex flex-1 flex-col sm:flex-row mt-2 lg:mt-10 p-5 lg:p-10 justify-around items-start sm:items-center bg-gray group/mobile">
        <div className="flex sm:w-[40%] group overflow-hidden ">
          <div className="relative flex-1 max-w-[285px] sm:max-w-none lg:h-[300px] xl:h-[450px] xxl:h-[530px] [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] group transition-all duration-1000">
            <img
              src={squarePortrait}
              alt="portrait"
              className="lg:absolute flex object-contain"
            ></img>
            <div className="absolute hidden lg:flex inset-0 bg-charcoal [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="flex items-center justify-center text-white text-xs  xl:text-base xxl:text-xl font-HN_Regular p-5">
                {introPortrait[0]}
              </p>
            </div>
            <img
              src={arrow_icon}
              alt="arrow_icon"
              className="absolute w-[2.5rem] h-[2.5rem] -right-1 sm:right-1 lg:right-3 xxl:right-5 -top-1 sm:top-1 lg:top-3 xxl:top-5 [backface-visibility:hidden] scale-50 sm:scale-75 lg:scale-90 xl:scale-100"
            ></img>
          </div>
        </div>
        <div className="flex flex-col flex-1 mt-6 sm:mt-0 justify-center ">
          {introContent.map((text, index) => (
            <p
              key={index}
              className="whitespace-nowrap leading-tight lg:leading-normal text-xl sm:text-2xl lg:text-3xl xl:text-5xl xxl:text-7xl ml-1 sm:ml-8 lg:ml-16 xl:ml-24 font-HN_Bold tracking-tight hover:scale-105 transition-all hover:text-charcoal"
            >
              {text.content}
              <br />
            </p>
          ))}
        </div>
        <div className="absolute flex lg:hidden flex-1 h-full  top-0 right-0 opacity-0 group-hover/mobile:opacity-100 bg-charcoal transition-all duration-500 ">
          <p className="flex flex-1 p-4 text-white text-sm font-HN_Regular ">
            {introPortrait[0]}
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Intro;
