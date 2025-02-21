const Input = ({
  type,
  placeholder,
  className,
  value,
  name,
  onChange,
  error,
  disable = false,
}: InputProps) => {
  return (
    <>
      <input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disable}
      />
      {error && <span className="mx-2 text-red-500">{error}</span>}
    </>
  );
};

export default Input;
