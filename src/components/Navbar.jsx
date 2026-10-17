import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["certifications", "Certifications"],
  ["achievements", "Achievements"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-24% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const renderLinks = (mobile = false) => links.map(([id, label]) => (
    <a
      key={id}
      href={`#${id}`}
      className={active === id ? "is-active" : ""}
      aria-current={active === id ? "location" : undefined}
      onClick={() => setOpen(false)}
    >
      {label}
      {mobile && active === id && <span className="mobile-active-mark" aria-hidden="true">↗</span>}
    </a>
  ));

  return (
    <nav className="nav glass-nav" aria-label="Main navigation">
      <a className="logo" href="#home" onClick={() => setOpen(false)} aria-label="Ashish Ahirwar home">Ashish<span>.dev</span></a>

      <div className="nav-links desktop">
        {renderLinks()}
        <a href="/Ashish_Ahirwar_Python.pdf" download className="resume-btn">Résumé <span aria-hidden="true">↓</span></a>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls={open ? "mobile-navigation" : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {open && (
          <Motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {renderLinks(true)}
            <a href="/Ashish_Ahirwar_Python.pdf" download className="resume-btn" onClick={() => setOpen(false)}>Download résumé ↓</a>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
