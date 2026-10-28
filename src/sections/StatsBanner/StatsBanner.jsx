
import React, { useEffect, useRef, useState } from "react";
import "./StatsBanner.css";

import statsBackground from "../../assets/images/stats-bg.jpeg";

/* Count numbers when the banner becomes visible */
function CountUp({
  end,
  decimals = 0,
  suffix = "",
  start,
  duration = 1800,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setValue(end);
      return;
    }

    let raf;
    const t0 = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(end * eased);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);

  return (
    <>
      {value.toFixed(decimals)}
      {suffix}
    </>
  );
}

export default function StatsBanner() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Reveal and count up only once */
  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

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
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`stats-banner-section ${
        visible ? "is-visible" : ""
      }`}
    >
      {/* Cinematic animated background image */}
      <div
        className="stats-banner-background"
        style={{
          backgroundImage: `url("${statsBackground}")`,
        }}
        aria-hidden="true"
      />

      {/* Background color overlay and moving light */}
      <div
        className="stats-banner-overlay"
        aria-hidden="true"
      />

      {/* Glass statistics card */}
      <div className="stats-banner stats-banner-reveal">
        {/* Statistic 1 */}
        <div
          className="stats-banner-item stats-reveal"
          style={{ "--delay": "0.3s" }}
        >
          <h2>
            <CountUp end={5} suffix="+" start={visible} />
          </h2>

          <p>
            Years
            <br />
            of Care
          </p>
        </div>

        <div className="stats-banner-divider" />

        {/* Statistic 2 */}
        <div
          className="stats-banner-item stats-reveal"
          style={{ "--delay": "0.5s" }}
        >
          <h2>
            <CountUp end={25} suffix="+" start={visible} />
          </h2>

          <p>Treatments</p>
        </div>

        <div className="stats-banner-divider" />

        {/* Statistic 3 */}
        <div
          className="stats-banner-item stats-google-rating stats-reveal"
          style={{ "--delay": "0.7s" }}
        >
          <h2>
            <CountUp
              end={5}
              decimals={1}
              start={visible}
            />
          </h2>

          <div
            className="stats-stars"
            role="img"
            aria-label="5 out of 5 stars"
          >
            {[0, 1, 2, 3, 4].map((star) => (
              <span
                key={star}
                className="stats-star"
                style={{ "--s": star }}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
          </div>

          <p>
            Google
            <br />
            Rating
          </p>
        </div>
      </div>
    </section>
  );
}
