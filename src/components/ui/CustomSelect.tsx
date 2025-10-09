"use client";

import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  validationRules?: (value: string) => boolean;
  errorMessage?: string;
}

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = "",
  validationRules = () => true,
  errorMessage = "",
}: CustomSelectProps) => {
  const [error, setError] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
    setError(!validationRules(selectedValue));
  };

  return (
    <FormControl
      fullWidth
      variant="outlined"
      error={error}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          backgroundColor: "#F0F4F8",
        },
      }}
    >
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) {
            return <span style={{ color: "#9e9e9e" }}>{placeholder}</span>;
          }
          const selectedOption = options.find((opt) => opt.value === selected);
          return selectedOption ? selectedOption.label : "";
        }}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "8px",
          },
          backgroundColor: "#F0F4F8",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

      {error && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default CustomSelect;
