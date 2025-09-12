import Spline from '@splinetool/react-spline'

export default function BottomDesign() {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Bottom Spline background */}
      <Spline scene="https://prod.spline.design/zOEN1Fu4XKkRcV4R/scene.splinecode" />

      {/* Bottom content */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        color: '#fff',
        zIndex: 2,
        maxWidth: '600px',
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Projects & Experience</h2>
        <p style={{ fontSize: '1rem', opacity: 0.8 }}>
          Explore real-world applications—from chat systems to pothole detection. Built with precision, deployed with purpose.
        </p>
      </div>
    </section>
  )
}
