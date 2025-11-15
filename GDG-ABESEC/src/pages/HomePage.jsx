import Home from "../components/Home";
import About from "../components/About";
import WhatWeOffer from "../components/WhatWeOffer";
import OrganisersAndActingGenerals from "../components/OrganiserAndActingGenerals";
import Footer from "../components/Footer";
import WhyJoinGDG from "../components/WhyJoinGDG";

export default function HomePage() {
  return (
    <>
      <div className="w-full  overflow-x-hidden">
      <Home />
        <About />
        <WhatWeOffer />
      <OrganisersAndActingGenerals />
      <WhyJoinGDG />
      <Footer />
      </div>
    </>
  );
}