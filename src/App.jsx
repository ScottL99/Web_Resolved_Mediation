import { Header, WhoWeAre, WhatWeDo, Footer } from "./components";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <WhoWeAre />
      <WhatWeDo />
      <Footer />
    </div>
  );
}

export default App;
