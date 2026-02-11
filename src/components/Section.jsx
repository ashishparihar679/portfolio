import { motion } from "framer-motion";

export default function Section({id,title}){
 return(
  <motion.section
   id={id}
   className="section"
   initial={{opacity:0,y:40}}
   whileInView={{opacity:1,y:0}}
   transition={{duration:.8}}
  >
   <h1 className="gradient">{title}</h1>
  </motion.section>
 )
}
