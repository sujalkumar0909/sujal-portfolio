import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function SplineScene() {
  return (
    <Suspense fallback={<div style={{ background: '#000', height: '100vh' }} />}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            transform: 'scale(1.2)',
            transformOrigin: 'center bottom',
            width: '110%',
            height: '100%',
          }}
        >
          <Spline
            scene="https://prod.spline.design/klBEUtXasvTLonze/scene.splinecode"
            renderOnDemand={true} // only renders when needed
          />
        </div>
      </div>
    </Suspense>
  )
}
