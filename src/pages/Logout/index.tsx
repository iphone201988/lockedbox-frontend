import { Navigate } from "react-router-dom";
import { removeToken } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { resetState } from "../../redux/reducer/auth";
import { useEffect } from "react";
import { lockedBoxApi } from "../../redux/api";

const Logout = () => {
  removeToken();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(lockedBoxApi.util.resetApiState());
  }, []);
  return <Navigate to="/" />;
};

export default Logout;
