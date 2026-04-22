"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLang } from "../context/LanguageContext";
import { LanguageSwitch } from "./ui/LanguageSwitch";

const WHATSAPP_URL =
  "https://wa.me/628118003088?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setOpen(false);

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    setOpen(false);
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  const links = [
    { href: "/#home", label: t.nav.home, sectionId: "home", type: "section" },
    {
      href: "/#practice-areas",
      label: t.nav.practiceAreas,
      sectionId: "practice-areas",
      type: "section",
    },
    {
      href: "/#articles",
      label: t.nav.articles,
      sectionId: "articles",
      type: "section",
    },
    { href: "/credentials", label: t.nav.credentials, type: "link" },
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
          {links.map((link) =>
            link.type === "section" ? (
              <button
                key={link.label}
                type="button"
                onClick={(event) => handleSectionClick(event, link.sectionId)}
              >
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.contactUs}
          </Link>

          <button
            className="mobile-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "mobile-menu-open" : ""}`}>
        {links.map((link) =>
          link.type === "section" ? (
            <button
              key={link.label}
              type="button"
              onClick={(event) => handleSectionClick(event, link.sectionId)}
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
          href={WHATSAPP_URL}
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
