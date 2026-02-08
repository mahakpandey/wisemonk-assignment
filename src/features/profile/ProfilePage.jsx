import { useAuth } from "../auth/AuthContext";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/avatar/Avatar";
import Card from "../../components/card/Card";
import { dashboardMock } from "../../data/mock";
import { Mail, User } from "lucide-react";

function getInitials(fullName, email) {
  if (fullName?.trim()) {
    const parts = fullName.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return parts[0].slice(0, 2).toUpperCase();
  }
  if (email) return email.slice(0, 2).toUpperCase();
  return "?";
}

export default function ProfilePage() {
  const { user: authUser } = useAuth();
  const { user: mockUser } = dashboardMock;
  const displayName =
    authUser?.fullName || authUser?.email || mockUser?.firstName || "User";
  const email = authUser?.email || "";

  return (
    <div className="min-h-full bg-[#F1F8FF]">
      <div className="mx-auto py-6 px-4">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-satoshi mb-6">
          Profile
        </h1>

        <Card className="p-6">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Avatar className="h-24 w-24 shrink-0">
              <AvatarImage src={authUser?.avatarUrl} alt={displayName} />
              <AvatarFallback className="text-2xl">
                {getInitials(authUser?.fullName, authUser?.email)}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 space-y-4">
              <div className="flex items-center gap-2 text-slate-600">
                <User className="h-4 w-4 shrink-0" />
                <span className="text-sm font-medium text-slate-500">
                  Full name
                </span>
              </div>
              <p className="text-lg font-semibold text-slate-900">
                {authUser?.fullName || displayName}
              </p>
              {email && (
                <>
                  <div className="flex items-center gap-2 text-slate-600 pt-2">
                    <Mail className="h-4 w-4 shrink-0" />
                    <span className="text-sm font-medium text-slate-500">
                      Email
                    </span>
                  </div>
                  <p className="text-slate-700">{email}</p>
                </>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
