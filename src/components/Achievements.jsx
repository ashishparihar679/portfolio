import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import cert from "../assets/certificate.jpg";

const data = [
  {
    icon: "💻",
    title: "DSA Practice",
    value: 100,
    suffix: "+",
    desc: "Solved 100+ DSA problems using C++ (LeetCode + practice).",
  },

  {
    icon: "🧩",
    title: "Full Stack Projects",
    value: 5,
    suffix: "+",
    desc: "React + Django projects with REST APIs and MySQL.",
  },

  {
    icon: "⭐",
    title: "HackerRank",
    value: 3,
    suffix: "★",
    desc: "3-Star rating in C++ on HackerRank.",
  },

  {
    icon: "🎓",
    title: "IBM Certificate",
    value: null,
    suffix: "",
    desc: "IBM Full Stack Software Developer (Coursera).",
  },

  {
    icon: "🚀",
    title: "AI Powered Career Boost Hackathon",
    value: null,
    suffix: "",
    desc:
      "Participated in Navkalpana AI Powered Career Boost Hackathon and developed an AI-based career guidance platform as a group project.",

    live: "https://lnkd.in/d32HjzHU",

    github:
      "https://github.com/AjayGour09/Navkalpana-RICR-NK-0030",
  },
];

function Counter({ to, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!to) return;

    let start = 0;

    const step = Math.ceil(to / 40);

    const timer = setInterval(() => {
      start += step;

      if (start >= to) {
        start = to;
        clearInterval(timer);
      }

      setCount(start);
    }, 25);

    return () => clearInterval(timer);
  }, [to]);

  return (
    <span className="counter">
      {to ? count : ""}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const previousFocus = document.activeElement;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      previousFocus?.focus?.();
    };
  }, [open]);

  return (
    <section
      className="section achievements-section"
      id="achievements"
    >
      <Motion.h1
        className="gradient"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Achievements
      </Motion.h1>

      {/* Timeline */}

      <div className="timeline">

        {data.map((a, i) => (

          <Motion.article
            key={i}
            className="timeline-item glass-hover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -4 }}
          >

            <div className="timeline-icon">
              {a.icon}
            </div>

            <div className="timeline-content">

              <h3>
                {a.title}{" "}

                {a.value && (
                  <Counter
                    to={a.value}
                    suffix={a.suffix}
                  />
                )}

              </h3>
              <p>{a.desc}</p>

              {/* Hackathon Buttons */}

             


              {/* Certificate */}

              {a.title === "IBM Certificate" && (
                <button type="button" className="view-cert-action" onClick={() => setOpen(true)}>
                  View certificate ↗
                </button>
              )}

              {(a.live || a.github) && (
                <div className="timeline-links">
                  {a.live && <a href={a.live} target="_blank" rel="noopener noreferrer">Live project ↗</a>}
                  {a.github && <a href={a.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                </div>
              )}

            </div>

          </Motion.article>

        ))}

      </div>

      {/* Certificate Modal */}

      <AnimatePresence>

        {open && (

          <Motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >

            <Motion.div
              className="modal-box"
              role="dialog"
              aria-modal="true"
              aria-label="IBM Full Stack Software Developer certificate"
              tabIndex={-1}
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={cert}
                alt="IBM Full Stack Software Developer certificate"
                className="cert-img"
              />

              <button
                className="btn-modern"
                autoFocus
                type="button"
                onClick={() => setOpen(false)}
              >
                Close
              </button>

            </Motion.div>

          </Motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}
