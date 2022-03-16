import { ButtonVariant } from "types/button";
import { ActionButton } from "./Button.styled";

interface IButton {
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  text: string;
  disabled?: boolean;
  onClick?: VoidFunction;
}

const Button = ({
  variant = "primary",
  type,
  text,
  disabled,
  onClick,
}: IButton) => {
  return (
    <ActionButton
      variant={variant}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </ActionButton>
  );
};

export default Button;
