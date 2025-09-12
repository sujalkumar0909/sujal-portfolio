import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function SplineSection() {
  const splineRef = useRef()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll progress (adjust maxScroll based on page length)
  const maxScroll = 1000
  const progress = Math.min(scrollY / maxScroll, 1)

  // Move car object if accessible (optional)
  useEffect(() => {
    const car = splineRef.current?.findObjectByName?.('car') // Replace with actual object name
    if (car) {
      car.position.x = 10 - progress * 20 // Move from right to left
    }
  }, [progress])

  return (
    <section style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Spline scene */}
      <Spline
        scene="https://prod.spline.design/klBEUtXasvTLonze/scene.splinecode"
        ref={splineRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Info content layered above */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        zIndex: 1,
        color: '#fff',
        maxWidth: '600px',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
        background: 'rgba(0,0,0,0.4)',
        borderRadius: '12px',
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Me</h2>
        <p style={{ fontSize: '1rem', marginBottom: '1rem', opacity: 0.85 }}>
          I'm Sujal Kumar, a software developer and creative technologist based in Bhubaneswar. I specialize in React, Spline, Lenis, and building immersive web experiences.
        </p>
        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Projects</h3>
        <ul style={{ paddingLeft: '1rem' }}>
          <li>Buzzly Minimal – Chat app with Next.js & MongoDB</li>
          <li>Subscription Tracker API – Node.js backend</li>
          <li>Pothole Detection Model – YOLOv8 + OpenCV</li>
        </ul>
        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Resume</h3>
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
      </div>
    </section>
  )
}
