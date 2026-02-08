import logo from '../../assets/Logo.svg'
import { useNavigate, useLocation } from 'react-router-dom'


export function Sidebar({ sections = [], logoSrc = logo, drawer = false, onLinkClick }) {
  return (
    <aside className={drawer ? "w-[260px] shrink-0 bg-white px-4 py-6 h-full flex flex-col" : "hidden w-[260px] shrink-0 bg-white px-4 py-6 lg:block"}>
      <div className="flex items-center gap-3 px-2">
        <img src={logoSrc} alt="Logo" />
      </div>

      <div className="mt-10 px-2 flex flex-col gap-2">
        {sections.map((section, idx) => (
          <div key={section.sectionTitle ?? idx}>
            {section.sectionTitle && (
              <div className="text-gray-300 font-light px-2 py-4 m-0">
                {section.sectionTitle}
              </div>
            )}
            {section.items?.map((item) => (
              <NavItem key={item.label} {...item} onLinkClick={onLinkClick} />
            ))}
          </div>
        ))}
      </div>
    </aside>
  )
}

function NavItem({ label, route, icon, onLinkClick }) {
  const Icon = icon
  const navigate = useNavigate()
  const location = useLocation()
  const active = location.pathname === route
  const handleClick = () => {
    onLinkClick?.()
    navigate(route)
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        'flex items-center justify-start gap-2 rounded-xl px-3 py-2 text-md font-medium transition-colors w-full text-left',
        active ? 'bg-[#2684FF1A]' : 'hover:bg-sky-50',
      ].join(' ')}
    >
      <Icon className={active ? 'text-[#2684FF]' : 'text-gray-900'} />
      <span className={active ? 'text-[#2684FF]' : 'text-gray-900'}>{label}</span>
    </button>
  )
}

