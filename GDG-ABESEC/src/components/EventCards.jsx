"use client";

import React, { useState, useEffect, useRef } from "react";
import BounceCards from "./ui/BounceCards";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./ui/Navbar";
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
    title: "Hackhaven 2.O",
    date: "March 3-4, 2025",
    description: "A coding hackathon where developers collaborated.",
    thumbnail: "/event1.png",
    gallery: [
      "/hackheaven1.jpg",
      "/hackheaven2.jpg",
      "/hackheaven3.jpg",
      "/hackheaven4.jpg",
      "/hackheaven5.jpeg",
    ],
  },
  {
    title: "Tech Winter Break",
    date: "December 26, 2024",
    description: "A 24-hour hackathon based on innovation.",
    thumbnail: "/event2.png",
    gallery: [
      "/techwinter1.jpg",
      "/techwinter2.jpg",
      "/techwinter3.jpg",
      "/techwinter4.jpeg",
      "/techwinter5.jpg",
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
    title: "Web Development Session",
    date: "February 8, 2023",
    description: "Learn basics of web development from the bests.",
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
      duration: 600,
      once: false,
      easing: "ease-in-out",
      offset: 280,
    });
  }, []);

  return (
    <>
      <div className="relative z-10 pointer-events-none">
        <img
          src="https://www.svgrepo.com/show/353810/google-developers.svg"
          className="fixed h-12 w-14 md:h-16 md:w-20 top-6 left-4 md:top-12 md:left-8 pointer-events-auto"
          alt="gdgLogo"
        />

        <div className="fixed flex flex-wrap items-center top-20 left-4 md:top-15 md:left-30 space-mono-regular space-mono-bold text-3xl md:text-4xl">
          <span className="text-blue-500">G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-300">o</span>
          <span className="text-green-500">g</span>
          <span className="text-blue-500">l</span>
          <span className="text-red-500">e</span>
        </div>

        <div className="fixed text-white text-xl md:text-3xl top-28 left-4 md:top-16 md:left-63 ml-3 space-mono-regular space-mono-bold">
          Developers Group
        </div>
      </div>

      <section className="w-full min-h-screen bg-black text-white py-16">
        <h2 className="text-6xl font-bold text-center mb-12">
          Past <span className="text-cyan-600">Events</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 max-w-7xl mx-auto">
          {eventsData.map((event, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex justify-center"
            >
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
                    w-full h-[380px]
                  "
                >
                  <CardItem translateZ={40}>
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-full h-[380px] object-cover"
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
                    <p className="text-gray-400 text-sm mt-1">
                      {event.description}
                    </p>

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
                className="relative backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-xl"
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

      <Navbar />
    </>
  );
}
