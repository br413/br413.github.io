import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Reveal } from '@/components/fx'
import { blogPosts, blogPostContents } from '@/lib/data'

export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.slug !== 'story')
    .map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((resolvedParams) => {
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug)
    if (!post) return { title: 'Post not found' }
    return {
      title: post.title,
      description: post.excerpt,
      alternates: { canonical: `/blog/${post.slug}` },
      openGraph: {
        type: 'article',
        title: `${post.title} | Brian Yang`,
        description: post.excerpt,
        publishedTime: post.date,
        tags: post.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${post.title} | Brian Yang`,
        description: post.excerpt,
      },
    }
  })
}

const uncleLinks = [
  {
    href: 'https://retrouvaille.info/',
    title: 'Retrouvaille',
    note: 'A lifeline for marriages — the program that started it all',
  },
  {
    href: 'https://dialoguedaily.app/',
    title: 'Dialogue Daily',
    note: 'A daily conversation app for couples — the project we built together',
  },
  {
    href: 'https://advancedwebstrategies.com/about-us/',
    title: 'Advanced Web Strategies',
    note: 'His team and company — where I work alongside him today',
  },
]

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  const content = blogPostContents.find((c) => c.slug === slug)

  if (!post) notFound()

  return (
    <>
      {/* Header */}
      <section className="border-b border-line pb-14 pt-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.18em] text-dim transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              BACK TO BLOG
            </Link>
            <h1 className="display mt-6 max-w-4xl text-4xl sm:text-6xl">{post.title}</h1>
            <p className="mono-label mt-5">
              {post.date} · {post.tags.join(' · ').toUpperCase()}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-[68ch]">
            {content ? (
              <article>
                {content.sections.map((section, sIndex) => (
                  <Reveal key={sIndex}>
                    <div className={sIndex > 0 ? 'mt-14' : undefined}>
                      {section.heading && (
                        <h2 className="mb-6 flex items-baseline gap-4 text-2xl font-semibold tracking-tight">
                          <span className="mono-label text-accent">
                            {String(sIndex).padStart(2, '0')}
                          </span>
                          {section.heading}
                        </h2>
                      )}
                      <div className="prose-craft text-[1.05rem]">
                        {section.paragraphs.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </article>
            ) : (
              <p className="leading-relaxed text-dim">{post.excerpt}</p>
            )}

            {/* Uncle links */}
            {slug === 'nine-years-and-uncle' && (
              <Reveal className="mt-16">
                <div className="rounded-2xl border border-line bg-background-2 p-8">
                  <p className="mono-label text-accent">ABOUT UNCLE</p>
                  <p className="mt-3 text-sm leading-relaxed text-dim">
                    The marriage and couples-counseling service he runs, and the work he stands
                    behind:
                  </p>
                  <div className="mt-5">
                    {uncleLinks.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-baseline justify-between gap-4 border-b border-line py-4 last:border-b-0"
                      >
                        <span>
                          <span className="font-semibold transition-colors group-hover:text-accent">
                            {l.title}
                          </span>
                          <span className="mt-0.5 block text-sm text-dim">{l.note}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-colors group-hover:text-accent" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* CTA */}
            <Reveal className="mt-16">
              <div className="border-t border-line pt-10">
                <p className="text-lg font-medium">Thanks for reading.</p>
                <p className="mt-1 text-sm text-dim">Want to talk about your project?</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-bright"
                >
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
