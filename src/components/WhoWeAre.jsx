import { squarePortrait, arrow_icon } from "../assets";
import { navLinks, introPortrait, introContent } from "../constants";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col" id={navLinks[0].id}>
      <div className="flex flex-1 justify-between mt-10 p-10 bg-gray">
        <div className="flex flex-1 group [prespective:1000px] overflow-hidden ">
          <div className=" flex-1 relative  group transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <img
              src={squarePortrait}
              alt="portrait"
              className="object-contain absolute "
            ></img>
            <div className="flex absolute inset-0 h-full w-full bg-charcoal/95 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <p className="flex flex-1 items-center justify-center text-white text-2xl font-HN_Regular">
                {introPortrait}
              </p>
            </div>
            <img
              src={arrow_icon}
              alt="arrow_icon"
              className="absolute w-[2.5rem] h-[2.5rem] right-0 m-2 "
            ></img>
          </div>
        </div>
        {introContent.map((text, index) => (
          <p
            key={index}
            className="w-[60%] text-6xl ml-24 font-HN_Bold tracking-tight"
          >
            {text.content1}
            <br />
            {text.content2}
            <br />
            {text.content3}
            <br />
            {text.content4}
            <br />
            {text.content5}
            <br />
            {text.content6}
            <br />
            {text.content7}
          </p>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
