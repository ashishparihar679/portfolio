import { motion as Motion } from "framer-motion";
import img from "../assets/ashish-office-headshot.png";

const facts = [
  { label: "Study", value: "B.Tech · Computer Science" },
  { label: "Build with", value: "React · Python · Django" },
  { label: "Currently seeking", value: "Software development opportunities" },
];

export default function About() {
  return (
    <section className="section about-premium" id="about" aria-labelledby="about-title">
      <div className="about-editorial">
        <Motion.div
          className="about-portrait-frame"
          initial={{ opacity: 0, rotateY: 12, y: 20 }}
          whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <img src={img} alt="Ashish Ahirwar, full stack developer" loading="lazy" />
          <span className="about-portrait-note">Curiosity → code → product</span>
        </Motion.div>

        <div className="about-copy">
          <p className="section-kicker">A LITTLE ABOUT ME</p>
          <Motion.h2
            id="about-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-heading"
          >
            I like making the <em>complex</em> feel simple.
          </Motion.h2>
          <p>
            I’m a Computer Science Engineering student focused on full-stack development. I build responsive web applications with React, Python, Django, Django REST Framework and MySQL, paying attention to clear interfaces, reliable APIs and useful details.
          </p>
          <p>
            Outside product work, I practice Data Structures and Algorithms in C++. I’ve solved 100+ problems and completed the IBM Full Stack Software Developer certificate. I’m looking for software development opportunities where I can keep learning and contribute to real products.
          </p>

          <div className="about-facts">
            {facts.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
