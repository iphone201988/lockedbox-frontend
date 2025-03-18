import { useState } from "react";
import { EyeClose, EyeOpen } from "../../icons";
import { handleInputChange } from "../../utils/helper";
import Input from "../Input";

const Password = ({
  value,
  setFormData,
  error,
  name,
  classes,
  placeholder,
}: PasswordProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      <Input
        className={classes}
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={(e:any) => handleInputChange(e, setFormData)}
        placeholder={placeholder}
        error={error}
      />
      <span
        className=" absolute right-[16px] top-[20px] cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOpen /> : <EyeClose />}
      </span>
    </>
  );
};

export default Password;
