import { useEffect, useState } from "react";
import "../styles/agencyNavbar.css";

export default function AgencyNavbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("dark-theme", theme);
  }, [theme]);

  return (
    <header className="agency-navbar">
      <div className="agency-navbar-inner">
        {/* brand */}
        <div className="brand">
          <div>Dev<span>.</span></div>io
        </div>

        {/* navigation */}
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </nav>

        {/* Actions */}
        <div className="agency-actions">
          <span className="soon-pill">Coming soon</span>
          <button className="theme-btn" onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  )
}
