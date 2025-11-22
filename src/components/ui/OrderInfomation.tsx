"use client";
import CartItem from "@/app/(public-routes)/my-cart/components/big_cart_item";
import SmallCartItem from "@/app/(public-routes)/my-cart/components/small_cart_item";
import { PATH_NAME } from "@/configs/pathName";
import helpersFunction from "@/helpers/helpers";
import { CardItemData } from "@/services/axios/types";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type CartItem = {
  flowerId: CardItemData;
  quantity: number;
  price: number;
};

type OrderInfomationProps = {
  itemAdded: CartItem[];
  enableAdjustQuantity?: boolean;
  onGetDataCallBack?: (totalPrice: string, itemList: CartItem[]) => void;
};

const OrderInfomation = ({
  itemAdded,
  enableAdjustQuantity = true,
  onGetDataCallBack,
}: OrderInfomationProps) => {
  const [openDetailsOrder, setOpenDetailsOrder] = useState(true);
  const [itemAddedList, setItemAddedList] = useState<CartItem[]>(itemAdded);
  const [totalPrice, setTotalPrice] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const handleRemove = (flowerId: string) => {
    setItemAddedList(itemAddedList.filter((item) => item.flowerId != flowerId));
  };
  const handleQuantityChange = (flowerId: string, newQuantity: number) => {
    setItemAddedList((prev) =>
      prev.map((item) =>
        item.flowerId._id === flowerId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  function handleNavigateToOrder() {
    if (itemAddedList.length == 0) {
      toast.warning("Vui lòng thêm sản phẩm!");
      return;
    }
    localStorage.setItem("itemAdded", JSON.stringify(itemAddedList));
    router.push(PATH_NAME.CREATEORDER);
  }
  useEffect(() => {
    setItemAddedList(itemAdded);
  }, [itemAdded]);

  useEffect(() => {
    const total = itemAddedList.reduce(
      (sum, item: CartItem) => sum + item.quantity * item.price,
      0
    );
    setTotalPrice(total);
  }, [itemAdded, itemAddedList]);
  useEffect(() => {
    if (onGetDataCallBack) onGetDataCallBack(totalPrice.toString(), itemAdded);
  }, [totalPrice]);
  return (
    <div>
      <div className="border-[#FF69B5] border-t border-l border-r p-4 rounded-t-2xl bg-white w-full">
        <h2 className="uppercase md:text-[25px] text-[18px] font-bold text-center md:text-left text-secondary md:text-black">
          Thông tin đơn hàng
        </h2>
        <div className="flex justify-between items-center mt-3">
          <p className="font-bold">{itemAddedList.length} sản phẩm</p>
          <button
            onClick={() => setOpenDetailsOrder(!openDetailsOrder)}
            type="button"
          >
            {openDetailsOrder ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretUp} />
            )}
          </button>
        </div>
        {openDetailsOrder ? (
          <div>
            {itemAddedList.map((item) => {
              return (
                <SmallCartItem
                  itemData={item.flowerId}
                  quantity={item.quantity}
                  handleRemove={handleRemove}
                  onQuantityChange={handleQuantityChange}
                  enableAdjustQuantity={enableAdjustQuantity}
                />
              );
            })}
          </div>
        ) : null}

        <div className="w-full h-1 bg-gray-400 mt-3"></div>
        <div className="py-3">
          <div className=" flex justify-between">
            <p>Tạm tính</p>
            <p className=" font-bold">
              {helpersFunction.formatPrice(Number(totalPrice))}
            </p>
          </div>
          <div className="mt-3 flex justify-between">
            <p>Phí vận chuyển</p> <p>_</p>
          </div>
        </div>
        <div className="w-full h-1 bg-gray-400"></div>
        <div className="mt-3 flex justify-between">
          <p className="font-bold">Tổng đơn hàng</p>
          <p className="text-red-500 font-bold">
            {helpersFunction.formatPrice(Number(totalPrice))}
          </p>
        </div>
      </div>
      <div className="w-full">
        {pathname != PATH_NAME.CREATEORDER ? (
          <button
            onClick={handleNavigateToOrder}
            className=" block uppercase min-w-[100%] py-3 bg-[#FF69B5] text-white font-bold  text-center"
          >
            Nhập thông tin đặt hàng
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default OrderInfomation;
