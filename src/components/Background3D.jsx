import Spline from '@splinetool/react-spline'

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Spline scene="https://prod.spline.design/zOEN1Fu4XKkRcV4R/scene.splinecode" />
    </div>
  )
}
