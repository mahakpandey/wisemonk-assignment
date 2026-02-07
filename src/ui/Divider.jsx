export default function Divider({ label = 'or', className = '' }) {
  return (
    <div className="relative py-1">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-slate-200" />
      </div>
      <div className="relative flex justify-center">
        <span
          className={`bg-white px-3 text-xs tracking-wide text-slate-400 ${className}`}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

