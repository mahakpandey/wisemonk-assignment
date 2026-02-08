function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}

const styles = {
  base: 'inline-flex items-center gap-2 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900/20 disabled:opacity-50 disabled:pointer-events-none',
  primary: 'text-white rounded-md bg-[#2684FF] hover:bg-blue-600 px-2',
  secondary: 'border border-slate-200 rounded-md bg-white text-slate-900 hover:bg-slate-50',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
}

export default function Button({
  variant = 'primary',
  className,
  type = 'button',
  ...props
}) {
  const v = styles[variant] || styles.primary
  return <button type={type} className={cn(styles.base, v, className)} {...props} />
}
