import Sidebar from '../dashboard/Sidebar.jsx'
import StatCard from '../dashboard/StatCard.jsx'
import TimelineItem from '../dashboard/TimelineItem.jsx'
import EmployeeListItem from '../dashboard/EmployeeListItem.jsx'
import Button from '../ui/Button.jsx'
import { dashboardMock } from '../data/mock.js'
import { Calendar } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Coffee } from 'lucide-react';
import { Cake } from 'lucide-react';
import { Hourglass } from 'lucide-react';
import { Check } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Divider from '../ui/Divider.jsx'
import rajesh from '../assets/rajesh.svg'


function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-sm font-semibold tracking-tight text-slate-900">{title}</h2>
        {subtitle ? <p className="mt-1 text-xs text-slate-500">{subtitle}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

function RightSidebarCard({ title, children, image }) {
  console.log('children', children)
  const TitleImage = image

  return (
    <div className="flex flex-col gap-4 px-5 py-4 bg-white hover:bg-[#F0F1F1] rounded-lg shadow-xs">
      <div className='flex justify-between pb-3 items-center border-0 border-b border-gray-100'>
        <div className="flex justify-start items-center gap-2 ">
          <span className='border border-gray-100 rounded-lg w-7.5 h-7.5'>
            <TitleImage className='text-gray-600 w-3.5 h-3.5' />
          </span>
          <span className='text-md font-bold text-slate-800'>{title}</span>
        </div>
        {title === 'Upcoming Holidays' && <span className='text-xs font-medium text-blue-500'>View All</span>}
      </div>
      {
        children.map((val) => {
          return <MiniRow key={val.props.name} name={val.props.name} role={val.props.role} today={val.props.today} date={val.props.date} image={val.props.image} />
        })
      }

    </div>
  )
}

function MiniRow({ name, role, image, date, today }) {
  const ContentImage = image
  console.log('name,',image, name, role, date)
  return (
    <div className="space-y-5">
      <p className=''>{today ? 'Today' : 'This week'}</p>
      <div className='flex gap-2'>
        {ContentImage ?
          <image src={`/${image}`} className={'text-gray-300 rounded-full w-8 h-8'} />
          : <div className='border border-gray-300 rounded-[5px]'>

          </div>}
        <div></div>
      </div>
    </div>
  )
}

export const DashboardNav = ({ username }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between px-2 py-6">
      <div className='flex flex-col gap-2'>
        <h1 className="text-[23px] font-bold tracking-tight text-[#222224] sm:text-3xl">
          Good Morning, {username}!
        </h1>
        <p className=" text-sm font-bold text-[#85878D]">
          Here’s how your organization looks this month.</p>
      </div>

      <div className="flex items-center gap-4">
        <button className='relative w-8 h-8'><Bell className='text-[#626368]' /></button>
        <span className='absolute h-4 w-4 text-xs text-center font-semibold bg-red-400 rounded-full text-white'>1</span>
        <button className='flex gap-2 items-center' >
          <span className='bg-blue-500/80 w-8 h-8 text-[11px] text-white text-center font-semibold  rounded-full'>SJ</span>
          <span className='flex gap-2 items-center'>
            <span className='text-md font-semibold text-[#222224]'>Sarah Johnson</span>
            <ChevronDown className='text-gray-500 w-4 h-4' />
          </span>
        </button>
      </div>
    </div >
  )
}

export default function DashboardPage() {
  const { user, stats, timeline, statusSummary, requests, rightbar } = dashboardMock

  return (
    <div className="min-h-dvh bg-[#F1F8FF]">
      <div className="mx-auto flex">
        <Sidebar />

        {/* Main */}
        <main className="min-w-0 flex-1">
          <DashboardNav username={user.firstName} />

          <div className='flex flex-col xl:flex-row gap-4 pt-5 pb-10 pl-2 pr-10'>

            <div className='flex flex-col gap-4'>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {stats.map((s) => (
                  <StatCard key={s.label} {...s} />
                ))}
              </div>

              <div className="p-5 bg-white hover:bg-[#F0F1F1] rounded-lg shadow-xs">
                <SectionHeader
                  title="Payroll & Compliance"
                  subtitle="Key milestones for this cycle"
                  action={<Button variant="ghost">View all</Button>}
                />
                <div className="mt-4 space-y-3">
                  {timeline.map((t) => (
                    <TimelineItem key={t.title} {...t} />
                  ))}
                </div>
              </div>

              <div className="p-5  bg-white hover:bg-[#F0F1F1] rounded-lg shadow-xs">
                <SectionHeader title="Employee status" subtitle="Snapshot of workforce health" />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {statusSummary.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <div className="text-xs font-semibold text-slate-600">{s.label}</div>
                      <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                        {s.value}
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full rounded-full bg-slate-900/80" style={{ width: s.bar }} />
                      </div>
                      <div className="mt-2 text-xs text-slate-500">{s.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5  bg-white hover:bg-[#F0F1F1] rounded-lg shadow-xs">
                <SectionHeader title="Requests" subtitle="Leaves & reimbursements" />
                <div className="mt-4 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  {requests.map((r) => (
                    <EmployeeListItem key={r.id} {...r} />
                  ))}
                </div>
              </div>

            </div>

            {/* Right sidebar */}
            <div className="w-full xl:w-[340px] shrink-0">
              <div className="sticky top-6 space-y-4">
                <RightSidebarCard title="Upcoming Holidays" image='Calendar'>
                  {rightbar.holidays.map((h) => (
                    <MiniRow key={h.name} name={h.name} role={h.role} today={h.today} date={h.date} image={h.image} />
                  ))}
                </RightSidebarCard>

                <RightSidebarCard title="On Leave" image='Coffee'>
                  {rightbar.onLeave.map((p) => (
                    <MiniRow key={p.name} name={p.name} role={p.role} today={p.today} date={p.date} image={p.image} />
                  ))}
                </RightSidebarCard>

                <RightSidebarCard title="Birthday" image='Cake'>
                  {rightbar.birthdays.map((b) => (
                    <MiniRow key={b.name} name={b.name} role={b.role} today={b.today} date={b.date} image={b.image} />
                  ))}
                </RightSidebarCard>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  )
}


