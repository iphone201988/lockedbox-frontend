export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<any>>
) => {
  setFormData((prev: any) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
