import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Leaf,
  MessageCircle,
  AtSign,
  ShieldCheck,
  BriefcaseMedical,
  Lock,
  Send,
  Footprints,
  Navigation,
} from "lucide-react";
import "./ContactUs.css";


import heroImage from "../assets/images/contact-hero.png";
import mapImage from "../assets/images/contact-map1.jpeg";

const PHONE = "+971 507800163";
const PHONE_LINK = "tel:+971507800163";
const WHATSAPP_LINK = "https://wa.me/971507800163";
const EMAIL = "info@moscowcenter.ae";
const MAPS_LINK =
  "https://maps.google.com/maps?q=24.491975784301758%2C54.36055374145508&z=17&hl=en";

const INFO_CARDS = [
  {
    icon: MapPin,
    dark: true,
    label: "LOCATION",
    title: "Visit Us",
    lines: ["Shabeeb Al Dehari Building", "Khalifa Street,", "Abu Dhabi, UAE"],
    action: { text: "VIEW ON MAP", href: MAPS_LINK, external: true },
  },
  {
    icon: Phone,
    label: "TELEPHONE",
    title: "Call Us",
    strong: PHONE,
    lines: ["Tue - Sun: 10:00 AM - 9:00 PM"],
    action: { text: "CALL CLINIC", href: PHONE_LINK },
  },
  {
    icon: Mail,
    label: "CORRESPONDENCE",
    title: "Email Us",
    strong: EMAIL,
    lines: ["Clinical queries & intake coordination"],
    action: { text: "SEND EMAIL", href: `mailto:${EMAIL}` },
  },
  {
    icon: Clock,
    label: "SANCTUARY HOURS",
    title: "Opening Hours",
    strong: "Tue– Sun: 10:00 AM – 9:00 PM",
    lines: ["Monday: Closed"],
    badge: "DOH LICENSED",
  },
];

const TRUST = [
  { icon: ShieldCheck, title: "DOH Licensed Outpatient Facility", text: "Regulated under Department of Health Abu Dhabi standards." },
  { icon: BriefcaseMedical, title: "Board-Certified Practitioners", text: "Direct consultations with licensed MD and BAMS specialists." },
  { icon: Lock, title: "Confidential Patient Data Protection", text: "Highest privacy protocols applied to your health information." },
];

