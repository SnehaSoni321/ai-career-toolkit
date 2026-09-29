export default function Loader({ text = 'Generating...' }) {
  return (
    <div className="flex items-center gap-3 text-gray-300 py-6 pulse-glow">
      <div className="w-5 h-5 rounded-full border-2 border-accent-via border-t-transparent animate-spin" />
      <span className="text-sm">{text}</span>
    </div>
  )
}
