import { Rocket } from 'lucide-react'

export default function ComingSoonPage() {
  return (
    <div className="min-h-dvh bg-[#F1F8FF]">
        <main className="min-w-0 flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center max-w-md">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2684FF]/10 text-[#2684FF] mb-6">
              <Rocket className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#222224] sm:text-3xl">
              Coming soon
            </h1>
            <p className="mt-3 text-[#85878D] font-medium">
              This section is under development and will be available in a future update.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Thanks for your patience.
            </p>
          </div>
        </main>
    </div>
  )
}
