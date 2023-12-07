import { servicesStyle, serviceContent } from "../constants";
import {
  servicesIcon1,
  servicesIcon2,
  servicesIcon3,
  servicesIcon4,
  servicesIcon5,
  servicesIcon6,
} from "../assets";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div className="flex overflow-hidden mx-20">
      <div className="flex-1 my-10  border-y-4  border-stone-300 border-dashed ">
        <div className="grid grid-cols-11 justify-items-center content-center px-20 ">
          <motion.div
            className={servicesStyle.iconDiv}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
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
          </motion.div>
          <div className={servicesStyle.dashedLineV}></div>
          <motion.div
            className={servicesStyle.iconDiv}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={servicesIcon3}
              alt="icon3"
              className={servicesStyle.icon}
            ></img>
            <div className="h-3"></div>
            <p className={servicesStyle.text}>{serviceContent[1].content1}</p>
            <p className={servicesStyle.text}>{serviceContent[1].content2}</p>
          </motion.div>
          <div className={servicesStyle.dashedLineV}></div>
          <motion.div
            className={servicesStyle.iconDiv}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
          >
            <img
              src={servicesIcon4}
              alt="icon4"
              className={servicesStyle.icon}
            ></img>
            <div className="h-3"></div>
            <p className={servicesStyle.text}>{serviceContent[2].content1}</p>
            <p className={servicesStyle.text}>{serviceContent[2].content2}</p>
          </motion.div>
          <div className={servicesStyle.dashedLineH}></div>
          <div></div>
          <div className={servicesStyle.dashedLineH}></div>
          <div></div>
          <div className={servicesStyle.dashedLineH}></div>
          <motion.div
            className={servicesStyle.iconDiv}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
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
          </motion.div>
          <div className={servicesStyle.dashedLineV}></div>
          <motion.div
            className={servicesStyle.iconDiv}
            initial={{ opacity: 0, y: 100, x: -50, rotate: "-5deg" }}
            whileInView={{ opacity: 1, y: 0, x: 0, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
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
          </motion.div>
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
