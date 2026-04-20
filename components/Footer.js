"use client";

import Link from "next/link";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="/logo/orka-logo.png" alt="Legal Orka" />
            <p>{f.tagline}</p>
          </div>

          <div>
            <p className="footer-title">{f.officeLabel}</p>
            <p>Bintaro, Tangerang Selatan 15229</p>
          </div>

          <div>
            <p className="footer-title">{f.contactLabel}</p>
            <p><Link href="tel:+628118003088">+62 811 8003 088</Link></p>
            <p><Link href="mailto:orkalegal.id@gmail.com">orkalegal.id@gmail.com</Link></p>
            <p>
              <Link href="https://www.instagram.com/orkalegal.id/" target="_blank" rel="noreferrer">
                @orkalegal.id
              </Link>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Orka Legal. {f.copyright}</span>
          <span>Jakarta · Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
