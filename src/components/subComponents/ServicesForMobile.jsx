import { servicesStyle, serviceContent } from "../../constants";
import {
  servicesIcon1,
  servicesIcon2,
  servicesIcon3,
  servicesIcon4,
  servicesIcon5,
  servicesIcon6,
  dashLine_horizontal,
} from "../../assets";
import { motion } from "framer-motion";
import { useState } from "react";

const ServicesForMobile = () => {
  const [toggleMobile0, setToggleMobile0] = useState(false);
  const [toggleMobile1, setToggleMobile1] = useState(false);
  const [toggleMobile2, setToggleMobile2] = useState(false);
  const [toggleMobile3, setToggleMobile3] = useState(false);
  const [toggleMobile4, setToggleMobile4] = useState(false);
  const [toggleMobile5, setToggleMobile5] = useState(false);

  // horizontal dash line
  const dashLineImg = () => {
    return (
      <div className="px-6">
        <img
          src={dashLine_horizontal}
          alt="dashLine_horizontal"
          className=" object-cover h-1"
        />
      </div>
    );
  };
  //  these are the template for items
  const serviceItems = (item, setItem, num, icon) => {
    return (
      <motion.button
        className={`${servicesStyle.iconDiv} my-2 relative h-[15rem]`}
        initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        onClick={() => {
          setItem((prog) => !prog);
        }}
      >
        <div className="flex flex-row mb-3">
          <img src={icon} alt="icon" className={servicesStyle.icon}></img>
        </div>
        <p className={servicesStyle.text}>{serviceContent[num].content1}</p>
        <p className={servicesStyle.text}>{serviceContent[num].content2}</p>
        {serviceContent[num].content3 && (
          <p className={servicesStyle.text}>{serviceContent[num].content3}</p>
        )}

        <div
          className={`${
            item ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } absolute flex flex-col h-full w-[90%] z-30 top-0 items-center justify-center p-4 text-sm bg-charcoal/95 text-white text-left rounded-2xl font-HN_Regular transition-all duration-700`}
        >
          <p className="mb-2">{serviceContent[num].hiddenContent}</p>
          <p className={servicesStyle.text_fee}></p>
        </div>
      </motion.button>
    );
  };

  return (
    <div className="flex sm:hidden flex-col">
      {/* the first item with two icons */}
      <motion.button
        className={`${servicesStyle.iconDiv} my-2 relative h-[16rem]`}
        initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
        onClick={() => {
          setToggleMobile0((prog) => !prog);
        }}
      >
        <div className="flex flex-row mb-3">
          <img
            src={servicesIcon1}
            alt="icon"
            className={servicesStyle.icon}
          ></img>
          <div className="flex w-[5px] rounded-lg self-stretch bg-stone-300"></div>
          <img
            src={servicesIcon2}
            alt="icon"
            className={servicesStyle.icon}
          ></img>
        </div>
        <p className={servicesStyle.text}>{serviceContent[0].content1}</p>
        <p className={servicesStyle.text}>{serviceContent[0].content2}</p>
        {
          <div
            className={`${
              toggleMobile0
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } absolute flex flex-col h-full w-[90%] z-30 top-0 items-center justify-center p-4 text-sm bg-charcoal/95 text-white text-left rounded-2xl font-HN_Regular transition-all duration-700`}
          >
            <p className="mb-2">{serviceContent[0].hiddenContent}</p>
          </div>
        }
      </motion.button>
      {dashLineImg()}
      {serviceItems(toggleMobile1, setToggleMobile1, 1, servicesIcon3)}
      {dashLineImg()}
      {serviceItems(toggleMobile2, setToggleMobile2, 2, servicesIcon4)}
      {dashLineImg()}
      {serviceItems(toggleMobile3, setToggleMobile3, 3, servicesIcon3)}
      {dashLineImg()}
      {serviceItems(toggleMobile4, setToggleMobile4, 4, servicesIcon5)}
      {dashLineImg()}
      <motion.button
        className={`${servicesStyle.iconDiv} my-2 relative h-[15rem]`}
        initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row mb-3">
          <img
            src={servicesIcon6}
            alt="icon"
            className={servicesStyle.icon}
          ></img>
        </div>
        <p className={servicesStyle.text}>{serviceContent[5].content1}</p>
        <p className={servicesStyle.text}>{serviceContent[5].content2}</p>
        {serviceContent[5].content3 && (
          <p className={servicesStyle.text}>{serviceContent[5].content3}</p>
        )}
      </motion.button>
    </div>
  );
};

export default ServicesForMobile;
