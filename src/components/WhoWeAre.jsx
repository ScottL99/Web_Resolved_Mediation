import { squarePortrait, arrow_icon } from "../assets";
import { navLinks, introPortrait, introContent } from "../constants";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <motion.div
      className="flex flex-col mx-20"
      id={navLinks[0].id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.25 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-1 justify-between mt-10 p-10 bg-gray">
        <div className="flex flex-1 group  overflow-hidden ">
          <div className=" flex-1 relative  group transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <img
              src={squarePortrait}
              alt="portrait"
              className="object-contain absolute "
            ></img>
            <div className="flex absolute inset-0 mr-5 bg-charcoal/95 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="flex flex-1 items-center justify-center text-white text-2xl font-HN_Regular">
                {introPortrait}
              </p>
            </div>
            <img
              src={arrow_icon}
              alt="arrow_icon"
              className="absolute w-[2.5rem] h-[2.5rem] right-8 top-3 "
            ></img>
          </div>
        </div>
        <div className="flex flex-col w-[60%]">
          {introContent.map((text, index) => (
            <p
              key={index}
              className="text-6xl ml-24 font-HN_Bold tracking-tight hover:scale-105 transition-all hover:text-charcoal"
            >
              {text.content}
              <br />
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WhoWeAre;
