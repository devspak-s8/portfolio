"use client"

import { useEffect, useRef } from "react"

interface Drop {
  x: number
  y: number
  length: number
  speed: number
  opacity: number
  width: number
}

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
}

export default function LiquidRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false }) // Optimization: Disable alpha if bg is solid
    if (!ctx) return

    let animationFrameId: number
    let drops: Drop[] = []
    let ripples: Ripple[] = []
    let isVisible = true

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      initDrops()
    }

    // Initialize drops
    const initDrops = () => {
      drops = []
      // Density-based drop count
      const density = window.innerWidth < 768 ? 40 : 15
      const dropCount = Math.floor(window.innerWidth / density)

      for (let i = 0; i < dropCount; i++) {
        drops.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight - window.innerHeight,
          length: Math.random() * 30 + 20,
          speed: Math.random() * 2 + 1.5,
          opacity: Math.random() * 0.3 + 0.1,
          width: Math.random() * 1.5 + 0.5,
        })
      }
    }

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible"
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    const createRipple = (x: number, y: number) => {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.random() * 50 + 30,
        opacity: 0.4,
      })
    }

    const draw = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(draw)
        return
      }

      // Optimization: FillRect with low opacity instead of clearRect for trail effect
      ctx.fillStyle = "rgba(10, 15, 25, 1)" // Match background
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Draw drops
      drops.forEach((drop, index) => {
        const gradient = ctx.createLinearGradient(drop.x, drop.y, drop.x, drop.y + drop.length)
        gradient.addColorStop(0, `rgba(148, 163, 184, 0)`)
        gradient.addColorStop(1, `rgba(148, 163, 184, ${drop.opacity})`)

        ctx.beginPath()
        ctx.strokeStyle = gradient
        ctx.lineWidth = drop.width
        ctx.lineCap = "round"
        ctx.moveTo(drop.x, drop.y)
        ctx.lineTo(drop.x, drop.y + drop.length)
        ctx.stroke()

        drop.y += drop.speed

        if (drop.y > window.innerHeight) {
          if (ripples.length < 50) createRipple(drop.x, window.innerHeight - 10)
          drops[index].y = -drop.length
          drops[index].x = Math.random() * window.innerWidth
        }
      })

      // Draw ripples
      ripples = ripples.filter((ripple) => {
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(148, 163, 184, ${ripple.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()

        ripple.radius += 1.5
        ripple.opacity -= 0.01

        return ripple.opacity > 0 && ripple.radius < ripple.maxRadius
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1]" style={{ opacity: 0.6 }} />
}
