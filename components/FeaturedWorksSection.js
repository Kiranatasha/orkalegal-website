"use client";

import { motion } from "framer-motion";
import MotionSection from "./MotionSection";
import { useLang } from "../context/LanguageContext";

/* ─── SVG icons (gold line art) ─────────────────────── */

function IconPT() {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Building body */}
      <rect x="6" y="18" width="34" height="32" rx="1.5" />
      {/* Roof / upper floor */}
      <rect x="12" y="6" width="22" height="12" rx="1.5" />
      {/* Windows row 1 */}
      <rect x="12" y="24" width="7" height="7" rx="1" />
      <rect x="24" y="24" width="7" height="7" rx="1" />
      {/* Windows row 2 */}
      <rect x="12" y="35" width="7" height="7" rx="1" />
      <rect x="24" y="35" width="7" height="7" rx="1" />
      {/* Door */}
      <rect x="18" y="43" width="10" height="7" rx="1" />
      {/* Flag pole on roof */}
      <line x1="23" y1="6" x2="23" y2="2" />
      <path d="M23 2 l6 2 l-6 2" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  );
}

function IconCouple() {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Person 1 (left) */}
      <circle cx="16" cy="12" r="7" />
      <path d="M4 50 v-8 a12 12 0 0 1 24 0 v8" />
      {/* Person 2 (right) */}
      <circle cx="36" cy="12" r="7" />
      <path d="M24 50 v-8 a12 12 0 0 1 24 0 v8" />
      {/* Heart between them */}
      <path
        d="M26 28 c0-2.5 3.5-4 5 -1.5 c1.5-2.5 5-1 5 1.5 c0 2 -5 5 -5 5 c0 0 -5 -3 -5 -5z"
        strokeWidth="1.2"
        opacity="0.7"
      />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Document */}
      <rect x="8" y="4" width="34" height="44" rx="2.5" />
      {/* Folded corner */}
      <path d="M34 4 v9 h8" strokeWidth="1.2" opacity="0.6" />
      {/* Lines */}
      <line x1="15" y1="20" x2="35" y2="20" />
      <line x1="15" y1="27" x2="35" y2="27" />
      <line x1="15" y1="34" x2="27" y2="34" />
      {/* Signature / pen flourish */}
      <path d="M15 42 q3-5 6 0 q3-5 6 0" strokeWidth="1.3" />
      {/* Pen */}
      <line x1="36" y1="40" x2="42" y2="34" strokeWidth="1.5" />
      <path d="M36 40 l-2 4 l4-2 z" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  );
}

const ICONS = {
  pt: IconPT,
  prenuptial: IconCouple,
  agreement: IconDocument,
};

/* ─── Component ─────────────────────────────────────── */

export default function FeaturedWorksSection() {
  const { t } = useLang();
  const fw = t.featuredWorks;

  return (
    <MotionSection className="section featured-works-section section-alt">
      <div className="container">
        {/* Header */}
        <div className="featured-works-header">
          <div className="section-label">
            <span className="section-label-rule" />
            <span className="section-label-text">{fw.label}</span>
          </div>
          <h2 className="featured-works-heading">{fw.heading}</h2>
          <p className="featured-works-copy">{fw.copy}</p>
        </div>

        {/* Divider */}
        <div className="featured-works-rule" />

        {/* Items */}
        <div className="featured-works-grid">
          {fw.items.map((item, i) => {
            const Icon = ICONS[item.id];
            return (
              <motion.div
                key={item.id}
                className="featured-work-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              >
                <div className="featured-work-icon">
                  <Icon />
                </div>
                <h3 className="featured-work-title">{item.title}</h3>
                <p className="featured-work-desc">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
