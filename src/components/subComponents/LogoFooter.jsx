import { Link } from "react-scroll";
import { logo, logo_words_white } from "../../assets";
import { followUs, socialMedia } from "../../constants";

const LogoFooter = () => {
  return (
    <div className="flex flex-col  sm:flex-row justify-between">
      <Link
        to="header"
        smooth={true}
        offset={0}
        duration={1500}
        delay={0}
        className="flex flex-row items-center ml-[10px] sm:ml-[2px] lg:ml-11 group"
      >
        <img
          alt="logo_resolved_mediation"
          src={logo_words_white}
          className="ml-2 sm:ml-4 h-4 sm:h-5 lg:h-7 "
        ></img>
        <img
          alt="logo"
          src={logo}
          className="ml-[6px] sm:ml-[9px] lg:ml-3 h-6 sm:h-7 lg:h-10 group-hover:scale-110 group-hover:translate-x-1 transition-all duration-500 "
        ></img>
      </Link>
      <div className="flex flex-col justify-end px-4 mb-1 sm:mb-0">
        <h5 className="text-2xl font-HN_Bold text-lightOrange mt-4 sm:pt-6 mb-1 sm:mb-2 leading-none">
          {followUs}
        </h5>
        <div className="flex flex-row">
          {socialMedia.map((i, index) => (
            <a
              key={index}
              href={i.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={i.src}
                alt={i.alt}
                className="w-[2.5rem] lg:w-[3.25rem] mr-1 lg:mr-[10px] hover:scale-110 transition-all hover:bg-gray rounded-lg"
              ></img>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;
