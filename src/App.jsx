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
    <>
      <div className="h-[100vh]">
        <Header />
        <Hero />
      </div>
      <WhoWeAre />
      <WhatWeDo />
      <Questions />
      <WhereWeAre />
      <Service />
      <Footer />
    </>
  );
}

export default App;