export default function ContactUs() {
  const reduce = useReducedMotion();

  const fade = (delay = 0, x = 0, y = 28) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.8, delay: reduce ? 0 : delay, ease: "easeOut" },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Connect this form to your backend or appointment API.
    alert("The form is ready. Connect your appointment API to submit the request.");
  };

  return (
    <main className="mihmc-ct">
      {/* ================= HERO ================= */}
      <section className="mihmc-ct-hero">
        <div className="mihmc-ct-hero-grid">
          <div className="mihmc-ct-hero-text">
            <motion.span className="mihmc-ct-pill" {...fade(0, 0, 14)}>
              WE’RE HERE TO HELP
            </motion.span>

            <motion.h1 {...fade(0.1, -30, 0)}>
              Get in Touch
              <br />
              <em>With Our Sanctuary</em>
            </motion.h1>

            <motion.p className="mihmc-ct-lead" {...fade(0.2, -30, 0)}>
              Your journey towards personalised holistic care starts with a
              conversation. Our multidisciplinary clinical desk is here to
              guide your treatment pathway and arrange your private
              consultation in Khalifa Street, Abu Dhabi.
            </motion.p>

            <motion.div className="mihmc-ct-actions" {...fade(0.3)}>
              <a href="#appointment-form" className="mihmc-ct-btn dark">
                BOOK AN APPOINTMENT <ArrowDown size={11} />
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mihmc-ct-btn soft">
                <MapPin size={11} /> GET DIRECTIONS
              </a>
            </motion.div>

            <motion.dl className="mihmc-ct-strip" {...fade(0.4)}>
              <div><dt>ACCREDITED</dt><dd>DOH Abu Dhabi Licensed</dd></div>
              <div><dt>RESPONSE</dt><dd>Within 2 Hours</dd></div>
              <div><dt>SERVICE</dt><dd>6 Days a Week</dd></div>
            </motion.dl>
          </div>

          <motion.div className="mihmc-ct-hero-media" {...fade(0.2, 40, 0)}>
            <img src={heroImage} alt="Moscow International Holistic Medical Center reception" />
            <motion.div
              className="mihmc-ct-desk"
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="mihmc-ct-desk-icon"><Leaf size={13} /></span>
              <div>
                <strong>OUTPATIENT CLINIC &amp; CONSULTATION SUITES</strong>
                <span>Khalifa Street, Abu Dhabi, UAE</span>
              </div>
              <em>OPEN TUE–SUN</em>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section className="mihmc-ct-info">
        <div className="mihmc-ct-info-grid">
          {INFO_CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.article
                key={c.title}
                className="mihmc-ct-info-card"
                {...fade(i * 0.1, 0, 32)}
                whileHover={reduce ? undefined : { y: -6 }}
              >
                <span className={`mihmc-ct-info-icon ${c.dark ? "dark" : ""}`}>
                  <Icon size={14} />
                </span>
                <span className="mihmc-ct-info-label">{c.label}</span>
                <h3>{c.title}</h3>
                {c.strong && <strong>{c.strong}</strong>}
                <p>
                  {c.lines.map((l, li) => (
                    <React.Fragment key={l}>
                      {l}
                      {li < c.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>

                {c.action && (
                  <a
                    href={c.action.href}
                    className="mihmc-ct-info-action"
                    {...(c.action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {c.action.text} <ArrowRight size={10} />
                  </a>
                )}
                {c.badge && (
                  <span className="mihmc-ct-info-action static">
                    {c.badge} <CheckCircle2 size={11} />
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ================= COORDINATION + FORM ================= */}
      <section className="mihmc-ct-coord">
        <div className="mihmc-ct-coord-grid">
          <motion.div className="mihmc-ct-coord-left" {...fade(0, -40, 0)}>
            <span className="mihmc-ct-kicker">CLINICAL COORDINATION</span>
            <h2>
              How Can We
              <br />
              <em>Help You Today?</em>
            </h2>
            <p>
              Whether you have questions regarding our classical Homeopathy
              consultations, customized Ayurvedic Panchakarma, or sterile
              Cupping Therapy (Hijama), our clinical coordination desk is
              prepared to assist you. Every inquiry is handled with strict
              medical confidentiality.
            </p>

            <div className="mihmc-ct-concierge">
              <h4>DIRECT CONTACT CONCIERGE</h4>

              <a href={PHONE_LINK} className="mihmc-ct-row">
                <span className="mihmc-ct-row-icon plain"><Phone size={12} /></span>
                <div>
                  <small>Direct Clinic Line</small>
                  <strong>{PHONE}</strong>
                </div>
                <ArrowRight size={11} />
              </a>

              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mihmc-ct-row">
                <span className="mihmc-ct-row-icon"><MessageCircle size={12} /></span>
                <div>
                  <strong>
                    +971 50 780 0163 <b>FAST TRIAGE</b>
                  </strong>
                  <small>WhatsApp Appointment Desk</small>
                </div>
                <ArrowUpRight size={11} />
              </a>

              <a href={`mailto:${EMAIL}`} className="mihmc-ct-row">
                <span className="mihmc-ct-row-icon plain"><AtSign size={12} /></span>
                <div>
                  <small>Email Coordination</small>
                  <strong>{EMAIL}</strong>
                </div>
                <ArrowRight size={11} />
              </a>
            </div>

            <ul className="mihmc-ct-trust">
              {TRUST.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span><Icon size={10} /></span>
                  <div>
                    <strong>{title}</strong>
                    <em>{text}</em>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            id="appointment-form"
            className="mihmc-ct-form"
            onSubmit={handleSubmit}
            {...fade(0.15, 40, 0)}
          >
            <span className="mihmc-ct-kicker">INITIAL CONSULTATION</span>
            <h2>Request an Appointment</h2>
            <p className="mihmc-ct-form-sub">
              Submit your details below and our medical reception desk will
              contact you within 2 hours to confirm your preferred schedule.
            </p>

            <div className="mihmc-ct-fields">
              <div className="field full">
                <label htmlFor="ct-name">FULL NAME <i>*</i></label>
                <input id="ct-name" name="name" type="text" placeholder="e.g. Mariam Al Mansoori" autoComplete="name" required />
              </div>

              <div className="field">
                <label htmlFor="ct-phone">PHONE NUMBER <i>*</i></label>
                <div className="phone">
                  <span>+971</span>
                  <input id="ct-phone" name="phone" type="tel" placeholder="50 123 4567" autoComplete="tel-national" required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="ct-email">EMAIL ADDRESS <i>*</i></label>
                <input id="ct-email" name="email" type="email" placeholder="name@domain.ae" autoComplete="email" required />
              </div>

              <div className="field full">
                <label htmlFor="ct-dept">PREFERRED TREATMENT DEPARTMENT <i>*</i></label>
                <select id="ct-dept" name="department" defaultValue="" required>
                  <option value="" disabled>Select Department / Treatment</option>
                  <option>General Consultation</option>
                  <option>Classical Homeopathy</option>
                  <option>Kerala Ayurveda</option>
                  <option>Panchakarma</option>
                  <option>Cupping Therapy (Hijama)</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="ct-date">PREFERRED DATE (OPTIONAL)</label>
                <input id="ct-date" name="date" type="date" />
              </div>

              <div className="field">
                <label htmlFor="ct-time">PREFERRED TIME OF DAY</label>
                <select id="ct-time" name="time" defaultValue="Morning">
                  <option value="Morning">Morning (10:00 AM – 01:00 PM)</option>
                  <option value="Afternoon">Afternoon (01:00 PM – 05:00 PM)</option>
                  <option value="Evening">Evening (05:00 PM – 09:00 PM)</option>
                </select>
              </div>

              <div className="field full">
                <label htmlFor="ct-concern">HEALTH CONCERN / INQUIRY</label>
                <textarea
                  id="ct-concern"
                  name="concern"
                  rows={3}
                  placeholder="Briefly describe your symptoms, primary health objectives, or specific questions for our practitioners..."
                />
              </div>
            </div>

            <label className="mihmc-ct-consent">
              <input type="checkbox" required />
              <span>
                I agree to the processing of my contact information in
                accordance with MIHMC patient privacy policies. Submitting this
                form sends an appointment request; confirmation will be
                provided by phone or WhatsApp.
              </span>
            </label>

            <motion.button
              type="submit"
              className="mihmc-ct-submit"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.99 }}
            >
              REQUEST AN APPOINTMENT <Send size={11} />
            </motion.button>

            <p className="mihmc-ct-form-note">
              <Lock size={9} /> Strict medical confidentiality assured. No
              automatic booking charges.
            </p>
          </motion.form>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="mihmc-ct-map">
        <motion.header className="mihmc-ct-map-head" {...fade()}>
          <span className="mihmc-ct-kicker">LOCATION &amp; ACCESS</span>
          <h2>Find Our Sanctuary in Abu Dhabi</h2>
          <p>
            Conveniently located at Shabeeb Aldhaheri Building, Office 01,
            Khalifa Street, opposite FAB Bank, Al Danah, Zone 1, Abu Dhabi,
            United Arab Emirates.
          </p>
        </motion.header>

        <div className="mihmc-ct-map-grid">
          <motion.a
            className="mihmc-ct-map-photo"
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the clinic location in Google Maps"
            {...fade(0.05, -36, 0)}
          >
            <img src={mapImage} alt="Map of Abu Dhabi showing the clinic area" loading="lazy" />
            <span className="mihmc-ct-map-label">ABU DHABI</span>
            <span className="mihmc-ct-map-gps">GPS: 24.4716° N, 54.3498° E</span>
          </motion.a>

          <motion.div className="mihmc-ct-map-side" {...fade(0.15, 36, 0)}>
            <div className="mihmc-ct-map-card">
              <h4><MapPin size={11} /> SANCTUARY ADDRESS</h4>
              <strong>Khalifa Street</strong>
              <p>
                Shabeeb Aldhaheri Building, Office 01, Khalifa Street,
                opposite FAB Bank, Al Danah, Zone 1, Abu Dhabi, United Arab
                Emirates.
              </p>
            </div>

            <div className="mihmc-ct-map-card">
              <h4><Footprints size={11} /> TRANSIT &amp; LANDMARKS</h4>
              <p>
                Conveniently located on Khalifa Street, opposite FAB Bank in
                Al Danah, Zone 1, Abu Dhabi, with convenient access to nearby
                public transport and local amenities.
              </p>
            </div>

            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mihmc-ct-directions">
              GET DIRECTIONS VIA GOOGLE MAPS <ArrowUpRight size={11} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mihmc-ct-cta-wrap">
        <motion.div className="mihmc-ct-cta" {...fade(0, 0, 36)}>
          <span className="mihmc-ct-cta-pill">IMMEDIATE ASSISTANCE</span>
          <h2>
            Have a Question?
            <br />
            <em>We’re Happy to Help.</em>
          </h2>
          <p>
            Reach out to our clinical team directly for prompt guidance on
            treatments, doctor availability, or navigating your upcoming visit.
          </p>

          <div className="mihmc-ct-cta-actions">
            <a href={PHONE_LINK} className="mihmc-ct-btn white">
              <Phone size={11} /> CALL CLINIC ({PHONE})
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mihmc-ct-btn ghost">
              <MessageCircle size={11} /> WHATSAPP US (+971 507800163)
            </a>
          </div>

          <ul className="mihmc-ct-cta-meta">
            <li><Clock size={9} /> 10:00 AM - 9:00 PM</li>
            <li><Navigation size={9} /> Direct Doctor Coordination</li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
