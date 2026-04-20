"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MotionSection from "./MotionSection";
import { useLang } from "../context/LanguageContext";

const WA_URL =
  "https://wa.me/628118003088?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation.";

export default function BottomCTA() {
  const { t } = useLang();
  const c = t.cta;

  return (
    <MotionSection className="section bottom-cta-section" id="contact">
      <div className="container">
        <div className="bottom-cta-inner">
          <div>
            <p className="cta-label">{c.label}</p>
            <h2 className="cta-heading">{c.heading}</h2>
            <p className="cta-copy">{c.copy}</p>
          </div>

          <div className="cta-actions">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link className="button button-primary" href={WA_URL} target="_blank" rel="noreferrer">
                {c.cta1}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link className="button button-secondary" href="mailto:orkalegal.id@gmail.com">
                {c.cta2}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
