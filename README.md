# Career AI Dashboard

3 tools in one dashboard: Interview Question Generator, Company Details Finder, Roadmap Generator.

## Setup

```bash
npm install
cp .env.example .env
# open .env and paste your Gemini API key
npm run dev
```

Get a free Gemini API key from https://aistudio.google.com/apikey — **regenerate a fresh key and never commit it to GitHub.**

## Stack
- React + Vite
- Tailwind CSS (dark glassmorphism theme)
- Gemini API (`@google/genai`) — interview questions + roadmap + company AI insight
- Clearbit Autocomplete + Wikipedia API — company logo/domain/about (no key needed)
