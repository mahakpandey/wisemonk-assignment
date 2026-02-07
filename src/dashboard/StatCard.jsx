
export default function StatCard({ label, value, green, hint }) {
  return (
    <div className="p-5 bg-white hover:bg-[#F0F1F1] rounded-lg shadow-xs">
      <div className="flex items-start justify-between gap-3 ">
        <div className="min-w-0">
          <div className="text-sm font-bold text-slate-700">{label}</div>
          <div className="mt-2 text-[26px] font-bold tracking-tight text-slate-900">
            {value}
          </div>
        </div>

      </div>
      {hint ? <div className={["mt-3 text-xs font-medium", green? 'text-green-700': 'text-slate-500'].join(' ')}>{hint}</div> : null}
    </div>
  )
}


