const DEFAULT_WHATSAPP_URL = "https://wa.me/628118003088?text=Hello%20Orka%20Legal,%20I%20would%20like%20to%20request%20a%20consultation.";

const SERVICES = {
  en: [
    {
      title: "Corporate & Business Law",
      details: [
        "Contract negotiation",
        "Contract drafting including PPJB",
        "PT, Firma, CV, Koperasi, and Yayasan establishment",
        "Mergers and acquisitions",
        "Company compliance and deed amendments",
        "Share sale and purchase",
        "Legal due diligence"
      ]
    },
    {
      title: "Litigation & Dispute Resolution",
      details: [
        "General litigation",
        "Arbitration",
        "Small claim court"
      ]
    },
    {
      title: "Tax & Regulatory",
      details: [
        "Reporting support",
        "NPWP matters",
        "Document review",
        "Compliance advisory"
      ]
    },
    {
      title: "Family Law",
      details: [
        "Divorce",
        "Prenuptial and postnuptial agreements",
        "Adoption",
        "Child birth certificate matters for foreign parents",
        "Inheritance"
      ]
    },
    {
      title: "Employment & Labor Law",
      details: [
        "PKWTT and PKWT",
        "Freelance contracts",
        "Outsourcing agreements",
        "PHK letters",
        "Warning letters",
        "Company regulations",
        "Company liquidation"
      ]
    },
    {
      title: "Regulatory & Emerging Industries",
      details: [
        "Compliance consultation",
        "Contract drafting and negotiation",
        "NIB and Sertifikat Standard",
        "PJP and PBG",
        "Halal certification",
        "Construction licensing"
      ]
    },
    {
      title: "Legal Retainer",
      details: [
        "Monthly advisory",
        "Priority consultation",
        "Document review",
        "Corporate monitoring"
      ]
    }
  ],
  id: [
    {
      title: "Hukum Korporasi & Bisnis",
      details: [
        "Negosiasi kontrak",
        "Pembuatan kontrak termasuk PPJB",
        "Pendirian PT, Firma, CV, Koperasi, dan Yayasan",
        "Merger dan akuisisi",
        "Kepatuhan perusahaan dan perubahan akta",
        "Jual beli saham",
        "Legal due diligence"
      ]
    },
    {
      title: "Litigasi & Penyelesaian Sengketa",
      details: [
        "Litigasi umum",
        "Arbitrase",
        "Small claim court"
      ]
    },
    {
      title: "Perpajakan & Regulasi",
      details: [
        "Pelaporan",
        "NPWP",
        "Review dokumen",
        "Konsultasi kepatuhan"
      ]
    },
    {
      title: "Hukum Keluarga",
      details: [
        "Perceraian",
        "Perjanjian pra dan pasca nikah",
        "Adopsi",
        "Akta kelahiran untuk orang tua asing",
        "Waris"
      ]
    },
    {
      title: "Hukum Ketenagakerjaan & Perburuhan",
      details: [
        "PKWTT dan PKWT",
        "Kontrak freelance",
        "Perjanjian outsourcing",
        "Surat PHK",
        "Surat peringatan",
        "Peraturan perusahaan",
        "Likuidasi perusahaan"
      ]
    },
    {
      title: "Regulasi & Industri Berkembang",
      details: [
        "Konsultasi kepatuhan",
        "Pembuatan dan negosiasi kontrak",
        "NIB dan Sertifikat Standard",
        "PJP dan PBG",
        "Sertifikasi halal",
        "Perizinan konstruksi"
      ]
    },
    {
      title: "Retainer Legal",
      details: [
        "Konsultasi bulanan",
        "Konsultasi prioritas",
        "Review dokumen",
        "Monitoring korporat"
      ]
    }
  ]
};

