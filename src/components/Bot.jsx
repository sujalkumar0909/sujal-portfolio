import Spline from '@splinetool/react-spline'

export default function Bot() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        right: '0px',
        width: '160px',
        height: '180px',              // slightly taller to allow downward shift
        zIndex: 5,
        pointerEvents: 'none',
        overflow: 'hidden',
        transform: 'translateY(20px)', // pushes bot down inside container
      }}
    >
      <Spline scene="https://prod.spline.design/eO8BIOvsjeRE74Lm/scene.splinecode" />
    </div>
  )
}
