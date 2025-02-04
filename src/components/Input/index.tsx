const Input = ({
  type,
  placeholder,
  className,
  value,
  name,
  onChange,
  error,
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
      />
      {error && <span className="mx-2 text-red-500">{error}</span>}
    </>
  );
};

export default Input;
