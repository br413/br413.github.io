'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

/* ---------- reveals ----------
   Content is visible unless <html> has .js-anim (added below on mount), so a
   scripting failure never hides anything. Above-the-fold elements reveal
   immediately; the rest reveal when scrolled into view. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    document.documentElement.classList.add('js-anim')
    const reveal = () => el.classList.add('rv-in')
    // already in (or near) the viewport → reveal now, don't wait for scroll
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      const raf = requestAnimationFrame(reveal)
      return () => cancelAnimationFrame(raf)
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal()
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={cn('rv', className)}
      style={delay ? ({ '--rv-delay': `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}

/* above-the-fold alias — same behavior (reveals immediately when in view) */
export const MountReveal = Reveal

export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={cn('stagger', className)}>
      {children}
    </div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}

/* ---------- count-up number ---------- */
export function Counter({
  value,
  suffix = '',
  className,
}: {
  value: number
  suffix?: string
  className?: string
}) {
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(value * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value])

  return (
    <span className={cn('tabular-nums', className)}>
      {display}
      {suffix}
    </span>
  )
}

/* ---------- 3D tilt + glow-follow card ---------- */
export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const gx = useMotionValue(50)
  const gy = useMotionValue(50)
  const rotateX = useTransform(rx, (v) => `${v}deg`)
  const rotateY = useTransform(ry, (v) => `${v}deg`)
  const glow = useTransform(
    [gx, gy],
    ([x, y]) =>
      `radial-gradient(340px circle at ${x}% ${y}%, color-mix(in srgb, var(--grad-2) 26%, transparent), transparent 65%)`
  )

  function onMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * 9)
    rx.set((0.5 - py) * 9)
    gx.set(px * 100)
    gy.set(py * 100)
  }
  function onLeave() {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={cn('gcard group relative [transform-style:preserve-3d]', className)}
    >
      <motion.div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </motion.div>
  )
}

/* ---------- infinite skill marquee ---------- */
export function Marquee({
  items,
  duration = 60,
  reverse = false,
}: {
  items: string[]
  duration?: number
  reverse?: boolean
}) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className="marquee-track gap-3"
        style={
          {
            '--marquee-duration': `${duration}s`,
            animationDirection: reverse ? 'reverse' : 'normal',
          } as React.CSSProperties
        }
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap rounded-full border border-line bg-panel/60 px-4 py-2 text-sm text-dim"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- magnetic gradient text underline on hover (used for links) ---------- */
export function MotionDiv(props: React.ComponentProps<typeof motion.div>) {
  return <motion.div {...props} />
}
