import React from "react";
import { resolved_mediation_map } from "../../assets";
import { address, contactInfo, mapLink } from "../../constants";

const WhereWeAre = (props) => {
  return (
    <section
      className={` ${
        props.mapSwitch
          ? "translate-x-0 opacity-100"
          : "translate-x-[100vw] opacity-0"
      } absolute z-50 flex flex-col items-center min-h-[43vh] top-12 sm:top-24 right-0 p-4 sm:p-8 lg:p-12 overflow-hidden bg-gradient-to-b from-white/80 to-white rounded-3xl transition-all duration-1000 cursor-pointer`}
    >
      <img
        src={resolved_mediation_map}
        alt="map"
        className="flex flex-1 object-cover max-h-[30vh] sm:max-h-[45vh] lg:max-h-[60vh] "
        onClick={() => props.callback(false)}
      ></img>

      <div className="flex flex-1 flex-col self-start mt-4 px-3 sm:px-10 lg:px-14 rounded-2xl w-full">
        <a
          href={mapLink}
          target="_blank"
          className="hover:[transform:scale(1.01);] transition-all duration-500"
        >
          {address.map((add, index) => (
            <p
              key={index}
              className="flex text-base sm:text-lg lg:text-xl leading-5 sm:leading-[22px] lg:leading-6 text-black font-HN_Light border-b-[1px] border-charcoal hover:text-orange transition-all"
            >
              {add}
            </p>
          ))}
        </a>
        <div className="h-[1.25rem]"></div>
        {contactInfo.map((info, index) => (
          <p
            key={index}
            className="flex text-base sm:text-lg lg:text-xl leading-5 sm:leading-[22px] lg:leading-6 text-black font-HN_Light border-b-[1px] border-charcoal hover:text-orange transition-all"
          >
            <span className="font-HN_Bold mr-2"> {`${info.title}`} </span>
            {info.info}
          </p>
        ))}
      </div>
    </section>
  );
};

export default WhereWeAre;
