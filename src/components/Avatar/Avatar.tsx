import { useEffect, useRef } from 'react'
import './Avatar.css'

const Avatar = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animFrame: number
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const animate = () => {
      if (!containerRef.current || !imageRef.current) {
        animFrame = requestAnimationFrame(animate)
        return
      }

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = mouse.x - centerX
      const deltaY = mouse.y - centerY
      const maxDist = 500

      const normX = Math.max(-1, Math.min(1, deltaX / maxDist))
      const normY = Math.max(-1, Math.min(1, deltaY / maxDist))

      imageRef.current.style.transform = `
        perspective(800px)
        rotateY(${normX * 12}deg)
        rotateX(${-normY * 8}deg)
        translateX(${normX * 6}px)
        translateY(${normY * 6}px)
      `

      if (glowRef.current) {
        glowRef.current.style.background = `
          radial-gradient(
            circle at ${50 + normX * 30}% ${50 + normY * 30}%,
            rgba(34, 211, 238, 0.25) 0%,
            transparent 60%
          )
        `
      }

      animFrame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animFrame)
    }
  }, [])

  return (
    <div className="avatar-scene" ref={containerRef}>
      <div className="avatar-ring-wrapper">
        <div className="avatar-ring-spin" />
        <div className="avatar-img-box" ref={imageRef}>
          <img src="https://raw.githubusercontent.com/saraswatakash/akashportfolio/main/public/images/akash.png" alt="Akash Saraswat" className="avatar-photo" />
          <div className="avatar-overlay" ref={glowRef} />
        </div>
      </div>
      {/* Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="avatar-dot"
          style={{
            '--angle': `${i * 45}deg`,
            '--delay': `${i * 0.4}s`,
            '--dist': `${140 + Math.random() * 30}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

export default Avatar
