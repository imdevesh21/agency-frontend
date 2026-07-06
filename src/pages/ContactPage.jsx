import { useState } from "react";
import AgencyNavbar from "../component/AgencyNavbar";
import "../styles/contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "loading" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <AgencyNavbar />

      <section className="contact">
        <div className="contact-inner">

          <div className="contact-info">
            <span className="contact-label">Contact</span>
            <h2 className="contact-title">
              Let's build something meaningful together.
            </h2>
            <p className="contact-desc">
              Have a project in mind or need help refining an idea?
              Tell us about it and we'll get back to you.
            </p>
            <p className="contact-email">
              Or email us directly at <br />
              <strong>hello@devio.com</strong>
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p style={{ color: "green" }}>Message sent successfully!</p>}
            {status === "error" && <p style={{ color: "red" }}>Something went wrong. Please try again.</p>}
          </form>

        </div>
      </section>
    </>
  );
}
