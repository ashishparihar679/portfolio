import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

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

export default function App(){

 const [loading,setLoading] = useState(true);

 useEffect(()=>{
   AOS.init({
     duration:1200,
     once:true
   });

   setTimeout(()=>{
     setLoading(false);
   },1500)

 },[]);

 if(loading){
   return(
     <div className="loader">
        <div className="spinner"></div>
     </div>
   )
 }

 return(

  <motion.div
  className="app-wrapper"
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:1}}
  >

   <ToastContainer position="top-right"/>

   <div className="glass">

    <div className="blob one"></div>
    <div className="blob two"></div>

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

  </motion.div>

 )
}