import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.2, // smoothness factor
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing
  smooth: true,
  autoRaf: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Optional: Scroll-triggered class toggles
const revealElements = document.querySelectorAll('.reveal-on-scroll')

function handleScroll() {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect()
    const trigger = rect.top < window.innerHeight * 0.85
    if (trigger) el.classList.add('visible')
  })
}

window.addEventListener('scroll', handleScroll)

export default lenis
