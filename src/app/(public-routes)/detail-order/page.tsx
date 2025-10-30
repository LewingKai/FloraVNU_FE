"use client";
import OrderInfomation from "@/components/ui/OrderInfomation";
import CartItem from "../my-cart/components/big_cart_item";
import Link from "next/link";
import { PATH_NAME } from "@/configs/pathName";
import LabeledInput from "@/components/ui/input-label";
import {
  Badge,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";
import { useEffect, useState } from "react";
import useAuth from "@/stores/useAuth";
import { toast } from "react-toastify";
import {
  CardItemData,
  CreateOrderRequestType,
  ItemCartRequest,
} from "@/services/axios/types";
import orderApi from "@/services/axios/actions/order.action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
type CartItem = {
  flowerId: CardItemData;
  quantity: number;
  price: number;
};

const DetailOrder = () => {
  const [isNotDelivery, setIsNotDelivery] = useState(false);
  const [itemAddedList, setItemAddedList] = useState<CartItem[]>([]);
  const userInfo = useAuth().user;
  const [totalPrice, setTotalPrice] = useState<string>("0");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const dataRequest: CreateOrderRequestType = {
      senderName: String(formData.get("senderName") || ""),
      senderEmail: String(formData.get("senderEmail") || ""),
      senderPhone: String(formData.get("senderPhoneNumber") || ""),
      recipientName: String(formData.get("receiverName") || ""),
      // receiverEmail: String(formData.get("receiverEmail") || ""),
      recipientPhone: String(formData.get("receiverPhoneNumber") || ""),
      recipientAddress: String(formData.get("receiverAddress") || ""),
      deliveryDate: String(formData.get("deliveryDate") || ""),
      deliveryTime: String(formData.get("deliveryTime") || ""),
      message: String(formData.get("messageForReceiver") || ""),
      note: String(formData.get("note") || ""),
      paymentMethod: String(formData.get("paymentMethod") || "Cash"),
      totalPrice: Number(totalPrice),
      orderItems: itemAddedList.map(
        (item): ItemCartRequest => ({
          flowerId: item.flowerId._id ?? "",
          quantity: item.quantity.toString(),
        })
      ),
      isDelivery: String(!formData.get("isNotDelivery") || "true"),
    };

    console.log("dữ liệu ======= ", dataRequest);
    try {
      const res = await orderApi.createOrder(dataRequest);
      console.log("Tạo order", dataRequest);
    } catch (error) {
      console.log(error);
      toast.error("Không thành công!");
    }
  };
  useEffect(() => {
    const saved = localStorage.getItem("itemAdded");
    if (saved) {
      const parsed = JSON.parse(saved);
      setItemAddedList(parsed);
    }
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="sm:flex justify-between gap-20 lg:p-16 md:p-10 p-5 mt-15">
        <div className="sm:flex-3">
          <h3 className="text-[#E32C89] font-bold text-[18px] uppercase">
            Thông tin người gửi
          </h3>
          <div className="w-full h-[2px] bg-[#E32C89] my-2"></div>
          <LabeledInput
            label="Họ và tên người gửi"
            required={true}
            placeholder="Nhập họ và tên người gửi"
            name="senderName"
            deffaultValue={userInfo?.fullName}
          />
          <div className="sm:flex justify-between gap-10">
            <LabeledInput
              label="Email"
              placeholder="Nhập email người gửi"
              name="senderEmail"
              type="email"
              deffaultValue={userInfo?.email}
            />
            <LabeledInput
              label="Số điện thoại người gửi"
              required={true}
              placeholder="Nhập số điện thoại người gửi"
              name="senderPhoneNumber"
              type="tel"
              deffaultValue={userInfo?.phone}
            />
          </div>

          <h3 className="text-[#E32C89] font-bold text-[18px] mt-5 uppercase">
            Thông tin người nhận
          </h3>
          <div className="w-full h-[2px] bg-[#E32C89] my-2"></div>
          <LabeledInput
            label="Họ và tên người nhận"
            required={true}
            placeholder="Nhập họ và tên người nhận"
            name="receiverName"
          />
          <div className="flex gap-2 items-center">
            <p className="font-bold">Nhận hàng tại cửa hàng?</p>
            <Switch
              name="isNotDelivery"
              value={isNotDelivery}
              onChange={() => {
                setIsNotDelivery(!isNotDelivery);
              }}
            />
          </div>
          <div className={`${isNotDelivery ? "hidden" : ""}`}>
            <LabeledInput
              label="Số điện thoại người nhận"
              required={true}
              placeholder="Nhập số điện thoại người nhận"
              name="receiverPhoneNumber"
              type="tel"
              disabled={isNotDelivery}
            />
            <div className="sm:flex justify-between gap-10">
              <LabeledInput
                label="Ngày giao hàng"
                required={true}
                placeholder="Nhập ngày giao hàng"
                name="deliveryDate"
                type="date"
                disabled={isNotDelivery}
              />
              <LabeledInput
                label="Thời gian giao hàng"
                required={true}
                placeholder="Nhập thời gian giao hàng"
                name="deliveryTime"
                type="time"
                disabled={isNotDelivery}
              />
            </div>
          </div>
          <LabeledInput
            label="Địa chỉ nhận hàng"
            required={true}
            placeholder="Nhập địa chỉ nhận hàng "
            name="receiverAddress"
            // disabled={isNotDelivery}
            readOnly={isNotDelivery}
            deffaultValue={
              !isNotDelivery
                ? ""
                : "FloraVNU - Khu phố 34, Phường Linh Xuân, TP. Hồ Chí Minh"
            }
          />
          <LabeledInput
            label="Lời nhắn"
            placeholder="Nhập lời nhắn"
            name="message-for-receiver"
          />
          <LabeledInput
            label="Lưu ý cho cửa hàng"
            placeholder="Nhập lưu ý cho cửa hàng"
            name="note"
          />
          <h3 className="text-[#E32C89] font-bold text-[18px] mt-5 uppercase">
            Phương thức thanh toán
          </h3>
          <div className="w-full h-[2px] bg-[#E32C89] my-2"></div>
          <div>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Cash"
                name="paymentMethod"
              >
                <FormControlLabel
                  value="Cash"
                  control={<Radio />}
                  label="Thanh toán khi nhận hàng"
                />
                <FormControlLabel
                  value="Bank"
                  control={<Radio />}
                  label="Thanh toán qua cổng VNPAY"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="sm:hidden fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
          <div className="bg-[#E32C89] p-1 rounded-full shadow-lg hover:scale-105 transition cursor-pointer opacity-65">
            <IconButton onClick={() => setOpenModal(true)}>
              <Badge
                badgeContent={itemAddedList.length}
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
            <OrderInfomation
              itemAdded={itemAddedList}
              enableAdjustQuantity={false}
              onGetDataCallBack={(totalPrice, itemList) =>
                setTotalPrice(totalPrice)
              }
            />
            <button
              type="submit"
              className="block text-center uppercase w-full py-3 bg-[#FF69B5] text-white font-bold"
            >
              Thanh toán
            </button>
          </div>
        </Modal>
        <div className="flex-2 sm:block hidden relative">
          <div className="sticky top-32">
            <OrderInfomation
              itemAdded={itemAddedList}
              enableAdjustQuantity={false}
              onGetDataCallBack={(totalPrice, itemList) =>
                setTotalPrice(totalPrice)
              }
            />
            <button
              type="submit"
              className="block text-center uppercase w-full py-3 bg-[#FF69B5] text-white font-bold"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailOrder;
