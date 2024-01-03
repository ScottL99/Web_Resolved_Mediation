import { logo, logo_words_white } from "../../assets";

const Logo = () => {
  return (
    <div className="flex flex-row items-center cursor-pointer group">
      <img
        alt="logo_resolved_mediation"
        src={logo_words_white}
        className="ml-2 sm:ml-3 xl:ml-4 h-4 sm:h-5 xl:h-7 "
      ></img>
      <img
        alt="logo"
        src={logo}
        className="ml-[6px] sm:ml-[9px] lg:ml-3 h-6 sm:h-7 xl:h-9 group-hover:scale-125 group-hover:translate-x-2 transition-all duration-500 "
      ></img>
    </div>
  );
};

export default Logo;
