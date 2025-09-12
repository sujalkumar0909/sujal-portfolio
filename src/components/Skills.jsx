export default function Skills() {
  const skills = [
    { name: 'Java', svg: '/svgs/java.svg' },
    { name: 'Python', svg: '/svgs/python.svg' },
    { name: 'C++', svg: '/svgs/cpp.svg' },
    { name: 'C', svg: '/svgs/c.svg' },
    { name: 'JavaScript', svg: '/svgs/javascript.svg' },
    { name: 'React', svg: '/svgs/react.svg' },
    { name: 'Next.js', svg: '/svgs/nextjs.svg' },
    { name: 'Node.js', svg: '/svgs/nodejs.svg' },
    { name: 'MongoDB', svg: '/svgs/mongodb.svg' },
    { name: 'MySQL', svg: '/svgs/mysql.svg' },
    { name: 'Tailwind', svg: '/svgs/tailwind.svg' },
    { name: 'TensorFlow', svg: '/svgs/tensorflow.svg' },
    { name: 'OpenCV', svg: '/svgs/opencv.svg' },
    { name: 'Tableau', svg: '/svgs/tableau.svg' },
    { name: 'PowerBi', svg: '/svgs/powerbi.svg' },
    { name: 'Docker', svg: '/svgs/docker.svg' },
    { name: 'Kubernetes', svg: '/svgs/kubernetes.svg' },
    { name: 'Microsoft Excel', svg: '/svgs/excel.svg' },
    { name: 'Microsoft Word', svg: '/svgs/word.svg'},
  ]

  const duplicated = [...skills, ...skills] // for seamless loop

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">Tech(s) I Have Worked With</h2>

      <div className="skills-marquee">
        <div className="skills-track">
          {duplicated.map((skill, index) => (
            <div
              key={index}
              className={`skill-pill ${skill.highlight ? 'highlighted' : ''}`}
            >
              <img src={skill.svg} alt={skill.name} />
              <span>{skill.name}</span>
              {skill.highlight && (
                <div className="stars">
                  {'★'.repeat(4)}<span className="empty-star">★</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-marquee reverse">
        <div className="skills-track">
          {duplicated.map((skill, index) => (
            <div
              key={`r-${index}`}
              className={`skill-pill ${skill.highlight ? 'highlighted' : ''}`}
            >
              <img src={skill.svg} alt={skill.name} />
              <span>{skill.name}</span>
              {skill.highlight && (
                <div className="stars">
                  {'★'.repeat(4)}<span className="empty-star">★</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
