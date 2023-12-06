import { servicesStyle } from "../constants";
import {
  servicesIcon1,
  servicesIcon2,
  servicesIcon3,
  servicesIcon4,
  servicesIcon5,
  servicesIcon6,
} from "../assets";

const Service = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="flex-1 my-10  border-y-4  border-stone-300 border-dashed ">
        <div className="grid grid-cols-5 justify-items-center content-center px-20">
          <div className={servicesStyle.iconDiv}>
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
            <p className={servicesStyle.text}>Phone or email enquiry</p>
            <p className={servicesStyle.text}>is no charge</p>
          </div>
          <div className={servicesStyle.dashedLineV}></div>
          <div className={servicesStyle.iconDiv}>
            <img
              src={servicesIcon3}
              alt="icon3"
              className={servicesStyle.icon}
            ></img>
            <div className="h-3"></div>
            <p className={servicesStyle.text}>Extended enquiry at</p>
            <p className={servicesStyle.text}>Resolved Mediation</p>
          </div>
          <div className={servicesStyle.dashedLineV}></div>
          <div className={servicesStyle.iconDiv}>
            <img
              src={servicesIcon4}
              alt="icon4"
              className={servicesStyle.icon}
            ></img>
          </div>
          <div className={servicesStyle.dashedLineH}></div>
          <div></div>
          <div className={servicesStyle.dashedLineH}></div>
          <div></div>
          <div className={servicesStyle.dashedLineH}></div>
          <div className={servicesStyle.iconDiv}>
            <img
              src={servicesIcon3}
              alt="icon3"
              className={servicesStyle.icon}
            ></img>
          </div>
          <div className={servicesStyle.dashedLineV}></div>
          <div className={servicesStyle.iconDiv}>
            <img
              src={servicesIcon5}
              alt="icon5"
              className={servicesStyle.icon}
            ></img>
          </div>
          <div className={servicesStyle.dashedLineV}></div>
          <div className={servicesStyle.iconDiv}>
            <img
              src={servicesIcon6}
              alt="icon6"
              className={servicesStyle.icon}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
