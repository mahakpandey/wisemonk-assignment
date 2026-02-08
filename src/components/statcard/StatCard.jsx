import Card from "../card/Card"
export default function StatCard({ label, value, green, hint }) {
  return (
    <Card className="cursor-pointer hover:bg-gray-100">
        <div className="flex flex-col items-start justify-between gap-2.5">
          <div className="text-sm font-bold text-slate-700">{label}</div>
          <div className="text-[26px] font-bold tracking-tight text-slate-900">
            {value}
          </div>
          {hint ? <div className={["text-xs font-medium", green ? 'text-green-700' : 'text-slate-500'].join(' ')}>{hint}</div> : null}

        </div>
    </Card>
  )
}


