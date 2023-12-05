import { contents1, navLinks } from "../constants";

const WhatWeDo = () => {
  return (
    <div id={navLinks[2].id}>
      <h1 className="mt-20 mb-4 p-6 text-[9.5rem] leading-[8rem] font-HN_Bold tracking-tighter">
        The Resolved <br /> Experience.
      </h1>
      <div className="flex flex-1 flex-row justify-between">
        {contents1.map((text, index) => (
          <li key={index} className="flex flex-col list-none p-6 ">
            <div className={text.class}>
              <h5 className="flex flex-1 my-2 pt-6 border-t-[1px] border-b-black text-xl font-HN_Medium">
                {text.title}
              </h5>
              <p className="flex flex-1 pb-16 border-b-[1px] border-b-black font-HN_Regular">
                {text.content}
              </p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
