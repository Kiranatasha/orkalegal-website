"use client";

import MotionSection from "./MotionSection";
import { useLang } from "../context/LanguageContext";

export default function IntegritySection() {
  const { t } = useLang();
  const i = t.integrity;

  const [before, after] = i.quote.split(i.quoteHighlight);

  return (
    <MotionSection className="section integrity-section">
      <div className="container split-grid">
        <div className="integrity-image-block">
          <div className="integrity-image" />
          <div className="integrity-gold-rule" />
        </div>

        <div className="integrity-body">
          <div className="section-label">
            <span className="section-label-rule" />
            <span className="section-label-text">{i.label}</span>
          </div>

          <p className="integrity-quote">
            &ldquo;{before}<cite>{i.quoteHighlight}</cite>{after}&rdquo;
          </p>

          <p className="integrity-copy">{i.copy}</p>
        </div>
      </div>
    </MotionSection>
  );
}
