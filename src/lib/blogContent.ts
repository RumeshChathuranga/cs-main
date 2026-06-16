const OPEN_QUOTE = '(?:&quot;|"|“)'
const CLOSE_QUOTE = '(?:&quot;|"|”)'

const QUOTED_PARAGRAPH_RE = new RegExp(
  `^<p(?:\\s[^>]*)?>(?:\\s*)${OPEN_QUOTE}([\\s\\S]*?)${CLOSE_QUOTE}(?:\\s*)</p>$`,
  'i',
)

function isFullyQuotedParagraph(paragraphHtml: string): boolean {
  return QUOTED_PARAGRAPH_RE.test(paragraphHtml.trim())
}

function addPullQuoteClass(paragraphHtml: string): string {
  if (paragraphHtml.includes('blog-pull-quote')) return paragraphHtml

  if (/^<p\s[^>]*class="/i.test(paragraphHtml)) {
    return paragraphHtml.replace(
      /^<p(\s[^>]*class=")([^"]*)(")/i,
      '<p$1$2 blog-pull-quote$3',
    )
  }

  if (/^<p\s/i.test(paragraphHtml)) {
    return paragraphHtml.replace(/^<p(\s)/i, '<p class="blog-pull-quote"$1')
  }

  return paragraphHtml.replace(/^<p>/i, '<p class="blog-pull-quote">')
}

function removePullQuoteClass(paragraphHtml: string): string {
  return paragraphHtml
    .replace(/\sclass="blog-pull-quote"/gi, '')
    .replace(/\sclass='blog-pull-quote'/gi, '')
}

/**
 * Adds `blog-pull-quote` to paragraphs entirely wrapped in double quotes.
 * Removes the class when quotes are no longer present.
 */
export function enhanceBlogContentHtml(html: string): string {
  if (!html.trim()) return html

  return html.replace(/<p(?:\s[^>]*)?>[\s\S]*?<\/p>/gi, (paragraph) => {
    if (isFullyQuotedParagraph(paragraph)) {
      return addPullQuoteClass(paragraph)
    }
    return removePullQuoteClass(paragraph)
  })
}
