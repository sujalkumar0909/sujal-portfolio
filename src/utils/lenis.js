import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 3),
  smooth: true,
  smoothTouch: true,
  autoRaf: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// Scroll-triggered reveal synced with Lenis
lenis.on('scroll', () => {
  const revealElements = document.querySelectorAll('.reveal-on-scroll')
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    const trigger = rect.top < window.innerHeight * 0.85
    if (trigger) el.classList.add('visible')
  })
})

export default lenis
