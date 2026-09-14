import { DEFAULT_LOCALE, LOCALES, type Locale } from './config'

/**
 * Prefix a root-relative path (e.g. "/privacy", "/vs/carbon", "/#pricing")
 * with the given locale, unless it's the default locale.
 */
export function withLocale(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path
  if (path.startsWith('#')) return path
  return `/${locale}${path === '/' ? '' : path}` || `/${locale}`
}

/**
 * Strip a leading locale segment from a pathname, returning the
 * locale-independent path plus the detected locale.
 */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const [, first, ...rest] = pathname.split('/')
  if (isKnownNonDefaultLocale(first)) {
    const stripped = '/' + rest.join('/')
    return { locale: first, path: stripped === '/' ? '/' : stripped.replace(/\/$/, '') || '/' }
  }
  return { locale: DEFAULT_LOCALE, path: pathname || '/' }
}

function isKnownNonDefaultLocale(value: string): value is Exclude<Locale, typeof DEFAULT_LOCALE> {
  return (LOCALES as readonly string[]).includes(value) && value !== DEFAULT_LOCALE
}

/**
 * Given the current pathname, compute the equivalent URL for another locale
 * (used by the language switcher and hreflang tags).
 */
export function localizePath(currentPathname: string, targetLocale: Locale): string {
  const { path } = splitLocale(currentPathname)
  return withLocale(path, targetLocale)
}
