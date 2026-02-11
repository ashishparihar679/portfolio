import { motion } from "framer-motion";
import img from "../assets/profile.jpg";

export default function About(){

 return(
  <section className="section about-premium" id="about">

   <motion.div
     className="about-top"
     initial={{opacity:0,y:40}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:.8}}
   >
<motion.img
  src={img}
  className="about-avatar"
  whileHover={{
    rotateX: 10,
    rotateY: -10,
    scale: 1.05
  }}
  transition={{ type: "spring", stiffness: 200, damping: 12 }}
/>


    <h1 className="about-name gradient">Ashish Ahirwar</h1>
    <p className="about-role">Full Stack Developer</p>

    <p className="about-desc">
      I build scalable modern applications using React, Django and MySQL with
      focus on clean UI and performance.
    </p>

    <div className="about-cards">

      <div className="about-mini glass-hover">
        <h3>Fresher</h3>
        <span>Experience</span>
      </div>

      <div className="about-mini glass-hover">
        <h3>Full Stack</h3>
        <span>Speciality</span>
      </div>

      <div className="about-mini glass-hover">
        <h3>UI + API</h3>
        <span>Focus</span>
      </div>

    </div>

   </motion.div>

   {/* ABOUT TEXT */}

   <motion.div
     className="about-bottom"
     initial={{opacity:0}}
     whileInView={{opacity:1}}
   >

    <h2>About Me</h2>

    <p>
      Final year B.Tech CSE student passionate about building fast, responsive
      web apps. Skilled in React, Django REST, MySQL and modern tooling.
    </p>

    <p>
      Solved 100+ DSA problems and completed IBM Full Stack certification.
    </p>

   </motion.div>
   {/* SLIDING SKILLS INSIDE ABOUT */}

<div className="skills-slider">
  <div className="skills-track">
    <span>⚛️ React</span>
    <span>🐍 Python</span>
    <span>🌐 Django</span>
    <span>🗄️ MySQL</span>
    <span>📦 Git</span>
    <span>🚀 REST API</span>

    {/* duplicate for infinite loop */}
    <span>⚛️ React</span>
    <span>🐍 Python</span>
    <span>🌐 Django</span>
    <span>🗄️ MySQL</span>
    <span>📦 Git</span>
    <span>🚀 REST API</span>
  </div>
</div>


  </section>
 )
}
