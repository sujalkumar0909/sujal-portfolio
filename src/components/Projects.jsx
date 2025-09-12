import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Buzzly Minimal',
      description: 'Chat app with Next.js, TypeScript, Tailwind, MongoDB.',
      link: 'https://github.com/sujalkumar0909/Buzzly-Minimal',
    },
    {
      title: 'Subscription Tracker API',
      description: 'Node.js backend for managing subscriptions and costs.',
      link: 'https://github.com/sujalkumar0909/Subscription-Tracker',
    },
    {
      title: 'Pothole Detection Model',
      description: 'YOLOv8 + OpenCV for real-time road safety.',
      link: 'https://github.com/sujalkumar0909/Pot-hole-Detection-Model',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ padding: '4rem 2rem', textAlign: 'center' }}
    >
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{ background: '#111', padding: '1rem', borderRadius: '12px', width: '300px' }}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0af' }}>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
