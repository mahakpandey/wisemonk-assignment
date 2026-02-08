import React from 'react'
import Card from '../../components/card/Card'
import { AlertCircle, Check, Hourglass } from 'lucide-react'



function PayrollTimelineItem({ date, label, status, byWisemonk, isLast }) {
  const isCompleted = status === 'completed'
  const isWarning = status === 'warning'
  const isPending = status === 'pending'
  return (
    <div className="relative flex gap-3 pb-4.25">

      {!isLast && (
        <div className="absolute left-[17px] top-10 bottom-0 w-px bg-slate-200" aria-hidden />
      )}

      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
        {isCompleted && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2684FF]/20">
            <Check className="h-6 w-6 text-[#2684FF]" strokeWidth={1} />
          </div>
        )}
        {isWarning && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-400">
            <AlertCircle className="h-6 w-6 text-white" strokeWidth={1} />
          </div>
        )}
        {isPending && (
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200 bg-white">
            <Hourglass className="h-6 w-6 text-slate-400" strokeWidth={1} />
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-2 gap-y-1">
        <div className="flex min-w-0 flex-1 items-baseline gap-4">
          <span className="text-sm font-bold text-gray-500 pr-8">{date}</span>
          <span className={[isPending ? 'text-sm font-bold text-slate-900' : 'text-sm font-bold text-slate-900', 'p-2']}>
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
                <div className="flex flex-col gap-2.5 pb-3 border-b border-slate-200">
                  <h2 className="text-[16px] font-bold tracking-tight text-slate-900">
                    Payroll and Compliance Timeline
                  </h2>
                  <p className="text-[12px] font-medium text-gray-400">
                    Key deadlines and milestones for the current month.
                  </p>
                </div>
                <div className="mt-4 flex flex-col gap-1">
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