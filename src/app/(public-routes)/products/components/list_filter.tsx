import { KeyboardArrowDown } from "@mui/icons-material";
import { Checkbox, Slider } from "@mui/material";
import { useState } from "react";

interface Title {
  label: string;
  value: string;
}

interface ListFilterProps {
  label: string;
  listTitle?: Title[];
  isPriceFilter?: boolean;
  onChange?: (values: string[]) => void;
  onPriceChange?: (min: number, max: number) => void;
}

const ListFilter: React.FC<ListFilterProps> = ({
  label,
  listTitle,
  isPriceFilter = false,
  onChange,
  onPriceChange,
}) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const [value1, setValue1] = useState<number[]>([20, 80]);

  const handleCheckboxChange = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const handlePriceChange = (_: Event, newValue: number[] | number) => {
    if (Array.isArray(newValue)) {
      setValue1(newValue);
      onPriceChange?.(newValue[0], newValue[1]);
    }
  };

  return (
    <div className="transition-all duration-300 flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between px-6 py-5 bg-gray-200"
      >
        <div className="text-[15px] font-medium text-black uppercase">
          {label}
        </div>
        <KeyboardArrowDown
          className={`ml-2 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open &&
        (!isPriceFilter ? (
          <div className="px-6 mb-5">
            {listTitle?.map((item) => (
              <div
                key={item.value}
                className="flex w-full items-center justify-between"
              >
                <p>{item.label}</p>
                <Checkbox
                  checked={selected.includes(item.value)}
                  onChange={() => handleCheckboxChange(item.value)}
                  sx={{
                    color: "#E32C89",
                    "&.Mui-checked": { color: "#FF69B5" },
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 mb-5">
            <Slider
              getAriaLabel={() => "price range"}
              value={value1}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={100}
            />
          </div>
        ))}
    </div>
  );
};

export default ListFilter;
