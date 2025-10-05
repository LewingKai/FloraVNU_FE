"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface ValidatedTextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  validationRules: (value: string) => boolean;
  errorMessage: string;
  placeholder: string;
}

const ValidatedTextField = ({
  label,
  value,
  onChange,
  validationRules = () => true,
  errorMessage = "",
  placeholder = "",
  ...props
}: ValidatedTextFieldProps) => {
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
    setError(!validationRules(inputValue));
  };

  return (
    <TextField
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          backgroundColor: "#F0F4F8",
        },
      }}
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      error={error}
      helperText={error ? errorMessage : ""}
      {...props}
    />
  );
};

export default ValidatedTextField;
