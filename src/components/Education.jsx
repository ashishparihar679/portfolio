import { motion } from "framer-motion";

const education = [
  {
    icon: "🎓",
    year: "2022 – 2026",
    degree: "B.Tech in Computer Science",
    inst: "Technocrats Institute of Technology & Science, Bhopal",
    desc: "Final Year Student – RGPV University"
  },
  {
    icon: "📘",
    year: "2022",
    degree: "Higher Secondary (12th)",
    inst: "MP Board",
    desc: "Science Stream (PCM)"
  },
  {
    icon: "📗",
    year: "2020",
    degree: "Secondary (10th)",
    inst: "MP Board",
    desc: "Completed Schooling"
  }
];

export default function Education(){
 return(
  <section className="section education-modern" id="education">

    <motion.h1
 className="gradient"
 initial={{ opacity:0, y:20 }}
 whileInView={{ opacity:1, y:0 }}
 viewport={{ once:true }}
>
 Education
</motion.h1>
<div className="edu-wrapper">

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
     transition={{ delay: i * 0.2 }}
     viewport={{ once:true }}
    >
      <motion.div
        className="edu-card-modern"
        whileHover={{ y: -10, scale: 1.03 }}
      >
        <div className="edu-head">
          <span className="edu-icon">{e.icon}</span>
          <span className="edu-year">{e.year}</span>
        </div>

        <h3>{e.degree}</h3>
        <h4>{e.inst}</h4>
        <p>{e.desc}</p>
      </motion.div>
    </motion.div>
  ))}

</div>


  </section>
 )
}
