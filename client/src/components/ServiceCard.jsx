export default function ServiceCard({ icon: Icon, title, description, to }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3">
        {Icon && <Icon className="h-8 w-8 text-brandBlue" />}
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      {to && (
        <a href={to} className="inline-block mt-4 text-sm font-medium text-brandBlue hover:underline">
          Learn More →
        </a>
      )}
    </div>
  )
}

