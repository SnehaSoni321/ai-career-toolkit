import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Mail, Lock } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) return
    login(email)
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 w-full max-w-sm">
        <div className="flex items-center gap-2 justify-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-from via-accent-via to-accent-to flex items-center justify-center">
            <Sparkles size={20} className="text-white" />
          </div>
          <span className="font-semibold text-xl">
            Career<span className="gradient-text">AI</span>
          </span>
        </div>

        <h2 className="text-lg font-semibold text-center mb-6">Welcome back</h2>

        <div className="relative mb-4">
          <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:border-accent-via/60"
          />
        </div>

        <div className="relative mb-6">
          <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:border-accent-via/60"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-accent-from via-accent-via to-accent-to text-white font-medium py-3 rounded-xl text-sm hover:opacity-90 transition"
        >
          Login
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Demo login — koi bhi email/password chalega
        </p>
      </form>
    </div>
  )
}