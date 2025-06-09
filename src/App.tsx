import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useGetUserQuery } from "./redux/api";
import { getToken, removeToken } from "./utils/helper";
import Loader from "./components/Loader";
import { useEffect } from "react";
import { initGA } from "./GoogleAnalytics";

const App = () => {
  const token = getToken();
  const { isLoading, isError, error } = useGetUserQuery(undefined, {
    skip: !token,
  });
  // console.log("here!!");
  // if (isLoading) return <Loader />;
  // if (isError) {
  //   console.log("error::", error);
  //   removeToken();
  //   window.location.href = "/";
  // }

  useEffect(() => {
    if (isError) {
      console.log("error::", error);
      removeToken();
      window.location.href = "/";
    }
  }, [isError, error]);

  useEffect(() => {
    initGA();
  }, []);

  if (token && isLoading) return <Loader />;

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
