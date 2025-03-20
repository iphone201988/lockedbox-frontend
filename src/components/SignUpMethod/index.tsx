import { useLocation } from "react-router-dom";

const SignUpMethod = ({
  signupMethod,
  setSignupMethod,
}: {
  signupMethod: AuthType;
  setSignupMethod: React.Dispatch<React.SetStateAction<AuthType>>;
}) => {
  const location = useLocation();
  const path = location.pathname;
  const map: any = {
    "/signin": "Log In by",
    "/signup": "Sign Up by",
    "/forgot-password": "By",
  };
  return (
    <div className="w-full max-w-[540px]">
      <div className="select-option flex justify-end mb-[10px] gap-[12px]">
        <button
          className={`${signupMethod.email ? "btn-pri" : "btn-sec"}`}
          onClick={() =>
            setSignupMethod({
              email: true,
              phone: false,
            })
          }
        >
          {map[path]} Email
        </button>
        <button
          className={`${signupMethod.phone ? "btn-pri" : "btn-sec"}`}
          onClick={() => setSignupMethod({ email: false, phone: true })}
        >
          {map[path]} Phone number
        </button>
      </div>
    </div>
  );
};

export default SignUpMethod;
