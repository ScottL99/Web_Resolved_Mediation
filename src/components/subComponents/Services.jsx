import { ServicesForMobile } from "./index";
import { servicesStyle, serviceContent } from "../../constants";
import {
  servicesIcon1,
  servicesIcon2,
  servicesIcon3,
  servicesIcon4,
  servicesIcon5,
  servicesIcon6,
  dashLine_horizontal,
  dashLine_vertical,
} from "../../assets";
import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [toggle, setToggle] = useState(false);
  const switchDisplay = () => setToggle(true);

  const [contentNum, setContentNum] = useState(0);
  const switchContent = (num) => setContentNum(num);

  const HorizontalDashedLineForLarge = () => (
    <div className="lg:flex hidden px-6 col-span-3">
      <img
        src={dashLine_horizontal}
        alt="dashLine_horizontal"
        className=" object-cover h-1"
      />
    </div>
  );

  const HorizontalDashedLineForSmall = () => (
    <div className="flex lg:hidden px-6 col-span-3">
      <img
        src={dashLine_horizontal}
        alt="dashLine_horizontal"
        className=" object-cover h-1"
      />
    </div>
  );

  const VerticalDashedLine = () => (
    <div className="flex h-[190px] my-10 overflow-hidden">
      <img className="object-cover w-1" src={dashLine_vertical}></img>
    </div>
  );

  const VerticalDashedLineForLarge = () => (
    <div className="hidden lg:flex h-[190px] my-10 overflow-hidden">
      <img className="object-cover w-1" src={dashLine_vertical}></img>
    </div>
  );

  const VerticalDashedLineForSmall = () => (
    <div className="lg:hidden sm:flex h-[190px] my-10 overflow-hidden">
      <img className="object-cover w-1" src={dashLine_vertical}></img>
    </div>
  );

  const serviceItems = (num, servicesIcon, delay) => {
    return (
      <motion.button
        className={servicesStyle.iconDiv}
        initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
        transition={{ duration: 0.5, delay: delay }}
        viewport={{ once: true }}
        onClick={() => {
          switchContent(serviceContent[num].id);
          setToggle((prop) => !prop);
        }}
      >
        <div className="mb-3">
          <img
            src={servicesIcon}
            alt="icon"
            className={servicesStyle.icon}
          ></img>
        </div>
        <p className={servicesStyle.text}>{serviceContent[num].content1}</p>
        <p className={servicesStyle.text}>{serviceContent[num].content2}</p>
        {serviceContent[num].content3 && (
          <p className={servicesStyle.text}>{serviceContent[num].content3}</p>
        )}
      </motion.button>
    );
  };

  return (
    <section className="relative flex flex-col overflow-hidden w-full mt-10 mb-6 xxl:px-20 justify-center">
      <img
        src={dashLine_horizontal}
        alt="dashLine_horizontal"
        className="h-1 object-cover px-6 sm:px-2 lg:px-4"
      />
      {/* here is the service part for the viewport for mobile phone */}
      <ServicesForMobile />

      {/* here is the service part for the viewport over 720px */}
      <div className="flex-1 hidden sm:grid  grid-cols-7 lg:grid-cols-11 justify-items-center content-center  ">
        <motion.button
          className={servicesStyle.iconDiv}
          initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
          whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          onClick={() => {
            setToggle((prop) => !prop);
            switchContent(serviceContent[0].id);
          }}
        >
          <div className="flex flex-row mb-3">
            <img
              src={servicesIcon1}
              alt="icon"
              className={servicesStyle.icon}
            ></img>
            <div className="flex w-[5px] rounded-lg self-stretch  bg-stone-300"></div>
            <img
              src={servicesIcon2}
              alt="icon"
              className={servicesStyle.icon}
            ></img>
          </div>
          <p className={servicesStyle.text}>{serviceContent[0].content1}</p>
          <p className={servicesStyle.text}>{serviceContent[0].content2}</p>
        </motion.button>
        {VerticalDashedLine()}
        {serviceItems(1, servicesIcon3, 0.5)}
        {VerticalDashedLineForLarge()}
        {HorizontalDashedLineForSmall()}
        <div className="flex lg:hidden"></div>
        {HorizontalDashedLineForSmall()}
        {serviceItems(2, servicesIcon4, 0.75)}
        {VerticalDashedLineForSmall()}
        {HorizontalDashedLineForLarge()}
        <div className="hidden lg:flex"></div>
        {HorizontalDashedLineForLarge()}

        <div className="hidden lg:flex"></div>
        {HorizontalDashedLineForLarge()}

        {serviceItems(3, servicesIcon3, 0.25)}
        {VerticalDashedLineForLarge()}
        {HorizontalDashedLineForSmall()}
        <div className="flex lg:hidden"></div>
        {HorizontalDashedLineForSmall()}
        {serviceItems(4, servicesIcon5, 0.5)}
        {VerticalDashedLine()}
        <motion.div
          className={servicesStyle.iconDiv}
          initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
          whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
          transition={{ duration: 0.5, delay: 0.75 }}
          viewport={{ once: true }}
        >
          <img
            src={servicesIcon6}
            alt="icon6"
            className={servicesStyle.icon}
          ></img>
          <div className="h-3"></div>
          <p className={servicesStyle.text}>{serviceContent[5].content1}</p>
          <p className={servicesStyle.text}>{serviceContent[5].content2}</p>
        </motion.div>
      </div>
      <img
        src={dashLine_horizontal}
        alt="dashLine_horizontal"
        className="h-1 object-cover sm:px-2 lg:px-4"
      />
      <div
        className={`${
          toggle ? "translate-y-0" : "-translate-y-full"
        } absolute hidden sm:flex flex-col h-full w-full z-10 top-0 items-center justify-around px-5 sm:px-20 
        rounded-3xl bg-charcoal/90 font-HN_Regular transition-all duration-700`}
        onClick={() => setToggle((prog) => !prog)}
      >
        <p className="mb-4 sm:text-xl lg:text-2xl text-white text-left ">
          {serviceContent[contentNum].hiddenContent}
        </p>
        <div className="flex flex-col">
          <p className={servicesStyle.text_fee}>
            {serviceContent[contentNum].time}
          </p>
          <p className={servicesStyle.text_fee}>
            {serviceContent[contentNum].price}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
