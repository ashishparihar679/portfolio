import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
 "home","about","skills","projects","education","contact"
];

export default function Navbar(){

 const [open,setOpen] = useState(false);

 return(
  <nav className="nav glass-nav">

   {/* Logo */}

   <h3 className="gradient logo">Ashish.dev</h3>

   {/* Desktop Links */}

   <div className="nav-links desktop">

    {links.map((l,i)=>(
      <motion.a
        key={l}
        href={`#${l}`}
        whileHover={{y:-2}}
        transition={{type:"spring",stiffness:300}}
      >
        {l.toUpperCase()}
        <span></span>
      </motion.a>
    ))}

    <a
     href="/resume.pdf"
     download
     className="resume-btn"
    >
     Resume
    </a>

   </div>


   {/* Hamburger */}

   <div
    className={`hamburger ${open ? "active":""}`}
    onClick={()=>setOpen(!open)}
   >
    <span></span>
    <span></span>
    <span></span>
   </div>


   {/* Mobile Menu */}

   <AnimatePresence>

    {open && (

     <motion.div
      className="mobile-menu"
      initial={{opacity:0,y:-25}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-25}}
      transition={{duration:.3}}
     >

      {links.map(l=>(
       <a
        key={l}
        href={`#${l}`}
        onClick={()=>setOpen(false)}
       >
        {l.toUpperCase()}
       </a>
      ))}

      <a
       href="/resume.pdf"
       download
       className="resume-btn"
      >
       Resume
      </a>

     </motion.div>

    )}

   </AnimatePresence>

  </nav>
 )
}