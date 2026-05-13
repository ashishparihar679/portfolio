import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

export default function Contact() {

 const {register,handleSubmit,reset} = useForm();

 const onSubmit = async(data)=>{

  try{

   await axios.post("https://formspree.io/f/mayvlkko",data);

   toast.success("Message sent successfully!");

   reset();

  }catch(err){

   toast.error("Something went wrong!");

  }

 };

 return(
  <section className="section contact" id="contact">

   <motion.div
    className="contact-wrapper"
    initial={{opacity:0,y:40}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:.8}}
   >

    {/* LEFT INFO */}

    <div>

     <h1 className="gradient">Contact Me</h1>

     <p className="contact-text">
      Let’s build something amazing together.
      Feel free to reach out for projects,
      internships, or collaborations.
     </p>

     <div className="contact-info">

      <p>
       📧 Email:
       <a
        href="mailto:ashishparihar679@gmail.com"
        className="contact-link"
       >
        ashishparihar679@gmail.com
       </a>
      </p>

      <p>
       📞 Phone:
       <a
        href="tel:916268401268"
        className="contact-link"
       >
        916268401268
       </a>
      </p>

      <p>📍 Location: Bhopal, India</p>

      <div className="contact-socials">

       <a
        href="https://github.com/ashishparihar679"
        target="_blank"
       >
        GitHub
       </a>

       <a
        href="https://www.linkedin.com/in/ashish-ahirwar"
        target="_blank"
       >
        LinkedIn
       </a>

      </div>

     </div>

    </div>


    {/* CONTACT FORM */}

    <motion.form
     className="contact-form glass-hover"
     initial={{opacity:0,x:40}}
     whileInView={{opacity:1,x:0}}
     transition={{duration:.8}}
     onSubmit={handleSubmit(onSubmit)}
    >

     <input
      {...register("name",{required:true})}
      type="text"
      placeholder="Your Name"
     />

     <input
      {...register("email",{required:true})}
      type="email"
      placeholder="Your Email"
     />

     <textarea
      {...register("message",{required:true})}
      rows="4"
      placeholder="Your Message"
     />

     <motion.button
      whileHover={{scale:1.05}}
      whileTap={{scale:.95}}
      className="btn-modern"
      type="submit"
     >
      Send Message
     </motion.button>

    </motion.form>

   </motion.div>

  </section>
 )
}