import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './styles/Projects.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Raheja QBE – Health Buzz',
    subtitle: 'Health Insurance Domain',
    description:
      'Developed and maintained Policy, Endorsement, Accounts, and Letter Generation modules for a Health Insurance platform. Implemented REST API integrations and executable-based services for policy and claims processing. Handled client communication, production support, and release coordination as a senior team member.',
    tags: ['ASP.NET', 'C#', 'SQL Server', 'REST API'],
    color: '#009bdb',
    icon: '🛡️',
  },
  {
    title: 'PARK – Health Buzz',
    subtitle: 'TPA Domain',
    description:
      'Implemented multiple Change Requests (CRs), enhancing TPA workflows and system stability. Worked closely with stakeholders to ensure seamless integration and delivery of new features.',
    tags: ['ASP.NET MVC', 'C#', 'SQL Server'],
    color: '#ef4444',
    icon: '📑',
  },
  {
    title: 'Core Base – Health Buzz',
    subtitle: 'Health Insurance Domain',
    description:
      'Contributed to Policy, Endorsement, and Letter modules with a focus on enhancements and defect fixes. Ensured code quality and system reliability through thorough testing and reviews.',
    tags: ['ASP.NET', 'C#', 'SQL Server'],
    color: '#a78bfa',
    icon: '📋',
  },
  {
    title: 'Motor Insurance Portal',
    subtitle: 'Motor Insurance Domain',
    description:
      'Developed a Policy Issuance portal and integrated it with the core insurance system. Built end-to-end workflows for motor policy management and issuance under team guidance.',
    tags: ['ASP.NET MVC', 'SQL Server'],
    color: '#34d399',
    icon: '🚗',
  },
  {
    title: 'Magma – Health Buzz',
    subtitle: 'Health Insurance Domain',
    description:
      'Worked on policy insurance, endorsement and letters. This project is currently running for development as a developer.',
    tags: ['.NET', 'SQL Server'],
    color: '#f472b6',
    icon: '🛡️',
  },
]

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-container', start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % projects.length)
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div className="section-label">
        <span className="label-number">04</span>
        <span className="label-line" />
        <span className="label-text">Projects</span>
      </div>

      <h2 className="projects-heading">
        Featured <span className="heading-accent">Projects</span>
      </h2>

      <div className="projects-container projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card hover-target" style={{ '--project-color': project.color } as React.CSSProperties}>
            <div className="project-card-top-line" />
            <div className="project-icon">{project.icon}</div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-card-glow" />
          </div>
        ))}
      </div>

      <div className="projects-carousel">
        <div className="carousel-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {projects.map((project, i) => (
            <div key={i} className="carousel-slide" style={{ '--project-color': project.color } as React.CSSProperties}>
              <div className="project-card-top-line" />
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="carousel-btn hover-target" onClick={prevProject} aria-label="Previous">
            <FiChevronLeft />
          </button>
          <div className="carousel-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === activeIndex ? 'carousel-dot-active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
          <button className="carousel-btn hover-target" onClick={nextProject} aria-label="Next">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
