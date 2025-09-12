import Spline from '@splinetool/react-spline'

export default function WaveDesign() {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Spline scene="https://prod.spline.design/XRGEeKzGMdm3QS14/scene.splinecode" />
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#fff',
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Clarity. Focus. Impact.</h2>
        <p style={{ fontSize: '1.2rem' }}>Design meets precision.</p>
      </div>
    </section>
  )
}
