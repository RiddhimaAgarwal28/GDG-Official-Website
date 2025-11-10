"use client";

import React, { useRef, useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import CountUp from "./ui/CountUp";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState([false, false, false]);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setCardVisible([true, false, false]), 300);
          setTimeout(() => setCardVisible([true, true, false]), 600);
          setTimeout(() => setCardVisible([true, true, true]), 900);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const images = [
    {
      src: "/about-img1.jpg",
      title: "Community Events",
      id: "CE01",
    },
    {
      src: "/about-img2.jpg",
      title: "Tech Workshops",
      id: "TW02",
    },
    {
      src: "/about-img3.jpg",
      title: "Hackathons",
      id: "HK03",
    },
  ];

  return (
    <>
      {/* <section className="min-h-screen bg-linear-to-b from-gray-950 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-slate-100 mb-4">
            Welcome to GDG
          </h1>
          <p className="text-xl text-slate-400">
            Scroll down to see About section
          </p>
        </div>
      </section> */}

      <section
        ref={sectionRef}
        className="min-h-screen bg-linear-to-b from-gray-900 via-gray-950 to-black py-20 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div>
                <h2 className="text-5xl md:text-7xl font-bold text-slate-300 mb-6 text-left">
  About Us
</h2>
<div className="h-1.5 w-28 bg-linear-to-r from-red-400  via-green-400 to-yellow-300 rounded-full mb-8 shadow-sm"></div>

              </div>

              <div className="space-y-6 text-left">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Google Developer Groups at ABESEC is a vibrant community of
                  passionate developers, designers, and tech enthusiasts. We
                  bring together students who share a common interest in Google
                  technologies and are eager to learn, collaborate, and
                  innovate.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  Our mission is to foster a culture of learning and growth by
                  organizing workshops, hackathons, tech talks, and networking
                  events.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  Whether you're a beginner or an experienced developer, GDG
                  ABESEC welcomes everyone to learn and grow together.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 text-left">
                <div className="bg-linear-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-4 backdrop-blur-sm hover:border-emerald-400/40 transition-all hover:shadow-md hover:shadow-blue-500/10">
                  <div className="text-4xl font-bold text-blue-300">
                    {isVisible && <CountUp from={0} to={1000} duration={2} />}+
                  </div>
                  <div className="text-slate-400 text-sm mt-1">Community Members</div>
                </div>

                <div className="bg-linear-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-4 backdrop-blur-sm hover:border-emerald-400/40 transition-all hover:shadow-md hover:shadow-emerald-500/10">
                  <div className="text-4xl font-bold text-blue-300">
                    {isVisible && <CountUp from={0} to={50} duration={2} />}+
                  </div>
                  <div className="text-slate-400 text-sm mt-1">Team Members</div>
                </div>

                <div className="bg-linear-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-xl px-4 py-4 backdrop-blur-sm hover:border-emerald-400/40 transition-all hover:shadow-md hover:shadow-amber-500/10">
                  <div className="text-4xl font-bold text-blue-300">
                    {isVisible && <CountUp from={0} to={20} duration={2} />}+
                  </div>
                  <div className="text-slate-400 text-sm mt-1">Events</div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 -mt-4">
  {images.map((image, index) => (
    <div
      key={image.id}
      className={`transition-all duration-700 ${
        cardVisible[index]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      } ${index === 0 ? "sm:col-span-2" : ""}`}
    >
      <CardContainer className="w-full">
        <CardBody className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm hover:border-slate-400/50 transition-all duration-300 ">
          <CardItem
            translateZ="120"
            className="w-full h-full transition-transform duration-500 group-hover/card:scale-[1.07]"
          >
            <img
              src={image.src}
              alt={image.id}
              className={`object-cover rounded-2xl ${
                index === 0
                  ? "w-full h-80 sm:h-[300px]" 
                  : "w-full h-[260px] sm:h-[250px]" 
              }`}
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  ))}
</div>

          </div>
        </div>
      </section>
    </>
  );
}
