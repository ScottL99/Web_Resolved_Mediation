import {
  navLinks,
  whereWeAreTitle,
  whereWeAreContent1,
  whereWeAreContent2,
} from "../constants";

const WhereWeAre = () => {
  return (
    <div className="mx-20" id={navLinks[4].id}>
      <h1 className="mt-20 p-5 text-[9.5rem] leading-[8rem] font-HN_Bold tracking-tighter">
        {[whereWeAreTitle[0]]} <br /> {[whereWeAreTitle[1]]}
      </h1>
      <div className="flex flex-1 flex-row mt-4 py-10 px-16 bg-gray justify-around tracking-tight  ">
        {whereWeAreContent1.map((text, index) => (
          <p
            key={index}
            className="w-[60%] text-6xl  font-HN_Bold tracking-tight"
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
        {whereWeAreContent2.map((text, index) => (
          <p key={index} className="flex flex-1 text-2xl pl-10 font-HN_Regular">
            {text.content1}
            <br />
            <br />
            {text.content2}
            <br />
            {text.content3}
          </p>
        ))}
      </div>
    </div>
  );
};

("flex flex-1 text-2xl pl-10 font-HN_Regular");

export default WhereWeAre;
