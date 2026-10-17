import { motion as Motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const emailAddress = "ashishparihar679@gmail.com";
const whatsappNumber = "916268401268";

export default function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  const [copied, setCopied] = useState(false);

  const onSubmit = async (data) => {

    try {

      await axios.post(
        "https://formspree.io/f/mayvlkko",
        data
      );

      toast.success("Message sent successfully!");

      reset();

    } catch {

      toast.error("Something went wrong!");

    }

  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Copy wasn’t available. Use the email link instead.");
    }
  };

  const sendOnWhatsApp = () => {
    const { name, email, message } = getValues();
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      toast.error("Please fill in your name, email, and message first.");
      return;
    }

    const text = `Hi Ashish, I'm ${name.trim()} (${email.trim()}).\n\n${message.trim()}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (

    <section
      className="section contact"
      id="contact"
    >

      <div className="contact-bg-blur one"></div>
      <div className="contact-bg-blur two"></div>

      <Motion.div
        className="contact-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}

        <Motion.div
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
                  href={`mailto:${emailAddress}`}
                  className="contact-link"
                >
                  {emailAddress}
                </a>
                <button className="copy-email" type="button" onClick={copyEmail} aria-live="polite">
                  {copied ? "Copied ✓" : "Copy email ↗"}
                </button>
              </div>
            </div>

            <div className="contact-card">
              <span>📞</span>

              <div>
                <h4>Phone</h4>

                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: +91 6268401268 ↗
                </a>
              </div>
            </div>

            <div className="contact-card">
              <span>📍</span>

              <div>
                <h4>Location</h4>

                <p>Bengaluru, Karnataka</p>
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

        </Motion.div>

        {/* RIGHT FORM */}

        <Motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          aria-label="Send Ashish a message"
        >

          <h2 className="form-title">
            Send Message
          </h2>

          <input
            {...register("name", { required: "Please enter your name." })}
            type="text"
            placeholder="Your Name"
            aria-label="Your name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="field-error" role="alert">{errors.name.message}</p>}

          <input
            {...register("email", {
              required: "Please enter your email.",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address." },
            })}
            type="email"
            placeholder="Your Email"
            aria-label="Your email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="field-error" role="alert">{errors.email.message}</p>}

          <textarea
            {...register("message", { required: "Please write a message." })}
            rows="5"
            placeholder="Write your message..."
            aria-label="Your message"
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <p className="field-error" role="alert">{errors.message.message}</p>}

          <Motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: .98 }}
            className="btn-modern send-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Send Message →"}
          </Motion.button>

          <button className="btn-modern send-btn whatsapp-send-btn" type="button" onClick={sendOnWhatsApp}>
            Send via WhatsApp ↗
          </button>

        </Motion.form>

      </Motion.div>

    </section>
  );
}
