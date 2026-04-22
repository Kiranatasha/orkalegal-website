import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import Navbar from "../../components/Navbar";
import MotionSection from "../../components/MotionSection";
import { credentialsItems } from "../../lib/site-data";

export const metadata = {
  title: "Credentials | Orka Legal",
};

export default function CredentialsPage() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        <MotionSection className="section page-hero">
          <div className="container page-header">
            <p className="eyebrow">Credentials &amp; Experience</p>
            <h1 className="page-title">Credentials &amp; Experience</h1>
            <p className="page-copy">
              Our background reflects rigorous legal training, practical
              commercial experience, and a team structure built to support
              serious matters with confidence and discipline.
            </p>
          </div>
        </MotionSection>

        <MotionSection className="section section-tight-top">
          <div className="container credentials-grid">
            {credentialsItems.map((item) => (
              <article className="glass-card credential-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </MotionSection>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
