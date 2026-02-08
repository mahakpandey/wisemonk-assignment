import { lazy } from "react";

const LazyDashboard = lazy(() => import("../features/Dashboard/Dashboard.jsx"));

export default function DashboardPage() {
  return <LazyDashboard />;
}
