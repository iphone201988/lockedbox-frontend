import { Navigate } from "react-router";
import { getToken } from "../../utils/helper";

const PublicRoute = ({ children }: { children: any }) => {
  const token = getToken();
  if (token) return <Navigate to="/" />;
  return children;
};

export default PublicRoute;
