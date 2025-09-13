import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function Bot() {
  return (
    <Suspense fallback={<div style={{ width: '160px', height: '180px' }} />}>
      <div
        style={{
          position: 'fixed',
          bottom: '0',
          right: '0px',
          width: '160px',
          height: '180px',
          zIndex: 5,
          pointerEvents: 'none',
          overflow: 'hidden',
          transform: 'translateY(20px)',
        }}
      >
        <Spline
          scene="https://prod.spline.design/eO8BIOvsjeRE74Lm/scene.splinecode"
          renderOnDemand={true}
        />
      </div>
    </Suspense>
  )
}
