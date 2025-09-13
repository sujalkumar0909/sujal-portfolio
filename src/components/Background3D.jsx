import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function Background3D() {
  return (
    <Suspense fallback={<div style={{ background: '#000', height: '100vh' }} />}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Spline
          scene="https://prod.spline.design/zOEN1Fu4XKkRcV4R/scene.splinecode"
          renderOnDemand={true}
        />
      </div>
    </Suspense>
  )
}
