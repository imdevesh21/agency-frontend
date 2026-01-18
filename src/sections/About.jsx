import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">

        <span className="about-label">About Us</span>

        <h2 className="about-title">
          We design, build, and improve digital products.
        </h2>

        <p className="about-desc">
          dev.io is a web design and product consulting agency focused on
          creating scalable, high-quality digital experiences. We work
          closely with founders and teams to turn ideas into reliable,
          production-ready products.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Strategy First</h3>
            <p>
              We start with clarity. Understanding the problem is more
              important than writing code.
            </p>
          </div>

          <div className="about-card">
            <h3>Design with Purpose</h3>
            <p>
              Every interface decision is intentional, focused on usability
              and real user needs.
            </p>
          </div>

          <div className="about-card">
            <h3>Engineering Quality</h3>
            <p>
              Clean architecture, performance, and maintainability are never
              optional.
            </p>
          </div>

          <div className="about-card">
            <h3>Long-Term Thinking</h3>
            <p>
              We build products that can evolve, scale, and stay relevant.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
