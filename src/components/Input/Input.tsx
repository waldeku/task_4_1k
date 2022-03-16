import { ChangeEvent } from "react";
import { FieldName } from "types/input";
import { TextInput } from "./Input.styled";

interface IInput {
  name: FieldName;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Input = ({ name, value, placeholder, onChange, disabled }: IInput) => {
  return (
    <TextInput
      type="text"
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
