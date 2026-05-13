import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import img from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const roles = [
 "Full Stack Developer",
 "Python Developer",
 "React Developer",
 "Frontend Developer"
];

export default function Hero(){

 const [index,setIndex] = useState(0);

 useEffect(()=>{
  const t = setInterval(()=>{
   setIndex(i => (i+1)%roles.length);
  },2200);

  return ()=>clearInterval(t);

 },[]);

 return(

  <section className="hero-premium" id="home">

   {/* LEFT CONTENT */}

   <motion.div
    className="hero-left"
    initial={{opacity:0,x:-60}}
    animate={{opacity:1,x:0}}
    transition={{duration:1}}
   >

    <h2 className="hello">Hello, I’m</h2>

    <h1 className="hero-name">
     <span>Ashish</span> AHIRWAR
    </h1>


    {/* SLIDING ROLES */}

    <AnimatePresence mode="wait">

     <motion.div
      key={index}
      className="hero-role2"
      initial={{y:20,opacity:0}}
      animate={{y:0,opacity:1}}
      exit={{y:-20,opacity:0}}
      transition={{duration:.4}}
     >
      {roles[index]}
     </motion.div>

    </AnimatePresence>


    <p className="hero-sub">
     I develop real-world web applications using React,
     Django, and REST APIs with a focus on scalability
     and usability.
    </p>


    {/* BUTTONS */}

    <div className="hero-actions">

     <a className="btn-main" href="#projects">
      View My Work
     </a>

     <a
      className="btn-outline"
      href="/resume.pdf"
      download
     >
      My Resume
     </a>

    </div>


    {/* SOCIAL ICONS */}

    <div className="hero-socials">

     <a
      href="https://github.com/ashishparihar679"
      target="_blank"
      rel="noreferrer"
      className="social github"
     >
      <FaGithub/>
     </a>

     <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noreferrer"
      className="social linkedin"
     >
      <FaLinkedin/>
     </a>

     <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className="social instagram"
     >
      <FaInstagram/>
     </a>

     <a
      href="mailto:ashishparihar679@gmail.com"
      className="social mail"
     >
      <FaEnvelope/>
     </a>

    </div>

   </motion.div>


   {/* RIGHT IMAGE */}

   <motion.div
    className="hero-right"
    animate={{y:[0,-20,0]}}
    transition={{repeat:Infinity,duration:5}}
   >

    <img src={img} alt="profile"/>

   </motion.div>

  </section>
 )
}