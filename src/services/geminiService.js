import { GoogleGenAI } from '@google/genai'

// API key comes from .env -> VITE_GEMINI_API_KEY (never hardcode it here)
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })
const MODEL = 'gemini-3.6-flash'

async function generateText(prompt) {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: prompt,
  })
  return response.text
}

export async function generateInterviewQuestions({ role, level, company }) {
  const prompt = `Act as a senior technical interviewer. Generate 8 interview questions for the role "${role}" at ${level || 'mid'} level${
    company ? ` for a company like ${company}` : ''
  }. Mix technical + behavioral. Return ONLY a numbered list, no extra commentary.`
  return generateText(prompt)
}

export async function generateRoadmap({ goal, currentLevel }) {
  const prompt = `Create a clear, structured learning roadmap to become a "${goal}". The learner's current level is: ${
    currentLevel || 'beginner'
  }. Break it into phases (e.g. Phase 1, Phase 2...) with bullet points of topics/skills under each phase, and rough time estimate per phase. Keep it practical and concise. Return in markdown.`
  return generateText(prompt)
}

export async function generateCompanySummary(companyName) {
  const prompt = `Give a short, practical summary for a job-seeker about the company "${companyName}": what they do, tech stack they commonly use, typical interview process/rounds, and 2-3 tips to crack their interview. Keep it under 180 words. Return in markdown.`
  return generateText(prompt)
}
