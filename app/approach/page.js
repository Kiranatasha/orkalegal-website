import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import Navbar from "../../components/Navbar";
import MotionSection from "../../components/MotionSection";
import { approachSteps } from "../../lib/site-data";

export const metadata = {
  title: "Approach | Orka Legal",
};

export default function ApproachPage() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        <MotionSection className="section page-hero">
          <div className="container page-header">
            <p className="eyebrow">Our Approach</p>
            <h1 className="page-title">Our Approach</h1>
            <p className="page-copy">
              We work in a calm, structured way that prioritizes clarity,
              sound judgment, and dependable execution from initial
              consultation through ongoing support.
            </p>
          </div>
        </MotionSection>

        <MotionSection className="section section-tight-top">
          <div className="container approach-grid">
            {approachSteps.map((step, index) => (
              <article className="glass-card approach-card" key={step.title}>
                <p className="step-index">{String(index + 1).padStart(2, "0")}</p>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
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