const COPY = {
  en: {
    "nav.home": "Home",
    "nav.practice": "Practice Areas",
    "nav.about": "About",
    "nav.credentials": "Credentials",
    "nav.approach": "Approach",
    "nav.contactMenu": "Contact",
    "nav.contact": "Contact Us",
    "hero.eyebrow": "Independent Legal Counsel",
    "hero.title": "Strength in law. Trust in integrity.",
    "hero.subtitle": "Strategic legal counsel for businesses and individuals across corporate, regulatory, and dispute matters.",
    "hero.primary": "Consult via WhatsApp",
    "hero.secondary": "View Practice Areas",
    "hero.trust": "Response within 24 hours • Confidential consultation",
    "hero.cardLabel": "Strategic Counsel",
    "hero.cardTitle": "Built for decisions that need both judgment and follow-through.",
    "hero.cardBody": "We help clients move with confidence through transactions, compliance, disputes, and sensitive personal matters by turning legal complexity into a clear path forward.",
    "why.eyebrow": "About Orka Legal",
    "why.title": "A measured, professional standard for every matter.",
    "why.subtitle": "Because clients need judgment they can rely on when the stakes are real.",
    "why.body": "Our work is grounded in careful analysis, direct communication, and disciplined execution. Whether we are advising on a business transaction, a regulatory question, or a dispute, we focus on protecting your position while keeping the process practical and clear.",
    "integrity.eyebrow": "Professional Integrity",
    "integrity.title": "Credibility is earned through consistency, ethics, and preparation.",
    "integrity.body": "At Orka Legal, trust does not come from unnecessary theatrics. It comes from doing careful legal work, protecting confidentiality, and giving clients advice they can act on with confidence. Our practice is designed to be rigorous, discreet, and steady from first consultation through resolution.",
    "services.eyebrow": "Practice Areas",
    "services.title": "Legal services for businesses, founders, and private clients.",
    "services.subtitle": "Our services are designed to support both ongoing business needs and critical legal decisions.",
    "cta.eyebrow": "Contact",
    "cta.title": "Let’s Discuss Your Legal Needs",
    "cta.body": "Whether you require ongoing legal support or assistance with a specific matter, we are here to help.",
    "cta.primary": "Consult via WhatsApp",
    "cta.secondary": "Contact Us",
    "footer.about": "Discreet, practical legal counsel for business and personal matters requiring care, clarity, and professional discipline.",
    "footer.addressTitle": "Office",
    "footer.address": "Bintaro, Tangerang Selatan 15229",
    "footer.contactTitle": "Contact",
    "footer.tagline": "Trusted legal solutions with integrity.",
    "modal.eyebrow": "Practice Area",
    "modal.cta": "Consult via WhatsApp"
  },
  id: {
    "nav.home": "Beranda",
    "nav.practice": "Bidang Layanan",
    "nav.about": "Tentang",
    "nav.credentials": "Kredensial",
    "nav.approach": "Pendekatan",
    "nav.contactMenu": "Kontak",
    "nav.contact": "Hubungi Kami",
    "hero.eyebrow": "Konsultan Hukum Independen",
    "hero.title": "Kekuatan dalam hukum. Kepercayaan dalam integritas.",
    "hero.subtitle": "Pendampingan hukum strategis untuk bisnis dan individu dalam urusan korporasi, regulasi, dan sengketa.",
    "hero.primary": "Konsultasi via WhatsApp",
    "hero.secondary": "Lihat Bidang Layanan",
    "hero.trust": "Respons dalam 24 jam • Konsultasi bersifat rahasia",
    "hero.cardLabel": "Pendampingan Strategis",
    "hero.cardTitle": "Dirancang untuk keputusan yang membutuhkan penilaian dan eksekusi yang matang.",
    "hero.cardBody": "Kami membantu klien bergerak dengan percaya diri dalam transaksi, kepatuhan, sengketa, dan urusan pribadi yang sensitif dengan mengubah kompleksitas hukum menjadi langkah yang jelas.",
    "why.eyebrow": "Tentang Orka Legal",
    "why.title": "Standar profesional yang tenang dan terukur untuk setiap perkara.",
    "why.subtitle": "Karena klien membutuhkan pertimbangan hukum yang dapat diandalkan saat risikonya nyata.",
    "why.body": "Pekerjaan kami berangkat dari analisis yang cermat, komunikasi yang langsung, dan pelaksanaan yang disiplin. Baik untuk transaksi bisnis, persoalan regulasi, maupun sengketa, fokus kami adalah menjaga posisi Anda sambil membuat proses tetap praktis dan jelas.",
    "integrity.eyebrow": "Integritas Profesional",
    "integrity.title": "Kredibilitas dibangun melalui konsistensi, etika, dan persiapan.",
    "integrity.body": "Di Orka Legal, kepercayaan tidak dibangun lewat gaya yang berlebihan. Kepercayaan lahir dari pekerjaan hukum yang teliti, perlindungan kerahasiaan, dan nasihat yang benar-benar bisa dijalankan klien dengan yakin. Praktik kami dirancang agar ketat, rapi, dan stabil dari konsultasi awal hingga penyelesaian.",
    "services.eyebrow": "Bidang Layanan",
    "services.title": "Layanan hukum untuk bisnis, pendiri usaha, dan klien privat.",
    "services.subtitle": "Layanan kami dirancang untuk mendukung kebutuhan bisnis yang berkelanjutan maupun keputusan hukum yang krusial.",
    "cta.eyebrow": "Kontak",
    "cta.title": "Mari Diskusikan Kebutuhan Hukum Anda",
    "cta.body": "Baik Anda membutuhkan dukungan hukum berkelanjutan maupun bantuan untuk perkara tertentu, kami siap membantu.",
    "cta.primary": "Konsultasi via WhatsApp",
    "cta.secondary": "Hubungi Kami",
    "footer.about": "Pendampingan hukum yang rapi dan praktis untuk urusan bisnis maupun personal yang membutuhkan ketelitian, kejelasan, dan disiplin profesional.",
    "footer.addressTitle": "Kantor",
    "footer.address": "Bintaro, Tangerang Selatan 15229",
    "footer.contactTitle": "Kontak",
    "footer.tagline": "Solusi hukum tepercaya dengan integritas.",
    "modal.eyebrow": "Bidang Layanan",
    "modal.cta": "Konsultasi via WhatsApp"
  }
};

