import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { defaultSidebarSections } from "../../data/sidebarConfig";
import Navbar from "../../components/navbar/Navbar";
import { useAuth } from "../auth/AuthContext";
import { dashboardMock } from "../../data/mock";
import { Bell, ChevronDown, Menu } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/avatar/Avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../components/dropdown/DropdownMenu";
import { Sheet, SheetContent } from "../../components/sheet/Sheet";
import Button from "../../components/button/Button";

const MainContainer = () => {
  const { user: authUser, logout } = useAuth();
  const { user } = dashboardMock;
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const username =
    authUser?.fullName?.split(/\s+/)[0] ||
    authUser?.email?.split("@")[0] ||
    user?.firstName ||
    "there";

  const getInitials = () => {
    const full = authUser?.fullName?.trim();
    if (full) {
      const parts = full.split(/\s+/).filter(Boolean);
      if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
      if (parts[0].length >= 2) return parts[0].slice(0, 2).toUpperCase();
      return parts[0][0].toUpperCase();
    }
    const email = authUser?.email;
    if (email) return email.slice(0, 2).toUpperCase();
    return (user?.firstName?.[0] || "?") + (user?.lastName?.[0] || "");
  };

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-dvh flex bg-[#F1F8FF]">
      <Sidebar sections={defaultSidebarSections} />

      <div className="lg:hidden">
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <SheetContent side="left" className="p-0 w-[260px]" showCloseButton>
            <Sidebar
              sections={defaultSidebarSections}
              drawer
              onLinkClick={() => setIsDrawerOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </div>

      <main className="flex-1 flex flex-col min-w-0">
        <Navbar className={"flex items-center justify-between gap-4 px-5 py-5"}>
          <div className="flex items-center gap-3 min-w-0">
            <Button
              variant="icon"
              type="button"
              aria-label="Open menu"
              onClick={() => setIsDrawerOpen(true)}
              className="lg:hidden text-[#626368]"
            >
              <Menu className="w-6 h-6" />
            </Button>
            <div className="flex flex-col gap-2 min-w-0 hidden lg:block">
              <h1 className="text-[23px] font-bold tracking-tight text-[#222224] sm:text-3xl truncate">
                Good Morning, {username}!
              </h1>
              <p className="text-sm font-bold text-[#85878D]">
                Here’s how your organization looks this month.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="icon" type="button" className="relative w-8 h-8">
              <span className="flex items-center justify-center absolute top-[-4px] right-[-1px] text-center font-normal bg-red-400 rounded-full text-white top-0 right-0 h-4 w-4 text-xs">
                1
              </span>
              <Bell className="text-[#626368]" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 items-center outline-none rounded-lg hover:opacity-90 data-[state=open]:opacity-90">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={authUser?.avatarUrl}
                    alt={authUser?.fullName || username}
                  />
                  <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
                <span className="text-md font-semibold text-[#222224]">
                  {username}
                </span>
                <ChevronDown className="text-gray-500 w-4 h-4 shrink-0" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>{authUser?.fullName || username}</span>
                    {authUser?.email && (
                      <span className="text-xs font-normal text-[#626368]">
                        {authUser.email}
                      </span>
                    )}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600 focus:text-red-600"
                  onClick={handleLogout}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Navbar>
        <div className=" flex flex-1 flex-col  overflow-y-auto p-5 pb-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainContainer;
