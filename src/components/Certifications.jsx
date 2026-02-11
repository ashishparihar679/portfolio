import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// apni certificate images yahan add kar sakte ho (optional)
import ibmCert from "../assets/ibm.jpg";
import tataCert from "../assets/tata.jpg";
import deloitteCert from "../assets/deloitte.jpg";

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
];

export default function Certifications(){
  const [open,setOpen] = useState(null);

  return(
    <section className="section" id="certifications">

      <motion.h1
        className="gradient"
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
      >
        Certifications
      </motion.h1>

      <div className="grid cert-grid">

        {certs.map((c,i)=>(
          <motion.div
  key={i}
  className="cert-card premium-card glass-hover"
  initial={{ opacity:0, y:30 }}
  whileInView={{ opacity:1, y:0 }}
  transition={{ delay:i*0.12 }}
  whileHover={{ y:-10, rotateX:3, rotateY:-3 }}
  onClick={()=>setOpen(c)}
>
  <div className="cert-badge">{c.org}</div>
  <h3>{c.title}</h3>
  <p>{c.skills}</p>
  <span className="cert-view">View Certificate →</span>
</motion.div>

        ))}

      </div>

      {/* Modal */}
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
              initial={{scale:.85}}
              animate={{scale:1}}
              exit={{scale:.85}}
              onClick={e=>e.stopPropagation()}
            >
              {open.img ? (
                <img src={open.img} alt={open.org} style={{width:"100%",borderRadius:12}}/>
              ) : (
                <p style={{color:"white"}}>Add certificate image in /assets</p>
              )}
              <button className="btn" onClick={()=>setOpen(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
