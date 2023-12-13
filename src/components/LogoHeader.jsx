import { rm_logo_header } from "../assets";
import { logoName } from "../constants";

const Logo = () => {
  return (
    <>
      <img
        alt="logo"
        src={rm_logo_header}
        className="flex w-[2rem] sm:w-[3rem] lg:w-[4rem] h-[2rem] sm:h-[3rem] lg:h-[4rem] cursor-pointer"
      ></img>
      <h3
        href="/"
        className="flex text-sm sm:text:xl lg:text-2xl font-HN_Medium cursor-pointer text-white"
      >
        {logoName}
      </h3>
    </>
  );
};

export default Logo;
