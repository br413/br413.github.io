'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import { cn } from '@/lib/utils'
import { BASE_PATH, SITE_CONFIG } from '@/lib/constants'

const navLinks = [
  { href: '/story', label: 'Story' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Work' },
  { href: '/profile', label: 'Profile' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname() ?? ''
  const normalized = pathname.replace(BASE_PATH, '') || '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    const raf = requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || open
          ? 'border-line bg-background/70 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="group flex items-center gap-2 font-mono text-base font-bold tracking-wider">
          <span className="text-grad">{SITE_CONFIG.name.split(' ').map((w) => w[0]).join('')}</span>
          <span className="text-faint transition-colors group-hover:text-accent">_dev</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = normalized.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link text-sm font-medium',
                  active ? 'active text-foreground' : 'text-dim hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <ModeToggle />
          <Link href="/contact" className="btn-primary !px-5 !py-2.5 !text-sm">
            Let&apos;s talk
          </Link>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ModeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-dim hover:text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((link, i) => {
              const active = normalized.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-baseline gap-4 border-b border-line py-4 last:border-b-0',
                    active ? 'text-accent' : 'text-foreground'
                  )}
                >
                  <span className="mono-label">0{i + 1}</span>
                  <span className="text-lg font-medium">{link.label}</span>
                </Link>
              )
            })}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 justify-center">
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
