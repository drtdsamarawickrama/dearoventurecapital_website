import { redirect } from "next/navigation";

import { isAdminAuthenticated } from "@/components/lib/admin-auth";
import AdminDashboardClient from "@/components/admin/AdminDashboardClient";

export default async function AdminDashboardPage() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    redirect("/admin/login");
  }

  return <AdminDashboardClient />;
}