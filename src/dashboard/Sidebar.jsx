import logo from '../assets/logo.svg'
import { House } from 'lucide-react';
import { ChartPie } from 'lucide-react';
import { Users } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { Receipt } from 'lucide-react';



const workspace = [
  { label: 'Home', href: '#/home', icon: House },
  { label: 'Dashboard', href: '#/dashboard', icon: ChartPie, active: true },
  { label: 'People', href: '#/people', icon: Users },
  { label: 'Compliance', href: '#/compliance', icon: Shield },
  { label: 'Time', href: '#/time', icon: Calendar },

]
const finance = [
  { label: 'Payroll', href: '#/payroll', icon: DollarSign },
  { label: 'Billings', href: '#/billings', icon: Receipt },
]

function NavItem({ label, href, active, icon }) {
  const TempIcon = icon
  return (
    <a
      href={href}
      className={[
        'flex items-center justify-start gap-2 rounded-xl px-3 py-2 text-md font-medium transition-colors',
        active ? 'bg-[#2684FF1A] text-white' : 'text-[#2684FF] hover:bg-sky-50',
      ].join(' ')}
    >
      <TempIcon className={active ? 'text-[#2684FF]' : 'text-gray-900'} />
      <span className={active ? 'text-[#2684FF]' : 'text-gray-900'}>{label}</span>

    </a>
  )
}

export default function Sidebar() {
  return (
    <aside className="hidden w-[260px] shrink-0  bg-white px-4 py-6 lg:block">
      <div className="flex items-center gap-3 px-2">
        <img src={logo} alt="logo" />
      </div>

      <div className='mt-10 px-2 flex flex-col gap-2'>
        <div className="">
          <div className='text-gray-300 font-light px-2 py-4 m-0'>FINANCE</div>
          {workspace.map((i) => (
            <NavItem key={i.label} {...i} />
          ))}
        </div>
        <div className="">
          <div className='text-gray-300 font-light px-2 py-4 m-0'>FINANCE</div>
          {finance.map((i) => (
            <NavItem key={i.label} {...i} />
          ))}
        </div>
      </div>

    </aside>
  )
}


