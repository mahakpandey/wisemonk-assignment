function StatusBadge({ status }) {
  const s =
    status === 'Approved'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
      : status === 'Rejected'
        ? 'border-rose-200 bg-rose-50 text-rose-700'
        : 'border-amber-200 bg-amber-50 text-amber-700'

  return (
    <div className={['rounded-full border px-2.5 py-1 text-[11px] font-semibold', s].join(' ')}>
      {status}
    </div>
  )
}

export default function EmployeeListItem({ name, role, type, detail, status }) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-slate-100 text-sm font-semibold text-slate-700">
          {name
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0])
            .join('')}
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-slate-900">{name}</div>
          <div className="mt-0.5 text-xs text-slate-500">{role}</div>
        </div>
      </div>

      <div className="hidden min-w-0 flex-1 sm:block">
        <div className="text-sm font-semibold text-slate-800">{type}</div>
        <div className="mt-0.5 text-xs text-slate-500">{detail}</div>
      </div>

      <StatusBadge status={status} />
    </div>
  )
}


