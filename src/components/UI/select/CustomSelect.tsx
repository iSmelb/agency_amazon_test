import { FC } from "react";

interface ICustomSelect {
  placeholder: string;
  options: {
    value: string | number;
    name: string | number;
  }[];
  value: string | number;
  onChange: (option: string) => void;
}

const CustomSelect: FC<ICustomSelect> = ({
  value,
  placeholder,
  options,
  onChange,
}) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
