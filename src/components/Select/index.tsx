const Select = ({
  options,
  className,
  value,
  name,
  onChange,
  error,
}: SelectProps) => {
  return (
    <>
      <select
        className={className}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      >
        <option value="">Select any value</option>
        {options.map((option: string) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      {error && <span className="mx-2 text-red-500">{error}</span>}
    </>
  );
};

export default Select;
