import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const teamMembers = {
  organiser: [
    { 
      name: "Sarah Johnson", 
      role: "Chief Organiser", 
      description: "Visionary leader orchestrating the entire event with 15+ years of experience.",
      img: "/TeamPageImages/Arya Schwetank.jpg",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: "https://github.com/sarahjohnson"
    }
  ],
  actingGenerals: [
    { 
      name: "Michael Chen", 
      role: "Acting General", 
      description: "Strategic leader managing operations and team coordination.",
      img: "/TeamPageImages/Prakhar Tiwari.jpg",
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/michaelchen"
    },
    { 
      name: "Emily Rodriguez", 
      role: "Acting General", 
      description: "Expert in logistics and event execution management.",
      img: "/TeamPageImages/Ayush Jain AG.jpg",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      github: "https://github.com/emilyrodriguez"
    },
    { 
      name: "David Kim", 
      role: "Acting General", 
      description: "Technical lead ensuring smooth event infrastructure.",
      img: "/TeamPageImages/Riya Jaiswal.jpg",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim"
    },
    { 
      name: "Lisa Anderson", 
      role: "Acting General", 
      description: "Marketing and communications specialist for the event.",
      img: "/TeamPageImages/Kshitiz Srivastav.jpg",
      linkedin: "https://linkedin.com/in/lisaanderson",
      github: "https://github.com/lisaanderson"
    },
    { 
      name: "James Wilson", 
      role: "Acting General", 
      description: "Operations manager handling event workflows.",
      img: "/TeamPageImages/Deepanshu Kaushik.jpg",
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jameswilson"
    }
  ],
  leads: [
    { 
      name: "Maria Garcia", 
      role: "Team Lead", 
      description: "Leading the design and creative direction team.",
      img: "/TeamPageImages/Alok Ranjan Singh.jpg",
      linkedin: "https://linkedin.com/in/mariagarcia",
      github: "https://github.com/mariagarcia"
    },
    { 
      name: "Robert Taylor", 
      role: "Team Lead", 
      description: "Backend operations and database management lead.",
      img: "/TeamPageImages/Ayush Goyal.jpg",
      linkedin: "https://linkedin.com/in/roberttaylor",
      github: "https://github.com/roberttaylor"
    },
    { 
      name: "Jennifer Lee", 
      role: "Team Lead", 
      description: "Human resources and team coordination specialist.",
      img: "/TeamPageImages/Keshav Khippal.jpg",
      linkedin: "https://linkedin.com/in/jenniferlee",
      github: "https://github.com/jenniferlee"
    },
    { 
      name: "William Brown", 
      role: "Team Lead", 
      description: "Sales and partnership development lead.",
      img: "/TeamPageImages/Anshika Srivastav.jpg",
      linkedin: "https://linkedin.com/in/williambrown",
      github: "https://github.com/williambrown"
    },
    { 
      name: "Amanda White", 
      role: "Team Lead", 
      description: "Frontend development and UI implementation lead.",
      img: "/TeamPageImages/Harshit Agarwal.jpg",
      linkedin: "https://linkedin.com/in/amandawhite",
      github: "https://github.com/amandawhite"
    },
    { 
      name: "Christopher Davis", 
      role: "Team Lead", 
      description: "DevOps and infrastructure deployment lead.",
      img: "/TeamPageImages/Amanya Maurya.jpg",
      linkedin: "https://linkedin.com/in/christopherdavis",
      github: "https://github.com/christopherdavis"
    },
    { 
      name: "Jessica Martinez", 
      role: "Team Lead", 
      description: "Content creation and storytelling lead.",
      img: "/TeamPageImages/Ayush Jain EH.jpg",
      linkedin: "https://linkedin.com/in/jessicamartinez",
      github: "https://github.com/jessicamartinez"
    },
    { 
      name: "Daniel Thompson", 
      role: "Team Lead", 
      description: "Data analytics and insights lead.",
      img: "/TeamPageImages/Arpan Pal.jpg",
      linkedin: "https://linkedin.com/in/danielthompson",
      github: "https://github.com/danielthompson"
    },
    { 
      name: "Nicole Harris", 
      role: "Team Lead", 
      description: "Quality assurance and testing lead.",
      img: "/TeamPageImages/Aditya Kr. OC.jpg",
      linkedin: "https://linkedin.com/in/nicoleharris",
      github: "https://github.com/nicoleharris"
    },
    { 
      name: "Andrew Clark", 
      role: "Team Lead", 
      description: "Security and compliance lead.",
      img: "/TeamPageImages/Ayushi Singh.jpg",
      linkedin: "https://linkedin.com/in/andrewclark",
      github: "https://github.com/andrewclark"
    },
    { 
      name: "Sophie Turner", 
      role: "Team Lead", 
      description: "Community engagement and outreach lead.",
      img: "/TeamPageImages/Aadarsh Dhiman.jpg",
      linkedin: "https://linkedin.com/in/sophieturner",
      github: "https://github.com/sophieturner"
    },
    { 
      name: "Nathan Brooks", 
      role: "Team Lead", 
      description: "Product strategy and development lead.",
      img: "/TeamPageImages/Arya Schwetank.jpg",
      linkedin: "https://linkedin.com/in/nathanbrooks",
      github: "https://github.com/nathanbrooks"
    },
    { 
      name: "Emma Wilson", 
      role: "Team Lead", 
      description: "Brand strategy and creative communications lead.",
      img: "/TeamPageImages/Deepanshu Kaushik.jpg",
      linkedin: "https://linkedin.com/in/emmawilson",
      github: "https://github.com/emmawilson"
    }
  ]
};

