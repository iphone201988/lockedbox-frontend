import { useGetUserQuery } from "../../redux/api";
import Loader from "../Loader";
import { Navigate } from "react-router-dom";

const HostAccess = ({ children }: { children: any }) => {
  const { data, isLoading, isError } = useGetUserQuery();
  if (isLoading) return <Loader />;
  if (isError) return <Navigate to="/logout" />;
  return data?.userExists.dashboardRole == "host" ? (
    children
  ) : (
    <Navigate to="/" />
  );
};

export default HostAccess;
