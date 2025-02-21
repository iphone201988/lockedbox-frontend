import {  RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useGetUserQuery } from "./redux/api";
import { getToken, removeToken } from "./utils/helper";
import Loader from "./components/Loader";

const App = () => {
  const token = getToken();
  if (token) {
    const { isLoading, isError, error } = useGetUserQuery();
    console.log("here!!");
    if (isLoading) return <Loader />;
    if (isError) {
      console.log("error::", error);
      removeToken();
      window.location.href = "/";
    }
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
