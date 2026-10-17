import { motion as Motion } from "framer-motion";
import { FiBookOpen, FiAward, FiCode } from "react-icons/fi";

const education = [
  {
    icon: FiCode,
    year: "2022 – 2026",
    degree: "B.Tech in Computer Science Engineering",
    institution: "Technocrats Institute of Technology & Science",
    location: "Bhopal, Madhya Pradesh, India",
    score: "7.4 CGPA",
    scoreNote: "in Btech",
    description: "Final year student · Affiliated to RGPV University",
    subjects: ["DSA", "DBMS", "Operating Systems", "React.js", "Django", "MySQL"],
    featured: true,
  },
  {
    icon: FiBookOpen,
    year: "2022",
    degree: "Higher Secondary (Class 12)",
    institution: "Anand Vihar Model Higher Secondary School",
    location: "Babai, Hoshangabad",
    score: "66%",
    scoreNote: "Science Stream · PCM",
    description: "Higher secondary education",
    subjects: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    icon: FiAward,
    year: "2020",
    degree: "Secondary (Class 10)",
    institution: "Anand Vihar Model Higher Secondary School",
    location: "Babai, Hoshangabad",
    score: "68.75%",
    scoreNote: "Percentage",
    description: "Completed secondary education",
    subjects: ["Mathematics", "Science", "English"],
  },
];

function setCardTilt(event) {
  if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--education-tilt-x", `${-y * 3}deg`);
  event.currentTarget.style.setProperty("--education-tilt-y", `${x * 3}deg`);
}

function resetCardTilt(event) {
  event.currentTarget.style.setProperty("--education-tilt-x", "0deg");
  event.currentTarget.style.setProperty("--education-tilt-y", "0deg");
}

export default function Education() {
  return (
    <section className="section education-modern" id="education" aria-labelledby="education-title">
      <div className="education-heading">
        <Motion.h1
          id="education-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education<span>.</span>
        </Motion.h1>
        <p>My academic journey, from foundational studies to computer science.</p>
      </div>

      <div className="education-timeline" aria-label="Education, most recent first">
        {education.map((item, index) => {
          const Icon = item.icon;
          return (
            <Motion.article
              key={item.degree}
              className={`education-entry${item.featured ? " is-featured" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <div className="education-marker" aria-hidden="true"><span /></div>
              <div
                className="education-card"
                onPointerMove={setCardTilt}
                onPointerLeave={resetCardTilt}
                onPointerCancel={resetCardTilt}
              >
                <header className="education-card-header">
                  <span className="education-icon" aria-hidden="true"><Icon /></span>
                  <span className="education-year">{item.year}</span>
                </header>
                <h2>{item.degree}</h2>
                <h3>{item.institution}</h3>
                <p className="education-location">{item.location}</p>
                <p className="education-description">{item.description}</p>
                <div className="education-score" aria-label={`${item.score}, ${item.scoreNote}`}>
                  <strong>{item.score}</strong>
                  <span>{item.scoreNote}</span>
                </div>
                <ul className="education-subjects" aria-label="Subjects and coursework">
                  {item.subjects.map((subject) => <li key={subject}>{subject}</li>)}
                </ul>
              </div>
            </Motion.article>
          );
        })}
      </div>
    </section>
  );
}
