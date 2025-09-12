import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function GlobalSpline() {
  const containerRef = useRef()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setOffset(scrollY * 0.05) // Adjust sensitivity here
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        transform: `translate(${offset}px, ${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <Spline scene="https://prod.spline.design/klBEUtXasvTLonze/scene.splinecode" />
    </div>
  )
}
