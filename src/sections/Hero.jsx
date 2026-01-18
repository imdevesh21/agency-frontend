import { useEffect, useState } from "react";
import "../styles/hero.css";

const slides = [
  {
    title: "Web Development",
    desc: "Modern, scalable websites and applications built with clean architecture and best practices.",
    img: "https://raw.githubusercontent.com/imdevesh21/Agency_image/main/Web.jpg",
  },
  {
    title: "UI / UX Design",
    desc: "User-centered interfaces and design systems focused on clarity and usability.",
    img: "https://raw.githubusercontent.com/imdevesh21/Agency_image/main/Ui.jpg",
  },
  {
    title: "Product Consulting",
    desc: "We help shape ideas into clear strategies and executable product roadmaps.",
    img: "https://raw.githubusercontent.com/imdevesh21/Agency_image/main/Pc.jpg",
  },
  {
    title: "Performance & Optimization",
    desc: "Speed, accessibility, and scalability improvements for production-ready products.",
    img: "https://raw.githubusercontent.com/imdevesh21/Agency_image/main/Op.jpg",
  },
  {
    title: "Interactive & 3D Experiences",
    desc: "Immersive visuals and interactive experiences that elevate your digital presence.",
    img: "https://raw.githubusercontent.com/imdevesh21/Agency_image/main/Arg.jpg",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // 🔁 Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">What We Offer</span>

        {/* IMAGE */}
        <div className="hero-image">
          <img
            src={slides[index].img}
            alt={slides[index].title}
            loading="lazy"
          />
        </div>

        {/* TEXT */}
        <h1 className="hero-title">{slides[index].title}</h1>
        <p className="hero-desc">{slides[index].desc}</p>

        {/* CONTROLS (OPTIONAL) */}
        <div className="hero-controls">
          <button
            onClick={() =>
              setIndex(index === 0 ? slides.length - 1 : index - 1)
            }
          >
            ←
          </button>

          <span>{index + 1} / {slides.length}</span>

          <button
            onClick={() =>
              setIndex((index + 1) % slides.length)
            }
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
