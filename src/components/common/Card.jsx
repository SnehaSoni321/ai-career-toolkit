export default function Card({ children, className = '' }) {
  return (
    <div className={`glass rounded-2xl p-6 fade-in-up ${className}`}>
      {children}
    </div>
  )
}
