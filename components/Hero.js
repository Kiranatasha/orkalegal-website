"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const WA_URL =
  "https://wa.me/628118003088?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation.";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="hero-section">
      <div className="hero-bg-overlay" />

      <div className="hero-content">
        <div className="container">
          <motion.div
            className="hero-eyebrow-row"
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
          >
            <span className="hero-eyebrow-rule" />
            <p className="eyebrow">{h.eyebrow}</p>
          </motion.div>

          <motion.h1
            className="hero-headline"
            initial="hidden"
            animate="show"
            custom={0.22}
            variants={fadeUp}
          >
            {h.headline1} <em>{h.headlineEm}</em> {h.headline2}
          </motion.h1>

          <motion.div
            className="hero-bottom-row"
            initial="hidden"
            animate="show"
            custom={0.38}
            variants={fadeUp}
          >
            <p className="hero-subtitle">{h.subtitle}</p>

            <div className="hero-actions">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link className="button button-primary" href={WA_URL} target="_blank" rel="noreferrer">
                  {h.cta1}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link className="button button-secondary" href="/#services">
                  {h.cta2}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hero-trust-strip"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container">
          <div className="hero-trust-inner">
            <div className="hero-trust-item"><span className="hero-trust-dot" />{h.trust1}</div>
            <div className="hero-trust-item"><span className="hero-trust-dot" />{h.trust2}</div>
            <div className="hero-trust-item"><span className="hero-trust-dot" />{h.trust3}</div>
            <div className="hero-trust-item"><span className="hero-trust-dot" />{h.trust4}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
