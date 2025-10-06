"use client";

import PasswordTextField from "./PasswordTextField";

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
  const isValid = value === password || value.length === 0;

  return (
    <PasswordTextField
      value={value}
      onChange={onChange}
      validationRules={() => isValid}
      errorMessage={errorMessage}
      placeholder={placeholder}
    />
  );
};

export default ConfirmPasswordTextField;
