import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
 "home","about","skills","projects","education","contact"
];

export default function Navbar(){

 const [open,setOpen] = useState(false);

 return(
  <nav className="nav">

   <h3 className="gradient logo">Ashish.dev</h3>

   {/* Desktop Links */}
   <div className="nav-links desktop">
    {links.map(l=>(
     <a key={l} href={`#${l}`}>
      {l.toUpperCase()}
      <span></span>
     </a>
    ))}
    <a href="/resume.pdf" download className="resume-btn">Resume</a>
   </div>

   {/* Hamburger */}
   <div className="hamburger" onClick={()=>setOpen(!open)}>
    <span></span>
    <span></span>
    <span></span>
   </div>

   {/* Mobile Menu */}
   <AnimatePresence>
    {open && (
     <motion.div
      className="mobile-menu"
      initial={{opacity:0,y:-20}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-20}}
     >
      {links.map(l=>(
       <a key={l} href={`#${l}`} onClick={()=>setOpen(false)}>
        {l.toUpperCase()}
       </a>
      ))}
      <a href="/resume.pdf" download className="resume-btn">Resume</a>
     </motion.div>
    )}
   </AnimatePresence>

  </nav>
 )
}
