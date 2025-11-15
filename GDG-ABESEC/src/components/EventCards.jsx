"use client";

import React, { useState, useEffect, useRef } from "react";
import BounceCards from "./ui/BounceCards";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";


const CardContainer = ({ children, className = "", ...props }) => {
  const containerRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateY(((x - centerX) / centerX) * 10);
    setRotateX(((centerY - y) / centerY) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      className={`group perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      {...props}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const CardBody = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

const CardItem = ({ children, translateZ = 0 }) => {
  return (
    <div
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};


const eventsData = [
  {
    title: "CodeStorm 2025",
    date: "March 12, 2025",
    description: "A coding hackathon where developers collaborated.",
    thumbnail: "/event1.png",
    gallery: [
      "/event1.png",
      "/event2.png",
      "/event3.png",
      "/event4.png",
      "/event5.png",
    ],
  },
  {
    title: "HackVerse",
    date: "April 5, 2025",
    description: "A 24-hour hackathon based on innovation.",
    thumbnail: "/event2.png",
    gallery: [
      "/event1.png",
      "/event2.png",
      "/event3.png",
      "/event4.png",
      "/event5.png",
    ],
  },
  {
    title: "Web Innovate",
    date: "May 10, 2025",
    description: "A challenge for modern UI/UX design.",
    thumbnail: "/event3.png",
    gallery: [
      "/event1.png",
      "/event2.png",
      "/event3.png",
      "/event4.png",
      "/event5.png",
    ],
  },
  {
    title: "TechTalks",
    date: "June 3, 2025",
    description: "Insights from industry experts.",
    thumbnail: "/event4.png",
    gallery: [
      "/event1.png",
      "/event2.png",
      "/event3.png",
      "/event4.png",
      "/event5.png",
    ],
  },
  {
    title: "AI Sprint",
    date: "July 21, 2025",
    description: "AI-powered competition exploring ML creativity.",
    thumbnail: "/event5.png",
    gallery: [
      "/event1.png",
      "/event2.png",
      "/event3.png",
      "/event4.png",
      "/event5.png",
    ],
  },
  {
    title: "Cloud Expo",
    date: "August 9, 2025",
    description: "Cloud computing and futuristic deployments.",
    thumbnail: "/event3.png",
    gallery: [
      "/event1.png",
      "/event2.png",
      "/event3.png",
      "/event4.png",
      "/event5.png",
    ],
  },
];


export default function EventsCard() {
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
    <section className="h-screen bg-black text-white flex items-center justify-center"> 
      <h1>Dummy section</h1>
    </section>
    <section className="w-full min-h-screen bg-black text-white py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Past Events</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-10 max-w-5xl mx-auto">
        {eventsData.map((event, index) => (
          <div key={index} data-aos="fade-up">
            <CardContainer
              className="cursor-pointer"
              onClick={() => setActiveEvent(event)}
            >
              <CardBody
                className="
                  relative rounded-2xl overflow-hidden 
                  border border-slate-700/50 bg-slate-900/70 backdrop-blur-sm
                  transition-all duration-500 ease-out
                  group-hover:scale-[1.05] delay-200 
                  w-[430px]
                "
              >
                <CardItem translateZ={40}>
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="w-[430px] h-96 object-cover"
                  />
                </CardItem>

                <div
                  className="
                    absolute inset-0 bg-black/60 
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-300 
                    p-5 flex flex-col justify-end
                  "
                >
                  <p className="text-gray-300 text-xs">{event.date}</p>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{event.description}</p>

                  <p
                    className="mt-4 text-sm text-blue-400 font-medium hover:text-blue-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveEvent(event);
                    }}
                  >
                    Explore More →
                  </p>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative  backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl"
            >
              <button
                className="absolute cursor-pointer top-3 right-3 text-gray-300 hover:text-white text-3xl"
                onClick={() => setActiveEvent(null)}
              >
                ×
              </button>

              

              <BounceCards
                images={activeEvent.gallery}
                containerWidth={480}
                containerHeight={360}
                enableHover={true}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
      </>
  );
}
