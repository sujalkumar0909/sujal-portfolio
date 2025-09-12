import { motion } from 'framer-motion'

export default function Transition() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      style={{
        height: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #0a0a0a, #111)',
        color: '#fff',
        fontSize: '2rem',
        fontWeight: '600',
        letterSpacing: '1px',
      }}
    >
      Let’s dive deeper ↓
    </motion.section>
  )
}
