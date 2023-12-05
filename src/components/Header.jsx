import React from "react";
import { rm_logo } from "../assets";
import { navLinks, heroContent } from "../constants";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="bg-orange flex flex-col text-white pt-6 px-10">
      <div className="flex flex-row items-center cursor-pointer">
        <a href="/" className="flex flex-row items-center">
          <img
            alt="logo"
            src={rm_logo}
            className="flex w-[4rem] h-[4rem]"
          ></img>
          <h3 href="/" className="flex text-2xl font-HN_Medium">
            Resolved Mediation
          </h3>
        </a>
        <ul className="list-none hidden xl:flex flex-1 justify-end text-2xl font-HN_Thin">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="mr-5 transform-all group hover:text-black cursor-pointer"
            >
              <Link
                to={nav.id}
                smooth={true}
                offset={-20}
                duration={700}
                delay={100}
              >
                <span> {nav.title} </span>
                <div className=" w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h1 className=" mt-10 text-[16rem] leading-[16rem] text-white font-HN_Bold tracking-tighter	">
        Resolved:
      </h1>
    </div>
  );
};

export default Header;
