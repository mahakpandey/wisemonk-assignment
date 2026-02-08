import { Calendar } from 'lucide-react'
import React from 'react'


const UpcomingHolidaysCard= ({ holidays }) => {
  return (
    <div className="font-satoshi flex flex-col rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0F2F5]">
            <Calendar className="h-4 w-4 text-slate-600" />
          </span>
          <h3 className="text-[16px] font-bold text-slate-800">Upcoming Holidays</h3>
        </div>
        <a href="#" className="text-[14px] font-normal text-[#2684FF] hover:underline">
          View All
        </a>
      </div>
      <div className="mt-3 flex flex-col gap-4">
        {holidays.map((h) => (
          <div key={h.name} className="flex gap-4">
            <div className="flex shrink-0 flex-col">
              <span className="text-[11px] font-medium text-slate-500">{h.month}</span>
              <span className="text-[22px] font-bold leading-tight text-slate-800">{h.date}</span>
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <span className="text-[16px] font-bold text-slate-800">{h.name}</span>
              <span className="text-[12px] font-medium text-slate-500">{h.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const UpcomingHolidays = ({ holidays }) => {
  return (
    <UpcomingHolidaysCard holidays={holidays} />
  )
}

export default UpcomingHolidays