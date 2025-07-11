import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Phone = ({
  error,
  value,
  onChange = () => {},
  disable = false,
  isCADOnly = false,
}: PhoneProps) => {
  return (
    <>
      <PhoneInput
        country={isCADOnly ? "ca" : "us"}
        {...(isCADOnly && { onlyCountries: ["ca"] })}
        inputProps={{
          name: "phone",
          autoFocus: true,
        }}
        // @ts-ignore
        className="country-code border border-[#EEEEEE] py-[18px] px-[16px] w-full rounded-2xl "
        placeholder="Phone Number"
        value={value}
        onChange={onChange}
        disabled={disable}
      ></PhoneInput>
      {error && <span className="mx-2 text-red-500">{error}</span>}
    </>
  );
};

export default Phone;
