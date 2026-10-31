import React, { useEffect, useRef, useState } from "react";
import "./WhyChooseUs.css";

import ayurvedaVideo from "../../assets/videos/ayurveda-treatment.mp4";

const services = [
  "Outpatient Care Services",
  "Experienced Ayurvedic Doctors",
  "Personalised Homeopathy Care",
  "Specialised Cupping Therapy",
  "Personalised Treatment Plans",
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

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
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    } else {
      video.pause();
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`why-moscow-section ${visible ? "is-visible" : ""}`}
      id="about"
    >
      <div className="why-moscow-container">

        {/* Service labels */}
        <div className="why-moscow-tags">
          {services.map((service, i) => (
            <div
              className="why-moscow-tag reveal reveal-up"
              style={{ "--delay": `${i * 0.3}s` }}
              key={service}
            >
              {service}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="why-moscow-content">

          {/* Left content */}
          <div
            className="why-moscow-text reveal reveal-left"
            style={{ "--delay": "0.5s" }}
          >
            <h2>
              Why Choose Moscow
              <br className="desktop-break" />
              International Holistic
              <br className="desktop-break" />
              Medical Centre?
            </h2>

            <p>
              Moscow International Holistic Centre is a trusted Ayurvedic,
              Homeopathy, Cupping Therapy hospital in Abu Dhabi, offering
              authentic treatments based on traditional principles. We focus
              on understanding the root cause of each health concern and
              creating personalised treatment plans for every patient.
            </p>

            <p>
              Our holistic approach brings together Homeopathy, Ayurveda,
              and Cupping Therapy, with care thoughtfully selected according
              to each individual’s health needs. Our services focus on
              personalised outpatient care, supporting overall well-being
              through a comfortable and patient-centred approach.
            </p>

            <div className="reveal reveal-up" style={{ "--delay": "1s" }}>
              <a href="#services" className="why-moscow-button">
                Discover Our Approach
              </a>
            </div>
          </div>

          
          {/* Right video - Video only */}
          <div
            className="why-moscow-video-wrap reveal reveal-right"
            style={{ "--delay": "0.65s" }}
          >
            <video
              ref={videoRef}
              className="why-moscow-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              <source src={ayurvedaVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>


        </div>
      </div>
    </section>
  );
}
