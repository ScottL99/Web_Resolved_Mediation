import { animation } from "../assets";
import { heroContent, button } from "../constants";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col mx-4 sm:mx-12 lg:mx-20 h-[46vh] sm:h-[36vh] lg:h-auto">
      <video
        src={animation}
        autoPlay
        muted
        loop
        className="flex flex-1 w-full aspect-auto object-cover z-0 -mt-1  "
      ></video>
      <motion.div
        className="flex flex-col sm:flex-row justify-between p-5 lg:p-10 items-center"
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
          <button className=" bg-charcoal text-white text-base lg:text-2xl xl:text-3xl my-4 sm:my-0 py-1 px-3 lg:py-2 lg:px-5 rounded-3xl font-HN_Bold tracking-tight hover:bg-orange transition-all hover:scale-105 duration-300">
            {button}
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
