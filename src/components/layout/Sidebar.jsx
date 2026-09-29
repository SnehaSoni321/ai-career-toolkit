import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, BrainCircuit, Building2, Map, Sparkles, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext.jsx'

const links = [
  { to: '/', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/interview-questions', label: 'Interview Questions', icon: BrainCircuit },
  { to: '/company-details', label: 'Company Details', icon: Building2 },
  { to: '/roadmap', label: 'Roadmap Generator', icon: Map },
]

export default function Sidebar() {
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <aside className="w-64 shrink-0 h-screen sticky top-0 glass border-r border-white/5 flex flex-col p-5">
      <div className="flex items-center gap-2 mb-10 px-1">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-from via-accent-via to-accent-to flex items-center justify-center">
          <Sparkles size={18} className="text-white" />
        </div>
        <span className="font-semibold text-lg tracking-wide">
          Career<span className="gradient-text">AI</span>
        </span>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-accent-from/20 via-accent-via/20 to-accent-to/20 text-white border border-white/10 shadow-[0_0_20px_-6px_rgba(124,58,237,0.6)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition mt-auto mb-2"
      >
        <LogOut size={18} />
        Logout {user && `(${user.email})`}
      </button>

      <div className="glass rounded-xl p-4 text-xs text-gray-400">
        Built for students, powered by <span className="gradient-text font-semibold">Gemini AI</span>
      </div>
    </aside>
  )
}