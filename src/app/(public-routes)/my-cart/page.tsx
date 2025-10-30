"use client";
import { useEffect, useState } from "react";
import BigCartItem from "./components/big_cart_item";
import OrderInfomation from "@/components/ui/OrderInfomation";
import cartApi from "@/services/axios/actions/cart.action";
import { CardItemData } from "@/services/axios/types";
import { emitter } from "@/utils/eventbus";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@mui/material/IconButton";
import { Badge, Modal } from "@mui/material";

type CartItem = {
  flowerId: CardItemData;
  quantity: number;
  price: number;
};

const MyCartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [itemAdded, setItemAdded] = useState<CartItem[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  async function getItemList() {
    try {
      const res = await cartApi.getListItemFromCart();
      if (res.cartItems.length > 0) {
        setCartItems(res.cartItems);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleSelectItem(
    item: CardItemData,
    quantity: number,
    checked: boolean,
    price: number
  ) {
    if (checked) {
      setItemAdded((prev) => [...prev, { flowerId: item, quantity, price }]);
    } else {
      setItemAdded((prev) => prev.filter((i) => i.flowerId._id !== item._id));
    }
  }

  useEffect(() => {
    getItemList();
    emitter.on("updateCartItemList", getItemList);
    return () => {
      emitter.off("updateCartItemList", getItemList);
    };
  }, []);

  return (
    <div className="sm:flex justify-between gap-20 lg:p-20 px-5 mt-20 mb-10">
      <div className="sm:flex-3">
        <h1 className="text-[#E32C89] font-bold lg:text-[25px] uppercase">
          Giỏ hàng của tôi
        </h1>
        <div className="w-full h-0.5 bg-[#E32C89] mb-4"></div>

        {cartItems.map((item) => (
          <BigCartItem
            key={item.flowerId._id}
            isSmallCard={false}
            itemData={item.flowerId}
            quantity={item.quantity}
            onSelectChange={handleSelectItem}
          />
        ))}
      </div>

      <div className="sm:hidden fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <div className="bg-[#E32C89] p-1 rounded-full shadow-lg hover:scale-105 transition cursor-pointer opacity-65">
          <IconButton onClick={() => setOpenModal(true)}>
            <Badge
              badgeContent={itemAdded.length}
              color="primary"
              overlap="circular"
            >
              <FontAwesomeIcon icon={faBagShopping} color="white" />
            </Badge>
          </IconButton>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <div className="w-[90%] sm:w-[60%] bg-white rounded-lg shadow-lg outline-none">
          <OrderInfomation itemAdded={itemAdded} />
        </div>
      </Modal>

      <div className="flex-2 sm:block hidden">
        <OrderInfomation itemAdded={itemAdded} />
      </div>
    </div>
  );
};

export default MyCartPage;
