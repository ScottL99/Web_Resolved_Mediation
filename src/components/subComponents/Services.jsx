import { servicesStyle, serviceContent } from "../../constants";
import {
  servicesIcon1,
  servicesIcon2,
  servicesIcon3,
  servicesIcon4,
  servicesIcon5,
  servicesIcon6,
} from "../../assets";
import { motion } from "framer-motion";
import { useState } from "react";

const Services = () => {
  const [toggle, setToggle] = useState(false);
  const switchDisplay = () => setToggle(true);

  const [contentNum, setContentNum] = useState(0);
  const switchContent = (num) => setContentNum(num);

  return (
    <section className="flex overflow-hidden mx-6 sm:mx-12 lg:mx-20">
      <div className="flex-1 my-10  border-y-4  border-stone-300 border-dashed mx-5 xxl:mx-20 relative overflow-hidden rounded-sm">
        <button
          className={`${
            toggle ? "translate-y-0" : "-translate-y-full"
          } rounded-3xl absolute flex flex-1 bg-charcoal/90 text-white font-HN_Regular text:lg sm:text-xl lg:text-2xl  h-full w-full z-10 top-0 transition-all duration-700 px-5 sm:px-20 text-left items-center justify-center `}
          onClick={() => setToggle((prog) => !prog)}
        >
          {serviceContent[contentNum].hiddenContent}
        </button>
        <div className="grid grid-cols-7 lg:grid-cols-11 justify-items-center content-center  ">
          <motion.button
            className={servicesStyle.iconDiv}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.75, delay: 0.25 }}
            viewport={{ once: true }}
            onClick={() => {
              switchDisplay();
              switchContent(serviceContent[0].id);
            }}
          >
            <div className="flex flex-row mb-2">
              <img
                src={servicesIcon1}
                alt="icon1"
                className={servicesStyle.icon}
              ></img>
              <div className="flex w-[5px] rounded-lg self-stretch  bg-stone-300"></div>
              <img
                src={servicesIcon2}
                alt="icon2"
                className={servicesStyle.icon}
              ></img>
            </div>
            <div className="h-2"></div>
            <p className={servicesStyle.text}>{serviceContent[0].content1}</p>
            <p className={servicesStyle.text}>{serviceContent[0].content2}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[0].time}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[0].price}</p>
          </motion.button>
          <div className={servicesStyle.dashedLineV}></div>
          <motion.button
            className={servicesStyle.iconDiv}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onClick={() => {
              switchDisplay();
              switchContent(serviceContent[1].id);
            }}
          >
            <img
              src={servicesIcon3}
              alt="icon3"
              className={servicesStyle.icon}
            ></img>
            <div className="h-3"></div>
            <p className={servicesStyle.text}>{serviceContent[1].content1}</p>
            <p className={servicesStyle.text}>{serviceContent[1].content2}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[1].time}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[1].price}</p>
          </motion.button>
          <div className={`${servicesStyle.dashedLineV} hidden lg:flex`}></div>
          <div className={`${servicesStyle.dashedLineH} lg:hidden `}></div>
          <div className="flex lg:hidden"></div>
          <div className={`${servicesStyle.dashedLineH} lg:hidden`}></div>

          <motion.button
            className={servicesStyle.iconDiv}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
            onClick={() => {
              switchDisplay();
              switchContent(serviceContent[2].id);
            }}
          >
            <img
              src={servicesIcon4}
              alt="icon4"
              className={servicesStyle.icon}
            ></img>
            <div className="h-3"></div>
            <p className={servicesStyle.text}>{serviceContent[2].content1}</p>
            <p className={servicesStyle.text}>{serviceContent[2].content2}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[2].time}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[2].price}</p>
          </motion.button>
          <div className={`${servicesStyle.dashedLineV} lg:hidden`}></div>
          <div className={`${servicesStyle.dashedLineH} hidden lg:flex `}></div>
          <div className="hidden lg:flex"></div>
          <div className={`${servicesStyle.dashedLineH} hidden lg:flex `}></div>
          <div className="hidden lg:flex"></div>
          <div className={`${servicesStyle.dashedLineH} hidden lg:flex `}></div>
          <motion.button
            className={`${servicesStyle.iconDiv}`}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            onClick={() => {
              switchDisplay();
              switchContent(serviceContent[3].id);
            }}
          >
            <img
              src={servicesIcon3}
              alt="icon3"
              className={servicesStyle.icon}
            ></img>
            <div className="h-3"></div>
            <p className={servicesStyle.text}>{serviceContent[3].content1}</p>
            <p className={servicesStyle.text}>{serviceContent[3].content2}</p>
            <p className={servicesStyle.text}>{serviceContent[3].content3}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[3].time}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[3].price}</p>
          </motion.button>
          <div className={`${servicesStyle.dashedLineV} hidden lg:flex`}></div>
          <div className={`${servicesStyle.dashedLineH} lg:hidden `}></div>
          <div className="flex lg:hidden"></div>
          <div className={`${servicesStyle.dashedLineH} lg:hidden`}></div>
          <motion.button
            className={servicesStyle.iconDiv}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onClick={() => {
              switchDisplay();
              switchContent(serviceContent[4].id);
            }}
          >
            <img
              src={servicesIcon5}
              alt="icon5"
              className={servicesStyle.icon}
            ></img>
            <div className="h-3"></div>
            <p className={servicesStyle.text}>{serviceContent[4].content1}</p>
            <p className={servicesStyle.text}>{serviceContent[4].content2}</p>
            <p className={servicesStyle.text}>{serviceContent[4].content3}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[5].time}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[5].price}</p>
          </motion.button>
          <div className={servicesStyle.dashedLineV}></div>
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
            <p className={servicesStyle.text_fee}>{serviceContent[5].time}</p>
            <p className={servicesStyle.text_fee}>{serviceContent[5].price}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
