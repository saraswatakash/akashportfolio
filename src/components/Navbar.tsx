import { useEffect, useState } from 'react'
import './styles/Navbar.css'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <a href="#home" className="nav-logo hover-target">
        <span className="logo-bracket">&lt;</span>
        AS
        <span className="logo-bracket">/&gt;</span>
      </a>

      <button
        className="nav-hamburger hover-target"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
      </button>

      <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`nav-link hover-target ${activeSection === link.href.slice(1) ? 'nav-link-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-link-text">{link.name}</span>
              <span className="nav-link-hover">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="/akashCV.pdf"
        className="nav-resume hover-target"
        download="akashCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </nav>
  )
}

export default Navbar
