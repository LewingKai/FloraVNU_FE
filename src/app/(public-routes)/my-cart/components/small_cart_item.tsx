import ButtonAdjustQuantity from "@/components/ui/button-adjust-quantity";
import helpersFunction from "@/helpers/helpers";
import cartApi from "@/services/axios/actions/cart.action";
import { CardItemData } from "@/services/axios/types";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox } from "@mui/material";
import Image from "next/image";
import { it } from "node:test";
import { useState } from "react";
interface ImageCartItem {
  url?: string;
}

type Props = {
  itemData: CardItemData;
  quantity?: number;
  handleRemove: (flowerId: string) => void;
  onQuantityChange?: (flowerId: string, newQuantity: number) => void;
  enableAdjustQuantity?: boolean;
};
const SmallCartItem = ({
  itemData,
  quantity,
  handleRemove,
  enableAdjustQuantity = true,
  onQuantityChange,
}: Props) => {
  const [quantityItem, setQuantityItem] = useState(quantity ?? 1);
  const [maxQuantity, setMaxQuantity] = useState(quantity);
  function handleChangeQuantity(value: number) {
    setQuantityItem(value);
    if (onQuantityChange) {
      onQuantityChange(itemData._id ?? "", value);
    }
  }

  return (
    <div
      className={`flex justify-between items-center  w-full mt-5  gap-3 relative`}
    >
      <div className={`relative w-full  flex-1  h-[100px]`}>
        <Image
          src={itemData.image?.url ?? ""}
          alt="Bó hoa xinh"
          fill
          className="object-cover"
          sizes="1000px"
        />
      </div>

      <div className="flex flex-col justify-between flex-4 min-h-full gap-1">
        <p className={` font-bold text-[15px] line-clamp-1`}>{itemData.name}</p>
        <p className={` italic font-light text-[12px] line-clamp-2`}>
          {helpersFunction.stripHtmlTags(itemData.description ?? "")}
        </p>
        <div className="flex gap-3 items-center">
          <p className={`text-[12px]`}>Số lượng:</p>

          <div className="mt-auto">
            {enableAdjustQuantity ? (
              <ButtonAdjustQuantity
                maxQuantity={itemData.stockQuantity ?? 0}
                onChange={handleChangeQuantity}
                defaultQuanity={quantityItem ?? 1}
              />
            ) : (
              <p>{quantityItem}</p>
            )}
          </div>
        </div>
        <p className={`text-red-500 font-bold text-[15px]`}>
          {helpersFunction.formatPrice(Number(itemData.price ?? 0))}
        </p>
      </div>
      {/* <button
        className="px-0.5 rounded-full bg-red-500 absolute top-0 -left-2"
        onClick={() => handleRemove(itemData._id ?? "")}
      >
        <FontAwesomeIcon icon={faClose} color="white" />
      </button> */}
    </div>
  );
};

export default SmallCartItem;
