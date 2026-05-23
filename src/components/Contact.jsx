import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

export default function Contact() {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {

    try {

      await axios.post(
        "https://formspree.io/f/mayvlkko",
        data
      );

      toast.success("Message sent successfully!");

      reset();

    } catch (err) {

      toast.error("Something went wrong!");

    }

  };

  return (

    <section
      className="section contact"
      id="contact"
    >

      <div className="contact-bg-blur one"></div>
      <div className="contact-bg-blur two"></div>

      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="contact-badge">
            LET'S CONNECT
          </span>

          <h1 className="gradient contact-title">
            Contact Me
          </h1>

          <p className="contact-text">
            Let’s build modern and impactful digital
            experiences together. Feel free to
            contact me for internships, freelance
            projects, collaborations, or full stack
            development opportunities.
          </p>

          <div className="contact-info-grid">

            <div className="contact-card">
              <span>📧</span>

              <div>
                <h4>Email</h4>

                <a
                  href="mailto:ashishparihar679@gmail.com"
                  className="contact-link"
                >
                  ashishparihar679@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-card">
              <span>📞</span>

              <div>
                <h4>Phone</h4>

                <a
                  href="tel:916268401268"
                  className="contact-link"
                >
                  +91 6268401268
                </a>
              </div>
            </div>

            <div className="contact-card">
              <span>📍</span>

              <div>
                <h4>Location</h4>

                <p>Bhopal, Madhya Pradesh</p>
              </div>
            </div>

          </div>

          {/* SOCIALS */}

          <div className="contact-socials">

            <a
              href="https://github.com/ashishparihar679"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ashish-ahirwar-6268ap0000/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </motion.div>

        {/* RIGHT FORM */}

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
        >

          <h2 className="form-title">
            Send Message
          </h2>

          <input
            {...register("name", {
              required: true
            })}
            type="text"
            placeholder="Your Name"
          />

          <input
            {...register("email", {
              required: true
            })}
            type="email"
            placeholder="Your Email"
          />

          <textarea
            {...register("message", {
              required: true
            })}
            rows="5"
            placeholder="Write your message..."
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: .96 }}
            className="btn-modern send-btn"
            type="submit"
          >
            Send Message →
          </motion.button>

        </motion.form>

      </motion.div>

    </section>
  );
}