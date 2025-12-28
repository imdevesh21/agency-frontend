import { useEffect, useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <div className="logo">
          dev<span>.</span>io
        </div>

        <div className="nav-actions">
          <span className="badge">Coming Soon</span>

          <button
            className="theme-toggle"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

      </div>
    </nav>
  );
}

