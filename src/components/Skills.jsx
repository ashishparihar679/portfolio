import { motion as Motion } from "framer-motion";

const groups = [
  {
    number: "01",
    title: "Frontend",
    description: "Responsive interfaces, reusable components and polished user experiences.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Figma"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Application logic and REST APIs built with Python and Django.",
    skills: ["Python", "Django", "Django REST Framework", "REST APIs"],
  },
  {
    number: "03",
    title: "Data & problem solving",
    description: "Relational data workflows and algorithmic problem solving.",
    skills: ["MySQL", "C++", "Data Structures & Algorithms"],
  },
  {
    number: "04",
    title: "Tools & workflow",
    description: "Tools used to build, test, version and deliver applications.",
    skills: ["Git", "GitHub", "Postman"],
  },
];

export default function Skills() {
  return (
    <section className="skills-section section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">THE TOOLKIT</p>
          <Motion.h2
            id="skills-title"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="skills-title"
          >
            Skills that <span>ship.</span>
          </Motion.h2>
        </div>
        <p className="section-intro">A practical full-stack toolkit—from the first interface to the data behind it.</p>
      </div>

      <div className="skill-groups">
        {groups.map((group, index) => (
          <Motion.article
            key={group.number}
            className={`skill-group skill-group-${index + 1}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -5, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
          >
            <span className="skill-group-number">{group.number}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-tags">
              {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}
