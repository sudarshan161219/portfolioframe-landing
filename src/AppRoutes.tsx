import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Compare from './pages/Compare'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vs/:slug" element={<Compare />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
