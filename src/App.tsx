import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useGetUserQuery } from "./redux/api";
import { getToken } from "./utils/helper";
import Loader from "./components/Loader";

const App = () => {
  const token = getToken();
  if (token) {
    const { data, isLoading, isError, error } = useGetUserQuery();
    if (isLoading) return <Loader />;
    if (isError) {
      console.log("error:", error);
    }
  }
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
