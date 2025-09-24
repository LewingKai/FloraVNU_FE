import { ChangeEvent } from "react";

import { InputAdornment, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchBarProps {
  handleSubmit: () => void;
  handleChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

const SearchBar = ({
  handleSubmit,
  handleChangeSearch,
  searchValue,
}: SearchBarProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div>
      <TextField
        value={searchValue}
        onChange={handleChangeSearch}
        fullWidth
        placeholder={"Tìm kiếm tên hoa..."}
        autoFocus
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon
                icon={faSearch}
                style={{ color: "#000" }}
                size="lg"
              />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            height: "40px",
            borderRadius: "20px",
            bgcolor: "#ffffff",
            "& fieldset": {
              borderColor: "#ff69b5",
            },
            "&:hover fieldset": {
              borderColor: "#e055a1",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ff69b5",
            },
          },
        }}
      />
    </div>
  );
};

export default SearchBar;
