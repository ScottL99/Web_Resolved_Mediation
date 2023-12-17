import { LogoFooter } from "./subComponents";
import { contactInfo, address, findUs } from "../constants";

const Footer = () => {
  return (
    <>
      <div
        className=" w-full bg-charcoal pt-8 pb-20 px-8 sm:px-16 lg:px-32 "
        id="footer"
      >
        <LogoFooter />
        <div className="flex flex-col pl-4 lg:pl-[3.75rem] pr-4">
          <h5 className="text-2xl font-HN_Bold text-lightOrange mb-2">
            {findUs}
          </h5>
          {address.map((add, index) => (
            <p
              key={index}
              className="flex text-base leading-5 sm:text-lg sm:leading-[22px] lg:text-xl lg:leading-6 text-white font-HN_Light border-b-[1px] border-gray hover:text-orange transition-all"
            >
              {add}
            </p>
          ))}
          <div className="h-[1.25rem]"></div>
          {contactInfo.map((info) => (
            <p
              key={info.title}
              className="flex ext-base leading-5 sm:text-lg sm:leading-[22px] lg:text-xl lg:leading-6 text-white font-HN_Light  border-b-[1px] border-gray hover:text-orange transition-all"
            >
              <span className="font-HN_Bold mr-2"> {`${info.title}`} </span>
              {info.info}
            </p>
          ))}
        </div>
      </div>
      <div className="h-6 bg-orange"></div>
    </>
  );
};

export default Footer;
