"use client";

import MotionSection from "./MotionSection";
import { useLang } from "../context/LanguageContext";

export default function AboutSection() {
  const { t } = useLang();
  const a = t.about;

  return (
    <MotionSection className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-label">
              <span className="section-label-rule" />
              <span className="section-label-text">{a.label}</span>
            </div>
            <h2 className="about-heading">{a.heading}</h2>
          </div>

          <div>
            <p className="about-copy">{a.copy1}</p>
            <p className="about-copy" style={{ marginTop: 0 }}>{a.copy2}</p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">{a.stat1Label}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7</span>
                <span className="stat-label">{a.stat2Label}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">{a.stat3Label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
