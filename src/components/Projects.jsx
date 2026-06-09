import { motion } from "framer-motion";
import { useRef } from "react";
// import "./Projects.css";

const projects = [

 {
  title: "Smart Home Service Platform",
  tech: ["React.js", "Django", "MySQL"],
  github: "https://github.com/ashishparihar679/smarthome",
  demo: "https://homeservice-ecru.vercel.app/login",
  video:
   "https://res.cloudinary.com/diqthlga3/video/upload/v1764539095/Screen_Recording_2025-01-19_180651_s74qfz.mp4",
  desc:
   "Premium home service booking platform with authentication and service management system.",
  points: [
   "Service booking functionality",
   "JWT authentication system",
   "Responsive React frontend",
   "REST API integration",
   "Django + MySQL backend",
   "Live deployed project"
  ]
 },

 {
  title: "Education Website – Full Stack",
  tech: ["React.js", "Django", "MySQL"],
  github: "https://github.com/ashishparihar679/eduction",
  demo: "",
  video:
   "https://res.cloudinary.com/diqthlga3/video/upload/v1764539095/Screen_Recording_2025-01-19_180651_s74qfz.mp4",
  desc:
   "Modern full-stack education platform with interactive frontend and backend APIs.",
  points: [
   "Reusable React components",
   "Responsive UI/UX",
   "CRUD operations",
   "REST APIs with Django",
   "MySQL database management"
  ]
 },

 {
  title: "React CRUD Dashboard",
  tech: ["React.js", "JavaScript"],
  github: "https://github.com/ashishparihar679/react-crud-dashboard",
  demo: "",
  video:
   "https://res.cloudinary.com/diqthlga3/video/upload/v1764539095/Screen_Recording_2025-01-19_180651_s74qfz.mp4",
  desc:
   "Interactive dashboard application using React functional components and CRUD operations.",
  points: [
   "Create / Update / Delete",
   "Component architecture",
   "Responsive layout",
   "Modern UI design"
  ]
 },
 {
  title: "AI Powered Career Boost Hackathon",
  
  tech: [
    "React.js",
    "Django",
    "MySQL",
    "AI Integration"
  ],

  github:
    "https://github.com/AjayGour09/Navkalpana-RICR-NK-0030",

  demo:
    "https://flux-as.netlify.app/",

  video:
    "https://res.cloudinary.com/diqthlga3/video/upload/v1764539095/Screen_Recording_2025-01-19_180651_s74qfz.mp4",

  desc:
    "AI-powered career guidance platform developed during Navkalpana Hackathon as a collaborative group project.",

  points: [
    "AI Resume Analysis & Skill Extraction",
    "Resume vs Job Role Matching Score",
    "AI Skill Gap Detection System",
    "Personalized Quiz & Assignment Generator",
    "AI Mock Interview Engine",
    "Performance Tracking Dashboard",
    "React + Django Full Stack Architecture",
    "Team-based Hackathon Project"
  ]
},

];

function ProjectCard({ project, index }) {

 const videoRef = useRef(null);

 const playVideo = () => {
  videoRef.current?.play();
 };

 const stopVideo = () => {
  if(videoRef.current){
   videoRef.current.pause();
   videoRef.current.currentTime = 0;
  }
 };

 return(

  <motion.div
   className="premium-project-card"
   initial={{ opacity:0, y:40 }}
   whileInView={{ opacity:1, y:0 }}
   viewport={{ once:true }}
   transition={{ duration:0.5, delay:index * 0.15 }}
   whileHover={{ y:-8 }}
  >

   {/* VIDEO */}

   <div
    className="premium-video-box"
    onMouseEnter={playVideo}
    onMouseLeave={stopVideo}
   >

    <video
     ref={videoRef}
     src={project.video}
     muted
     loop
     playsInline
     preload="none"
    />

    <div className="premium-video-overlay">
     Previeww Project
    </div>

   </div>

   {/* TITLE */}

   <h2 className="premium-project-title">
    {project.title}
   </h2>

   {/* TECH STACK */}

   <div className="premium-tech-stack">

    {project.tech.map((tech, i)=>(
     <span key={i}>{tech}</span>
    ))}

   </div>

   {/* DESCRIPTION */}

   <p className="premium-project-desc">
    {project.desc}
   </p>

   {/* POINTS */}

   <ul className="premium-points-list">

    {project.points.map((point, i)=>(
     <li key={i}>✔ {point}</li>
    ))}

   </ul>

   {/* BUTTONS */}

   <div className="premium-project-buttons">

    <button
     className="premium-github-btn"
     onClick={() => window.open(project.github, "_blank")}
    >
     GitHub
    </button>

    {project.demo && (

     <button
      className="premium-live-btn"
      onClick={() => window.open(project.demo, "_blank")}
     >
      Live Demo
     </button>

    )}

   </div>

  </motion.div>

 )

}

export default function Projects(){

 return(

  <section
   className="premium-project-section"
   id="projects"
  >

   <motion.h1
    className="premium-project-heading"
    initial={{ opacity:0, y:20 }}
    whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true }}
   >
    Featured Projects
   </motion.h1>

   <div className="premium-project-grid">

    {projects.map((project, index)=>(

     <ProjectCard
      key={index}
      project={project}
      index={index}
     />

    ))}

   </div>

  </section>

 )

}