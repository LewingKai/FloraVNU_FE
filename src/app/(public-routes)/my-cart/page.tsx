"use client";
import helpersFunction from "@/helpers/helpers";
import CartItem from "./components/cart_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { PATH_NAME } from "@/configs/pathName";
import OrderInfomation from "@/components/ui/OrderInfomation";

const MyCartPage = () => {
  const [openDetailsOrder, setOpenDetailsOrder] = useState(false);
  return (
    <div className="flex justify-between gap-20 p-20 mt-10">
      <div className="flex-3">
        <h1 className="uppercase text-[25px] font-bold">Giỏ hàng của tôi</h1>
        <div className="w-full h-1 bg-gray-400"></div>
        <CartItem small={false} />
        <CartItem small={false} />
        <CartItem small={false} />
      </div>
      <div className="flex-2">
        <OrderInfomation />
        <div className="w-full">
          <Link
            href={PATH_NAME.DETAILORDER}
            className=" block uppercase min-w-[100%] py-3 bg-[#FF69B5] text-white font-bold  text-center"
          >
            Nhập thông tin đặt hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCartPage;
