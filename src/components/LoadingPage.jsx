import { motion } from "framer-motion";
import { logo, logo_words } from "../assets";
import { useState, useEffect } from "react";

const LoadingPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  loading
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div
      className={` ${
        loading ? "fixed" : "hidden"
      }  top-0 w-screen h-screen bg-white `}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 2.0 }}
        className="relative h-screen w-screen flex justify-center items-center"
      >
        <img
          src={logo_words}
          alt="logo_words"
          className=" h-[16px] lg:h-[24px] mb-[2px]"
        ></img>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 240 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute lg:hidden h-[28px] w-[270px] flex bg-white/60"
        >
          <motion.img
            initial={{ opacity: 0, rotate: "90deg" }}
            animate={{ opacity: 100, rotate: "360deg" }}
            transition={{ duration: 0.7, delay: 0, ease: "backInOut" }}
            src={logo}
            alt="logo"
          ></motion.img>
        </motion.div>
        {/* mobile vision */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 370 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className="absolute hidden lg:flex h-[42px] w-[410px]  bg-white/75"
        >
          <motion.img
            initial={{ opacity: 0, rotate: "90deg" }}
            animate={{ opacity: 100, rotate: "360deg" }}
            transition={{ duration: 0.7, delay: 0, ease: "backInOut" }}
            src={logo}
            alt="logo"
          ></motion.img>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;
