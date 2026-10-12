'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

/**
 * Hand-rolled 3D particle sphere — the site's single signature 3D moment.
 * No WebGL libraries: a fibonacci-sphere point cloud projected onto 2D canvas,
 * slow idle rotation, mouse-driven tilt, sparse constellation lines.
 */
export function Orb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const themeRef = useRef<string | undefined>(resolvedTheme)

  useEffect(() => {
    themeRef.current = resolvedTheme
  }, [resolvedTheme])

  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const N = 620

    type Pt = { x: number; y: number; z: number; tw: number }
    const pts: Pt[] = []
    for (let i = 0; i < N; i++) {
      const k = i + 0.5
      const phi = Math.acos(1 - (2 * k) / N)
      const theta = Math.PI * (1 + Math.sqrt(5)) * k
      const r = 1 + (Math.sin(i * 12.9898) * 0.5 + 0.5) * 0.06
      pts.push({
        x: r * Math.cos(theta) * Math.sin(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(phi),
        tw: Math.random() * 6.28,
      })
    }

    let W = 0
    let H = 0
    const size = () => {
      W = cv.clientWidth
      H = cv.clientHeight
      cv.width = W * DPR
      cv.height = H * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    size()

    let rotY = 0
    let rotX = -0.25
    let tRotY = 0
    let tRotX = -0.25
    let mouseOn = false
    let t = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      tRotY = (e.clientX / W - 0.5) * 1.1
      tRotX = -0.25 + (e.clientY / H - 0.5) * 0.55
      mouseOn = true
    }

    const frame = () => {
      t += 0.004
      if (!mouseOn) tRotY += 0.0016
      rotY += (tRotY - rotY) * 0.05
      rotX += (tRotX - rotX) * 0.05
      ctx.clearRect(0, 0, W, H)

      const dark = themeRef.current !== 'light'
      const inkDot = dark ? '242,244,251' : '10,12,24'
      const goldDot = dark ? '167,139,250' : '109,40,217'
      const pinkDot = dark ? '244,114,182' : '219,39,119'
      const inkAlpha = dark ? 0.5 : 0.3

      const cx = W > 760 ? W * 0.68 : W * 0.5
      const cy = H * 0.46
      const R = Math.min(W, H) * 0.3
      const cy1 = Math.cos(rotY)
      const sy1 = Math.sin(rotY)
      const cx1 = Math.cos(rotX)
      const sx1 = Math.sin(rotX)

      const proj: [number, number, number, number][] = []
      for (let i = 0; i < N; i++) {
        const p = pts[i]
        const x = p.x * cy1 - p.z * sy1
        const z1 = p.x * sy1 + p.z * cy1
        const y = p.y * cx1 - z1 * sx1
        const z = p.y * sx1 + z1 * cx1
        const persp = 1 / (1.9 - z * 0.62)
        const sx = cx + x * R * persp * 1.55
        const sy = cy + y * R * persp * 1.55
        let a = Math.max(0, (z + 1.15) / 2.15)
        a *= 0.55 + 0.45 * Math.sin(t * 3 + p.tw)
        proj.push([sx, sy, a, persp])
      }

      for (let i = 0; i < N; i++) {
        const q = proj[i]
        const warm = i % 9 === 0
        const hot = i % 23 === 0
        ctx.fillStyle = hot
          ? `rgba(${pinkDot},${q[2] * 0.9})`
          : warm
            ? `rgba(${goldDot},${q[2] * 0.95})`
            : `rgba(${inkDot},${q[2] * inkAlpha})`
        const s = (warm ? 1.7 : 1.1) * q[3]
        ctx.beginPath()
        ctx.arc(q[0], q[1], s, 0, 6.283)
        ctx.fill()
      }

      ctx.lineWidth = 0.5
      for (let i = 0; i < N; i += 9) {
        for (let j = i + 9; j < Math.min(i + 45, N); j += 9) {
          const a = proj[i]
          const b = proj[j]
          const dx = a[0] - b[0]
          const dy = a[1] - b[1]
          if (dx * dx + dy * dy < 4200) {
            ctx.strokeStyle = `rgba(${goldDot},${0.16 * Math.min(a[2], b[2])})`
            ctx.beginPath()
            ctx.moveTo(a[0], a[1])
            ctx.lineTo(b[0], b[1])
            ctx.stroke()
          }
        }
      }

      if (!reduced) raf = requestAnimationFrame(frame)
    }

    window.addEventListener('resize', size)
    window.addEventListener('mousemove', onMove, { passive: true })
    frame()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', size)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
