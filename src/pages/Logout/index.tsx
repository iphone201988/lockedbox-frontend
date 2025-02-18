import { Navigate } from "react-router-dom";
import { removeToken } from "../../utils/helper";

const Logout = () => {
  removeToken();
  return <Navigate to="/" />;
};

export default Logout;
