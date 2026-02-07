import { useEffect, useMemo, useState } from 'react'
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import NavBar from './pages/NavBar.jsx'

function normalizeHashRoute(hash) {
  const raw = (hash || '').replace(/^#/, '')
  if (!raw || raw === '/') return '/login'
  if (raw.startsWith('/')) return raw
  return `/${raw}`
}

function useHashRoute() {
  const [route, setRoute] = useState(() => normalizeHashRoute(window.location.hash))

  useEffect(() => {
    const onChange = () => setRoute(normalizeHashRoute(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const navigate = (to) => {
    window.location.hash = normalizeHashRoute(to)
  }

  return { route, navigate }
}

export default function App() {
  const { route, navigate } = useHashRoute()

  const screen = useMemo(() => {
    if (route === '/dashboard') return 'dashboard'
    return 'login'
  }, [route])

  if (screen === 'dashboard') {
    return <DashboardPage onLogout={() => navigate('/login')} />
  }

  return (
    <div className='flex flex-col min-h-screen w-screen max-w-screen max-h-screen overflow-y-auto'>
      <NavBar />
      <LoginPage onSignedIn={() => navigate('/dashboard')} />
    </div>
  )
}
