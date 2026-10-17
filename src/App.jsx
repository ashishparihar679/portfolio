import { MotionConfig, motion as Motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./components/styles1.css";
import "./components/portfolio.css";

export default function App(){

 return(
  <MotionConfig reducedMotion="user">
  <Motion.div
  className="app-wrapper"
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:1}}
  >

   <ToastContainer position="top-right"/>

   <div className="glass">

    <Navbar/>

    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Education/>
    <Certifications/>
    <Achievements/>
    <Contact/>
    <Footer/>

   </div>

  </Motion.div>
  </MotionConfig>
 )
}
