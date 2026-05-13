import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
 {
  title:"Education Website – Full Stack",
  tech:["React.js","Django","MySQL"],
  github:"https://github.com/ashishparihar679/eduction",
  demo:"",
  video:"https://res.cloudinary.com/diqthlga3/video/upload/v1764539095/Screen_Recording_2025-01-19_180651_s74qfz.mp4",
  desc:"Full-stack education platform with React frontend and Django REST backend.",
  points:[
   "React reusable components",
   "Django REST APIs",
   "MySQL database",
   "CRUD operations",
   "Responsive UI"
  ]
 },

 {
  title:"React CRUD Dashboard",
  tech:["React.js","JavaScript"],
  github:"https://github.com/ashishparihar679/react-crud-dashboard",
  demo:"",
  video:"https://res.cloudinary.com/diqthlga3/video/upload/v1764539095/Screen_Recording_2025-01-19_180651_s74qfz.mp4",
  desc:"Modern CRUD dashboard built using React functional components.",
  points:[
   "Create / Read / Update / Delete",
   "Component-based UI",
   "Responsive layout"
  ]
 }
];

function ProjectCard({p,index}){

 const videoRef = useRef(null);

 const play = ()=>videoRef.current?.play();

 const stop = ()=>{
  if(videoRef.current){
   videoRef.current.pause();
   videoRef.current.currentTime = 0;
  }
 };

 return(

  <motion.div
   className="project-card glass-hover"
   initial={{opacity:0,y:40}}
   whileInView={{opacity:1,y:0}}
   viewport={{once:true}}
   transition={{delay:index*0.15}}
   whileHover={{y:-12,scale:1.02}}
  >

   {/* VIDEO PREVIEW */}

   <div
    className="project-media"
    onMouseEnter={play}
    onMouseLeave={stop}
   >

    <video
     ref={videoRef}
     src={p.video}
     muted
     loop
     playsInline
     preload="none"
    />

    <div className="video-overlay">
     Hover to Preview
    </div>

   </div>

   <h3>{p.title}</h3>

   {/* TECH STACK */}

   <div className="tech-row">

    {p.tech.map((t,i)=>(
     <span key={i}>{t}</span>
    ))}

   </div>

   <p className="project-desc">
    {p.desc}
   </p>

   <ul>

    {p.points.map((pt,i)=>(
     <li key={i}>✔ {pt}</li>
    ))}

   </ul>

   {/* ACTION BUTTONS */}

   <div className="project-actions">

    <a
     href={p.github}
     target="_blank"
     rel="noreferrer"
     className="btn-outline"
    >
     GitHub
    </a>

    {p.demo && (

     <a
      href={p.demo}
      target="_blank"
      rel="noreferrer"
      className="btn-main"
     >
      Live Demo
     </a>

    )}

   </div>

  </motion.div>

 )
}

export default function Projects(){

 return(

  <section className="section projects-section" id="projects">

   <motion.h1
    className="gradient"
    initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
   >
    Projects
   </motion.h1>

   <div className="project-grid">

    {projects.map((p,i)=>(
     <ProjectCard
      key={i}
      p={p}
      index={i}
     />
    ))}

   </div>

  </section>

 )
}