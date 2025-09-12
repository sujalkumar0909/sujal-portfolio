import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <motion.div
        className="experience-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <motion.h2
          className="experience-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="experience-entry"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <h3>Software Intern</h3>
          <p className="company">Bright IT Global Solutions Pvt. Ltd · Gurgaon, India</p>
          <p className="duration">May 2025 – July 2025</p>
          <ul className="experience-details">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              Built and optimized HRMS features using Java, Spring Boot, and SQL.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Improved UI/UX responsiveness and modular design components.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Enhanced database queries and deployment pipelines using Git and CI/CD.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Collaborated in Agile sprints, boosting delivery efficiency by 15%.
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
