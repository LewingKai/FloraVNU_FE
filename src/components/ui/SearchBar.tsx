"use client";

import { MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";

interface SearchBarProps {
  searchValue: string;
  handleChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeCurrencies: (
    e: ChangeEvent<{ name?: string; value: unknown }>
  ) => void;
  currencyValue?: string;
  handleSubmit: () => void;
  className?: string;
}

const currencies = [
  {
    value: "name",
    label: "Tìm theo tên",
  },
  {
    value: "type",
    label: "Tìm theo loại hoa",
  },
];

const SearchBar: FC<SearchBarProps> = ({
  searchValue,
  handleChangeSearch,
  handleChangeCurrencies,
  currencyValue = "name",
  handleSubmit,
  className = "",
}) => {
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={`w-full flex max-w-[800px] ${className}`}>
      <TextField
        value={searchValue}
        onChange={handleChangeSearch}
        fullWidth
        placeholder={currencyValue === "name" ? "Nhập tên" : "Nhập loại hoa"}
        className="bg-white rounded-l-[5px] outline-none flex-3"
        autoFocus
        onKeyDown={handleKeyDown}
        sx={{
          "& .MuiOutlinedInput-root": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "5px 0 0 5px",
            "&.Mui-focused fieldset": {
              borderColor: "#FF69B5",
            },
            "& .MuiInputBase-input": {
              paddingLeft: "30px",
            },
          },
          "@media (max-width: 768px)": {
            "& .MuiOutlinedInput-root": {
              height: "40px",
              boxShadow: "none",
            },
          },
        }}
      />
      <TextField
        id="outlined-select-currency"
        select
        value={currencyValue}
        onChange={handleChangeCurrencies}
        defaultValue="restaurant"
        className="flex-1"
        sx={{
          "& .MuiOutlinedInput-root": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            borderRadius: "0 5px 5px 0",
            // minWidth: "175px",
            backgroundColor: "#FF69B5",
            borderColor: "#FF69B5",
            "&.Mui-focused fieldset": {
              borderColor: "##FF69B5",
            },
          },
          "@media (max-width: 768px)": {
            "& .MuiOutlinedInput-root": {
              minWidth: "40px",
              padding: "0",
              height: "40px",
              boxShadow: "none",
            },
            "& .MuiSelect-select": {
              color: "transparent",
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "40px",
              borderColor: "##FF69B5",
            },
            "& .MuiSelect-icon": {
              visibility: "visible",
            },
          },
        }}
      >
        {currencies.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            className="min-w-[100px]"
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default SearchBar;
