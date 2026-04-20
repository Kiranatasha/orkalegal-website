"use client";

import MotionSection from "./MotionSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from "./ui/Carousel";
import { useLang } from "../context/LanguageContext";

/* ─── SVG illustrations ─────────────────────────────── */

function IllustrationTPKS() {
  return (
    <svg viewBox="0 0 200 140" fill="none" aria-hidden="true" className="insight-illustration">
      {/* Shield */}
      <path
        d="M100 18 L138 32 L138 72 Q138 102 100 118 Q62 102 62 72 L62 32 Z"
        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"
      />
      {/* Checkmark inside shield */}
      <path d="M82 70 l12 12 l22-22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Person silhouette left */}
      <circle cx="38" cy="52" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M24 80 q0-14 14-14 q14 0 14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      {/* Person silhouette right */}
      <circle cx="162" cy="52" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M148 80 q0-14 14-14 q14 0 14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      {/* Gavel */}
      <rect x="84" y="118" width="32" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
      <line x1="100" y1="118" x2="100" y2="128" stroke="currentColor" strokeWidth="1.3" />
      {/* Stars / emphasis marks */}
      <path d="M50 32 l2-4 l2 4 l4 2 l-4 2 l-2 4 l-2-4 l-4-2z" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <path d="M148 28 l1.5-3 l1.5 3 l3 1.5 l-3 1.5 l-1.5 3 l-1.5-3 l-3-1.5z" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function IllustrationDigital() {
  return (
    <svg viewBox="0 0 200 140" fill="none" aria-hidden="true" className="insight-illustration">
      {/* Laptop / monitor */}
      <rect x="44" y="30" width="112" height="76" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <rect x="50" y="36" width="100" height="64" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Screen base */}
      <path d="M70 106 l-10 18 h80 l-10-18" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <line x1="60" y1="124" x2="140" y2="124" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Warning triangle on screen */}
      <path d="M100 48 l22 38 H78 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <line x1="100" y1="60" x2="100" y2="74" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="100" cy="80" r="1.5" fill="currentColor" />
      {/* Small legal paragraph lines beside screen */}
      <line x1="160" y1="44" x2="172" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="160" y1="50" x2="174" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="160" y1="56" x2="170" y2="56" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* Small paragraph lines left */}
      <line x1="26" y1="60" x2="38" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="26" y1="66" x2="40" y2="66" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="26" y1="72" x2="36" y2="72" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

function IllustrationTax() {
  return (
    <svg viewBox="0 0 200 140" fill="none" aria-hidden="true" className="insight-illustration">
      {/* Document */}
      <rect x="48" y="18" width="76" height="96" rx="3" stroke="currentColor" strokeWidth="1.5" />
      {/* Folded corner */}
      <path d="M106 18 v16 h18" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      {/* Lines of text */}
      <line x1="58" y1="44" x2="114" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="58" y1="52" x2="114" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="58" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="58" y1="72" x2="114" y2="72" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="58" y1="80" x2="110" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Highlight / important line */}
      <rect x="56" y="90" width="58" height="9" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <line x1="58" y1="95" x2="110" y2="95" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      {/* Coins stack right */}
      <ellipse cx="152" cy="88" rx="18" ry="6" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="152" cy="80" rx="18" ry="6" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="152" cy="72" rx="18" ry="6" stroke="currentColor" strokeWidth="1.3" />
      <line x1="134" y1="72" x2="134" y2="88" stroke="currentColor" strokeWidth="1.3" />
      <line x1="170" y1="72" x2="170" y2="88" stroke="currentColor" strokeWidth="1.3" />
      {/* Percentage / tax symbol above coins */}
      <text x="146" y="66" fontSize="12" fill="currentColor" opacity="0.5" fontFamily="serif">%</text>
      {/* Arrow between doc and coins */}
      <path d="M124 80 l10 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M130 76 l4 4 l-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ILLUSTRATIONS = {
  tpks: IllustrationTPKS,
  digital: IllustrationDigital,
  tax: IllustrationTax,
};

/* ─── Component ─────────────────────────────────────── */

export default function InsightsSection() {
  const { t } = useLang();
  const ins = t.insights;

  return (
    <MotionSection className="section insights-section">
      <div className="container">
        {/* Header */}
        <div className="insights-header">
          <div className="section-label">
            <span className="section-label-rule" />
            <span className="section-label-text">{ins.label}</span>
          </div>
          <h2 className="insights-heading">{ins.heading}</h2>
          <p className="insights-copy">{ins.copy}</p>
        </div>

        {/* Carousel */}
        <div className="insights-carousel-wrapper">
          <Carousel disableDrag={false}>
            <CarouselContent className="insights-carousel-track">
              {ins.articles.map((article) => {
                const Illustration = ILLUSTRATIONS[article.illustration];
                return (
                  <CarouselItem key={article.id} className="insights-carousel-item">
                    <article className="insight-card">
                      <div className="insight-illustration-wrap">
                        <Illustration />
                      </div>

                      <div className="insight-body">
                        <p className="insight-category">{article.category}</p>
                        <h3 className="insight-title">{article.title}</h3>
                        <p className="insight-desc">{article.description}</p>
                        <a
                          className="insight-read-more"
                          href={article.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {ins.readMore}
                        </a>
                      </div>
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselNavigation alwaysShow className="insights-nav" classNameButton="insights-nav-btn" />
            <CarouselIndicator className="insights-indicator" />
          </Carousel>
        </div>
      </div>
    </MotionSection>
  );
}
