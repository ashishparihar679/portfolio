import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="section-header">

        <h1 className="gradient">
          {title}
        </h1>

        {subtitle && (
          <p className="section-subtitle">
            {subtitle}
          </p>
        )}

      </div>

      <div className="section-content">
        {children}
      </div>

    </motion.section>
  );
}