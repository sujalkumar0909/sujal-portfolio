import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function WaveDesign() {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <Suspense fallback={<div style={{ background: '#000', height: '100vh' }} />}>
        <Spline
          scene="https://prod.spline.design/XRGEeKzGMdm3QS14/scene.splinecode"
          renderOnDemand={true}
        />
      </Suspense>

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
