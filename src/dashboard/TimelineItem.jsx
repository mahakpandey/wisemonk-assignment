function Dot({ status }) {
  const style =
    status === 'in_progress'
      ? 'bg-amber-500'
      : status === 'blocked'
        ? 'bg-rose-500'
        : 'bg-slate-900'

  return <div className={['mt-1.5 size-2.5 rounded-full', style].join(' ')} />
}

function StatusPill({ status }) {
  const s =
    status === 'in_progress'
      ? 'border-amber-200 bg-amber-50 text-amber-700'
      : status === 'blocked'
        ? 'border-rose-200 bg-rose-50 text-rose-700'
        : 'border-slate-200 bg-white text-slate-600'

  const label =
    status === 'in_progress' ? 'In progress' : status === 'blocked' ? 'Blocked' : 'Upcoming'

  return (
    <div className={['rounded-full border px-2 py-1 text-[11px] font-semibold', s].join(' ')}>
      {label}
    </div>
  )
}

export default function TimelineItem({ title, subtitle, meta, status }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">
      <Dot status={status} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-slate-900">{title}</div>
            <div className="mt-1 text-xs text-slate-500">{subtitle}</div>
          </div>
          <StatusPill status={status} />
        </div>
        <div className="mt-2 text-xs font-semibold text-slate-600">{meta}</div>
      </div>
    </div>
  )
}


