"use client";

import PasswordTextField from "./PasswordTextField";
import { validateConfirmPassword } from "@/utils/validation";

interface ConfirmPasswordTextFieldProps {
  password: string;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  placeholder?: string;
}

const ConfirmPasswordTextField = ({
  password,
  value,
  onChange,
  errorMessage = "Mật khẩu không khớp",
  placeholder = "Nhập lại mật khẩu",
}: ConfirmPasswordTextFieldProps) => {
  return (
    <PasswordTextField
      value={value}
      onChange={onChange}
      validationRules={(val) => validateConfirmPassword(password, val)}
      errorMessage={errorMessage}
      placeholder={placeholder}
    />
  );
};

export default ConfirmPasswordTextField;
