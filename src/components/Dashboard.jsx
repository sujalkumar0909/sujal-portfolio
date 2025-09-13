import { motion } from 'framer-motion'

const navItems = [
  { label: 'Home', target: 'top' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'middle-info' },
]

export default function Dashboard() {
  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      className="dashboard-nav"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <ul className="dashboard-list">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="dashboard-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(item.target)}
          >
            {item.label}
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}
