import { MotionButton } from "../../shared/ui/Motion";

function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}

const baseStyles = {
  default:
    "inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900/20 disabled:opacity-50 disabled:pointer-events-none",
  icon: "inline-flex items-center justify-center shrink-0 rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900/20 disabled:opacity-50 disabled:pointer-events-none transition-colors",
  nav: "flex items-center justify-start gap-2 rounded-xl px-3 py-1.5 text-md font-medium transition-colors w-full text-left focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
};

const variantStyles = {
  primary: "text-white rounded-md bg-[#2684FF] hover:bg-blue-600 px-2",
  secondary:
    "border border-slate-200 rounded-md bg-white text-slate-900 hover:bg-slate-50",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
  icon: "bg-transparent",
  iconGhost: "bg-transparent rounded p-0.5 text-slate-400 hover:text-slate-600",
  nav: "",
};

export default function Button({
  variant = "primary",
  className,
  type = "button",
  disabled,
  ...props
}) {
  const baseKey =
    variant === "nav"
      ? "nav"
      : variant === "icon" || variant === "iconGhost"
      ? "icon"
      : "default";
  const base = baseStyles[baseKey];
  const v = variantStyles[variant] ?? variantStyles.primary;
  return (
    <MotionButton
      type={type}
      className={cn(base, v, className)}
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      {...props}
    />
  );
}
