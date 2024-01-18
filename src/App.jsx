import { useState, useEffect } from "react";
import { Header, WhoWeAre, WhatWeDo, Footer, LoadingPage } from "./components";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex flex-col max-w-[1920px]">
            <Header />
            <WhoWeAre />
            <WhatWeDo />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
