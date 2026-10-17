import { motion as Motion } from "framer-motion";
import { FiBriefcase, FiHome, FiMapPin } from "react-icons/fi";

const experience = {
  role: "Python Full Stack Developer Intern",
  company: "Cybrom Technology Pvt. Ltd.",
  location: "Bhopal, Madhya Pradesh",
  period: "January 2026 – March 2026",
  points: [
    "Developed and tested REST APIs using Django and Django REST Framework",
    "Built responsive and interactive frontend interfaces using React.js",
    "Performed API testing and debugging using Postman",
    "Optimized backend performance and resolved application issues",
    "Managed MySQL databases for efficient data handling",
  ],
  project: {
    name: "Smart Home Service Platform",
    description: "A home service booking platform with authentication and service management.",
    url: "https://homeservice-ecru.vercel.app/",
  },
};

export default function Experience() {
  return (
    <section className="section experience-modern" id="experience" aria-labelledby="experience-title">
      <div className="experience-heading">
        <Motion.h1
          id="experience-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience<span>.</span>
        </Motion.h1>
        <p>Professional experience and the work I built along the way.</p>
      </div>

      <Motion.article
        className="experience-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55 }}
      >
        <header className="experience-card-header">
          <span className="experience-badge"><FiBriefcase aria-hidden="true" /> Internship</span>
          <span className="experience-period">{experience.period}</span>
        </header>

        <h2>{experience.role}</h2>
        <div className="experience-company-line">
          <strong>{experience.company}</strong>
          <span><FiMapPin aria-hidden="true" /> {experience.location}</span>
        </div>

        <ul className="experience-responsibilities">
          {experience.points.map((point) => <li key={point}>{point}</li>)}
        </ul>

        <div className="experience-project">
          <div className="experience-project-icon" aria-hidden="true"><FiHome /></div>
          <div className="experience-project-copy">
            <span className="experience-project-label">FEATURED PROJECT</span>
            <h3>{experience.project.name}</h3>
            <p>{experience.project.description}</p>
          </div>
          <a
            className="experience-project-link"
            href={experience.project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Smart Home Service Platform live project in a new tab"
          >
            View Live Project ↗
          </a>
        </div>
      </Motion.article>
    </section>
  );
}
