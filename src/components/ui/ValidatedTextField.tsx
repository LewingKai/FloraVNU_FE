"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface ValidatedTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  validationRules: (value: string) => boolean;
  errorMessage: string;
  placeholder: string;
}

const ValidatedTextField = ({
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
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      error={error}
      helperText={error ? errorMessage : ""}
      slotProps={{
        inputLabel: { shrink: false },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          backgroundColor: "#F0F4F8",
        },
      }}
      {...props}
    />
  );
};

export default ValidatedTextField;
