import type { ComparisonSlug } from '../i18n/types'

export const COMPARISON_SLUGS: ComparisonSlug[] = ['carbon', 'ray-so', 'screely', 'shots-so']

// Blog guides linked from each /vs/ page (internal linking for SEO)
export const RELATED_GUIDES: Record<ComparisonSlug, { slug: string; title: string }[]> = {
  carbon: [
    { slug: 'carbon-alternative', title: 'Best Carbon Alternative: 7 Code Snippet Tools' },
    { slug: 'how-to-make-beautiful-code-screenshots', title: 'How to Make Beautiful Code Screenshots' },
    { slug: 'best-code-screenshot-themes', title: 'Best Code Screenshot Themes' },
  ],
  'ray-so': [
    { slug: 'ray-so-alternative', title: 'Best Ray.so Alternative: 7 Code Snippet Tools' },
    { slug: 'best-code-screenshot-themes', title: 'Best Code Screenshot Themes' },
    { slug: 'how-to-make-beautiful-code-screenshots', title: 'How to Make Beautiful Code Screenshots' },
  ],
  screely: [
    { slug: 'how-to-beautify-screenshots', title: 'How to Beautify Screenshots' },
    { slug: 'complete-guide-to-beautiful-screenshots', title: 'The Complete Guide to Beautiful Screenshots' },
    { slug: 'tweet-to-image', title: 'Tweet to Image: Turn Tweets into Clean Graphics' },
  ],
  'shots-so': [
    { slug: 'iphone-screenshot-mockup', title: 'How to Create an iPhone Screenshot Mockup' },
    { slug: 'complete-guide-to-beautiful-screenshots', title: 'The Complete Guide to Beautiful Screenshots' },
    { slug: 'how-to-beautify-screenshots', title: 'How to Beautify Screenshots' },
  ],
}
