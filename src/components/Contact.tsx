import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import './styles/Contact.css'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-content > *',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-content', start: 'top 80%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="contact-section">
      <div className="contact-bg-lines">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-line" style={{ left: `${(i + 1) * 14}%` }} />
        ))}
      </div>

      <div className="contact-content">
        <div className="section-label">
          <span className="label-number">05</span>
          <span className="label-line" />
          <span className="label-text">Contact</span>
        </div>

        <h2 className="contact-heading">
          Let's Work <span className="heading-accent">Together</span>
        </h2>

        <p className="contact-subtitle">
          I'm always open to discussing new opportunities, interesting projects,
          or collaborating on enterprise software solutions.
        </p>

        <div className="contact-grid">
          <a href="mailto:akashsaraswat9058@gmail.com" className="contact-card hover-target">
            <FiMail className="contact-card-icon" />
            <div>
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">akashsaraswat9058@gmail.com</span>
            </div>
            <FiArrowUpRight className="contact-card-arrow" />
          </a>

          <a href="tel:+919997457747" className="contact-card hover-target">
            <FiPhone className="contact-card-icon" />
            <div>
              <span className="contact-card-label">Phone</span>
              <span className="contact-card-value">+91-9997457747</span>
            </div>
            <FiArrowUpRight className="contact-card-arrow" />
          </a>

          <div className="contact-card">
            <FiMapPin className="contact-card-icon" />
            <div>
              <span className="contact-card-label">Location</span>
              <span className="contact-card-value">Gurugram, Haryana</span>
            </div>
          </div>
        </div>

        <div className="contact-socials">
          <a
            href="https://www.linkedin.com/in/erakashsaraswat/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover-target"
          >
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover-target"
          >
            <FiGithub />
            <span>GitHub</span>
          </a>
        </div>

        <div className="contact-cta">
          <a href="mailto:akashsaraswat9058@gmail.com" className="cta-big hover-target">
            Say Hello <FiArrowUpRight />
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-line" />
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built by <span className="footer-name">Akash Saraswat</span>
          </p>
          <p className="footer-year">© 2026</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
