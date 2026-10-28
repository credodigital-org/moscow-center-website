import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ShieldCheck,
  Award,
  MapPin,
  ClipboardList,
  Activity,
  BriefcaseMedical,
  MessageCircle,
  Quote,
} from "lucide-react";
import "./About.css";

/* ------------------------------------------
   ADD YOUR IMAGES HERE
   1. Clinic reception photo (wide) -> hero
   2. Doctor / patient consultation photo -> story section
------------------------------------------- */
import aboutHeroImage from "../assets/images/about-clinic1.png";
import aboutStoryImage from "../assets/images/about-consultation.jpeg";

const CHIPS = [
  { icon: ShieldCheck, text: "Ministry of Health Licensed" },
  { icon: Award, text: "15+ Years Clinical Care" },
  { icon: MapPin, text: "Abu Dhabi, UAE" },
];

const PROTOCOLS = [
  {
    icon: ClipboardList,
    no: "PROTOCOL 01",
    title: "Personalised Consultations",
    text: "Detailed 45–60 minute comprehensive consultations exploring medical history, stress patterns, circadian sleep rhythms, and individual bodily constitution.",
  },
  {
    icon: Activity,
    no: "PROTOCOL 02",
    title: "Understanding Individual Needs",
    text: "Root-cause diagnostic assessment mapping metabolic balance, toxic accumulation (Ama), and constitutional temperament to eradicate deep cellular disharmony.",
  },
  {
    icon: BriefcaseMedical,
    no: "PROTOCOL 03",
    title: "Appropriate Treatment Options",
    text: "Integrative care protocols blending Classical Ayurveda, Clinical Homeopathy, and Medical Cupping (Hijama) strictly aligned with individual therapeutic safety.",
  },
];

export default function About() {
  const reduce = useReducedMotion();

  const fade = (delay = 0, x = 0, y = 28) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, delay: reduce ? 0 : delay, ease: "easeOut" },
  });

  return (
    <main className="mihmc-about">
      {/* ================= HERO ================= */}
      <section className="mihmc-about-hero">
        <div className="mihmc-about-hero-inner">
          <motion.span className="mihmc-about-pill" {...fade(0, 0, 16)}>
            ABOUT US
          </motion.span>

          <motion.h1 {...fade(0.1)}>
            A Holistic Approach to Better Health
          </motion.h1>

          <motion.p className="mihmc-about-hero-text" {...fade(0.2)}>
            Discover personalised holistic care through Homeopathy, Ayurveda,
            and
            <br className="mihmc-br" />
            Cupping Therapy. Licensed by the Ministry of Health, uniting
            ancient wisdom
            <br className="mihmc-br" />
            and modern clinical precision.
          </motion.p>

          <motion.div className="mihmc-about-actions" {...fade(0.3)}>
            <a href="/treatments" className="mihmc-about-btn dark">
              Explore Our Treatments
            </a>
            <a href="/contact" className="mihmc-about-btn light">
              Book Consultation
            </a>
          </motion.div>

          <motion.ul className="mihmc-about-chips" {...fade(0.4)}>
            {CHIPS.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon size={11} />
                {text}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mihmc-about-hero-image"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: reduce ? 0 : 0.5, ease: "easeOut" }}
          >
            <img
              src={aboutHeroImage}
              alt="Moscow International Holistic Medical Center reception, Abu Dhabi"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="mihmc-about-story">
        <div className="mihmc-about-story-grid">
          <motion.div className="mihmc-about-story-text" {...fade(0, -45, 0)}>
            <span className="mihmc-about-kicker">OUR STORY</span>

            <h2>
              Blending Timeless Wisdom with
              <br className="mihmc-br" />
              Modern Science
            </h2>

            <p>
              At Moscow International Holistic Medical Center (MIHMC), we
              believe that true healthcare goes beyond temporary symptom
              suppression. By studying the body’s natural metabolic balance,
              we construct treatment plans that stimulate authentic structural
              recovery.
            </p>

            <p>
              Over the past 15 years, our clinic has grown into a world-class
              destination for patients seeking natural solutions for chronic
              joint pain, metabolic conditions, hair fall, hormonal
              imbalances, and detox. Our clinic is licensed by the Ministry of
              Health, ensuring every practitioner, herb, and procedure meets
              strict medical guidelines.
            </p>

            <blockquote className="mihmc-about-quote">
              <Quote size={14} aria-hidden="true" />
              <p>
                “Our mission is to empower individuals to live healthier,
                balanced, and vibrant lives by restoring their body’s innate
                self-healing capabilities.”
              </p>
              <cite>MIHMC CLINICAL LEADERSHIP COUNCIL</cite>
            </blockquote>
          </motion.div>

          <motion.div className="mihmc-about-story-media" {...fade(0.15, 45, 0)}>
            <div className="mihmc-about-story-photo">
              <img
                src={aboutStoryImage}
                alt="Doctor consulting with a patient at MIHMC"
                loading="lazy"
              />
            </div>

            <motion.div
              className="mihmc-about-badge"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="mihmc-about-badge-icon">
                <Award size={16} />
              </span>
              <div>
                <strong>15+ Years</strong>
                <span>Of Healing Excellence in Abu Dhabi</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="mihmc-about-approach">
        <div className="mihmc-about-approach-inner">
          <motion.header className="mihmc-about-approach-head" {...fade()}>
            <span className="mihmc-about-kicker">
              OUR APPROACH TO HOLISTIC CARE
            </span>
            <h2>Care That Considers the Whole You</h2>
            <p>
              A patient-centred methodology viewing vitality as a harmony
              between physical health, mental
              <br className="mihmc-br" />
              calm, and biological rhythm.
            </p>
          </motion.header>

          <div className="mihmc-about-protocols">
            {PROTOCOLS.map(({ icon: Icon, no, title, text }, i) => (
              <motion.article
                key={no}
                className="mihmc-about-protocol"
                {...fade(i * 0.15, 0, 36)}
                whileHover={reduce ? undefined : { y: -6 }}
              >
                <span className="mihmc-about-protocol-icon">
                  <Icon size={16} />
                </span>
                <span className="mihmc-about-protocol-no">{no}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mihmc-about-cta-wrap">
        <motion.div className="mihmc-about-cta" {...fade(0, 0, 36)}>
          <span className="mihmc-about-cta-pill">CONSULTATIONS</span>

          <h2>
            Begin Your Journey to
            <br className="mihmc-br" />
            Restorative Health
          </h2>

          <p>
            Speak with our clinical team or schedule your one-on-one
            consultation today in
            <br className="mihmc-br" />
            Abu Dhabi. Experience authentic healing supervised by licensed
            physicians.
          </p>

          <div className="mihmc-about-cta-actions">
            <a href="/contact" className="mihmc-about-btn white">
              Book a Consultation
            </a>
            <a
              href="https://wa.me/971507800163"
              target="_blank"
              rel="noopener noreferrer"
              className="mihmc-about-btn ghost"
            >
              <MessageCircle size={13} />
              Chat via WhatsApp (+971 50 780 0163)
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
