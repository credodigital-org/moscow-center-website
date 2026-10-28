import React, { useEffect, useRef, useState } from "react";
import "./CuppingHero.css";

import cuppingHeroImage from "../../assets/images/cupping-hero.png";

export default function CuppingHero() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`cupping-hero-section ${visible ? "is-visible" : ""}`}
      id="cupping-therapy"
    >
      <img
        className="cupping-hero-background"
        src={cuppingHeroImage}
        alt="Traditional cupping therapy treatment session"
      />

      <div className="cupping-hero-shade" />

      <div className="cupping-hero-container">
        <div className="cupping-hero-panel ch-panel">
          <h1>
            <span className="ch-reveal" style={{ "--delay": "0.5s" }}>
              Cupping
            </span>
            <span
              className="cupping-heading-accent ch-reveal"
              style={{ "--delay": "0.7s" }}
            >
              Therapy.
            </span>
          </h1>

          <p className="ch-reveal" style={{ "--delay": "0.9s" }}>
            Traditional suction therapy for relaxation and wellness. Cupping
            therapy is a traditional therapy where special cups are placed on
            the skin to create suction. The suction gently pulls the skin
            upward and may leave temporary circular marks.
          </p>

          <div className="ch-reveal" style={{ "--delay": "1.1s" }}>
            <a href="#appointment" className="cupping-hero-button">
              Book a Consultation
            </a>
          </div>

          <div className="cupping-panel-divider" />
        </div>
      </div>
    </section>
  );
}