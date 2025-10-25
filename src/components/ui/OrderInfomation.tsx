import CartItem from "@/app/(public-routes)/my-cart/components/cart_item";
import helpersFunction from "@/helpers/helpers";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const OrderInfomation = () => {
  const [openDetailsOrder, setOpenDetailsOrder] = useState(false);
  return (
    <div className="border-[#FF69B5] border-t border-l border-r p-4 rounded-t-2xl">
      <h2 className="uppercase text-[25px] font-bold">Thông tin đơn hàng</h2>
      <div className="flex justify-between items-center mt-3">
        <p className="font-bold">2 sản phẩm</p>
        <button onClick={() => setOpenDetailsOrder(!openDetailsOrder)}>
          {openDetailsOrder ? (
            <FontAwesomeIcon icon={faCaretDown} />
          ) : (
            <FontAwesomeIcon icon={faCaretUp} />
          )}
        </button>
      </div>
      {openDetailsOrder ? (
        <div>
          <CartItem small={true} />
          <CartItem small={true} />
        </div>
      ) : null}

      <div className="w-full h-1 bg-gray-400 mt-3"></div>
      <div className="py-3">
        <div className=" flex justify-between">
          <p>Tạm tính</p>
          <p className=" font-bold">
            {helpersFunction.formatPrice(Number(5000000))}
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
          {helpersFunction.formatPrice(Number(5000000))}
        </p>
      </div>
    </div>
  );
};
export default OrderInfomation;
