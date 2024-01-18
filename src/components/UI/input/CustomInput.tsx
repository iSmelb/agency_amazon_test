import { FC } from "react";

interface ICustomInput {
  onChange: (value: string) => void;
}

const CustomInput: FC<ICustomInput> = ({ onChange }) => {
  return <input onChange={(e) => onChange(e.target.value)} />;
};

export default CustomInput;
