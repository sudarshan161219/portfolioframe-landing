import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Compare from './pages/Compare'
import Privacy from './pages/Privacy'
import { LocaleProvider } from './i18n/LocaleContext'
import type { Locale } from './i18n/config'

const NON_DEFAULT_LOCALES: Exclude<Locale, 'en'>[] = ['es', 'fr', 'de']

function LocaleBranch({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <Outlet />
    </LocaleProvider>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vs/:slug" element={<Compare />} />
      <Route path="/privacy" element={<Privacy />} />

      {NON_DEFAULT_LOCALES.map((locale) => (
        <Route key={locale} path={`/${locale}`} element={<LocaleBranch locale={locale} />}>
          <Route index element={<Home />} />
          <Route path="vs/:slug" element={<Compare />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      ))}

      <Route path="*" element={<Home />} />
    </Routes>
  )
}
