import {
  Header,
  Hero,
  WhatWeDo,
  WhereWeAre,
  WhoWeAre,
  Questions,
  Service,
  Footer,
} from "./components";

function App() {
  return (
    <div className="px-20 ">
      <Header />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Questions />
      <WhereWeAre />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
