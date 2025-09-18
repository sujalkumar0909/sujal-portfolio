import Hero from '../components/Hero'
import MiddleInfo from '../components/MiddleInfo'
import FeedbackSection from '../components/FeedbackSection'
// import SplineScene from '../components/SplineScene'
import Bot from '../components/Bot'
import FeedbackCTA from '../components/FeedbackCTA'
import Dashboard from '../components/Dashboard'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <>
      <Dashboard />
      <Hero />
      <About />
      <Skills />
      <MiddleInfo />
      <Experience />
      <div style={{ position: 'relative' }}>
        <FeedbackSection />
        {/* <SplineScene /> */}
      </div>
      <Bot />
      <FeedbackCTA />
    </>
  )
}
