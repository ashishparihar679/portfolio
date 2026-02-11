import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cert from "../assets/certificate.jpg"; // apni certificate image yahan rakho

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
    const t = setInterval(() => {
      start += step;
      if (start >= to) {
        start = to;
        clearInterval(t);
      }
      setCount(start);
    }, 30);
    return () => clearInterval(t);
  }, [to]);

  return (
    <span>
      {to ? count : ""}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section" id="achievements">
      <motion.h1
        className="gradient"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Achievements
      </motion.h1>

      {/* Timeline */}
      <div className="timeline">
        {data.map((a, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => a.title === "IBM Certificate" && setOpen(true)}
          >
            <div className="timeline-icon">{a.icon}</div>

            <div className="timeline-content">
              <h3>
                {a.title}{" "}
                {a.value && <Counter to={a.value} suffix={a.suffix} />}
              </h3>
              <p>{a.desc}</p>
              {a.title === "IBM Certificate" && (
                <small style={{ opacity: 0.6 }}>
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
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={cert}
                alt="certificate"
                style={{ width: "100%", borderRadius: 12 }}
              />
              <button className="btn" onClick={() => setOpen(false)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
