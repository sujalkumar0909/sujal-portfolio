import { motion } from 'framer-motion'

export default function MiddleSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      style={{
        height: '60vh',
        background: 'linear-gradient(to bottom, #0a0a0a, #111)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Shape the Vibe</h2>
      <p style={{ fontSize: '1.1rem', maxWidth: '600px', opacity: 0.8 }}>
        Scroll down to experience a dynamic 3D scene that reflects your creative energy. This section bridges your identity with immersive design.
      </p>
    </motion.section>
  )
}
