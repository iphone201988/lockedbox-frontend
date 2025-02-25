import { useState } from "react";

const CustomOptions = ({
  options,
  handleChange,
  error,
  className,
  name,
  value,
  multiple = true,
}: CustomOptions) => {
  const [activeOptions, setActiveOptions] = useState<string[]>(value);

  const handleSelect = (option: string) => {
    let options;

    if (multiple) {
      options = activeOptions.includes(option)
        ? activeOptions.filter((item) => item !== option)
        : [...activeOptions, option];
    } else {
      options = activeOptions[0] === option ? [] : [option];
    }

    setActiveOptions(options);

    handleChange({
      target: {
        name,
        value: multiple ? options : options[0] || "",
      },
    });
  };

  return (
    <>
      {options.map((option: CustomOptionProps) => (
        <div
          key={option.name}
          className={`${className} ${
            activeOptions.includes(option.name) ? "active" : ""
          }`}
          onClick={() => handleSelect(option.name)}
        >
          {option.icon && <span>{option.icon}</span>}
          <p className="whitespace-pre-line">{option.name}</p>
        </div>
      ))}
      {error && <span className="mx-2 text-red-500">{error}</span>}
    </>
  );
};

export default CustomOptions;
