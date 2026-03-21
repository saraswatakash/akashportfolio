import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Loading from './components/Loading'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      <main id="smooth-wrapper">
        <div id="smooth-content">
          <Landing />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
