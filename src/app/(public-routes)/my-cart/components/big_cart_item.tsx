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
import { toast } from "react-toastify";
import { emitter } from "@/utils/eventbus";

type Props = {
  isSmallCard?: boolean;
  itemData: CardItemData;
  quantity?: number;
  onSelectChange?: (
    item: CardItemData,
    quantity: number,
    checked: boolean,
    price: number
  ) => void;
};
const BigCartItem = ({
  isSmallCard = false,
  itemData,
  quantity,
  onSelectChange,
}: Props) => {
  const [quantityItem, setQuantityItem] = useState(quantity ?? 1);
  const [checked, setChecked] = useState(false);
  async function handleDeleteCartItem(flowerId: string) {
    try {
      const res = await cartApi.deleteItemFromCart(flowerId);
      toast.success("Đã xóa thành công");
      emitter.emit("updateCartItemList");
    } catch (error) {
      toast.error("Không thể xóa!");
    }
  }

  async function handleChangeQuantity(value: number) {
    if (isSmallCard == true) return;
    let type = "increase";
    if (value < quantityItem) {
      type = "decrease";
    }
    try {
      const res = await cartApi.updateQuantityInCart(itemData._id ?? "", type);
      setQuantityItem(value);
    } catch (error) {
      toast.error("Đã xảy ra lỗi!");
    }
  }
  function handleCheckChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    if (onSelectChange) {
      onSelectChange(itemData, quantityItem, newChecked, itemData.price ?? 0);
    }
  }
  return (
    <div
      className={`flex justify-between items-center  w-full mt-5 lg:gap-10 gap-3 md:gap-5`}
    >
      {!isSmallCard && (
        <Checkbox
          checked={checked}
          onChange={handleCheckChange}
          color="secondary"
        />
      )}
      <div className={`relative w-full  flex-1 h-[150px]`}>
        <Image
          src={itemData.image?.url ?? ""}
          alt="Bó hoa xinh"
          fill
          className="object-cover"
          sizes="1000px"
        />
      </div>

      <div className="flex flex-col justify-between flex-4 min-h-full gap-1">
        <p className={` font-bold  md:text-[18px] text-[15px] line-clamp-2`}>
          {itemData.name}
        </p>
        <p
          className={` italic font-light  md:text-[15px] text-[13px] line-clamp-2`}
        >
          {helpersFunction.stripHtmlTags(itemData.description ?? "")}
        </p>
        <div className="flex gap-3 items-center my-2">
          <p className=" md:text-[15px] text-[13px]">Số lượng:</p>
          <div className="mt-auto">
            <ButtonAdjustQuantity
              maxQuantity={itemData.stockQuantity ?? 0}
              onChange={handleChangeQuantity}
              defaultQuanity={quantity ?? 1}
            />
          </div>
        </div>
        <p className={`text-red-500 font-bold  md:text-[18px] text-[15px]`}>
          {helpersFunction.formatPrice(Number(itemData.price ?? 0))}
        </p>
      </div>

      <button
        className="py-1 w-fit flex-1 border rounded-4xl "
        onClick={() => handleDeleteCartItem(itemData._id ?? "")}
      >
        <FontAwesomeIcon icon={faTrash} color="red" />
      </button>
    </div>
  );
};

export default BigCartItem;
