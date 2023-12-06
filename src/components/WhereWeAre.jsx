import { navLinks, whereWeAreTitle } from "../constants";

const WhereWeAre = () => {
  return (
    <div className="" id={navLinks[4].id}>
      <h1 className="mt-20 p-5 text-[9.5rem] leading-[8rem] font-HN_Bold tracking-tighter">
        {[whereWeAreTitle[0]]} <br /> {[whereWeAreTitle[1]]}
      </h1>
      <div className="flex flex-1 flex-row mt-4 py-10 px-16 bg-gray justify-around tracking-tight  ">
        <h5 className="text-6xl font-HN_Bold w-[60%]">
          We represent an alternative <br /> dispute resolution model in <br />
          which FDRPs and collaborative <br />
          family lawyers work together <br /> with parents in a transparent
          <br /> and open manner.
        </h5>
        <p className="flex flex-1 text-2xl pl-10 font-HN_Regular">
          Resolved Mediation wholeheartedly endorse collaborative practice and
          partnering with various services, such as lawyers, child consultants,
          and counsellors, to address the diverse needs of parents, families,
          and individuals confronting conflict. <br /> <br />
          During your initial meeting, we’ll provide you with comprehensive
          information about your options and associated costs.
        </p>
      </div>
    </div>
  );
};

export default WhereWeAre;
