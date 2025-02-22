import { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { DropDownIcon } from "../../icons";

const MultiSelect = ({
  options,
  error,
  setFormData,
  value,
}: {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  options: any;
  error: string | undefined;
  value: any;
}) => {
  const [selected, setSelected] = useState(value);
  return (
    <>
      <Multiselect
        options={options}
        selectedValues={selected}
        onSelect={(selectedList: any) => {
          console.log("selectedList:::", selectedList);
          setSelected(selectedList);
          setFormData((prev: any) => ({
            ...prev,
            features: selectedList,
          }));
        }}
        onRemove={(selectedList: any) => {
          setSelected(selectedList);
          setFormData((prev: any) => ({
            ...prev,
            features: selectedList,
          }));
        }}
        displayValue="name"
        placeholder="Select features"
        style={{
          searchBox: {
            borderRadius: "16px",
            padding: "20px 16px",
            fontSize: "16px",
            color: "#235370",
            position: "relative",
          },
          inputField: {
            padding: 0,
            margin: "4px",
            color: "#235370",
          },
          optionContainer: {
            border: "1px solid #EEEEEE",
            borderRadius: "16px",
            marginTop: "8px",
            boxShadow: "none",
          },
          option: {
            color: "#235370",
            padding: "12px 16px",
          },
          chips: {
            background: "#235370",
            color: "white",
            borderRadius: "8px",
            margin: "4px 4px 0 0",
          },
          highlightOption: {
            background: "#F8FAFC",
          },
        }}
        customArrow={
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <DropDownIcon />
          </span>
        }
      />
      {error && <span className="mx-2 text-red-500">{error}</span>}
    </>
  );
};

export default MultiSelect;
