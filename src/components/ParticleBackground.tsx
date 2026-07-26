import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const getParticleCount = () => {
      const width = window.innerWidth
      if (width < 640) return 30
      if (width < 1024) return 50
      return 80
    }

    const initParticles = () => {
      const count = getParticleCount()
      particlesRef.current = []

      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const getParticleColor = () => {
      return theme === 'dark' ? 'rgba(139, 92, 246, ' : 'rgba(99, 102, 241, '
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = getParticleColor() + particle.opacity + ')'
        ctx.fill()
      })

      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = getParticleColor() + (0.1 * (1 - distance / 100)) + ')'
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    if (!motionQuery.matches) {
      animate()
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        animate()
      } else {
        cancelAnimationFrame(animationRef.current)
      }
    }

    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resizeCanvas)
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default ParticleBackground