import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
];

export default function Skills(){

 return(
  <section className="skills-section" id="skills">

    <motion.h2
      initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      className="skills-title"
    >
      My Skills
    </motion.h2>

    <div className="skills-wall">

      {skills.map((skill,i)=>(
        <motion.div
          key={i}
          className="skill-box"
          initial={{opacity:0,scale:.7}}
          whileInView={{opacity:1,scale:1}}
          transition={{delay:i*0.08}}
          whileHover={{scale:1.12}}
        >

          <img src={skill.icon} alt="" />
          <span>{skill.name}</span>

        </motion.div>
      ))}

    </div>

  </section>
 )
}
