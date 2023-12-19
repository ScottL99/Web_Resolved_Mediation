import { code_of_ethics } from "../../assets";
import { policy } from "../../constants";

const Policy = () => {
  return (
    <p className="flex w-full justify-end mb-2 text-xs lg:text-sm underline text-charcoal font-HN_Medium active:text-gray">
      <a
        href={code_of_ethics}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-1 xxl:mx-20"
      >
        {policy}
      </a>
    </p>
  );
};

export default Policy;
