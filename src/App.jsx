import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout.jsx'
import ProtectedRoute from './components/common/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import InterviewQuestions from './pages/InterviewQuestions.jsx'
import CompanyDetails from './pages/CompanyDetails.jsx'
import Roadmap from './pages/Roadmap.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/interview-questions" element={<InterviewQuestions />} />
                <Route path="/company-details" element={<CompanyDetails />} />
                <Route path="/roadmap" element={<Roadmap />} />
              </Routes>
            </DashboardLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}