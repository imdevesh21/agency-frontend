import { useEffect, useState } from "react";
import "../styles/agencyNavbar.css";

export default function AgencyNavbar() {
  const [theme, setTheme] = useState("dark");

  // ✅ Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // ✅ Apply + persist theme on change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="agency-navbar">
      <div className="agency-navbar-inner">

        {/* Brand */}
        <a href="/" className="brand">
          Dev<span>.</span>io
        </a>
        

        {/* Navigation */}
        <nav className="nav-links">
          <a href="/#about">About</a>
          <a href="/#work">Work</a>
          <a href="/#services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/#blog">Blog</a>
          <a href="/pricing">Pricing</a>
        </nav>
        
        {/* Actions */}
        <div className="agency-actions">
          <button
            className="theme-btn"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </header>
  );
}
