import { picture1, arrow_icon } from "../../assets";
import { questionCards } from "../../constants";
import { motion } from "framer-motion";
import { useState } from "react";

import React from "react";

const Questions = () => {
  const [toggle, setToggle] = useState(false);
  const switchDisplay = () => setToggle(true);

  const [contentNum, setContentNum] = useState(0);
  const switchContent = (num) => setContentNum(num);

  return (
    <section className="flex flex-col my-10 px-5 z-0 overflow-hidden relative">
      <button
        className={`${
          toggle ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } absolute flex flex-1 lg:hidden bg-charcoal text-white font-HN_Regular text-xs xs:text-sm sm:text-xl  h-full z-10 top-0 left-0 transition-all duration-500 mx-5 px-5 sm:px-10 text-left items-center`}
        onClick={() => setToggle((prog) => !prog)}
      >
        <p>
          {questionCards[contentNum].content1}
          <br />
          <br />
          {questionCards[contentNum].content2}
          <br />
          <br />
          {questionCards[contentNum].content3}
        </p>
      </button>
      <motion.img
        alt="picture1"
        src={picture1}
        className="flex object-cover m-1 lg:h-[40rem] xl:h-[50rem] xxl:h-[60rem] "
        initial={{ opacity: 0, y: -75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      ></motion.img>
      <motion.div
        className="flex flex-col lg:flex-row"
        initial={{ opacity: 0, y: -75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {questionCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-1 flex-col relative bg-orange px-5 pb-3 lg:hover:px-10 lg:hover:pb-6 m-1 cursor-pointer group hover:bg-charcoal transition-all duration-700"
          >
            <div
              className="hidden lg:flex flex-1 absolute lg:-top-2 lg:left-0  w-full opacity-0 bg-white 
            group-hover:opacity-80  group-hover:-translate-y-full lg:h-[640px] xl:h-[800px] xxl:min-h-[960px] transition-all duration-700 "
            >
              <p className="flex flex-1 justify-center items-center font-HN_Regular text-sm xl:text-lg px-2 xl:p-6  text-black">
                {card.content1}
                <br></br>
                <br></br>
                {card.content2}
                <br></br>
                <br></br>
                {card.content3}
              </p>
            </div>
            <button
              className="flex flex-1  text-left items-end"
              onClick={() => {
                switchDisplay();
                switchContent(card.id);
              }}
            >
              <h5 className="flex flex-1 text-white  text-xl xl:text-3xl xxl:text-4xl leading-none xl:leading-7 xxl:leading-8 font-HN_Medium mt-4">
                {card.title1} <br></br>
                {card.title2} <br></br>
                {card.title3} {card.space}
                {card.title4}
              </h5>
            </button>
            <img
              src={arrow_icon}
              alt="arrow_icon"
              className="absolute w-[1.75rem] h-[1.75rem] right-3 top-3"
            ></img>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Questions;
