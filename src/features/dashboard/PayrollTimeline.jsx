import React from 'react'
import Card from '../../components/card/Card'
import { AlertCircle, Check, Hourglass } from 'lucide-react'



function PayrollTimelineItem({ date, label, status, byWisemonk, isLast }) {
  const isCompleted = status === 'completed'
  const isWarning = status === 'warning'
  const isPending = status === 'pending'
  return (
    <div className="relative flex gap-3">

      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-slate-200" aria-hidden />
      )}

      <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        {isCompleted && (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2684FF]/20">
            <Check className="h-3.5 w-3.5 text-[#2684FF]" strokeWidth={2.5} />
          </div>
        )}
        {isWarning && (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-400">
            <AlertCircle className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          </div>
        )}
        {isPending && (
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-slate-200 bg-white">
            <Hourglass className="h-3.5 w-3.5 text-slate-400" strokeWidth={2} />
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-2 gap-y-1 pb-5">
        <div className="flex min-w-0 flex-1 items-baseline gap-2">
          <span className="text-sm font-medium text-slate-900">{date}</span>
          <span className={isPending ? 'text-sm font-normal text-slate-900' : 'text-sm font-semibold text-slate-900'}>
            {label}
          </span>
        </div>
        {byWisemonk && (
          <span className="shrink-0 rounded-full bg-[#2684FF]/10 px-2.5 py-0.5 text-xs font-medium text-[#2684FF]">
            by Wisemonk
          </span>
        )}
      </div>
    </div>
  )
}


const PayrollTimeline = ({ payrollTimeline }) => {

  return (
      <Card>
                <div className="font-satoshi">
                  <h2 className="text-[16px] font-bold tracking-tight text-slate-900">
                    Payroll and Compliance Timeline
                  </h2>
                  <p className="mt-1 text-[12px] font-medium text-slate-500">
                    Key deadlines and milestones for the current month.
                  </p>
                </div>
                <div className="mt-4">
                  {payrollTimeline.map((item, index) => (
                    <PayrollTimelineItem
                      key={`${item.date}-${item.label}`}
                      {...item}
                      isLast={index === payrollTimeline.length - 1}
                    />
                  ))}
                </div>
              </Card>
  )
}

export default PayrollTimeline