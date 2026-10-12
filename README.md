# AI Career Toolkit

An AI-powered career prep dashboard built for students — generate interview questions, research companies, and get a personalized learning roadmap, all in one place.


## Features

- **Interview Question Generator** — Enter a role, experience level, and (optionally) a company name to get AI-generated interview questions covering both technical and behavioral topics.
- **Company Details Finder** — Search any company to get its logo, domain, a quick Wikipedia summary, and an AI-generated interview-prep insight.
- **Roadmap Generator** — Enter a career goal and your current skill level to get a structured, phase-wise learning roadmap.
- **Demo login** — Simple login screen for a personalized dashboard feel (not intended as real authentication).

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Styling | Tailwind CSS (v4) |
| Routing | React Router |
| AI | Google Gemini API (`@google/genai`) |
| Company data | Clearbit Autocomplete API + Wikipedia API |
| Icons | lucide-react |
| Markdown rendering | react-markdown |

## Screenshots

*(Add a screenshot or two of the dashboard, interview questions page, and roadmap page here)*

## Getting started

### Prerequisites
- [Node.js](https://nodejs.org) (LTS version)
- A free [Gemini API key](https://aistudio.google.com/apikey)

### Installation

```bash
git clone https://github.com/SnehaSoni321/ai-career-toolkit.git
cd ai-career-toolkit
npm install
```

### Environment setup

Copy the example environment file and add your own Gemini API key:

```bash
cp .env.example .env
```

Then open `.env` and set:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Run locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for production

```bash
npm run build
```

## Project structure

```
src/
  components/
    layout/       # Sidebar, DashboardLayout
    common/        Card, Loader, ProtectedRoute
  context/
    AuthContext.jsx   # Simple localStorage-based demo auth
  pages/
    Login.jsx
    Dashboard.jsx
    InterviewQuestions.jsx
    CompanyDetails.jsx
    Roadmap.jsx
  services/
    geminiService.js    # Gemini API calls
    companyService.js   # Clearbit + Wikipedia calls
  App.jsx
  main.jsx
```

## A note on the API key

This is a frontend-only project with no backend, so API calls go directly from the browser to Gemini. This means the API key is visible in network requests from the deployed site — acceptable for a student/demo project, but **not** a pattern to use for production apps with real users. A production version would route requests through a backend proxy to keep the key private.

## License

This project is open source and available for learning purposes.
