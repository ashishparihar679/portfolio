import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ibmCert from "../assets/ibm.jpg";
import tataCert from "../assets/tata.jpg";
import deloitteCert from "../assets/deloitte.jpg";
import pythonCert from "../assets/pythonCert.jpg";

const certs = [
  {
    org: "IBM",
    title: "Full Stack Software Developer",
    skills: "React • Django • REST APIs • MySQL",
    img: ibmCert,
  },
  {
    org: "Tata",
    title: "Software / Digital Skills",
    skills: "Frontend • Problem Solving • Git",
    img: tataCert,
  },
  {
    org: "Deloitte",
    title: "Technology / Virtual Internship",
    skills: "Web Dev • APIs • Best Practices",
    img: deloitteCert,
  },
  {
    org: "Python Full Stack",
    title: "Python Full Stack Development",
    skills: "Python • Django • React • MySQL • REST APIs",
    img: pythonCert,
  },
];

export default function Certifications(){

  const [open,setOpen] = useState(null);

  return(
    <section className="section certifications-section" id="certifications">

      <motion.h1
        className="gradient"
        initial={{opacity:0,y:25}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
      >
        Certifications
      </motion.h1>

      <div className="cert-grid">

        {certs.map((c,i)=>(
          <motion.div
            key={i}
            className="cert-card glass-hover"
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{once:true}}
            transition={{ delay:i*0.15 }}
            whileHover={{ scale:1.05, rotateX:4, rotateY:-4 }}
            onClick={()=>setOpen(c)}
          >

            <div className="cert-badge">{c.org}</div>

            <h3>{c.title}</h3>

            <p>{c.skills}</p>

            <span className="cert-view">
              View Certificate →
            </span>

          </motion.div>
        ))}

      </div>


      {/* MODAL */}

      <AnimatePresence>

        {open && (

          <motion.div
            className="modal"
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={()=>setOpen(null)}
          >

            <motion.div
              className="modal-box"
              initial={{scale:0.85,y:40}}
              animate={{scale:1,y:0}}
              exit={{scale:0.85}}
              transition={{type:"spring",stiffness:120}}
              onClick={(e)=>e.stopPropagation()}
            >

              {open.img ? (

                <img
                  src={open.img}
                  alt={open.org}
                  className="cert-img"
                />

              ) : (

                <p className="cert-missing">
                  Add certificate image in /assets
                </p>

              )}

              <button
                className="btn-modern"
                onClick={()=>setOpen(null)}
              >
                Close
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  )
}