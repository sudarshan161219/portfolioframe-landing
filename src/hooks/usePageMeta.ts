import { useEffect } from 'react'
import { HREFLANG_CODES, LOCALES, type Locale } from '../i18n/config'
import { localizePath } from '../i18n/paths'

type Meta = {
  title: string
  description: string
  /** Locale-independent path, e.g. "/", "/vs/carbon", "/privacy". */
  path: string
  locale: Locale
  image?: string
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

function setOrCreateLink(rel: string, hreflang: string, href: string) {
  const selector = `link[rel="${rel}"][hreflang="${hreflang}"]`
  let el = document.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function usePageMeta({ title, description, path, locale, image }: Meta) {
  useEffect(() => {
    document.title = title
    document.documentElement.lang = locale
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)

    const canonicalUrl = `https://portfolioframe.com${localizePath(path, locale)}`
    setMeta('link[rel="canonical"]', 'href', canonicalUrl)
    setMeta('meta[property="og:url"]', 'content', canonicalUrl)

    if (image) {
      setMeta('meta[property="og:image"]', 'content', image)
      setMeta('meta[name="twitter:image"]', 'content', image)
    }

    for (const l of LOCALES) {
      setOrCreateLink('alternate', HREFLANG_CODES[l], `https://portfolioframe.com${localizePath(path, l)}`)
    }
    setOrCreateLink('alternate', 'x-default', `https://portfolioframe.com${path}`)
  }, [title, description, path, locale, image])
}
