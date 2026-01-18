import "../styles/services.css";

const services = [
  {
    title: "Web Development",
    desc: "We build fast, scalable, and maintainable web applications using modern frameworks and clean architecture.",
    points: ["Frontend & Backend", "Scalable APIs", "Clean Code"],
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "UI / UX Design",
    desc: "Design systems and interfaces focused on usability, accessibility, and clear user journeys.",
    points: ["Design Systems", "User Research", "Prototyping"],
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Product Consulting",
    desc: "We help founders and teams define product direction, validate ideas, and plan execution.",
    points: ["Product Strategy", "MVP Planning", "Roadmaps"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Performance & Optimization",
    desc: "Improve speed, accessibility, and scalability of existing applications.",
    points: ["Performance Audits", "Core Web Vitals", "Scalability"],
    img: "https://raw.githubusercontent.com/imdevesh21/Agency_image/main/Op.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-inner">

        <span className="services-label">Services</span>

        <h2 className="services-title">
          What we help teams build
        </h2>

        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-item ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              {/* Image */}
              <div className="service-image">
                <img src={service.img} alt={service.title} />
              </div>

              {/* Content */}
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

