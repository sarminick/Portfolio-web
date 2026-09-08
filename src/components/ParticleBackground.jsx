import { useEffect, useRef } from 'react'

export function ParticleBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: null, y: null, radius: 130 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let animationFrameId
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initParticles()
    }

    const resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(canvas)

    // Number of particles adapted to screen size
    const particleCount = Math.min(50, Math.floor((width * height) / 18000))
    let particles = []

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.65
        this.vy = (Math.random() - 0.5) * 0.65
        this.radius = Math.random() * 1.5 + 1
        this.baseRadius = this.radius
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1

        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - this.x
          const dy = mouseRef.current.y - this.y
          const distance = Math.hypot(dx, dy)

          if (distance < mouseRef.current.radius) {
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius
            const directionX = dx / distance
            const directionY = dy / distance
            this.x += directionX * force * 1.2
            this.y += directionY * force * 1.2
            this.radius = this.baseRadius * (1 + force * 0.6)
          } else {
            this.radius = this.baseRadius
          }
        } else {
          this.radius = this.baseRadius
        }
      }

      draw(isDark) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? '#FBBF24' : '#D97706'
        ctx.shadowColor = isDark ? '#F59E0B' : '#D97706'
        ctx.shadowBlur = isDark ? 4 : 2
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    initParticles()

    const maxLineDistance = 110

    const render = () => {
      const isDark = document.documentElement.classList.contains('dark')
      ctx.clearRect(0, 0, width, height)

      // Connections between particles
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist = Math.hypot(dx, dy)

          if (dist < maxLineDistance) {
            const alpha = 1 - dist / maxLineDistance
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.strokeStyle = isDark
              ? `rgba(245, 158, 11, ${alpha * 0.22})`
              : `rgba(217, 119, 6, ${alpha * 0.18})`
            ctx.lineWidth = alpha * 1.1
            ctx.stroke()
          }
        }
      }

      // Connections to mouse
      if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouseRef.current.x - particles[i].x
          const dy = mouseRef.current.y - particles[i].y
          const dist = Math.hypot(dx, dy)

          if (dist < mouseRef.current.radius) {
            const alpha = 1 - dist / mouseRef.current.radius
            ctx.beginPath()
            ctx.moveTo(mouseRef.current.x, mouseRef.current.y)
            ctx.lineTo(particles[i].x, particles[i].y)
            ctx.strokeStyle = isDark
              ? `rgba(251, 191, 36, ${alpha * 0.5})`
              : `rgba(217, 119, 6, ${alpha * 0.4})`
            ctx.lineWidth = alpha * 1.5
            ctx.stroke()
          }
        }

        ctx.beginPath()
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? '#FDE047' : '#B45309'
        ctx.shadowColor = isDark ? '#F59E0B' : '#D97706'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }

      particles.forEach((particle) => {
        particle.update()
        particle.draw(isDark)
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = null
      mouseRef.current.y = null
    }

    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      parent.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60 dark:opacity-75"
      aria-hidden="true"
    />
  )
}
