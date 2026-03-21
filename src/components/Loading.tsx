import { useEffect, useState } from 'react'
import './styles/Loading.css'

const Loading = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-circle">
          <svg viewBox="0 0 100 100">
            <circle className="loading-ring" cx="50" cy="50" r="45" />
            <circle
              className="loading-ring-fill"
              cx="50"
              cy="50"
              r="45"
              strokeDasharray={`${progress * 2.83} 283`}
            />
          </svg>
          <span className="loading-percent">{Math.min(Math.round(progress), 100)}%</span>
        </div>
        <div className="loading-text">
          <span className="loading-name">AKASH SARASWAT</span>
          <span className="loading-role">Software Engineer | .NET Developer</span>
        </div>
        <div className="loading-bar">
          <div className="loading-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
        </div>
      </div>
      <div className="loading-glow loading-glow-1" />
      <div className="loading-glow loading-glow-2" />
    </div>
  )
}

export default Loading
