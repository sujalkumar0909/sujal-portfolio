import { useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.9

      if (scrollY > heroHeight) {
        document.body.classList.add('scrolled-past-hero')
      } else {
        document.body.classList.remove('scrolled-past-hero')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="hero-section">
      <div className="hero-spline">
        <Spline scene="https://prod.spline.design/AznkYd6cNSe1XruA/scene.splinecode" />
      </div>

      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>
        <h1 className="hero-title">SUJAL KUMAR</h1>
        <p className="hero-subtitle">Engineering Student · Interactive Web Architect · Obsessed with Precision</p>


        <div className="hero-social">
          <a href="mailto:sujalkumar7209@gmail.com" className="social-link"><FaEnvelope /> Email</a>
          <a href="https://www.linkedin.com/in/sujal-kumar-10b136279/" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/sujalkumar0909" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /> GitHub</a>
          <a href="https://leetcode.com/u/Sujalkr/" target="_blank" rel="noopener noreferrer" className="social-link"><FaCode /> LeetCode</a>
        </div>
      </div>

      <div className="hero-fade-mask" />
      <div className="hero-scroll-cue">Scroll ↓</div>
    </section>
  )
}
