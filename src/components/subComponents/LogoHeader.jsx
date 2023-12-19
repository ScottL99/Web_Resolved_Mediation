import { rm_logo_header } from "../../assets";
import { logoName } from "../../constants";

const Logo = () => {
  return (
    <div className="flex flex-row items-center cursor-pointer">
      <img
        alt="logo"
        src={rm_logo_header}
        className="w-[3rem] sm:w-[4rem] h-[3rem] sm:h-[4rem]"
      ></img>
      <h3 className="text-lg sm:text-2xl font-HN_Medium text-white ">
        {logoName}
      </h3>
    </div>
  );
};

export default Logo;
