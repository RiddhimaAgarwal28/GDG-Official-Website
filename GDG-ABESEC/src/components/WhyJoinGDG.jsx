"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import {
  Code,
  Trophy,
  BookOpen,
  Users,
  MessageSquare,
  Rocket,
} from "lucide-react";

const cardData = [
  {
    title: "Technical Workshops",
    desc: "Hands-on coding sessions with industry tools and frameworks, designed to help you build real-world skills through practical exercises and guided learning.",
    icon: <Code size={32} />,
    tags: ["Hands-on", "Skill Boost", "Live Demos"],
    themeHex: "#3b82f6",
    colorClass: "text-blue-400",
    bgGradient: "from-blue-500/10 via-blue-600/5 to-transparent",
  },
  {
    title: "Hackathons",
    desc: "48-hour innovation marathons filled with problem-solving, exciting prizes, expert mentorship, and the opportunity to build impactful prototypes with your team.",
    icon: <Trophy size={32} />,
    tags: ["48 Hours", "Teamwork", "Innovation"],
    themeHex: "#ef4444",
    colorClass: "text-red-400",
    bgGradient: "from-red-500/10 via-red-600/5 to-transparent",
  },
  {
    title: "Study Jams",
    desc: "Collaborative learning programs focused on certifications and essential tech skills, where mentors guide you step-by-step through structured content and hands-on tasks.",
    icon: <BookOpen size={32} />,
    tags: ["Guided", "Peer Learning", "Certificates"],
    themeHex: "#eab308",
    colorClass: "text-yellow-300",
    bgGradient: "from-yellow-500/10 via-yellow-600/5 to-transparent",
  },
  {
    title: "Networking",
    desc: "Connect with developers, professionals, and like-minded builders while sharing ideas, exploring opportunities, and forming collaborations that extend beyond events.",
    icon: <Users size={32} />,
    tags: ["Meet People", "Collaborate", "Community"],
    themeHex: "#22c55e",
    colorClass: "text-green-400",
    bgGradient: "from-green-500/10 via-green-600/5 to-transparent",
  },
  {
    title: "Tech Talks",
    desc: "Learn real-world insights from industry experts as they share cutting-edge technologies, best practices, career guidance, and inspiring stories from the tech world.",
    icon: <MessageSquare size={32} />,
    tags: ["Experts", "Latest Tech", "Insights"],
    themeHex: "#06b6d4",
    colorClass: "text-cyan-400",
    bgGradient: "from-cyan-500/10 via-cyan-600/5 to-transparent",
  },
  {
    title: "Build Projects",
    desc: "Work on real, impactful projects that strengthen your developer portfolio while collaborating with peers, solving problems, and applying your skills in practical scenarios.",
    icon: <Rocket size={32} />,
    tags: ["Real Projects", "Teamwork", "Portfolio"],
    themeHex: "#a855f7",
    colorClass: "text-purple-400",
    bgGradient: "from-purple-500/10 via-purple-600/5 to-transparent",
  },
];


const WhyJoinGDG = () => {
  return (
    <>
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-6xl md:text-7xl font-bold text-slate-300 mb-3 text-center">
          Why Join{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
            GDG?
          </span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-14">
          Explore what makes our community a powerful space for learning and growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Tilt
              key={index}
              glareEnable={false}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              transitionSpeed={2500}
            >
              <div
                className={`
                  group relative p-7 h-[350px] rounded-3xl
                  bg-gradient-to-br ${card.bgGradient}
                  border transition-all duration-700
                  hover:scale-[1.02]
                  overflow-hidden
                `}
                style={{
                  backgroundColor: "rgba(15, 23, 42, 0.25)",

                  borderColor: `${card.themeHex}30`,
                  boxShadow: `0 4px 24px ${card.themeHex}20`,
                }}
              >

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl pointer-events-none"
                  style={{
                    boxShadow: `
                      0 0 60px ${card.themeHex}60,
                      0 0 100px ${card.themeHex}40,
                      inset 0 0 60px ${card.themeHex}20
                    `,
                    background: `radial-gradient(circle at 50% 50%, ${card.themeHex}15, transparent 70%)`,
                  }}
                ></div>

                <div className="relative z-10">

                  <div
                    className={`
                      p-4 rounded-2xl inline-block mb-5
                      ${card.colorClass}
                      transition-all duration-500
                      group-hover:scale-110 group-hover:rotate-3
                    `}
                    style={{
                      backgroundColor: `${card.themeHex}15`,
                      border: `2px solid ${card.themeHex}80`,   
                      boxShadow: `0 4px 16px ${card.themeHex}40`,
                    }}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {card.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`
                          text-xs px-4 py-2 rounded-full
                          ${card.colorClass}
                          transition-all duration-500
                          backdrop-blur-sm
                        `}
                        style={{
                          backgroundColor: "transparent",
                          border: `1px solid ${card.themeHex}50`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl pointer-events-none"
                  style={{
                    border: `2px solid ${card.themeHex}60`,
                  }}
                ></div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
     <div className="w-full bg-black h-96 flex justify-center px-4">
  <video
    className="w-full max-w-xl rounded-2xl object-cover object-center overflow-hidden"
    src="/video1.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
</div>
</>
  );
};

export default WhyJoinGDG;
