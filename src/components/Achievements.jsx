import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <section className="section achievements-section" id="achievements">
      <motion.h1
        className="gradient"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.h1>

      {/* Timeline */}

      <div className="timeline">

        {data.map((a, i) => (

          <motion.div
            key={i}
            className="timeline-item glass-hover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.04 }}
            onClick={() =>
              a.title === "IBM Certificate" && setOpen(true)
            }
          >

            <div className="timeline-icon">{a.icon}</div>

            <div className="timeline-content">

              <h3>
                {a.title}{" "}
                {a.value && (
                  <Counter to={a.value} suffix={a.suffix} />
                )}
              </h3>

              <p>{a.desc}</p>

              {a.title === "IBM Certificate" && (
                <small className="view-cert">
                  Click to view certificate
                </small>
              )}

            </div>

          </motion.div>

        ))}

      </div>

      {/* Certificate Modal */}

      <AnimatePresence>

        {open && (

          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >

            <motion.div
              className="modal-box"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={cert}
                alt="certificate"
                className="cert-img"
              />

              <button
                className="btn-modern"
                onClick={() => setOpen(false)}
              >
                Close
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}