import React, { useEffect, useRef, useState } from "react";
import {
  FlaskConical,
  Apple,
  PersonStanding,
  Smile,
  Sprout,
  Award,
} from "lucide-react";
import "./OurServices.css";

/* Seated meditation figure (lucide has no built-in one) */
function MeditationIcon({ size = 24, strokeWidth = 2, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="5" r="2" />
      <path d="M12 8v5" />
      <path d="M6 12l6-2 6 2" />
      <path d="M4 19c2-3 5-4 8-4s6 1 8 4" />
    </svg>
  );
}

const services = [
  {
    title: "Authentic Ayurvedic Treatments",
    description: "For holistic healing",
    icon: FlaskConical,
  },
  {
    title: "Digestive Health",
    description: "Improve gut health naturally",
    icon: Apple,
  },
  {
    title: "Pain & Stress Relief",
    description: "Restore balance and wellbeing",
    icon: MeditationIcon,
  },
  {
    title: "Weight Management",
    description: "Support your natural balance",
    icon: PersonStanding,
  },
  {
    title: "Skin & Hair Care",
    description: "Natural care for healthy skin and hair",
    icon: Smile,
  },
  {
    title: "Personalized Treatment Plan",
    description: "Based on your unique needs and condition",
    icon: Sprout,
  },
];

export default function OurServices() {
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
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`our-services-section ${visible ? "is-visible" : ""}`}
      id="services"
    >
      <div className="our-services-container">
        {/* Heading */}
        <header className="our-services-header">
          <h2 className="svc-reveal" style={{ "--delay": "0s" }}>
            Our Services
          </h2>

          <div
            className="our-services-credentials svc-reveal"
            style={{ "--delay": "0.15s" }}
          >
            <span className="credentials-item">
              <Award className="credentials-medal" size={12} />
              Ayurveda Treatment
            </span>
          </div>

          <p className="svc-reveal" style={{ "--delay": "0.3s" }}>
            Rooted in ancient Vedic traditions and tailored to individual body
            constitutions for lasting
            <br className="services-desktop-break" />
            holistic wellness.
          </p>
        </header>

        {/* Services grid */}
        <div className="our-services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <article
                className={`our-service-card svc-card ${
                  i % 2 === 0 ? "from-left" : "from-right"
                }`}
                style={{ "--delay": `${0.45 + i * 0.12}s`, "--i": i }}
                key={service.title}
              >
                <div className="our-service-icon">
                  <Icon size={21} strokeWidth={2.1} />
                </div>

                <div className="our-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
