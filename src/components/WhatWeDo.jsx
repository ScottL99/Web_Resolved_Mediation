import { whatWeDoContents, navLinks, whatWeDoTitle } from "../constants";

const WhatWeDo = () => {
  return (
    <div id={navLinks[2].id} className="mx-20">
      <h1 className=" mt-20 mb-4 p-6 text-[9.5rem] leading-[8rem] font-HN_Bold tracking-tighter">
        {whatWeDoTitle[0]} <br></br> {whatWeDoTitle[1]}
      </h1>
      <div className="flex flex-row justify-between">
        {whatWeDoContents.map((text, index) => (
          <li key={index} className="flex flex-col list-none p-6 ">
            <div>
              <div className="flex flex-1 h-[1px] bg-black "></div>
              <h5 className="flex flex-1 mb-2 mt-6 text-xl font-HN_Medium">
                {text.title}
              </h5>
              <p className="flex flex-1 mb-16 font-HN_Regular text-lg">
                {text.content}
              </p>
              <div className="flex flex-1 h-[1px] bg-black "></div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
