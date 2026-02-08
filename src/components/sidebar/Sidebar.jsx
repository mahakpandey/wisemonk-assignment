import { MotionDiv } from "../../shared/ui/Motion";
import Logo from "../../assets/Logo.svg?react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../button/Button";

const navList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
  },
};

const navItem = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

export function Sidebar({ sections = [], drawer = false, onLinkClick }) {
  return (
    <aside
      className={
        drawer
          ? "w-65 shrink-0 bg-white px-4 py-6 h-full flex flex-col"
          : "hidden w-65 shrink-0 bg-white px-4 py-6 lg:block"
      }
    >
      <MotionDiv
        className="flex items-center gap-3 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Logo className="h-8 w-auto" aria-hidden />
      </MotionDiv>

      <MotionDiv
        className="mt-10 px-2 flex flex-col gap-2"
        variants={navList}
        initial="hidden"
        animate="visible"
      >
        {sections.map((section, idx) => (
          <div
            key={section.sectionTitle ?? idx}
            className="flex flex-col"
          >
            {section.sectionTitle && (
              <div className="text-gray-300 font-light text-[13px] px-3 py-2.25 m-0">
                {section.sectionTitle}
              </div>
            )}
            {section.items?.map((item) => (
              <MotionDiv key={item.label} variants={navItem}>
                <NavItem {...item} onLinkClick={onLinkClick} />
              </MotionDiv>
            ))}
          </div>
        ))}
      </MotionDiv>
    </aside>
  );
}

function NavItem({ label, route, icon, onLinkClick }) {
  const Icon = icon;
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname === route;
  const handleClick = () => {
    onLinkClick?.();
    navigate(route);
  };
  return (
    <Button
      variant="nav"
      type="button"
      onClick={handleClick}
      className={active ? "bg-[#2684FF1A]" : "hover:bg-sky-50"}
    >
      <Icon className={active ? "text-[#2684FF]" : "text-gray-900"} />
      <span className={active ? "text-[#2684FF]" : "text-gray-900"}>
        {label}
      </span>
    </Button>
  );
}