const TeamMemberCard = ({ member, index }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0.05, 0.3, 1, 0.3, 0.05]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, 0.5, 1, 0.5, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        scale, 
        opacity,
        transformOrigin: 'bottom center'
      }}
      className="tm-card"
    >
      <style jsx>{`
        .tm-card {
          width: 100%;
          max-width: 700px;
          height: 650px;
          position: relative;
          will-change: transform, opacity;
          transition: all 0.1s linear;
        }

        .tm-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          background: #1a1a1a;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .tm-card-inner:hover {
          transform: translateY(-8px);
        }

        .tm-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: grayscale(100%) brightness(0.65);
          transition: filter 0.5s ease, transform 0.5s ease;
        }

        .tm-card-inner:hover .tm-image {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.08);
        }

        .tm-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.97) 0%,
            rgba(0, 0, 0, 0.85) 35%,
            rgba(0, 0, 0, 0.5) 65%,
            transparent 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 36px;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .tm-card-inner:hover .tm-overlay {
          opacity: 1;
          pointer-events: all;
        }

        .tm-content {
          width: 100%;
          transform: translateY(30px);
          transition: transform 0.4s ease 0.1s;
        }

        .tm-card-inner:hover .tm-content {
          transform: translateY(0);
        }

        .tm-name {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 10px 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .tm-role {
          font-size: 1rem;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0 0 18px 0;
          font-weight: 500;
        }

        .tm-description {
          font-size: 0.95rem;
          color: #cccccc;
          line-height: 1.6;
          margin: 0 0 24px 0;
          font-weight: 300;
        }

        .tm-socials {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .tm-social-link {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .tm-social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .tm-linkedin-link::before {
          background: linear-gradient(135deg, #0077B5 0%, #00A0DC 100%);
        }

        .tm-linkedin-link:hover {
          border-color: rgba(0, 119, 181, 0.5);
          transform: translateY(-2px);
        }

        .tm-linkedin-link:hover::before {
          opacity: 1;
        }

        .tm-github-link::before {
          background: linear-gradient(135deg, #24292e 0%, #6e40c9 100%);
        }

        .tm-github-link:hover {
          border-color: rgba(110, 64, 201, 0.5);
          transform: translateY(-2px);
        }

        .tm-github-link:hover::before {
          opacity: 1;
        }

        .tm-social-icon {
          width: 20px;
          height: 20px;
          color: #ffffff;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .tm-social-link:hover .tm-social-icon {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .tm-card {
            max-width: 100%;
            height: 500px;
          }

          .tm-overlay {
            padding: 28px;
          }

          .tm-name {
            font-size: 1.6rem;
          }

          .tm-role {
            font-size: 0.9rem;
          }

          .tm-description {
            font-size: 0.88rem;
          }

          .tm-social-link {
            width: 38px;
            height: 38px;
          }

          .tm-social-icon {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
      
      <div className="tm-card-inner">
        <img 
          src={member.img} 
          alt={member.name}
          className="tm-image"
        />
        <div className="tm-overlay">
          <div className="tm-content">
            <h3 className="tm-name">{member.name}</h3>
            <p className="tm-role">{member.role}</p>
            <p className="tm-description">{member.description}</p>
            <div className="tm-socials">
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="tm-social-link tm-linkedin-link"
              >
                <svg className="tm-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href={member.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="tm-social-link tm-github-link"
              >
                <svg className="tm-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeading = ({ title }) => {
  const headingRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "center center"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <motion.div 
      ref={headingRef}
      style={{ x, opacity }}
      className="tm-section-heading"
    >
      <style jsx>{`
        .tm-section-heading {
          width: 100%;
          margin-bottom: 60px;
          padding: 0 60px;
        }

        .tm-section-title {
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 900;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
          text-align: right;
        }

        @media (max-width: 768px) {
          .tm-section-heading {
            padding: 0 20px;
            margin-bottom: 40px;
          }

          .tm-section-title {
            font-size: clamp(2rem, 8vw, 3rem);
          }
        }
      `}</style>
      <h2 className="tm-section-title">{title}</h2>
    </motion.div>
  );
};

const Team = () => {
  return (
    <>
      <style jsx>{`
        .tm-wrapper {
          width: 100%;
          min-height: 100vh;
          background: #0a0a0a;
          position: relative;
        }

        .tm-hero {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);
          position: relative;
          padding: 40px;
        }

        .tm-hero-content {
          text-align: center;
          z-index: 2;
        }

        .tm-hero-title {
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.05em;
          line-height: 0.95;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ffffff 0%, #888888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tm-hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.5rem);
          color: #666666;
          margin-top: 1.5rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 300;
        }

        .tm-scroll-indicator {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          z-index: 2;
        }

        .tm-scroll-text {
          color: #666666;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 500;
        }

        .tm-scroll-arrow {
          width: 24px;
          height: 24px;
          border-bottom: 2px solid #666666;
          border-right: 2px solid #666666;
          transform: rotate(45deg);
          animation: tm-bounce 2s infinite ease-in-out;
        }

        @keyframes tm-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: rotate(45deg) translateY(0);
          }
          40% {
            transform: rotate(45deg) translateY(12px);
          }
          60% {
            transform: rotate(45deg) translateY(6px);
          }
        }

        .tm-section {
          width: 100%;
          min-height: 400vh;
          background: #0a0a0a;
          padding: 100px 0;
          position: relative;
        }

        .tm-organiser-section {
          margin-bottom: 120px;
        }

        .tm-organiser-container {
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 60px;
          display: flex;
          align-items: center;
          gap: 80px;
        }

        .tm-organiser-card-wrapper {
          flex: 0 0 700px;
        }

        .tm-generals-section,
        .tm-leads-section {
          margin-bottom: -20px;
        }

        .tm-grid {
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 60px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 60px;
          row-gap: 50px;
        }

        .tm-grid-single {
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 60px;
          display: flex;
          justify-content: center;
          margin-bottom: 50px;
        }

        .tm-grid-single .tm-card {
          max-width: 700px;
        }

        @media (max-width: 1400px) {
          .tm-organiser-container {
            gap: 60px;
          }

          .tm-organiser-card-wrapper {
            flex: 0 0 600px;
          }

          .tm-grid {
            gap: 50px;
            row-gap: 40px;
          }
        }

        @media (max-width: 1200px) {
          .tm-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .tm-grid-single {
            padding: 0 60px;
          }
        }

        @media (max-width: 768px) {
          .tm-hero {
            padding: 20px;
          }

          .tm-section {
            padding: 80px 0;
          }

          .tm-organiser-section,
          .tm-generals-section,
          .tm-leads-section {
            margin-bottom: 80px;
          }

          .tm-organiser-container {
            padding: 0 20px;
            flex-direction: column;
            gap: 40px;
          }

          .tm-organiser-card-wrapper {
            flex: 0 0 auto;
            width: 100%;
          }

          .tm-grid {
            padding: 0 20px;
            gap: 40px;
            row-gap: 40px;
          }

          .tm-grid-single {
            padding: 0 20px;
            margin-bottom: 40px;
          }
        }
      `}</style>

      <div className="tm-wrapper">
        {/* Hero Section */}
        <section className="tm-hero">
          <div className="tm-hero-content">
            <h1 className="tm-hero-title">Meet Our Team</h1>
            <p className="tm-hero-subtitle">The brilliant minds behind our success</p>
          </div>
          <div className="tm-scroll-indicator">
            <span className="tm-scroll-text">Scroll down to see our team</span>
            <div className="tm-scroll-arrow"></div>
          </div>
        </section>

        {/* Team Sections */}
        <div className="tm-section">
          {/* Organiser Section */}
          <div className="tm-organiser-section">
            <div className="tm-organiser-container">
              <div className="tm-organiser-card-wrapper">
                {teamMembers.organiser.map((member, index) => (
                  <TeamMemberCard 
                    key={index} 
                    member={member} 
                    index={index}
                  />
                ))}
              </div>
              <SectionHeading title="ORGANISER" />
            </div>
          </div>

          {/* Acting Generals Section */}
          <div className="tm-generals-section">
            <SectionHeading title="ACTING GENERALS" />
            <div className="tm-grid">
              {teamMembers.actingGenerals.slice(0, 2).map((member, index) => (
                <TeamMemberCard 
                  key={index} 
                  member={member} 
                  index={index + 1}
                />
              ))}
            </div>
            <div className="tm-grid-single">
              <TeamMemberCard 
                member={teamMembers.actingGenerals[2]} 
                index={3}
              />
            </div>
            <div className="tm-grid">
              {teamMembers.actingGenerals.slice(3, 5).map((member, index) => (
                <TeamMemberCard 
                  key={index + 3} 
                  member={member} 
                  index={index + 4}
                />
              ))}
            </div>
          </div>

          {/* Leads Section - 13 cards total */}
          <div className="tm-leads-section">
            <SectionHeading title="LEADS" />
            {/* Cards 1-2 */}
            <div className="tm-grid">
              {teamMembers.leads.slice(0, 2).map((member, index) => (
                <TeamMemberCard 
                  key={index} 
                  member={member} 
                  index={index + 6}
                />
              ))}
            </div>
            {/* Card 3 - Center */}
            <div className="tm-grid-single">
              <TeamMemberCard 
                member={teamMembers.leads[2]} 
                index={8}
              />
            </div>
            {/* Cards 4-5 */}
            <div className="tm-grid">
              {teamMembers.leads.slice(3, 5).map((member, index) => (
                <TeamMemberCard 
                  key={index + 3} 
                  member={member} 
                  index={index + 9}
                />
              ))}
            </div>
            {/* Card 6 - Center */}
            <div className="tm-grid-single">
              <TeamMemberCard 
                member={teamMembers.leads[5]} 
                index={11}
              />
            </div>
            {/* Cards 7-8 */}
            <div className="tm-grid">
              {teamMembers.leads.slice(6, 8).map((member, index) => (
                <TeamMemberCard 
                  key={index + 6} 
                  member={member} 
                  index={index + 12}
                />
              ))}
            </div>
            {/* Card 9 - Center */}
            <div className="tm-grid-single">
              <TeamMemberCard 
                member={teamMembers.leads[8]} 
                index={14}
              />
            </div>
            {/* Cards 10-11 */}
            <div className="tm-grid">
              {teamMembers.leads.slice(9, 11).map((member, index) => (
                <TeamMemberCard 
                  key={index + 9} 
                  member={member} 
                  index={index + 15}
                />
              ))}
            </div>
            {/* Card 12 - Center */}
            <div className="tm-grid-single">
              <TeamMemberCard 
                member={teamMembers.leads[11]} 
                index={17}
              />
            </div>
            {/* Card 13 - Last card (NEW) */}
            <div className="tm-grid">
              <TeamMemberCard 
                member={teamMembers.leads[12]} 
                index={18}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;