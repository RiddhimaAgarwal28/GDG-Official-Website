import React from "react";  
import EventsCard from "../components/EventCards";
import Footer from "../components/Footer";
import EventHero from "../components/Eventhero";


export default function HomePage() {
  return (
    <>
      <div className="w-full  overflow-x-hidden">
        <EventHero />
        <EventsCard />
        <Footer />
      </div>
    </>
  );
}