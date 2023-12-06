import { picture1 } from "../assets";
import { arrow_icon } from "../assets";
import { questionCards } from "../constants";

import React from "react";

const Questions = () => {
  return (
    <div className="flex flex-col my-10 p-5 z-0 overflow-hidden">
      <img
        alt="picture1"
        src={picture1}
        className="flex flex-1 object-cover m-1 max-h-[75vh]"
      ></img>
      <div className="flex flex-row">
        {questionCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-1 flex-col relative bg-orange p-5 hover:p-8 m-1 cursor-pointer group hover:bg-charcoal transition-all duration-700"
          >
            <div className="flex absolute -top-2 left-0  w-full opacity-0 bg-white group-hover:opacity-80  group-hover:-translate-y-full group-hover:h-[75vh] transition-all duration-500 ">
              <p className="flex justify-center items-center font-HN_Regular text-xl p-6  text-black ">
                {card.content1}
                <br></br>
                <br></br>
                {card.content2}
                <br></br>
                <br></br>
                {card.content3}
              </p>
            </div>
            <h5 className="flex flex-1 text-white text-4xl leading-10 font-HN_Medium items-end mt-4">
              {card.title1} <br></br>
              {card.title2} <br></br>
              {card.title3} {card.space}
              {card.title4}
            </h5>
            <img
              src={arrow_icon}
              alt="arrow_icon"
              className="absolute w-[1.75rem] h-[1.75rem] right-3 top-3"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
