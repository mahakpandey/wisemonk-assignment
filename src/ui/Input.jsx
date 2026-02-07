function cn(...parts) {
    return parts.filter(Boolean).join(' ')
  }
  
  export default function Input({
    label,
    className,
    leftIcon,
    rightIcon,
    ...props
  }) {
    return (
      <label className="relative block">
        <div className="relative">
          {leftIcon && (
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              {leftIcon}
            </span>
          )}
  
          {rightIcon && (
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400">
              {rightIcon}
            </span>
          )}
  
          <input
            placeholder=" "
            className={cn(
              'peer h-11 w-full rounded-xl border border-slate-200 bg-white px-3 pt-4 text-sm text-slate-900',
              'focus:outline-none focus:ring-2 focus:ring-slate-900/15 focus:border-slate-300',
              leftIcon ? 'pl-10' : 'pl-3',
              rightIcon ? 'pr-10' : 'pr-3',
              className
            )}
            {...props}
          />
  
          {label && (
            <span
              className={cn(
                'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400 transition-all',
                'peer-focus:top-2 peer-focus:text-xs peer-focus:text-slate-600',
                'peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-slate-600',
                leftIcon && 'left-10'
              )}
            >
              {label}
            </span>
          )}
        </div>
      </label>
    )
  }
  