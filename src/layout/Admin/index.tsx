import { Navigate, Outlet } from "react-router-dom";
import AdminSidebar from "../../pages/Admin/Sidebar";
import AdminHeader from "../../pages/Admin/components/admin-header";

const AdminDashboardLayout = () => {
  const token = sessionStorage.getItem("token");
  if (!token) return <Navigate to="/admin/login" />;
  return (
    <div>
      <AdminSidebar />

      <header className="fixed w-[calc(100%-220px)] left-[220px] top-0  z-[999] max-lg:left-0 max-lg:w-full">
        <AdminHeader />
      </header>

      <main className="ml-[220px] absolute top-[100px] w-[calc(100%-220px)] h-[calc(100vh-100px)] max-lg:ml-[0] max-lg:w-full max-lg:top-[94px]">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
