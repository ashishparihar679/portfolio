import { motion } from "framer-motion";

const education = [
  {
    icon: "🎓",
    year: "2022 – 2026",
    degree: "B.Tech in Computer Science Engineering",
    inst:
      "Technocrats Institute of Technology & Science, Bhopal",
    score: "CGPA: 7.9 (Till 7th Semester)",
    desc:
      "Final Year Student • Affiliated to RGPV University",
    subjects: [
      "DSA",
      "DBMS",
      "Operating Systems",
      "React.js",
      "Django",
      "MySQL",
    ],
  },

  {
    icon: "📘",
    year: "2022",
    degree: "Higher Secondary (12th)",
    inst:
      "Anand Vihar Model Higher Secondary School, Babai Hoshangabad",
    score: "Percentage: 66%",
    desc: "Science Stream (PCM)",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
    ],
  },

  {
    icon: "📗",
    year: "2020",
    degree: "Secondary (10th)",
    inst:
      "Anand Vihar Model Higher Secondary School, Babai Hoshangabad",
    score: "Percentage: 68.75%",
    desc: "Completed Secondary Education",
    subjects: [
      "Mathematics",
      "Science",
      "English",
    ],
  },
];

export default function Education() {

  return (

    <section
      className="section education-modern"
      id="education"
    >

      <motion.h1
        className="gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h1>

      <div className="edu-wrapper">

        {/* Glow Line */}

        <motion.div
          className="edu-line-glow"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "top" }}
        />

        {education.map((e, i) => (

          <motion.div
            key={i}
            className="edu-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >

            <motion.div
              className="edu-card-modern"
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >

              {/* Header */}

              <div className="edu-head">

                <div className="edu-left">

                  <span className="edu-icon">
                    {e.icon}
                  </span>

                  <div>
                    <h3>{e.degree}</h3>
                    <h4>{e.inst}</h4>
                  </div>

                </div>

                <span className="edu-year">
                  {e.year}
                </span>

              </div>

              {/* Description */}

              <p className="edu-desc">
                {e.desc}
              </p>

              {/* Score */}

              <div className="edu-score">
                {e.score}
              </div>

              {/* Subjects */}

              <div className="edu-subjects">

                {e.subjects.map((s, idx) => (
                  <span key={idx}>
                    {s}
                  </span>
                ))}

              </div>

            </motion.div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}