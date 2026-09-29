import { Link } from 'react-router-dom'
import { BrainCircuit, Building2, Map, ArrowRight } from 'lucide-react'
import Card from '../components/common/Card.jsx'

const features = [
  {
    to: '/interview-questions',
    icon: BrainCircuit,
    title: 'Interview Questions',
    desc: 'Generate role-specific interview questions instantly using AI.',
  },
  {
    to: '/company-details',
    icon: Building2,
    title: 'Company Details',
    desc: 'Search any company and get a quick, useful summary before your interview.',
  },
  {
    to: '/roadmap',
    icon: Map,
    title: 'Roadmap Generator',
    desc: 'Get a step-by-step learning roadmap for any career goal.',
  },
]

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-1">
        Welcome back, <span className="gradient-text">Student</span> 👋
      </h1>
      <p className="text-gray-400 mb-8">Your AI-powered career prep toolkit.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map(({ to, icon: Icon, title, desc }, i) => (
          <Link key={to} to={to}>
            <Card className="gradient-border h-full hover:-translate-y-1 hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.5)] transition-all duration-300 cursor-pointer">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-from via-accent-via to-accent-to flex items-center justify-center mb-4">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-400 mb-4">{desc}</p>
              <span className="text-sm text-accent-via flex items-center gap-1">
                Open <ArrowRight size={14} />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
