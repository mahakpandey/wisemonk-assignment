import { Coffee } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '../../components/avatar/Avatar'


 const OnLeaveCard= ({ people, avatarImages }) => {
  const today = people.filter((p) => p.today)
  const thisWeek = people.filter((p) => !p.today)

  return (
    <div className="font-satoshi flex flex-col rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F2F5]">
          <Coffee className="h-4 w-4 text-slate-600" />
        </span>
        <h3 className="text-[16px] font-bold text-slate-800">On Leave</h3>
      </div>

      {today.length > 0 && (
        <div className="mt-3">
          <h4 className="text-[14px] font-bold text-slate-800">Today</h4>
          <div className="mt-2 flex flex-col divide-y divide-slate-200">
            {today.map((p) => (
              <div key={p.name} className="flex items-center gap-3 py-3 first:pt-0">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src={avatarImages[p.avatarKey]} alt={p.name} />
                  <AvatarFallback>{p.name.split(' ').map((w) => w[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="text-[14px] font-bold text-slate-800">{p.name}</div>
                  <div className="text-[13px] font-light text-slate-500">{p.role}</div>
                </div>
                <span className="shrink-0 text-[14px] font-medium text-slate-500">{p.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {thisWeek.length > 0 && (
        <div className={today.length > 0 ? 'mt-3 pt-3 ' : 'mt-3'}>
          <h4 className="text-[14px] font-bold text-slate-800">This week</h4>
          <div className="mt-2 flex flex-col">
            {thisWeek.map((p) => (
              <div key={p.name} className="flex items-center gap-3 py-3 first:pt-0">
                <Avatar className="h-10 w-10 shrink-0">
                  <AvatarImage src={avatarImages[p.avatarKey]} alt={p.name} />
                  <AvatarFallback>{p.name.split(' ').map((w) => w[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="text-[14px] font-bold text-slate-800">{p.name}</div>
                  <div className="text-[13px] font-light text-slate-500">{p.role}</div>
                </div>
                <span className="shrink-0 text-[14px] font-medium text-slate-500">{p.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const OnLeave = ({ people, avatarImages }) => {

  return (
    <OnLeaveCard people={people} avatarImages={avatarImages} />
  )
}

export default OnLeave