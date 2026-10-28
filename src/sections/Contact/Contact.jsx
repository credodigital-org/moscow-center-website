import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  BriefcaseMedical,
  CalendarDays,
  Zap,
  ArrowRight,
  Navigation,
} from "lucide-react";
import "./Contact.css";

import mapImage from "../../assets/images/map.png";

export default function Contact() {
  const reduceMotion = useReducedMotion();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect this form to your backend or appointment API.
    alert(
      "The form is ready. Connect your appointment API to submit the booking."
    );
  };

  const revealFromBottom = {
    initial: reduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 30, scale: 0.98 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.75, ease: "easeOut" },
  };

  return (
    <section className="healthcare-contact-section" id="appointment">
      <div className="healthcare-contact-container">
        {/* Animated section heading */}
        <motion.header
          className="healthcare-contact-header"
          initial={
            reduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 35, scale: 0.97 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>
            Connect With Our Healthcare
            <br />
            Team
          </h2>

          <p>
            Book your consultation and discover personalised holistic care
            through Homeopathy,
            <br className="contact-desktop-break" />
            Ayurveda, and Cupping Therapy, tailored to your individual needs.
          </p>
        </motion.header>

        {/* Main content */}
        <div className="healthcare-contact-layout">
          {/* Left contact column */}
          <motion.div
            className="healthcare-contact-left"
            initial={
              reduceMotion ? { opacity: 1 } : { opacity: 0, x: -45 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : 0.12,
              ease: "easeOut",
            }}
          >
            {/* Contact information card */}
            <motion.div
              className="healthcare-contact-info-card"
              {...revealFromBottom}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -3, transition: { duration: 0.25 } }
              }
            >
              {/* Phone */}
              <motion.div
                className="healthcare-contact-item"
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <div className="healthcare-contact-icon">
                  <Phone size={14} />
                </div>

                <div className="healthcare-contact-item-content">
                  <h3>TELEPHONE &amp; WHATSAPP</h3>
                  <a href="tel:+971 50 780 0163">+971 50 780 0163</a>
                  <p>WhatsApp: +971 50 780 0163</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="healthcare-contact-item"
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.18 }}
              >
                <div className="healthcare-contact-icon">
                  <Mail size={14} />
                </div>

                <div className="healthcare-contact-item-content">
                  <h3>EMAIL INQUIRIES</h3>
                  <a href="mailto:info@moscowcenter.ae">
                    info@moscowcenter.ae
                  </a>
                  <a
                    className="healthcare-contact-secondary-link"
                    href="mailto:info@moscowcenter.ae"
                  >
                    info@moscowcenter.ae
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="healthcare-contact-item"
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.26 }}
              >
                <div className="healthcare-contact-icon">
                  <MapPin size={14} />
                </div>

                <div className="healthcare-contact-item-content">
                  <h3>HOSPITAL LOCATION</h3>
                  <p className="healthcare-contact-strong">
                    Shabeeb Al Dehari Building Khalifa Street
                  </p>
                  <p>Abu Dhabi, United Arab Emirates</p>

                  <span className="healthcare-location-badge">
                    <Navigation size={10} />
                    Near Khalifa Street
                  </span>
                </div>
              </motion.div>

              {/* Consultation timings */}
              <motion.div
                className="healthcare-contact-item"
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.34 }}
              >
                <div className="healthcare-contact-icon">
                  <Clock size={14} />
                </div>

                <div className="healthcare-contact-item-content">
                  <h3>CONSULTATION TIMINGS</h3>
                  <p className="healthcare-contact-strong">
                    Tue – Sun: 10:00 AM – 9:00 PM
                  </p>
                  <p>Sunday: Prior Appointment Only</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Support cards */}
            <motion.div
              className="healthcare-contact-support-grid"
              initial={
                reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <motion.div
                className="healthcare-support-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -5, scale: 1.025 }
                }
                transition={{ duration: 0.22 }}
              >
                <ShieldCheck size={16} />
                <h4>Insurance Claims</h4>
                <p>Reimbursement Support</p>
              </motion.div>

              <motion.div
                className="healthcare-support-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -5, scale: 1.025 }
                }
                transition={{ duration: 0.22 }}
              >
                <BriefcaseMedical size={16} />
                <h4>Direct Care</h4>
                <p>Holistic Follow-up</p>
              </motion.div>

              {/* Animated map preview */}
              <motion.a
                className="healthcare-map-card"
                href="https://maps.google.com/maps?q=24.491975784301758%2C54.36055374145508&z=17&hl=en"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Khalifa Street Abu Dhabi in Google Maps"
                whileHover={
                  reduceMotion ? undefined : { scale: 1.025 }
                }
                transition={{ duration: 0.25 }}
              >
                <img
                  className="healthcare-map-image"
                  src={mapImage}
                  alt="Map showing the Moscow International Holistic Centre location"
                  loading="lazy"
                />

                <motion.span
                  className="healthcare-map-pin"
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: [0, -5, 0], scale: [1, 1.08, 1] }
                  }
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin size={10} />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right appointment form */}
          <motion.div
            className="healthcare-appointment-card"
            initial={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 0, x: 45, scale: 0.98 }
            }
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              delay: reduceMotion ? 0 : 0.2,
              ease: "easeOut",
            }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    boxShadow: "0 14px 32px rgba(16, 53, 40, 0.08)",
                    transition: { duration: 0.3 },
                  }
            }
          >
            <div className="healthcare-appointment-header">
              <div>
                <h3>Book a Consultation</h3>
                <p>
                  Experience authentic diagnostic evaluation &amp;
                  personalized therapy regimens
                </p>
              </div>

              <motion.span
                className="healthcare-rapid-badge"
                animate={
                  reduceMotion
                    ? undefined
                    : { opacity: [1, 0.75, 1] }
                }
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap size={11} />
                Rapid Confirmation
              </motion.span>
            </div>

            <div className="healthcare-appointment-divider" />

            <form
              className="healthcare-appointment-form"
              onSubmit={handleSubmit}
            >
              <div className="healthcare-form-grid">
                {/* Full name */}
                <div className="healthcare-form-field">
                  <label htmlFor="patient-name">FULL NAME *</label>
                  <input
                    id="patient-name"
                    name="name"
                    type="text"
                    placeholder="e.g. Fatima Al Suwaidi"
                    autoComplete="name"
                    required
                  />
                </div>

                {/* Phone number */}
                <div className="healthcare-form-field">
                  <label htmlFor="patient-phone">PHONE NUMBER *</label>

                  <div className="healthcare-phone-input">
                    <span>+971</span>
                    <input
                      id="patient-phone"
                      name="phone"
                      type="tel"
                      placeholder="50 123 4567"
                      autoComplete="tel-national"
                      required
                    />
                  </div>
                </div>

                {/* Department */}
                <div className="healthcare-form-field">
                  <label htmlFor="patient-department">
                    PREFERRED DEPARTMENT / TREATMENT *
                  </label>

                  <select
                    id="patient-department"
                    name="department"
                    defaultValue="General Vaidya Consultation"
                    required
                  >
                    <option value="General Vaidya Consultation">
                      General Vaidya Consultation
                    </option>
                    <option value="Ayurvedic Treatments">
                      Ayurvedic Treatments
                    </option>
                    <option value="Homeopathy">Homeopathy</option>
                    <option value="Cupping Therapy">Cupping Therapy</option>
                    <option value="Panchakarma">Panchakarma</option>
                    <option value="General Consultation">
                      General Consultation
                    </option>
                  </select>
                </div>

                {/* Date and time */}
                <div className="healthcare-form-field">
                  <label htmlFor="patient-date">
                    PREFERRED DATE &amp; TIME *
                  </label>

                  <input
                    id="patient-date"
                    name="appointmentDate"
                    type="datetime-local"
                    required
                  />
                </div>

                {/* Health concern */}
                <div className="healthcare-form-field healthcare-form-full">
                  <label htmlFor="patient-concern">
                    BRIEF HEALTH CONCERN / NOTE
                  </label>

                  <textarea
                    id="patient-concern"
                    name="concern"
                    placeholder="Describe your symptoms, chronic conditions, or specific Panchakarma requirements..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Animated submit button */}
              <motion.button
                type="submit"
                className="healthcare-appointment-submit"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { scale: 1.015, y: -2 }
                }
                whileTap={
                  reduceMotion ? undefined : { scale: 0.98 }
                }
                transition={{ duration: 0.2 }}
              >
                <CalendarDays size={14} />
                <span>Request Doctor Appointment</span>
                <ArrowRight size={15} />
              </motion.button>

              <p className="healthcare-appointment-note">
                <Clock size={10} />
                Our clinical coordinator will confirm your appointment
                within 30 minutes.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
