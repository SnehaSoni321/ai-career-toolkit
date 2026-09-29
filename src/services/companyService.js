// Clearbit Autocomplete: free, no API key needed -> gives logo + domain
export async function fetchCompanySuggestions(query) {
  if (!query) return []
  const res = await fetch(
    `https://autocomplete.clearbit.com/v1/companies/suggest?query=${encodeURIComponent(query)}`
  )
  if (!res.ok) return []
  return res.json() // [{ name, domain, logo }]
}

// Wikipedia summary: free, no API key needed -> gives basic "about" text
export async function fetchWikipediaSummary(companyName) {
  const res = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(companyName)}`
  )
  if (!res.ok) return null
  const data = await res.json()
  return {
    title: data.title,
    extract: data.extract,
    thumbnail: data.thumbnail?.source || null,
  }
}
