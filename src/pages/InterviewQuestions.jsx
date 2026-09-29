import { useState } from 'react'
import { BrainCircuit } from 'lucide-react'
import Card from '../components/common/Card.jsx'
import Loader from '../components/common/Loader.jsx'
import { generateInterviewQuestions } from '../services/geminiService.js'

export default function InterviewQuestions() {
  const [role, setRole] = useState('')
  const [level, setLevel] = useState('mid')
  const [company, setCompany] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!role.trim()) return
    setLoading(true)
    setError('')
    setResult('')
    try {
      const text = await generateInterviewQuestions({ role, level, company })
      setResult(text)
    } catch (e) {
      setError('Something went wrong. Check your API key / network.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-from via-accent-via to-accent-to flex items-center justify-center">
          <BrainCircuit size={20} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold">Interview Question Generator</h1>
      </div>

      <Card className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-via/60 md:col-span-1"
            placeholder="Role e.g. Frontend Developer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <select
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-via/60"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option className="bg-surface2 text-gray-200" value="fresher">Fresher</option>
            <option className="bg-surface2 text-gray-200" value="mid">Mid Level</option>
            <option className="bg-surface2 text-gray-200" value="senior">Senior</option>
          </select>
          <input
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-via/60"
            placeholder="Company (optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading || !role.trim()}
          className="mt-4 bg-gradient-to-r from-accent-from via-accent-via to-accent-to text-white font-medium px-6 py-3 rounded-xl text-sm disabled:opacity-40 hover:opacity-90 transition"
        >
          {loading ? 'Generating...' : 'Generate Questions'}
        </button>
      </Card>

      {loading && <Loader text="Asking Gemini for questions..." />}
      {error && <p className="text-red-400 text-sm">{error}</p>}

      {result && (
        <Card className="whitespace-pre-wrap text-gray-200 leading-relaxed text-sm">
          {result}
        </Card>
      )}
    </div>
  )
}
