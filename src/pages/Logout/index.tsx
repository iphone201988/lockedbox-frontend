import { Navigate } from "react-router-dom";
import { removeToken } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { resetState } from "../../redux/reducer/auth";
import { useEffect } from "react";

const Logout = () => {
  removeToken();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
  }, []);
  return <Navigate to="/" />;
};

export default Logout;
