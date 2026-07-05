import AgencyNavbar from "../component/AgencyNavbar";
import "../styles/pricing.css";

export default function Pricing() {
  return (
    <>
      <AgencyNavbar />

      <section className="pricing">
        <div className="pricing-inner">

          <span className="pricing-label">Pricing</span>

          <h1 className="pricing-title">
            Flexible pricing for different needs
          </h1>

          <p className="pricing-desc">
            Choose a model that fits your project stage and working style.
          </p>

          <div className="pricing-grid">

            {/* HOURLY */}
            <div className="pricing-card">
              <h3>Hourly</h3>
              <p className="price">$8 <span>/ hour</span></p>

              <span className="pricing-tag">Best for</span>
              <p className="pricing-text">
                Small tasks, quick fixes, and ongoing development support.
              </p>

              <ul>
                <li>Flexible engagement</li>
                <li>No long-term commitment</li>
                <li>Frontend & Backend work</li>
                <li>Bug fixes & improvements</li>
              </ul>

              <a href="/contact" className="pricing-btn">
                Get Started
              </a>
            </div>

            {/* PROJECT */}
            <div className="pricing-card featured">
              <h3>Project Based</h3>
              <p className="price">
                From $12 <span>(based on project complexity)</span>
              </p>

              <span className="pricing-tag">Best for</span>
              <p className="pricing-text">
                Clearly defined projects with a fixed scope and timeline.
              </p>

              <ul>
                <li>Defined timeline & scope</li>
                <li>UI / UX + Development</li>
                <li>Performance optimized</li>
                <li>Production-ready delivery</li>
              </ul>

              <a href="/contact" className="pricing-btn primary">
                Request Quote
              </a>
            </div>

            {/* CONSULTING */}
            <div className="pricing-card">
              <h3>Consulting</h3>
              <p className="price">$5 <span>/ hour</span></p>

              <span className="pricing-tag">Best for</span>
              <p className="pricing-text">
                Strategy, audits, and technical decision-making.
              </p>

              <ul>
                <li>Product strategy</li>
                <li>Architecture review</li>
                <li>Codebase audit</li>
                <li>MVP planning</li>
              </ul>

              <a href="/contact" className="pricing-btn primary">
                Request Quote
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
