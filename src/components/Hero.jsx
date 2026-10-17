import { motion as Motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import Scene3D from "./Scene3D";

const roles = [
 "Full Stack Python Developer",
 "React.js Developer",
 "Python & Django Developer"
];

export default function Hero(){

 const [index,setIndex] = useState(0);
 const reduceMotion = useReducedMotion();

 useEffect(()=>{
  if (reduceMotion) return undefined;
  const t = setInterval(()=>{
   setIndex(i => (i+1)%roles.length);
  },2200);

  return ()=>clearInterval(t);

 },[reduceMotion]);

 return(

  <section className="hero-premium" id="home" aria-labelledby="hero-title">

   {/* LEFT CONTENT */}

   <Motion.div
    className="hero-left"
    initial={reduceMotion ? false : {opacity:0,x:-42}}
    animate={{opacity:1,x:0}}
    transition={{duration:1}}
   >

    <p className="hero-eyebrow"><span className="status-dot" /> FULL STACK DEVELOPER · BENGALURU, INDIA</p>

    <h1 className="hero-name" id="hero-title">
     <span>Ashish</span>
     <span className="hero-surname">Ahirwar<span className="hero-period">.</span></span>
    </h1>


    {/* SLIDING ROLES */}

    <AnimatePresence mode="wait">

     <Motion.div
      key={index}
      className="hero-role2"
      initial={reduceMotion ? false : {y:20,opacity:0}}
      animate={{y:0,opacity:1}}
      exit={{y:-20,opacity:0}}
      transition={{duration:.4}}
     >
      {roles[index]}
     </Motion.div>

    </AnimatePresence>


    <p className="hero-sub">
     I build full-stack web applications with React, Python, Django and REST APIs—combining thoughtful interfaces with reliable backend systems.
    </p>


    {/* BUTTONS */}

    <div className="hero-actions">

     <a className="btn-main" href="#projects">
      Explore My Work <span aria-hidden="true">↗</span>
     </a>
     <a className="btn-outline" href="#contact">Contact Me</a>
     <a className="resume-link" href="/Ashish_Ahirwar_Python.pdf" download>Download résumé ↓</a>

    </div>


    {/* SOCIAL ICONS */}

    <div className="hero-socials">

     <a
      href="https://github.com/ashishparihar679"
      target="_blank"
      rel="noopener noreferrer"
      className="social github"
     >
      <FaGithub/>
     </a>

     <a
      href="https://www.linkedin.com/in/ashish-ahirwar-6268ap0000/"
      target="_blank"
      rel="noopener noreferrer"
      className="social linkedin"
     >
      <FaLinkedin/>
     </a>

     <a
      href="mailto:ashishparihar679@gmail.com"
      className="social mail"
     >
      <FaEnvelope/>
     </a>

    </div>

   </Motion.div>


   {/* RIGHT IMAGE */}

   <div className="hero-right"><Scene3D /></div>

   <a className="scroll-cue" href="#about" aria-label="Scroll to About"><span>SCROLL TO EXPLORE</span><FaArrowDown aria-hidden="true" /></a>

  </section>
 )
}
