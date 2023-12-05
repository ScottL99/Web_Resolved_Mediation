import { portrait, squarePortrait, arrow_icon } from "../assets";
import { navLinks } from "../constants";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col" id={navLinks[0].id}>
      <div className="flex flex-1 justify-between mt-10 p-10 bg-gray">
        <div className="flex flex-1 relative overflow-hidden">
          <img
            src={squarePortrait}
            alt="portrait"
            className="object-contain transition-all absolute"
          ></img>
          <img
            src={arrow_icon}
            alt="arrow_icon"
            className="absolute w-[2.5rem] h-[2.5rem] right-0 m-2"
          ></img>
        </div>
        <p className="w-[60%] text-6xl ml-24 font-HN_Bold tracking-tight">
          We empower individuals <br></br> through our expert-guided <br></br>
          discussions in resolving <br></br> disputes, delivering <br></br>
          personalised services <br></br> for adults and young people <br></br>
          in relationship challenges.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
