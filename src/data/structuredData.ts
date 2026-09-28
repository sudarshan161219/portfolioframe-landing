// JSON-LD injected into <head> by scripts/prerender.mjs. Kept here rather
// than in index.html so each route gets only the blocks that describe it.
//
// No aggregateRating on purpose. The page shows the Chrome Web Store rating,
// but Google's review snippet guidelines say not to mark up ratings
// aggregated from other websites, so it stays visible text only.

export const softwareApplication = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Portfolio Frame',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Chrome',
  url: 'https://portfolioframe.com/',
  downloadUrl: 'https://chromewebstore.google.com/detail/kgpdfalcolcdidglbdnfnelgihlocmkf',
  description:
    'A Chrome extension that turns screenshots, code snippets and tweets into polished mockups with device frames, annotations and watermarks. Everything renders locally.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'Creator License',
      price: '19',
      priceCurrency: 'USD',
      description: 'One-time payment, no subscription',
    },
  ],
  author: {
    '@type': 'Person',
    name: 'BuildwithSud',
    url: 'https://buildwithsud.com',
  },
}

/**
 * FAQPage markup built from the same dictionary entries the page renders, so
 * the structured data can't drift from the visible questions and answers.
 */
export function faqPage(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/** Serialise for an inline <script> tag; escaping "<" keeps "</script>" inert. */
export function jsonLdScript(data: object): string {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">${json}</script>`
}
