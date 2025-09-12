import { useEffect } from 'react'

export default function MiddleInfo() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    const handleScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="middle-info"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
        color: '#cceeff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '6rem 2rem',
        gap: '4rem',
      }}
    >
      <div className="reveal-on-scroll" style={{ maxWidth: '1200px', textAlign: 'center' }}>
        <h3 style={headingStyle}>Featured Projects</h3>

        {/* Two rows of two cards */}
        <div style={rowGrid}>
          {projects.slice(0, 4).map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-content">
                <div className="card-front">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    View on GitHub ↗
                  </a>
                </div>
                <div className="card-back">
                  <img src={project.image} alt={project.title} style={imageStyle} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered final card */}
        <div style={centeredCard}>
          <div className="project-card">
            <div className="card-content">
              <div className="card-front">
                <h4>{projects[4].title}</h4>
                <p>{projects[4].description}</p>
                <a href={projects[4].link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                  View on GitHub ↗
                </a>
              </div>
              <div className="card-back">
                <img src={projects[4].image} alt={projects[4].title} style={imageStyle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Styles
const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  textShadow: '0 0 20px rgba(0, 170, 255, 0.6)',
}

const rowGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
  justifyContent: 'center',
  marginBottom: '3rem',
}

const centeredCard = {
  display: 'flex',
  justifyContent: 'center',
}

const imageStyle = {
  width: '100%',
  height: '240px',
  objectFit: 'cover',
  borderRadius: '12px',
}

const linkStyle = {
  marginTop: '1rem',
  color: '#0af',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '0.95rem',
}

// Project data
const projects = [
  {
    title: 'Buzzly Minimal',
    description: 'Minimal chat app built with Next.js and MongoDB.',
    link: 'https://github.com/sujalkumar0909/Buzzly-Minimal',
    image: '/images/buzzly.jpg',
  },
  {
    title: 'Subscription Tracker API',
    description: 'Track and analyze subscriptions with Node.js backend.',
    link: 'https://github.com/sujalkumar0909/Subscription-Tracker',
    image: '/images/subscription.jpg',
  },
  {
    title: 'Pothole Detection Model',
    description: 'YOLOv8 + OpenCV model for autonomous road safety.',
    link: 'https://github.com/sujalkumar0909/Pot-hole-Detection-Model',
    image: '/images/pothole.jpg',
  },
  {
    title: 'Shopping Website',
    description: 'Basic e-commerce layout built with React.',
    link: 'https://github.com/sujalkumar0909/shopping-website',
    image: '/images/shopping.jpg',
  },
  {
    title: 'WebSocket Chat App',
    description: 'Real-time messaging with Node.js and WebSocket.',
    link: 'https://github.com/sujalkumar0909/Web-Socket-Chat-Application',
    image: '/images/websocket.jpg',
  },
]
