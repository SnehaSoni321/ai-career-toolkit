import { useState } from 'react'
import { Map } from 'lucide-react'
import Card from '../components/common/Card.jsx'
import Loader from '../components/common/Loader.jsx'
import { generateRoadmap } from '../services/geminiService.js'

export default function Roadmap() {
  const [goal, setGoal] = useState('')
  const [currentLevel, setCurrentLevel] = useState('beginner')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!goal.trim()) return
    setLoading(true)
    setError('')
    setResult('')
    try {
      const text = await generateRoadmap({ goal, currentLevel })
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
          <Map size={20} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold">Roadmap Generator</h1>
      </div>

      <Card className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-via/60"
            placeholder="Goal e.g. Full Stack Developer"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <select
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-via/60"
            value={currentLevel}
            onChange={(e) => setCurrentLevel(e.target.value)}
          >
            <option className="bg-surface2 text-gray-200" value="beginner">Beginner</option>
            <option className="bg-surface2 text-gray-200" value="some-basics">Know Some Basics</option>
            <option className="bg-surface2 text-gray-200" value="intermediate">Intermediate</option>
          </select>
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading || !goal.trim()}
          className="mt-4 bg-gradient-to-r from-accent-from via-accent-via to-accent-to text-white font-medium px-6 py-3 rounded-xl text-sm disabled:opacity-40 hover:opacity-90 transition"
        >
          {loading ? 'Generating...' : 'Generate Roadmap'}
        </button>
      </Card>

      {loading && <Loader text="Building your roadmap..." />}
      {error && <p className="text-red-400 text-sm">{error}</p>}

      {result && (
        <Card className="whitespace-pre-wrap text-gray-200 leading-relaxed text-sm">
          {result}
        </Card>
      )}
    </div>
  )
}
