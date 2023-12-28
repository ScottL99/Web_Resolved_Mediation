import { Link } from "react-scroll";
import { appointment } from "../../constants";
const Appointment = () => {
  return (
    <a href="https://www.halaxy.com/book/resolved-mediation/location/1041911">
      <button className="my-4 sm:my-0 py-1 sm:py-2 px-3 lg:px-5 bg-black rounded-3xl text-base sm:text-2xl xl:text-3xl text-white font-HN_Bold tracking-tight hover:bg-orange hover:scale-105 active:bg-charcoal active:scale-100  transition-all duration-300">
        {appointment}
      </button>
    </a>
  );
};

export default Appointment;
