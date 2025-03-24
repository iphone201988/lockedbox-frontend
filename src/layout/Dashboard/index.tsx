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

      <header className="fixed left-[220px] top-0 w-full z-[999] max-lg:left-0">
        <HeaderBar />
      </header>

      <main className="ml-[220px] absolute top-[100px] w-[calc(100%-220px)] h-[calc(100vh-100px)] max-lg:ml-[0] max-lg:w-full max-lg:top-[94px">
        <Outlet />
      </main>
    </div>
  );
};

export default RenterDashboard;
