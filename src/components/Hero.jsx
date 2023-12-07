import { animation } from "../assets";
import { heroContent, button } from "../constants";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="flex flex-col mx-20">
      <video
        src={animation}
        autoPlay
        muted
        loop
        className="flex flex-1 w-full aspect-auto object-cover z-0 -mt-1"
      ></video>
      <div className="flex flex-row justify-between p-10 items-center">
        <p className=" text-3xl font-HN_Medium">{heroContent}</p>

        <Link
          to="footer"
          smooth={true}
          offset={0}
          duration={1500}
          delay={0}
          className="flex flex-row items-center"
        >
          <button className=" bg-charcoal text-white text-3xl py-2 px-5 rounded-3xl font-HN_Bold tracking-tight hover:bg-orange transition-all">
            {button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
