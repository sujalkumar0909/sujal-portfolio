import Spline from '@splinetool/react-spline'

export default function SplineScene() {
  return (
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
          transform: 'scale(1.2)',              // slightly stronger scale
          transformOrigin: 'center bottom',     // lift upward from bottom
          width: '110%',
          height: '100%',
        }}
      >
        <Spline scene="https://prod.spline.design/klBEUtXasvTLonze/scene.splinecode" />
      </div>
    </div>
  )
}
