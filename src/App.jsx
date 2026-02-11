import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./components/styles.css";

import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
 return(
  <div className="app-wrapper">
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
  </div>
 )
}
