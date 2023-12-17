import { Header, WhoWeAre, WhatWeDo, Footer } from "./index";

export const HomePage = () => {
  return (
    <div className=" overflow-hidden max-w-[2000px]">
      <Header />
      <WhoWeAre />
      <WhatWeDo />
      <Footer />
    </div>
  );
};
