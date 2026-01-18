import "../styles/work.css";

const projects = [
  {
    title: "SaaS Dashboard Platform",
    desc: "A scalable web platform designed for managing analytics and user workflows.",
    role: "Web Development · UI Engineering",
    status: "In Progress",
  },
  {
    title: "Startup Landing Experience",
    desc: "High-conversion landing page focused on clarity, performance, and brand identity.",
    role: "Design · Frontend Development",
    status: "Live",
  },
  {
    title: "Product Strategy Framework",
    desc: "Consulting engagement to define MVP scope, roadmap, and technical direction.",
    role: "Product Consulting",
    status: "Concept",
  },
];

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="work-inner">

        <span className="work-label">Our Work</span>

        <h2 className="work-title">
          Selected projects and collaborations
        </h2>

        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>

              <div className="work-card-header">
                <h3>{project.title}</h3>
                <span className={`status ${project.status.toLowerCase().replace(" ", "-")}`}>
                  {project.status}
                </span>
              </div>

              <p className="work-desc">{project.desc}</p>

              <div className="work-meta">
                <span>{project.role}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
