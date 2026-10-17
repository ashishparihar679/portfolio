import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiAward, FiCode, FiLayers, FiBookOpen, FiZap } from "react-icons/fi";
import cert from "../assets/certificate.jpg";

const data = [
  {
    icon: FiCode,
    title: "DSA Practice",
    value: 100,
    suffix: "+",
    desc: "Solved 100+ DSA problems using C++ (LeetCode + practice).",
  },

  {
    icon: FiLayers,
    title: "Full Stack Projects",
    value: 5,
    suffix: "+",
    desc: "React + Django projects with REST APIs and MySQL.",
  },

  {
    icon: FiAward,
    title: "HackerRank",
    value: 3,
    suffix: "★",
    desc: "3-Star rating in C++ on HackerRank.",
  },

  {
    icon: FiBookOpen,
    title: "IBM Certificate",
    value: null,
    suffix: "",
    desc: "IBM Full Stack Software Developer (Coursera).",
  },

  {
    icon: FiZap,
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

function AchievementCard({ achievement, index, onViewCertificate }) {
  const Icon = achievement.icon;
  const tiltCard = (event) => {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 4}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 4}deg`);
  };

  const resetTilt = (event) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <Motion.article
      className="achievement-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      onPointerMove={tiltCard}
      onPointerLeave={resetTilt}
      onPointerCancel={resetTilt}
    >
      <div className="achievement-icon" aria-hidden="true"><Icon /></div>
      <div className="achievement-body">
        <h3>{achievement.title}</h3>
        {achievement.value && <div className="achievement-value"><Counter to={achievement.value} suffix={achievement.suffix} /></div>}
        <p>{achievement.desc}</p>
      </div>
      <div className="achievement-actions">
        {achievement.title === "IBM Certificate" && (
          <button type="button" className="achievement-link" onClick={onViewCertificate}>View certificate ↗</button>
        )}
        {achievement.live && <a className="achievement-link" href={achievement.live} target="_blank" rel="noopener noreferrer">Live project ↗</a>}
        {achievement.github && <a className="achievement-link" href={achievement.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
      </div>
    </Motion.article>
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
      <div className="achievement-heading">
        <Motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements<span>.</span>
        </Motion.h1>
        <p>Milestones and projects that reflect my growth as a developer.</p>
      </div>

      <div className="achievement-grid">
        {data.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            achievement={achievement}
            index={index}
            onViewCertificate={() => setOpen(true)}
          />
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
