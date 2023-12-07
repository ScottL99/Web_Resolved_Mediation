import { rm_logo_header } from "../assets";
import { logoName } from "../constants";

const Logo = () => {
  return (
    <>
      <img
        alt="logo"
        src={rm_logo_header}
        className="flex w-[4rem] h-[4rem] cursor-pointer"
      ></img>
      <h3
        href="/"
        className="flex text-2xl font-HN_Medium cursor-pointer text-white"
      >
        {logoName}
      </h3>
    </>
  );
};

export default Logo;
