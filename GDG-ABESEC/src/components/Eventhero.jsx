import React, { useEffect, useState } from "react";
import "../styles/Eventhero.css";

export default function EventHero() {
  const eventDate = new Date("2025-11-29T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="overlay">
        <h1 className="title">
          <span>MTG</span> 2.0
        </h1>

        <p className="subtitle">Design. Build. Comply -- Hands-on with Web3 & Figma</p>
        <p className="date">November 29, 2025 | ABESEC</p>

        <div className="timer">
          <div className="box">
            <h2>{timeLeft.days}</h2>
            <p>DAYS</p>
          </div>
          <div className="box">
            <h2>{timeLeft.hours}</h2>
            <p>HOURS</p>
          </div>
          <div className="box">
            <h2>{timeLeft.minutes}</h2>
            <p>MINUTES</p>
          </div>
          <div className="box">
            <h2>{timeLeft.seconds}</h2>
            <p>SECONDS</p>
          </div>
        </div>

        <a
          href="https://www.commudle.com/fill-form/4205"
          target="_blank"
          className="register-btn"
        >
          REGISTER NOW
        </a>
      </div>
    </section>
  );
}
