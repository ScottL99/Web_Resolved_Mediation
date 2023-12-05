import { heroImg } from "../assets";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <img src={heroImg} className="flex flex-1" />
      <div className="flex flex-row justify-between p-10 items-center">
        <p className=" text-3xl font-HN_Medium">
          Ensuring you get the most out of life.
        </p>
        <button className="bg-black text-white text-3xl py-2 px-5 rounded-3xl font-HN_Bold tracking-tight hover:bg-orange transition-all">
          Book an appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
