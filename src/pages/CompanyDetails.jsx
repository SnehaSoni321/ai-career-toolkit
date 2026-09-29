import { useState } from 'react'
import { Building2, ExternalLink } from 'lucide-react'
import Card from '../components/common/Card.jsx'
import Loader from '../components/common/Loader.jsx'
import { fetchCompanySuggestions, fetchWikipediaSummary } from '../services/companyService.js'
import { generateCompanySummary } from '../services/geminiService.js'

export default function CompanyDetails() {
  const [query, setQuery] = useState('')
  const [company, setCompany] = useState(null)
  const [wiki, setWiki] = useState(null)
  const [aiSummary, setAiSummary] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    setError('')
    setCompany(null)
    setWiki(null)
    setAiSummary('')
    try {
      const suggestions = await fetchCompanySuggestions(query)
      const best = suggestions?.[0] || { name: query, domain: '', logo: '' }
      setCompany(best)

      const [wikiData, summary] = await Promise.all([
        fetchWikipediaSummary(best.name),
        generateCompanySummary(best.name),
      ])
      setWiki(wikiData)
      setAiSummary(summary)
    } catch (e) {
      setError('Could not fetch company details. Try a different name.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-from via-accent-via to-accent-to flex items-center justify-center">
          <Building2 size={20} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold">Company Details</h1>
      </div>

      <Card className="mb-6 flex gap-3">
        <input
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent-via/60"
          placeholder="Enter company name e.g. Google"
          value={query}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="bg-gradient-to-r from-accent-from via-accent-via to-accent-to text-white font-medium px-6 py-3 rounded-xl text-sm disabled:opacity-40 hover:opacity-90 transition"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </Card>

      {loading && <Loader text="Fetching company info..." />}
      {error && <p className="text-red-400 text-sm">{error}</p>}

      {company && !loading && (
        <div className="space-y-5">
          <Card className="flex items-center gap-4">
            {company.logo && (
              <img src={company.logo} alt={company.name} className="w-14 h-14 rounded-xl bg-white/10 p-2" />
            )}
            <div>
              <h2 className="text-xl font-semibold">{company.name}</h2>
              {company.domain && (
                <a
                  href={`https://${company.domain}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent-via flex items-center gap-1 hover:underline"
                >
                  {company.domain} <ExternalLink size={12} />
                </a>
              )}
            </div>
          </Card>

          {wiki?.extract && (
            <Card>
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{wiki.extract}</p>
            </Card>
          )}

          {aiSummary && (
            <Card className="whitespace-pre-wrap text-sm text-gray-200 leading-relaxed">
              <h3 className="font-semibold mb-2">Interview Prep Insight (AI)</h3>
              {aiSummary}
            </Card>
          )}
        </div>
      )}
    </div>
  )
}