let currentLang = "en";

const servicesGrid = document.getElementById("services-grid");
const modal = document.getElementById("service-modal");
const modalTitle = document.getElementById("modal-title");
const modalList = document.getElementById("modal-list");
const modalClose = document.getElementById("modal-close");
const langToggle = document.getElementById("lang-toggle");
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const instagramLink = document.getElementById("instagram-link");
const contactLinks = [
  document.getElementById("contact-cta"),
  document.getElementById("hero-consult"),
  document.getElementById("mobile-contact"),
  document.getElementById("modal-contact"),
  document.getElementById("bottom-consult"),
  document.getElementById("floating-whatsapp")
];

function whatsappLink(message) {
  return `https://wa.me/628118003088?text=${encodeURIComponent(message)}`;
}

function renderServices() {
  const services = SERVICES[currentLang];

  servicesGrid.innerHTML = services
    .map((service, index) => `
      <button class="service-card" type="button" data-service-index="${index}">
        <h3>${service.title}</h3>
        <p>${service.details.slice(0, 3).join(" • ")}</p>
      </button>
    `)
    .join("");

  servicesGrid.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", () => openServiceModal(Number(card.dataset.serviceIndex)));
  });
}

function applyCopy() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (COPY[currentLang][key]) {
      node.textContent = COPY[currentLang][key];
    }
  });

  langToggle.textContent = currentLang === "en" ? "ID" : "EN";

  contactLinks.forEach((link) => {
    if (link) {
      link.href = DEFAULT_WHATSAPP_URL;
    }
  });

  renderServices();
}

function openServiceModal(index) {
  const service = SERVICES[currentLang][index];
  const intro = currentLang === "en"
    ? `Hello Orka Legal,\n\nI would like to request a consultation regarding:\n${service.title}\n\nPlease advise on the next steps and available consultation schedule.`
    : `Halo Orka Legal,\n\nSaya ingin meminta konsultasi mengenai:\n${service.title}\n\nMohon informasikan langkah selanjutnya dan jadwal konsultasi yang tersedia.`;

  modalTitle.textContent = service.title;
  modalList.innerHTML = service.details.map((item) => `<li>${item}</li>`).join("");
  document.getElementById("modal-contact").href = whatsappLink(intro);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeServiceModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openInstagramProfile(event) {
  event.preventDefault();

  const appUrl = "instagram://user?username=orkalegal.id";
  const webUrl = "https://www.instagram.com/orkalegal.id/";
  const start = Date.now();

  window.location.href = appUrl;

  window.setTimeout(() => {
    if (Date.now() - start < 1400) {
      window.location.href = webUrl;
    }
  }, 900);
}

document.querySelectorAll("[data-scroll]").forEach((node) => {
  node.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById(node.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      mobileMenu.classList.remove("open");
    }
  });
});

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "id" : "en";
  applyCopy();
});

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

modalClose.addEventListener("click", closeServiceModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeServiceModal();
  }
});

if (instagramLink) {
  instagramLink.addEventListener("click", openInstagramProfile);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeServiceModal();
  }
});

applyCopy();
