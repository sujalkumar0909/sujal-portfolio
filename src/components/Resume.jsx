import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ padding: '4rem 2rem', textAlign: 'center' }}
    >
      <h2>Resume</h2>
      <p>Download my resume to learn more about my experience and skills.</p>
      <a
        href="/assets/resume.pdf"
        download
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#0af',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
        }}
      >
        Download Resume
      </a>
    </motion.section>
  )
}
