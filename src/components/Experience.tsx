import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Experience.css'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Eicore Technologies Pvt. Ltd.',
    location: 'Gurugram, India',
    period: 'Mar 2023 – Present',
    points: [
      'Led end-to-end development of insurance modules and workflow systems using ASP.NET, C#, and SQL Server, improving process automation and reducing manual intervention by up to 70%.',
      'Led a team of two junior developers, managing task allocation, code reviews, and direct client communication.',
      'Collaborated with BA, QA, product teams, and client stakeholders to translate business requirements into robust .NET-based technical solutions delivered on schedule.',
      'Designed and integrated RESTful APIs and optimized SQL queries and workflows to reduce turnaround time for end users.',
      'Designed and developed the complete scenario for the QBE project — policy flows, letters, automated mailers, executable files, schedulers, and APIs.',
    ],
    tags: ['ASP.NET', 'C#', 'SQL Server', 'MVC', 'Web API', 'RESTful APIs'],
  },
]

const education = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    school: 'RKGIT Ghaziabad',
    location: 'Ghaziabad, Uttar Pradesh',
    period: 'Aug 2019 – Jul 2023',
    score: 'CGPA: 7.78',
  },
  {
    degree: 'Intermediate (XII)',
    school: 'SRS International School',
    location: 'Mathura, India',
    period: '2019',
    score: 'Intermediate',
  },
]

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.experience-timeline', start: 'top 80%' },
        }
      )
      gsap.fromTo(
        '.timeline-line-fill',
        { height: '0%' },
        {
          height: '100%', duration: 1.5, ease: 'power2.out',
          scrollTrigger: { trigger: '.experience-timeline', start: 'top 80%' },
        }
      )
      gsap.fromTo(
        '.edu-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.education-grid', start: 'top 85%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="experience-section">
      <div className="section-label">
        <span className="label-number">03</span>
        <span className="label-line" />
        <span className="label-text">Experience</span>
      </div>

      <h2 className="experience-heading">
        Work <span className="heading-accent">Experience</span>
      </h2>

      <div className="experience-timeline">
        <div className="timeline-line">
          <div className="timeline-line-fill" />
        </div>

        {experiences.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot">
              <div className="timeline-dot-inner" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">
                    {exp.company} <span className="timeline-location">• {exp.location}</span>
                  </p>
                </div>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <ul className="timeline-points">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
              <div className="timeline-tags">
                {exp.tags.map((tag, j) => (
                  <span key={j} className="timeline-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="experience-heading education-heading">
        <span className="heading-accent">Education</span>
      </h2>

      <div className="education-grid">
        {education.map((edu, i) => (
          <div key={i} className="edu-card hover-target">
            <div className="edu-card-accent" />
            <div className="edu-header">
              <h3 className="edu-degree">{edu.degree}</h3>
              <span className="edu-score">{edu.score}</span>
            </div>
            <p className="edu-school">{edu.school}</p>
            <p className="edu-meta">
              {edu.location} <span className="edu-period">• {edu.period}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
