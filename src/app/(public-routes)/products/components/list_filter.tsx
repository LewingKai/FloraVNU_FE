import { KeyboardArrowDown } from "@mui/icons-material";
import { Checkbox, Slider } from "@mui/material";
import { p } from "framer-motion/client";
import { useState } from "react";

interface Title {
  label: string;
  value: string;
}

interface ListFilterProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  listTitle?: Title[];
  label: string;
  isPriceFilter?: boolean;
}

const ListFilter: React.FC<ListFilterProps> = ({
  open,
  setOpen,
  listTitle,
  label,
  isPriceFilter = false,
}) => {
  const [value1, setValue1] = useState<number[]>([20, 37]);
  const minDistance = 10;
  const handleChange1 = (
    event: Event,
    newValue: number[],
    activeThumb: number
  ) => {
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <div className={`transition-colors duration-300 flex flex-col gap-3`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-200 bg-gray-200  group`}
      >
        <div className="text-[15px] font-medium text-black uppercase">
          {label}
        </div>

        <KeyboardArrowDown
          className={`ml-2 transition-transform duration-200   ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open &&
        (!isPriceFilter ? (
          <div className="px-6 mb-5 ">
            {listTitle?.map((item) => (
              <div className="flex w-full items-center justify-between">
                <p>{item.label}</p>
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "#E32C89",
                    "&.Mui-checked": {
                      color: "#FF69B5",
                    },
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="px-3">
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              disableSwap
            />
          </div>
        ))}
    </div>
  );
};

export default ListFilter;
