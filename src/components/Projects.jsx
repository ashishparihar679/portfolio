import { motion as Motion, useReducedMotion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    number: "01",
    kind: "FULL STACK · HOME SERVICES",
    title: "Smart Home Service Platform",
    tech: ["React.js", "Django", "MySQL", "JWT"],
    github: "https://github.com/ashishparihar679/smarthome",
    demo: "https://homeservice-ecru.vercel.app/",
    video: "https://res.cloudinary.com/diqthlga3/video/upload/v1764539095/Screen_Recording_2025-01-19_180651_s74qfz.mp4",
    desc: "Premium home service booking platform with authentication and service management system.",
    points: ["Service booking functionality", "JWT authentication system", "Responsive React frontend", "REST API integration", "Django + MySQL backend", "Live deployed project"],
    preview: "services",
  },
  {
    number: "02",
    kind: "FULL STACK · EDUCATION",
    title: "Education Website – Full Stack",
    tech: ["React.js", "Django", "MySQL"],
    github: "https://github.com/ashishparihar679/eduction",
    desc: "Modern full-stack education platform with interactive frontend and backend APIs.",
    points: ["Reusable React components", "Responsive UI/UX", "CRUD operations", "REST APIs with Django", "MySQL database management"],
    preview: "education",
  },
  {
    number: "03",
    kind: "FRONTEND · DASHBOARD",
    title: "React CRUD Dashboard",
    tech: ["React.js", "JavaScript"],
    github: "https://github.com/ashishparihar679/react-crud-dashboard",
    desc: "Interactive dashboard application using React functional components and CRUD operations.",
    points: ["Create / Update / Delete", "Component architecture", "Responsive layout", "Modern UI design"],
    preview: "dashboard",
  },
  {
    number: "04",
    kind: "HACKATHON · AI PRODUCT",
    title: "AI Powered Career Boost Hackathon",
    tech: ["React.js", "Django", "MySQL", "AI Integration"],
    github: "https://github.com/AjayGour09/Navkalpana-RICR-NK-0030",
    demo: "https://flux-as.netlify.app/",
    desc: "AI-powered career guidance platform developed during Navkalpana Hackathon as a collaborative group project.",
    points: ["AI Resume Analysis & Skill Extraction", "Resume vs Job Role Matching Score", "AI Skill Gap Detection System", "Personalized Quiz & Assignment Generator", "AI Mock Interview Engine", "Performance Tracking Dashboard", "React + Django Full Stack Architecture", "Team-based Hackathon Project"],
    preview: "career",
  },
];

function ProjectPreview({ type, title }) {
  return (
    <div className={`project-preview preview-${type}`}>
      <div className="mock-browser-bar"><span /><span /><span /><b>{type === "services" ? "service studio" : type === "education" ? "learnspace" : type === "dashboard" ? "workspace" : "career compass"}</b></div>
      <div className="mock-app" role="img" aria-label={`${title} illustrative interface concept, not a product screenshot`}>
        <aside className="mock-sidebar"><i /><i /><i /><i /></aside>
        <div className="mock-content">
          {type === "services" && <><small>FIND THE RIGHT HELP</small><h4>Services, made<br />simple.</h4><div className="mock-service-grid"><i>⌂<small>Home care</small></i><i>✳<small>Cleaning</small></i><i>◉<small>Repairs</small></i></div><button>Explore services ↗</button></>}
          {type === "education" && <><small>YOUR LEARNING SPACE</small><h4>Keep moving<br />forward.</h4><div className="mock-course"><b>01</b><span>Web development<em /></span></div><div className="mock-course"><b>02</b><span>Database systems<em /></span></div><div className="mock-course"><b>03</b><span>Programming basics<em /></span></div></>}
          {type === "dashboard" && <><small>OVERVIEW / RECORDS</small><h4>Good morning.</h4><div className="mock-stats"><i><small>ACTIVE ITEMS</small><b>24</b></i><i><small>UPDATED</small><b>Today</b></i></div><div className="mock-chart"><span /><span /><span /><span /><span /><span /><span /></div><div className="mock-table"><i /><i /><i /></div></>}
          {type === "career" && <><small>CAREER COMPASS</small><h4>Make your next<br />move count.</h4><div className="mock-score"><b>AI</b><span>Resume insights<em>Skills · roles · growth</em></span><strong>↗</strong></div><div className="mock-career-tags"><i>Skill match</i><i>Mock interview</i></div></>}
        </div>
      </div>
      <span className="preview-disclaimer">Illustrative UI concept · not a product screenshot</span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const reduceMotion = useReducedMotion();
  return (
    <Motion.article
      className={`project-case project-case-${index + 1}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
    >
      <Tilt
        className="project-tilt"
        tiltMaxAngleX={4}
        tiltMaxAngleY={5}
        perspective={1100}
        scale={1.015}
        transitionSpeed={900}
        glareEnable={false}
        gyroscope={false}
        tiltEnable={!reduceMotion}
      >
        <ProjectPreview type={project.preview} title={project.title} />
      </Tilt>

      <div className="project-case-info">
        <div className="project-meta"><span>{project.kind}</span><span>{project.number} / 04</span></div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.desc}</p>
        <ul className="project-points">
          {project.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <div className="project-bottom-row">
          <div className="project-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`}>GitHub ↗</a>
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>Live ↗</a>}
            {project.video && <a href={project.video} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${project.title} screen recording`}>Video ↗</a>}
          </div>
        </div>
      </div>
    </Motion.article>
  );
}

export default function Projects() {
  return (
    <section className="projects-section section" id="projects" aria-labelledby="projects-title">
      <div className="section-heading-row projects-heading-row">
        <div>
          <p className="section-kicker">SELECTED WORK · 2025—26</p>
          <Motion.h2 id="projects-title" className="projects-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Built to be <span>useful.</span>
          </Motion.h2>
        </div>
        <p className="section-intro">A selection of full-stack applications, interfaces and collaborative builds.</p>
      </div>
      <div className="project-case-grid">
        {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
      </div>
    </section>
  );
}
