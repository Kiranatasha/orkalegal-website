import {
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Landmark,
  Scale,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Credentials | Orka Legal",
};

const metrics = [
  {
    icon: GraduationCap,
    title: "TOP 1%",
    body: ["Graduate", "Universitas Indonesia"],
    value: "100%",
  },
  {
    icon: BriefcaseBusiness,
    title: "8+",
    body: ["Years Experience", "(Top-tier Litigation Firms)"],
    value: "100%",
  },
  {
    icon: Landmark,
    title: "Leading",
    body: ["Experience at a Leading", "Indonesian Law Firm"],
    value: "100%",
  },
  {
    icon: Scale,
    title: "Focus",
    body: ["Specialization in Corporate", "and Commercial Law"],
    value: "100%",
  },
];

const teamItems = [
  {
    icon: GraduationCap,
    text: "Top 1% Graduate, Universitas Indonesia",
  },
  {
    icon: BriefcaseBusiness,
    text: "Experience at a leading Indonesian law firm",
  },
  {
    icon: Scale,
    text: "Specialization in corporate and commercial law",
  },
  {
    icon: Users,
    text: "Team includes seasoned lawyers with 8+ years of experience in top-tier litigation firms",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We uphold the highest ethical standards.",
  },
  {
    icon: Target,
    title: "Excellence",
    text: "We pursue the best outcome for our clients.",
  },
  {
    icon: Handshake,
    title: "Commitment",
    text: "We are dedicated to delivering practical legal solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We work closely with clients as trusted partners.",
  },
];

export default function CredentialsPage() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        <section className="credentials-showcase">
          <div className="container">
            <div className="credentials-showcase-grid">
              <div className="credentials-showcase-left">
                <p className="credentials-eyebrow">Our Credentials</p>
                <h1 className="credentials-heading">Credentials &amp; Experience</h1>
                <p className="credentials-lead">
                  Our background reflects rigorous legal training, practical
                  commercial experience, and a team structure built to support
                  serious matters with confidence and discipline.
                </p>

                <div className="credentials-metric-grid">
                  {metrics.map(({ icon: Icon, title, body, value }) => (
                    <article className="credentials-metric-card" key={title}>
                      <Icon className="credentials-card-icon" aria-hidden="true" />
                      <h2>{title}</h2>
                      <p>{body[0]}</p>
                      <p>{body[1]}</p>

                      <div className="credentials-progress">
                        <div
                          className="credentials-progress-fill"
                          style={{ "--credentials-value": value }}
                        />
                      </div>
                      <span className="credentials-progress-value">{value}</span>
                    </article>
                  ))}
                </div>
              </div>

              <div className="credentials-showcase-right">
                <section className="credentials-panel credentials-panel-team">
                  <div className="credentials-panel-head">
                    <Users className="credentials-panel-icon" aria-hidden="true" />
                    <h2>Our Team</h2>
                  </div>
                  <p className="credentials-panel-copy">
                    Our team includes seasoned lawyers with 8+ years of experience
                    in top-tier litigation firms.
                  </p>

                  <div className="credentials-team-list">
                    {teamItems.map(({ icon: Icon, text }) => (
                      <div className="credentials-team-item" key={text}>
                        <span className="credentials-team-icon-wrap">
                          <Icon className="credentials-team-icon" aria-hidden="true" />
                        </span>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="credentials-panel credentials-panel-alma">
                  <div className="credentials-panel-head">
                    <Landmark className="credentials-panel-icon" aria-hidden="true" />
                    <h2>Our Alma Maters</h2>
                  </div>

                  <div className="credentials-logo-grid">
                    <div className="credentials-logo-item">
                      <img src="/logos/ui.png" alt="Universitas Indonesia" />
                      <p>Universitas Indonesia</p>
                    </div>
                    <div className="credentials-logo-item">
                      <img src="/logos/ugm.png" alt="Universitas Gadjah Mada" />
                      <p>Universitas Gadjah Mada (UGM)</p>
                    </div>
                    <div className="credentials-logo-item">
                      <img
                        src="/logos/jentera.png"
                        alt="Sekolah Tinggi Hukum Indonesia Jentera"
                      />
                      <p>Sekolah Tinggi Hukum Indonesia Jentera</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <section className="credentials-values-row">
              {values.map(({ icon: Icon, title, text }) => (
                <article className="credentials-value-item" key={title}>
                  <Icon className="credentials-value-icon" aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
