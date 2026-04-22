import { Briefcase, GraduationCap, Scale } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Credentials | Orka Legal",
};

export default function CredentialsPage() {
  return (
    <>
      <Navbar />
      <main className="site-shell">
        <section className="credentials">
          <div className="container">
            <h2>Credentials &amp; Experience</h2>
            <p className="subtitle">
              Our background reflects rigorous legal training, practical commercial
              experience, and a team structure built to support serious matters with
              confidence and discipline.
            </p>

            <div className="grid">
              <div className="card">
                <div className="metric">
                  <GraduationCap className="credentials-icon" aria-hidden="true" />
                  <div>
                    <h3>Top 1%</h3>
                    <p>Universitas Indonesia Graduate</p>
                  </div>
                </div>
                <div className="bar">
                  <div className="fill" style={{ "--credentials-value": "100%" }} />
                </div>

                <div className="metric">
                  <Briefcase className="credentials-icon" aria-hidden="true" />
                  <div>
                    <h3>8+ Years</h3>
                    <p>Litigation Experience (Team)</p>
                  </div>
                </div>
                <div className="bar">
                  <div className="fill" style={{ "--credentials-value": "85%" }} />
                </div>

                <div className="metric">
                  <Scale className="credentials-icon" aria-hidden="true" />
                  <div>
                    <h3>Corporate Focus</h3>
                    <p>Commercial &amp; Business Law</p>
                  </div>
                </div>
                <div className="bar">
                  <div className="fill" style={{ "--credentials-value": "90%" }} />
                </div>
              </div>

              <div className="details">
                <ul>
                  <li>Experience at a leading Indonesian law firm</li>
                  <li>Specialization in corporate and commercial law</li>
                  <li>Team of seasoned lawyers from top-tier firms</li>
                  <li>Graduates from Universitas Indonesia &amp; UGM</li>
                  <li>Sekolah Tinggi Hukum Indonesia Jentera alumni</li>
                </ul>

                <div className="logos">
                  <img src="/logos/ui.png" alt="UI" />
                  <img src="/logos/ugm.png" alt="UGM" />
                  <img src="/logos/jentera.png" alt="Jentera" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
