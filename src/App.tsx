import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Verify/> */}
      {/* <CreatePassword/> */}
      {/* <HostOrRent/> */}
      {/* <ForgotPassword/> */}
      {/* <ResetPassword/> */}
      {/* <PasswordSuccess/> */}
    </>
  );
};

export default App;
