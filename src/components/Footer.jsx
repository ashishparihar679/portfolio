import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer(){

 return(

  <footer className="footer">

   <Motion.div
    className="footer-content"
    initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:.6}}
   >

    {/* SOCIAL LINKS */}

    <div className="footer-socials">

     <a
      href="https://github.com/ashishparihar679"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub profile"
     >
      <FaGithub/>
     </a>

     <a
      href="https://www.linkedin.com/in/ashish-ahirwar-6268ap0000/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn profile"
     >
      <FaLinkedin/>
     </a>

    </div>

    {/* COPYRIGHT */}

    <p className="footer-text">
     © {new Date().getFullYear()} Ashish Ahirwar
    </p>

   </Motion.div>

  </footer>

 )
}
