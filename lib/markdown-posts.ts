import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

/** Article markdown files under /articles that power /blog/[slug] pages. */
export const MARKDOWN_POST_FILES: Record<string, string> = {
  'building-production-data-pipeline': 'building-production-data-pipeline.md',
  'data-quality-contracts-production-pipelines':
    'data-quality-contracts-production-pipelines.md',
  'oss-upstream-retrospective': 'oss-upstream-retrospective.md',
  'contract-versioning-production-pipelines':
    'contract-versioning-production-pipelines.md',
}

export function isMarkdownPost(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(MARKDOWN_POST_FILES, slug)
}

/** Rewrite GitHub blob article links to on-site blog URLs. */
function rewriteArticleLinks(content: string): string {
  return content.replace(
    /https:\/\/github\.com\/br413\/br413\.github\.io\/blob\/main\/articles\/([a-z0-9-]+)\.md/gi,
    '/blog/$1/'
  )
}

export function getMarkdownBody(slug: string): string | null {
  const filename = MARKDOWN_POST_FILES[slug]
  if (!filename) return null

  const filePath = path.join(process.cwd(), 'articles', filename)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf8')
  const { content } = matter(raw)
  return rewriteArticleLinks(content)
}
