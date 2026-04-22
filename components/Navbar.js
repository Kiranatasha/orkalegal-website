"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { LanguageSwitch } from "./ui/LanguageSwitch";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleArticlesClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("articles");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/#practice-areas", label: t.nav.practiceAreas },
    { label: t.nav.articles, onClick: handleArticlesClick },
    { href: "/credentials", label: t.nav.credentials },
  ];

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link href="/" className="brand" aria-label="Go to home">
          <img
            className="brand-logo"
            src="/logo/orka-logo.png"
            alt="Legal Orka"
          />
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link, idx) =>
            link.onClick ? (
              <button key={`articles-${idx}`} onClick={link.onClick}>
                {link.label}
              </button>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="nav-actions">
          {/* Animated EN / ID language switch */}
          <LanguageSwitch
            checked={lang === "id"}
            onCheckedChange={(checked) => {
              if ((checked && lang !== "id") || (!checked && lang !== "en")) {
                toggle();
              }
            }}
          />

          <Link
            className="button button-primary"
            href="https://wa.me/628118003088?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation."
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.contactUs}
          </Link>

          <button
            className="mobile-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        {links.map((link, idx) =>
          link.onClick ? (
            <button
              key={`articles-${idx}`}
              onClick={link.onClick}
              className="mobile-menu-button"
            >
              {link.label}
            </button>
          ) : (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          )
        )}
        {/* Language switch in mobile menu too */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border)" }}>
          <LanguageSwitch
            checked={lang === "id"}
            onCheckedChange={(checked) => {
              if ((checked && lang !== "id") || (!checked && lang !== "en")) {
                toggle();
              }
            }}
          />
        </div>
        <Link
          href="https://wa.me/628118003088?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation."
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          {t.nav.contactUs}
        </Link>
      </div>
    </header>
  );
}
