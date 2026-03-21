import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/About.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-title-char',
        { opacity: 0, y: 50, rotateX: 80 },
        {
          opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.03, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-title', start: 'top 80%' },
        }
      )
      gsap.fromTo(
        '.about-text p',
        { opacity: 0, y: 30, filter: 'blur(5px)' },
        {
          opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
        }
      )
      gsap.fromTo(
        '.about-info-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-info-grid', start: 'top 85%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const splitTitle = (text: string) =>
    text.split('').map((char, i) => (
      <span key={i} className="about-title-char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="section-label">
        <span className="label-number">01</span>
        <span className="label-line" />
        <span className="label-text">About Me</span>
      </div>

      <div className="about-wrapper">
        <div className="about-left">
          <h2 className="about-title">{splitTitle('About Me')}</h2>
          <div className="about-text">
            <p>
              Dynamic <span className="highlight">Software Engineer</span> with 3 years of experience
              building enterprise applications using <span className="highlight">ASP.NET</span>,{' '}
              <span className="highlight">MVC</span>, and <span className="highlight">SQL Server</span>{' '}
              in Health and Motor Insurance domains.
            </p>
            <p>
              Skilled in scalable workflows, <span className="highlight">RESTful API</span> integrations,
              and cross-functional collaboration. I excel in both front-end and back-end development,
              ensuring seamless user experiences while delivering efficient solutions.
            </p>
            <p>
              Proficient in <span className="highlight">C#</span>, <span className="highlight">Entity Framework</span>,
              and <span className="highlight">ADO.NET</span> — creating clean, modular, and highly testable
              applications that align with modern development standards.
            </p>
          </div>
        </div>

        <div className="about-right">
          <div className="about-info-grid">
            <div className="about-info-item">
              <span className="info-label">Name</span>
              <span className="info-value">Akash Saraswat</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Gurugram, India</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Role</span>
              <span className="info-value">Software Engineer</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Company</span>
              <span className="info-value">Eicore Technologies</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Education</span>
              <span className="info-value">B.Tech - CSE (7.78 CGPA)</span>
            </div>
            <div className="about-info-item">
              <span className="info-label">Email</span>
              <span className="info-value">akashsaraswat9058@gmail.com</span>
            </div>
          </div>

          <div className="about-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="terminal-title">akash@portfolio ~ %</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-cmd">cat about.json</span>
              </div>
              <div className="terminal-output">
                <span className="json-bracket">{'{'}</span>
                <br />
                <span className="json-key">&nbsp;&nbsp;"passion"</span>: <span className="json-value">"Enterprise Software"</span>,
                <br />
                <span className="json-key">&nbsp;&nbsp;"domain"</span>: <span className="json-value">"Insurance"</span>,
                <br />
                <span className="json-key">&nbsp;&nbsp;"experience_years"</span>: <span className="json-number">3</span>,
                <br />
                <span className="json-key">&nbsp;&nbsp;"loves"</span>: <span className="json-value">"Building scalable systems"</span>
                <br />
                <span className="json-bracket">{'}'}</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="terminal-cursor">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
