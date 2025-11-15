import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaRocket } from "react-icons/fa";

const WhatWeOffer = () => {
  const offerings = [
    {
      id: 1,
      title: "Technical Workshops",
      frontIcon: <FaCode className="text-6xl text-blue-500" />,
      frontDescription: "Learn cutting-edge technologies",
      backImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=600&fit=crop",
      backTitle: "Hands-on Learning",
      backDetails: "Dive deep into web development, mobile apps, cloud computing, AI/ML, and more through interactive workshops led by industry experts.",
    },
    {
      id: 2,
      title: "Community Events",
      frontIcon: <FaUsers className="text-6xl text-red-500" />,
      frontDescription: "Connect with fellow developers",
      backImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=600&fit=crop",
      backTitle: "Network & Grow",
      backDetails: "Join hackathons, meetups, and networking sessions. Build lasting connections with passionate developers and industry professionals.",
    },
    {
      id: 3,
      title: "Project Building",
      frontIcon: <FaRocket className="text-6xl text-green-500" />,
      frontDescription: "Build real-world projects",
      backImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=600&fit=crop",
      backTitle: "Innovate & Create",
      backDetails: "Collaborate on real-world projects, participate in hackathons, and turn your innovative ideas into impactful solutions.",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-slate-300 mb-4" >
              What We Are Offering
            </h2>
          <div
              className="h-[3px] w-96 rounded-full mx-auto bg-linear-to-r from-transparent via-blue-500 to-transparent"
              
            ></div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-20">
          {offerings.map((item, index) => (
            <FlipCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FlipCard = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 h-[400px] md:h-[450px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-700/50 p-8 flex flex-col items-center justify-center text-center shadow-2xl hover:border-slate-400/50 transition-all duration-300"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {item.frontIcon}
          </motion.div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mt-6 mb-4 space-mono-bold">
            {item.title}
          </h3>
          
          <p className="text-slate-300 text-base md:text-lg space-mono-regular">
            {item.frontDescription}
          </p>

          <div className="mt-6 text-sm text-slate-400 space-mono-regular">
            Hover to explore →
          </div>
        </div>

        <div
          className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-full h-full">
            <img
              src={item.backImage}
              alt={item.backTitle}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 space-mono-bold drop-shadow-lg">
                {item.backTitle}
              </h3>
              
              <p className="text-white text-sm md:text-base leading-relaxed space-mono-regular drop-shadow-md">
                {item.backDetails}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeOffer;
