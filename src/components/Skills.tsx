import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Marquee from 'react-fast-marquee'
import './styles/Skills.css'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: '{ }',
    skills: ['C#', 'ASP.NET Web Forms', 'ASP.NET MVC', 'ASP.NET Web API', 'Entity Framework', 'ADO.NET'],
  },
  {
    title: 'Frontend',
    icon: '◈',
    skills: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'jQuery'],
  },
  {
    title: 'Databases & APIs',
    icon: '⛁',
    skills: ['Microsoft SQL Server', 'RESTful APIs', 'JSON/XML', 'RBAC Auth'],
  },
  {
    title: 'Dev Tools',
    icon: '⚙',
    skills: ['Visual Studio', 'VS Code', 'SSMS', 'IIS', 'Microsoft Report Builder'],
  },
  {
    title: 'Collaboration',
    icon: '☁',
    skills: ['Git', 'GitHub', 'Jira', 'Zoho', 'Postman', 'SOAP UI', 'FileZilla'],
  },
  {
    title: 'Methodologies',
    icon: '✦',
    skills: ['Agile/Scrum', 'Requirement Analysis', 'Client Communication', 'Cross-Functional Collaboration'],
  },
]

const marqueeSkills = [
  'C#', 'ASP.NET', 'MVC', 'SQL Server', 'Entity Framework', 'Web API',
  'JavaScript', 'jQuery', 'HTML', 'CSS', 'RESTful APIs', 'Git',
  'Visual Studio', 'SSMS', 'IIS', 'Postman', 'ADO.NET', 'Jira',
]

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <div className="section-label">
        <span className="label-number">02</span>
        <span className="label-line" />
        <span className="label-text">Tech Stack</span>
      </div>

      <h2 className="skills-heading">
        Technologies & <span className="heading-accent">Tools</span>
      </h2>

      <div className="skills-marquee">
        <Marquee speed={40} gradient={false} pauseOnHover>
          {marqueeSkills.map((skill, i) => (
            <span key={i} className="marquee-skill">
              {skill}
              <span className="marquee-dot">◆</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skill-card hover-target">
            <div className="skill-card-header">
              <span className="skill-card-icon">{cat.icon}</span>
              <h3 className="skill-card-title">{cat.title}</h3>
            </div>
            <div className="skill-tags">
              {cat.skills.map((skill, j) => (
                <span key={j} className="skill-tag">{skill}</span>
              ))}
            </div>
            <div className="skill-card-glow" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
