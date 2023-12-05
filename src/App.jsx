import {
  Header,
  Hero,
  WhatWeDo,
  WhereWeAre,
  WhoWeAre,
  Services,
} from "./components";

function App() {
  return (
    <div className="px-20 ">
      <Header />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Services />
      <WhereWeAre />
    </div>
  );
}

export default App;
