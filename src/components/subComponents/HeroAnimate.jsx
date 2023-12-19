import { hero_video, hero_video_mobile } from "../../assets";

const HeroAnimate = () => {
  return (
    <section className="flex flex-col -mt-1 -z-40">
      <video
        src={hero_video}
        type="video/mp4"
        autoPlay
        muted
        loop
        webkit-playsinline="true"
        playsInline
        className="-z-50 hidden lg:flex object-cover "
      ></video>
      <video
        src={hero_video_mobile}
        type="video/mp4"
        autoPlay
        muted
        loop
        webkit-playsinline="true"
        playsInline
        className="-z-50 lg:hidden flex object-cover "
      ></video>
    </section>
  );
};

export default HeroAnimate;
