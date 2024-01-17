import { LogoFooter } from "./subComponents";
import {
  contactInfo,
  address,
  findUs,
  bookingLink,
  bookingURL,
  mapLink,
} from "../constants";

const Footer = () => {
  const textClass =
    "flex text-bases m:text-lg sm:leading-[22px] leading-5 lg:text-xl lg:leading-6 text-white font-HN_Light border-b-[1px] border-gray hover:text-orange transition-all ";
  return (
    <div
      className="relative overflow-hidden w-full pt-8 pb-20 px-8 sm:px-16 lg:px-32  bg-charcoal"
      id="footer"
    >
      <LogoFooter />
      <div className="flex flex-col pl-4 lg:pl-[3.75rem] pr-4">
        <a href={mapLink} target="_blank" className=" flex ">
          <h5 className=" mt-4 sm:mt-0 mb-1 sm:mb-2 text-2xl font-HN_Bold text-lightOrange hover:text-white hover:scale-110 transition-all duration-500">
            {findUs}
          </h5>
        </a>
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
        <div className="h-[1.25rem]"></div>
        <a className={textClass} href={bookingURL} target="_blank">
          <p className="font-HN_Bold hover:scale-110 hover:translate-x-3 transition-all duration-500">
            {bookingLink}
          </p>
        </a>
      </div>
      {/* orange bar on the bottom */}
      <div className="absolute w-full h-3 lg:h-6 bottom-0 left-[3rem] sm:left-[5rem]  lg:left-[11.75rem] bg-orange"></div>
    </div>
  );
};

export default Footer;
