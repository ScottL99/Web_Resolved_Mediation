import { useState, useEffect } from "react";
import { Header, WhoWeAre, WhatWeDo, Footer, LoadingPage } from "./components";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-[1920px]">
          <Header />
          <WhoWeAre />
          <WhatWeDo />
        </div>
        <Footer />
      </div>
      <LoadingPage />
    </div>
  );
}

export default App;
