export const LOCALES = ['en', 'es', 'fr', 'de'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
}

// BCP 47 tags used for hreflang / html[lang]. Plain ISO 639-1 codes are fine
// here since none of these locales need a region subtag.
export const HREFLANG_CODES: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  fr: 'fr',
  de: 'de',
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value)
}
