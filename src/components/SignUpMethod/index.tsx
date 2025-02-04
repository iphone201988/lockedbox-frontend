const SignUpMethod = ({
  signupMethod,
  setSignupMethod,
}: {
  signupMethod: AuthType;
  setSignupMethod: React.Dispatch<React.SetStateAction<AuthType>>;
}) => {
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
          Login by Email
        </button>
        <button
          className={`${signupMethod.phone ? "btn-pri" : "btn-sec"}`}
          onClick={() => setSignupMethod({ email: false, phone: true })}
        >
          Login by Phone number
        </button>
      </div>
    </div>
  );
};

export default SignUpMethod;
