"use client";
import OrderInfomation from "@/components/ui/OrderInfomation";
import CartItem from "../my-cart/components/cart_item";
import Link from "next/link";
import { PATH_NAME } from "@/configs/pathName";

const DetailOrder = () => {
  return (
    <div className="flex justify-between gap-20 p-20 mt-10">
      <div className="flex-3">
        <h1>Thông tin đơn hàng</h1>
        <div className="w-full h-1 bg-[#E32C89] px-3"></div>
        <h3>Thông tin người gửi</h3>
        <h3>thông tin người nhận</h3>
        <h3>Phương thức thanh toán</h3>
      </div>

      <div className="flex-2">
        <OrderInfomation />
        <Link
          href={PATH_NAME.DETAILORDER}
          className="block text-center uppercase w-full py-3 bg-[#FF69B5] text-white font-bold "
        >
          Thanh toán
        </Link>
      </div>
    </div>
  );
};

export default DetailOrder;
