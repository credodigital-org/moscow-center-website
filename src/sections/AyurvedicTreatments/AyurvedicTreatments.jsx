import React, { useEffect, useRef, useState } from "react";
import "./AyurvedicTreatments.css";

import abhyangamImage from "../../assets/images/abhyangam.png";
import kizhiImage from "../../assets/images/kizhi.png";
import shirovasthiImage from "../../assets/images/shirovasthi.png";
import glowTherapyImage from "../../assets/images/glow-therapy.png";

const treatments = [
  {
    title: "Abhyangam + Steam Bath",
    description:
      "Deeply relaxes muscles, improves circulation and detoxifies the body with medicated oils.",
    image: abhyangamImage,
    alt: "Abhyangam Ayurvedic massage and steam treatment",
  },
  {
    title: "Abhyangam + Kizhi",
    description:
      "Relieves pain, reduces musculoskeletal stiffness and enhances mobility and joint flexibility.",
    image: kizhiImage,
    alt: "Traditional Kizhi herbal pouch massage",
  },
  {
    title: "Shiro Vasthi",
    description:
      "A continuous stream of warm herbal oil to support relaxation and mental well-being.",
    image: shirovasthiImage,
    alt: "Traditional Shiro Vasthi Ayurvedic treatment",
  },
  {
    title: "Glow Therapy + Polishing",
    description:
      "Refresh skin, remove sun tan, and restore radiant natural vitality and dermal balance.",
    image: glowTherapyImage,
    alt: "Ayurvedic facial glow therapy",
  },
];

export default function AyurvedicTreatments() {
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`ayurvedic-treatments-section ${visible ? "is-visible" : ""}`}
      id="ayurvedic-treatments"
    >
      <div className="ayurvedic-treatments-container">
        <header className="ayurvedic-treatments-header">
          <h2 className="at-reveal" style={{ "--delay": "0s" }}>
            Ayurvedic Treatments
          </h2>
          <p className="at-reveal" style={{ "--delay": "0.2s" }}>
            Experience personalised therapies designed to promote deep
            relaxation, rejuvenation, and holistic well-being.
          </p>
        </header>

        <div className="ayurvedic-treatments-grid">
          {treatments.map((treatment, i) => (
            <article
              className={`ayurvedic-treatment-card at-card ${
                i % 2 === 0 ? "spin-cw" : "spin-ccw"
              }`}
              style={{ "--delay": `${0.4 + i * 0.18}s`, "--i": i }}
              key={treatment.title}
            >
              <img
                className="ayurvedic-treatment-image"
                src={treatment.image}
                alt={treatment.alt}
                loading="lazy"
              />

              <div className="ayurvedic-treatment-overlay">
                <h3>{treatment.title}</h3>

                <p>{treatment.description}</p>

                <a
                  className="ayurvedic-treatment-button"
                  href="#appointment"
                  aria-label={`Book an appointment for ${treatment.title}`}
                >
                  Book an Appointment
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}