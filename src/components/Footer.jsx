import { LogoFooter } from "./subComponents";
import { contactInfo, address, findUs } from "../constants";

const Footer = () => {
  const textClass =
    "flex text-bases m:text-lg sm:leading-[22px] leading-5 lg:text-xl lg:leading-6 text-white font-HN_Light border-b-[1px] border-gray hover:text-orange transition-all";
  return (
    <div
      className="relative overflow-hidden w-full pt-8 pb-20 px-8 sm:px-16 lg:px-32  bg-charcoal"
      id="footer"
    >
      <LogoFooter />
      <div className="flex flex-col pl-4 lg:pl-[3.75rem] pr-4">
        <h5 className="mb-2 text-2xl font-HN_Bold text-lightOrange">
          {findUs}
        </h5>
        {address.map((add, index) => (
          <p key={index} className={textClass}>
            {add}
          </p>
        ))}
        <div className="h-[1.25rem]"></div>
        {contactInfo.map((info) => (
          <p key={info.title} className={textClass}>
            <span className="mr-2 font-HN_Bold"> {`${info.title}`} </span>
            {info.info}
          </p>
        ))}
      </div>
      {/* orange bar on the bottom */}
      <div className="absolute w-full h-6 bottom-0 left-[3rem] sm:left-[5rem]  lg:left-[11.75rem] bg-orange"></div>
    </div>
  );
};

export default Footer;
