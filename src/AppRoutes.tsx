import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Compare from './pages/Compare'
import Privacy from './pages/Privacy'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vs/:slug" element={<Compare />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
