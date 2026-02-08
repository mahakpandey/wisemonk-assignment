import Card from '../../components/Card/Card'

export default function SettingsPage() {
  return (
    <div className="min-h-full bg-[#F1F8FF]">
      <div className="mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-satoshi mb-6">
          Settings
        </h1>

        <div className="space-y-4">
          <Card className="p-5">
            <h2 className="text-base font-semibold text-slate-800 mb-2">Account</h2>
            <p className="text-sm text-slate-500">
              Manage your account details and security.
            </p>
          </Card>

          <Card className="p-5">
            <h2 className="text-base font-semibold text-slate-800 mb-2">Notifications</h2>
            <p className="text-sm text-slate-500">
              Choose how and when you receive notifications.
            </p>
          </Card>

          <Card className="p-5">
            <h2 className="text-base font-semibold text-slate-800 mb-2">Preferences</h2>
            <p className="text-sm text-slate-500">
              Language, timezone, and display preferences.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
