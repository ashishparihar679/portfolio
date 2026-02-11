import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="section contact" id="contact">

      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        {/* LEFT INFO */}
        <div>
          <h1 className="gradient">Contact Me</h1>

          <p className="contact-text">
            Let’s build something amazing together.  
            Feel free to reach out for projects, internships, or collaborations.
          </p>

          <div className="contact-info">
            <p>
              📧 Email:{" "}
              <a href="mailto:ashishparihar679@gmail.com" className="contact-link">
                ashishparihar679@gmail.com
              </a>
            </p>

            <p>
              📞 Phone:{" "}
              <a href="tel:916268401268" className="contact-link">
                916268401268
              </a>
            </p>

            <p>📍 Location: Bhopal, India</p>

            <div className="contact-socials">
              <a href="https://github.com/ashishparihar679" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/ashish-ahirwar-6268ap0000/" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <motion.form
          className="contact-form glass-hover"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          onSubmit={(e)=>e.preventDefault()}
        >

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message"></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            className="btn"
            type="submit"
          >
            Send Message
          </motion.button>

        </motion.form>

      </motion.div>

    </section>
  );
}
