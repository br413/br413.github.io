'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { TiltCard } from '@/components/fx'
import { BASE_PATH } from '@/lib/constants'

export type FeaturedProject = {
  title: string
  blurb: string
  year: string
  tags: string[]
  href?: string
  image?: string
}

export function FeaturedCard({ project }: { project: FeaturedProject }) {
  const Wrapper: React.ElementType = project.href ? 'a' : 'div'
  const wrapperProps = project.href
    ? { href: project.href, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <TiltCard className="h-full overflow-hidden">
      <Wrapper {...wrapperProps} className="relative z-10 flex h-full flex-col">
        {project.image && (
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={`${BASE_PATH}${project.image}`}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/10 to-transparent" />
            <span className="absolute right-3 top-3 rounded-full border border-line bg-background/70 px-2.5 py-1 font-mono text-[0.65rem] tracking-widest text-dim backdrop-blur">
              {project.year}
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
            {project.href && (
              <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-colors group-hover:text-accent" />
            )}
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-dim">{project.blurb}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider text-faint"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </TiltCard>
  )
}
