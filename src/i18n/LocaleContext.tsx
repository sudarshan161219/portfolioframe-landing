import { createContext, useContext, type ReactNode } from 'react'
import { DEFAULT_LOCALE, type Locale } from './config'
import { en } from './locales/en'
import { es } from './locales/es'
import { fr } from './locales/fr'
import { de } from './locales/de'
import type { Dictionary } from './types'

const DICTIONARIES: Record<Locale, Dictionary> = { en, es, fr, de }

type LocaleContextValue = {
  locale: Locale
  dict: Dictionary
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  dict: DICTIONARIES[DEFAULT_LOCALE],
})

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  return (
    <LocaleContext.Provider value={{ locale, dict: DICTIONARIES[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
