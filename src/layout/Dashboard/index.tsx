import { Navigate, Outlet } from "react-router-dom";
import HeaderBar from "../../components/HeaderBar";
import SideBar from "../../components/Sidebar";
import "./style.css";
import { getToken } from "../../utils/helper";

const RenterDashboard = () => {
  const token = getToken();
  if (!token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <SideBar />

      <header className="fixed left-[220px] top-0 w-full z-[999]">
        <HeaderBar />
      </header>

      <main className="ml-[220px] absolute top-[100px] w-[calc(100%-220px)] h-[calc(100vh-100px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default RenterDashboard;
