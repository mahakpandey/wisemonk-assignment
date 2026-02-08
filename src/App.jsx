import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ComingSoonPage from "./pages/ComingSoonPage.jsx";
import ProfilePage from "./features/profile/ProfilePage.jsx";
import SettingsPage from "./features/settings/SettingsPage.jsx";
import ProtectedRoute from "./features/auth/ProtectedRoute.jsx";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Logo from "./assets/Logo.svg?react";
import { useAuth } from "./features/auth/AuthContext.jsx";
import { LogIn, LogOut } from "lucide-react";
import MainContainer from "./features/main/MainContainer.jsx";
import Button from "./components/button/Button.jsx";
import { Suspense } from "react";

const NAV_BUTTON_CLASS =
  "flex items-center cursor-pointer gap-2 font-bold bg-white text-sm sm:text-base text-[#626368] border border-[#626368] sm:px-4 sm:py-2 px-2 py-1 rounded-lg hover:bg-slate-50";

export default function App() {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      }
    >
      <div className="flex flex-col min-h-screen w-screen max-w-screen max-h-screen overflow-y-auto">
        {(pathname === "/" || pathname === "/signup") && (
          <Navbar
            className={
              "w-full flex items-center justify-between sm:px-10 py-10 px-5  sm:py-7.5"
            }
          >
            <div>
              <Logo className="h-7 sm:h-8" aria-hidden />
            </div>
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-[#626368] truncate max-w-[180px] sm:max-w-none">
                  {user?.fullName || user?.email}
                </span>
                <Button
                  onClick={handleLogout}
                  className={NAV_BUTTON_CLASS}
                  variant="secondary"
                >
                  Log out
                  <LogOut className="w-4 h-4" color="#626368" />
                </Button>
              </div>
            ) : pathname === "/" ? (
              <Button
                onClick={() => navigate("/signup")}
                variant="secondary"
                className={NAV_BUTTON_CLASS}
              >
                <span className="text-sm font-medium text-[#626368]">
                  Sign up
                </span>
                <LogIn className="w-4 h-4" color="#626368" />
              </Button>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                variant="secondary"
                className={NAV_BUTTON_CLASS}
              >
                <span className="text-sm font-medium text-[#626368]">
                  Login
                </span>
                <LogIn className="w-4 h-4" color="#626368" />
              </Button>
            )}
          </Navbar>
        )}

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            element={
              <ProtectedRoute>
                <MainContainer />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/home" element={<ComingSoonPage />} />
            <Route path="/people" element={<ComingSoonPage />} />
            <Route path="/compliance" element={<ComingSoonPage />} />
            <Route path="/time" element={<ComingSoonPage />} />
            <Route path="/payroll" element={<ComingSoonPage />} />
            <Route path="/billings" element={<ComingSoonPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Suspense>
  );
}
