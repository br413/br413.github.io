import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/fx'
import { blogPosts, blogPostContents, storyParagraphs } from '@/lib/data'

export const metadata = {
  title: 'Blog',
  description: 'Project write-ups, career stories, and lessons learned from decades in the trenches — by Brian Yang, Software Engineer.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Brian Yang',
    description: 'Project write-ups, career stories, and lessons learned from decades in the trenches — by Brian Yang, Software Engineer.',
  },
}

function estimateReadTime(text: string) {
  const words = text.split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

function readTimeFor(slug: string, excerpt: string) {
  if (slug === 'story') return estimateReadTime(storyParagraphs.join(' '))
  const content = blogPostContents.find((c) => c.slug === slug)
  if (content) {
    return estimateReadTime(
      content.sections.flatMap((s) => s.paragraphs).join(' ')
    )
  }
  return estimateReadTime(excerpt)
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-line pb-14 pt-36">
        <div className="aurora" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="eyebrow">Writing</p>
            <h1 className="display mt-3 text-4xl sm:text-6xl">
              Stories &amp; <span className="text-grad">lessons.</span>
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-dim">
              Project write-ups, career stories, and lessons learned from decades in the trenches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <Link
              href={featured.slug === 'story' ? '/story' : `/blog/${featured.slug}`}
              className="group block border-b border-line pb-14"
            >
              <p className="mono-label text-accent">
                FEATURED · {featured.date} · {readTimeFor(featured.slug, featured.excerpt)} MIN
              </p>
              <h2 className="display mt-4 max-w-3xl text-3xl transition-colors group-hover:text-accent sm:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-[60ch] leading-relaxed text-dim">{featured.excerpt}</p>
              <p className="mt-6 inline-flex items-center gap-2 font-medium text-accent">
                Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          </Reveal>

          {/* Rest */}
          <Reveal>
            <div>
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={post.slug === 'story' ? '/story' : `/blog/${post.slug}`}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-6 border-b border-line px-1 py-8 transition-[padding,background-color] duration-300 hover:bg-background-2 hover:pl-4"
                >
                  <span>
                    <span className="block text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                      {post.title}
                    </span>
                    <span className="mt-2 block max-w-[60ch] text-sm leading-relaxed text-dim">
                      {post.excerpt}
                    </span>
                  </span>
                  <span className="mono-label pt-1">
                    {post.date} · {readTimeFor(post.slug, post.excerpt)} MIN
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
