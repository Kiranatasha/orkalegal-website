"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MotionSection from "./MotionSection";
import {
  MorphingPopover,
  MorphingPopoverTrigger,
  MorphingPopoverContent,
} from "./ui/MorphingPopover";
import { ShinyButton } from "./ui/ShinyButton";
import { useLang } from "../context/LanguageContext";

const WA_BASE =
  "https://wa.me/628118003088?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20enquire%20about%20";

export default function PracticeAreasSection() {
  const { t } = useLang();
  const p = t.practiceAreas;
  const areas = t.practiceList;

  return (
    <MotionSection className="section practice-section" id="practice-areas">
      <div className="container">
        {/* Header */}
        <div className="practice-header">
          <div>
            <div className="section-label">
              <span className="section-label-rule" />
              <span className="section-label-text">{p.label}</span>
            </div>
            <h2 className="section-title">{p.heading}</h2>
          </div>
          <p className="section-copy">{p.copy}</p>
        </div>

        {/* Card grid */}
        <div className="practice-card-grid">
          {areas.map((area) => (
            <MorphingPopover key={area.title}>
              {/* ── Trigger = the card ── */}
              <MorphingPopoverTrigger className="practice-card-trigger">
                <div className="practice-card">
                  <h3 className="practice-card-title">{area.title}</h3>

                  <p className="practice-card-price">
                    <strong className="price-label-text">{area.priceLabel}</strong>
                    <strong>{area.priceValue}</strong>
                  </p>

                  <ul className="practice-card-list">
                    {area.previewItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <span className="practice-card-cta">{p.viewServices} →</span>
                </div>
              </MorphingPopoverTrigger>

              {/* ── Popup content ── */}
              <MorphingPopoverContent>
                <div className="practice-popup-inner">
                  <div className="practice-popup-header">
                    <h3 className="practice-popup-title">{area.title}</h3>
                    <p className="practice-card-price">
                      <strong className="price-label-text">{area.priceLabel}</strong>
                      <strong>{area.priceValue}</strong>
                    </p>
                  </div>

                  <p className="practice-popup-services-label">
                    {p.fullServicesLabel}
                  </p>

                  <ul className="practice-popup-list">
                    {area.fullItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <ShinyButton
                    href={`${WA_BASE}${encodeURIComponent(area.title)}.`}
                  >
                    {p.enquire}
                  </ShinyButton>
                </div>
              </MorphingPopoverContent>
            </MorphingPopover>
          ))}
        </div>

        <div className="practice-footer">
          <Link className="text-link" href="/credentials">{p.viewCredentials}</Link>
          <Link className="text-link" href="/approach">{p.viewApproach}</Link>
        </div>
      </div>
    </MotionSection>
  );
}
