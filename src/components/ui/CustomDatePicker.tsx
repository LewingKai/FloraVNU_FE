"use client";

import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface CustomDatePickerProps {
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  placeholder?: string;
  validationRules?: (value: Dayjs | null) => boolean;
  errorMessage?: string;
}

const CustomDatePicker = ({
  value,
  onChange,
  placeholder = "",
  validationRules = () => true,
  errorMessage = "",
}: CustomDatePickerProps) => {
  const [error, setError] = useState(false);

  const handleChange = (newValue: Dayjs | null) => {
    onChange(newValue);
    setError(!validationRules(newValue));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={handleChange}
        format="DD/MM/YYYY"
        slotProps={{
          textField: {
            placeholder,
            error,
            helperText: error ? errorMessage : "",
            fullWidth: true,
            sx: {
              borderRadius: "8px",
              backgroundColor: "#F0F4F8",
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
