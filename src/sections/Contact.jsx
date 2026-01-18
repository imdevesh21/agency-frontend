import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">

        {/* LEFT CONTENT */}
        <div className="contact-info">
          <span className="contact-label">Contact</span>

          <h2 className="contact-title">
            Let’s build something meaningful together.
          </h2>

          <p className="contact-desc">
            Have a project in mind or need help refining an idea?
            Tell us about it and we’ll get back to you.
          </p>

          <p className="contact-email">
            Or email us directly at <br />
            <strong>hello@devio.com</strong>
          </p>
        </div>

        {/* FORM */}
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Tell us about your project..."
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
