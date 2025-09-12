import { motion } from 'framer-motion'

const traits = [
  'Transforming ideas into scalable solutions',
  'Crafting bug-free user interfaces',
  'Problem-solver with a keen eye for detail',
  'Obsessed with pixel-perfect design and smooth UX',
]

const tools = [
  { name: 'React', svg: '/svgs/react.svg' },
  { name: 'Next.js', svg: '/svgs/nextjs.svg' },
  { name: 'MongoDB', svg: '/svgs/mongodb.svg' },
  { name: 'Tailwind', svg: '/svgs/tailwind.svg' },
  { name: 'Spline', svg: '/svgs/spline.svg' },
  { name: 'Lenis', svg: '/svgs/lenis.svg' },
  { name: 'OpenCV', svg: '/svgs/opencv.svg' },
  { name: 'Tableau', svg: '/svgs/tableau.svg' },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="about-heading">About Me</h2>

        <p className="about-text">
          I'm Sujal Kumar, a full-stack developer and creative technologist based in Bhubaneswar. I specialize in building immersive web experiences that fuse clean design, smooth physics, and interactive storytelling.
        </p>

        <ul className="about-traits">
          {traits.map((trait, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {trait}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
