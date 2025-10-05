"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PasswordTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  validationRules?: (value: string) => boolean;
  errorMessage?: string;
  placeholder?: string;
}

const PasswordTextField = ({
  value,
  onChange,
  validationRules = () => true,
  errorMessage = "",
  placeholder = "",
}: PasswordTextFieldProps) => {
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    onChange(inputValue);
    setError(!validationRules(inputValue));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      fullWidth
      type={showPassword ? "text" : "password"}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      error={error}
      helperText={error ? errorMessage : ""}
      slotProps={{
        inputLabel: { shrink: false },
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          backgroundColor: "#F0F4F8",
        },
      }}
    />
  );
};

export default PasswordTextField;
