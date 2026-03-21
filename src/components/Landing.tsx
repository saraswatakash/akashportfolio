import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FiArrowDownCircle } from 'react-icons/fi'
import Avatar from './Avatar/Avatar'
import './styles/Landing.css'

const Landing = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const roleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      subRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )

    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll('.char')
      tl.fromTo(
        chars,
        { opacity: 0, y: 60, rotateX: 70 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.05,
        },
        '-=0.3'
      )
    }

    tl.fromTo(
      roleRef.current,
      { opacity: 0, y: 20, scaleX: 0.8 },
      { opacity: 1, y: 0, scaleX: 1, duration: 0.8 },
      '-=0.4'
    )

    tl.fromTo(
      '.avatar-scene',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.4)' },
      '-=0.5'
    )

    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    )

    const roles = ['.NET Developer', 'Backend Engineer', 'API Architect', 'Problem Solver']
    let roleIndex = 0
    const roleEl = document.querySelector('.role-dynamic')
    if (roleEl) {
      const interval = setInterval(() => {
        roleIndex = (roleIndex + 1) % roles.length
        gsap.to(roleEl, {
          y: -30,
          opacity: 0,
          duration: 0.4,
          onComplete: () => {
            roleEl.textContent = roles[roleIndex]
            gsap.fromTo(roleEl, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 })
          },
        })
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [])

  const splitName = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char" style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section id="home" ref={sectionRef} className="landing-section">
      <div className="landing-bg-grid" />
      <div className="landing-glow-orb landing-orb-1" />
      <div className="landing-glow-orb landing-orb-2" />
      <div className="landing-glow-orb landing-orb-3" />

      <div className="landing-split">
        <div className="landing-text-side">
          <div className="landing-greeting" ref={subRef}>
            <span className="greeting-line" />
            <span className="greeting-text">Hello, I'm</span>
            <span className="greeting-line" />
          </div>

          <h1 className="landing-name" ref={headingRef}>
            {splitName('AKASH')}
            <br />
            {splitName('SARASWAT')}
          </h1>

          <div className="landing-role" ref={roleRef}>
            <span className="role-static">Software Engineer</span>
            <div className="role-dynamic-wrapper">
              <span className="role-separator">|</span>
              <span className="role-dynamic">.NET Developer</span>
            </div>
          </div>

          <p className="landing-tagline">
            Building enterprise applications with ASP.NET, MVC & SQL Server
            in Health and Motor Insurance domains.
          </p>

          <div className="landing-cta" ref={ctaRef}>
            <a href="#about" className="cta-primary hover-target">
              Explore My Work
              <FiArrowDownCircle className="cta-icon" />
            </a>
            <a href="#contact" className="cta-secondary hover-target">
              Get In Touch
            </a>
          </div>

          <div className="landing-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">Manual Work Reduced</span>
            </div>
          </div>
        </div>

        <div className="landing-avatar-side">
          <Avatar />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  )
}

export default Landing
