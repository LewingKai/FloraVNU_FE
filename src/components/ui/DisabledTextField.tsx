import TextField from "@mui/material/TextField";

interface DisabledTextFieldProps {
  value: string;
  label: string;
}

const DisabledTextField = ({
  value,
  label,
  ...props
}: DisabledTextFieldProps) => {
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          backgroundColor: "#F0F4F8",
        },
      }}
      disabled
      {...props}
    />
  );
};

export default DisabledTextField;
