import { motion } from "framer-motion";

const experience = [
  {
    role: "Full Stack Intern (Self-Driven)",
    company: "Personal Projects",
    period: "2024 – Present",
    points: [
      "Built full-stack applications using React, Django REST Framework and MySQL",
      "Designed responsive UI with reusable React components",
      "Implemented CRUD operations, REST APIs and authentication",
      "Improved problem-solving skills through real-world projects",
      "Used Git & GitHub for version control and project management"
    ]
  }
];

export default function Experience(){
 return(
  <section className="section" id="experience">

    <motion.h1
      className="gradient"
      initial={{ opacity:0, y:20 }}
      whileInView={{ opacity:1, y:0 }}
    >
      Experience
    </motion.h1>

    <div className="exp-wrapper">

      {experience.map((e,i)=>(
        <motion.div
          key={i}
          className="exp-card glass-hover"
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.6, delay:i*.15 }}
          whileHover={{ scale:1.03 }}
        >

          <div className="exp-header">
            <span className="exp-tag">Internship</span>
            <span className="exp-period">{e.period}</span>
          </div>

          <h3>{e.role}</h3>
          <small>{e.company}</small>

          <ul className="exp-points">
            {e.points.map((p,idx)=>(
              <li key={idx}>✔ {p}</li>
            ))}
          </ul>

        </motion.div>
      ))}

    </div>

  </section>
 )
}
