import { Navigate } from "react-router-dom";

const AdminLogout = () => {
  sessionStorage.removeItem("token");

  return <Navigate to="/admin/login" />;
};

export default AdminLogout;
