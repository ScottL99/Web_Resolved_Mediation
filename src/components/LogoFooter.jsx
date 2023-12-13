import { Link } from "react-scroll";
import { rm_logo_footer } from "../assets";
import { logoName, followUs, socialMedia } from "../constants";

const LogoFooter = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between">
      <Link
        to="header"
        smooth={true}
        offset={0}
        duration={1500}
        delay={0}
        className="flex flex-row items-center"
      >
        <img
          alt="logo"
          src={rm_logo_footer}
          className="flex w-[2rem] sm:w-[3rem] lg:w-[4rem] h-[2rem] sm:h-[3rem] lg:h-[4rem] cursor-pointer"
        ></img>
        <h3 className="flex ml-3 text-2xl sm:text-3xl lg:text-4xl font-HN_Medium cursor-pointer text-white ">
          {logoName}
        </h3>
      </Link>
      <div className="flex flex-col justify-end p-4 lg:p-4">
        <h5 className="text-2xl font-HN_Bold text-lightOrange pt-2 sm:pt-6 mb-2">
          {followUs}
        </h5>
        <div className="flex flex-row">
          {socialMedia.map((i, index) => (
            <a key={index} href={i.url}>
              <img
                src={i.src}
                alt={i.alt}
                className="w-[2.5rem] lg:w-[3.25rem] mr-1 lg:mr-[10px] hover:scale-110 transition-all hover:bg-orange rounded-xl"
              ></img>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;
