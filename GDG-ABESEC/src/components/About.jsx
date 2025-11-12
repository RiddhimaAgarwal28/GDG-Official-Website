import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StatsSection from "./StatsSection";

const CardContainer = ({ children, className = "" }) => {
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
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
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
    <div style={{ transform: `translateZ(${translateZ}px)`, transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
};

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 150,
    });
  }, []);

  return (
    <>
      <section className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-100 mb-4">Welcome Section</h2>
          <p className="text-xl text-slate-400">Scroll down to see About...</p>
        </div>
      </section>

      <section className="min-h-screen bg-black py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-slate-300 mb-4" >
              About Us
            </h2>
            <div
              className="h-[3px] w-64 rounded-full mx-auto bg-linear-to-r from-transparent via-blue-500 to-transparent"
              
            ></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 lg:order-1" data-aos="fade-up" >
              <p className="text-slate-300 text-left text-lg font-mono leading-relaxed">
                Google Developer Groups (GDG) on Campus ABESEC is a vibrant student community
                driven by curiosity, collaboration, and innovation. We bring together passionate
                developers, designers, and problem-solvers to explore emerging technologies and
                turn ideas into impactful projects. Through workshops, hackathons, and speaker
                sessions, GDG ABESEC empowers students to learn, build, and grow in a supportive
                ecosystem that bridges classroom learning with real-world experience.
              </p>
            </div>

            <div className="order-1 lg:order-2" data-aos="fade-up" >
              <CardContainer>
                <CardBody className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm hover:border-slate-400/50 transition-all duration-300">
                  <CardItem translateZ={100}>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                      alt="GDG Community"
                      className="w-full h-80 object-cover rounded-2xl"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
    </>
  );
}
