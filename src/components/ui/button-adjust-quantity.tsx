import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BubblyButton from "./BubblyButton";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
type Props = {
  maxQuantity: number;
  onChange: (value: number) => void;
  defaultQuanity: number;
};
const ButtonAdjustQuantity = ({
  maxQuantity,
  onChange,
  defaultQuanity,
}: Props) => {
  const [countItemAdd, setCountItemAdd] = useState(defaultQuanity);
  const onIncrease = () => {
    setCountItemAdd((prev) => prev + 1);
  };
  const onDecrease = () => {
    setCountItemAdd((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div className="flex gap-2 items-center mt-auto">
      <BubblyButton
        className={`${
          countItemAdd <= 1 || (maxQuantity ?? 0) <= 0
            ? "bg-primary"
            : "bg-[#FF69B5]"
        } rounded-full px-0.5 text-white`}
        onClick={() => {
          onDecrease();
          onChange(countItemAdd - 1);
        }}
        disabled={countItemAdd <= 1 || (maxQuantity ?? 0) <= 0}
      >
        <FontAwesomeIcon icon={faMinus} />{" "}
      </BubblyButton>
      <input
        type="text"
        className="w-[20px] focus:outline-none text-center border-b border-b-[#a5a3a3]"
        value={countItemAdd}
        readOnly
      />
      <BubblyButton
        className={`${
          (maxQuantity ?? 0) <= countItemAdd ? "bg-primary" : "bg-[#FF69B5]"
        } rounded-full py-0.5 text-white flex items-center justify-center`}
        onClick={() => {
          onIncrease();
          onChange(countItemAdd + 1);
        }}
        disabled={(maxQuantity ?? 0) <= countItemAdd}
      >
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </BubblyButton>
    </div>
  );
};

export default ButtonAdjustQuantity;
