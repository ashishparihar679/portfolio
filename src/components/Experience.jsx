import { motion } from "framer-motion";

const experience = [
  {
    role: "Python Full Stack Developer Intern",
    company: "Cybrom Technology Pvt. Ltd., Bhopal",
    period: "Jan 2026 – Mar 2026",
    points: [
      "Developed and tested REST APIs using Django and Django REST Framework",
      "Built responsive and interactive frontend interfaces using React.js",
      "Performed API testing and debugging using Postman",
      "Optimized backend performance and resolved application issues",
      "Managed MySQL databases for efficient data handling"
    ]
  }
];

export default function Experience() {
  return (
    <section className="section experience-modern" id="experience">

      <motion.h1
        className="gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h1>

      <div className="exp-wrapper">

        {experience.map((e, i) => (
          <motion.div
            key={i}
            className="exp-card glass-hover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: i * .15 }}
            whileHover={{ scale: 1.03, y: -6 }}
          >

            <div className="exp-header">
              <span className="exp-tag">INTERNSHIP</span>
              <span className="exp-period">{e.period}</span>
            </div>

            <h3>{e.role}</h3>

            <small>{e.company}</small>

            <ul className="exp-points">
              {e.points.map((p, idx) => (
                <li key={idx}>• {p}</li>
              ))}
            </ul>

          </motion.div>
        ))}

      </div>

    </section>
  );
}