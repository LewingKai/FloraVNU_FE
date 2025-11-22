"use client";
import OrderInfomation from "@/components/ui/OrderInfomation";
import LabeledInput from "@/components/ui/input-label";
import {
  Badge,
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  Switch,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useAuth from "@/stores/useAuth";
import { toast } from "react-toastify";
import orderApi from "@/services/axios/actions/order.action";
import {
  CardItemData,
  CreateOrderRequestType,
  ItemCartRequest,
} from "@/services/axios/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";

type CartItem = {
  flowerId: CardItemData;
  quantity: number;
  price: number;
  discountPercent: number;
};

const DetailOrder = () => {
  const userInfo = useAuth().user;
  const [isNotDelivery, setIsNotDelivery] = useState(false);
  const [itemAddedList, setItemAddedList] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>("0");
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    control,
  } = useForm({
    defaultValues: {
      senderName: userInfo?.fullName || "",
      senderEmail: userInfo?.email || "",
      senderPhoneNumber: userInfo?.phone || "",
      receiverName: isNotDelivery ? userInfo?.fullName : "",
      receiverAddress: isNotDelivery
        ? "Cửa hàng FloraVNU - Khu phố 34, Phường Linh Xuân, TP. Hồ Chí Minh"
        : "",
      receiverPhoneNumber: "",
      deliveryDate: "",
      messageForReceiver: "",
      deliveryTime: "",
      note: "",
      paymentMethod: "",
    },
  });

  const onSubmit = async (formData: any) => {
    console.log("formData.paymentMethod", formData.paymentMethod);
    const dataRequest: CreateOrderRequestType = {
      senderName: formData.senderName,
      senderEmail: formData.senderEmail,
      senderPhone: formData.senderPhoneNumber,
      recipientName: formData.receiverName,
      recipientPhone: formData.receiverPhoneNumber,
      recipientAddress: formData.receiverAddress,
      deliveryDate: formData.deliveryDate,
      deliveryTime: formData.deliveryTime,
      message: formData.messageForReceiver,
      note: formData.note,
      paymentMethod: formData.paymentMethod,
      orderItems: itemAddedList.map(
        (item): ItemCartRequest => ({
          flowerId: item.flowerId._id ?? "",
          quantity: item.quantity.toString(),
          price: item.price,
          // khi nào sửa lại UI thì truyền lại
          discountPercent: 0,
        })
      ),
      isDelivery: String(!isNotDelivery),
    };

    try {
      await orderApi.createOrder(dataRequest);
      toast.success("Tạo đơn hàng thành công!");
      router.push(PATH_NAME.ORDERSHISTORY);
      reset();
    } catch (error) {
      toast.error("Không thành công!");
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("itemAdded");
    if (saved) {
      setItemAddedList(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    const currentValues = getValues();
    reset({
      senderName: currentValues.senderName || userInfo?.fullName || "",
      senderEmail: currentValues.senderEmail || userInfo?.email || "",
      senderPhoneNumber:
        currentValues.senderPhoneNumber || userInfo?.phone || "",
      receiverName: (isNotDelivery ? userInfo?.fullName : "") || "",
      paymentMethod: "Cash",
      receiverAddress: isNotDelivery
        ? "Cửa hàng FloraVNU - Khu phố 34, Phường Linh Xuân, TP. Hồ Chí Minh"
        : "",
    });
  }, [isNotDelivery, reset, userInfo]);
  return (
    <form id="create-order-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="sm:flex justify-between gap-20 lg:p-16 md:p-10 p-5 mt-15">
        <div className="sm:flex-3">
          <h3 className="text-[#E32C89] font-bold text-[18px] uppercase">
            Thông tin người gửi
          </h3>
          <div className="w-full h-[2px] bg-[#E32C89] my-2"></div>

          <LabeledInput
            label="Họ và tên người gửi"
            required
            placeholder="Nhập họ và tên người gửi"
            name="senderName"
            // deffaultValue={userInfo?.fullName}
            register={register("senderName", {
              required: "Vui lòng nhập họ tên người gửi",
            })}
            errorMessage={errors.senderName?.message as string}
          />

          <div className="sm:flex justify-between gap-10">
            <LabeledInput
              label="Email"
              placeholder="Nhập email người gửi"
              name="senderEmail"
              type="email"
              // deffaultValue={userInfo?.email}
              register={register("senderEmail", {
                pattern: { value: /^\S+@\S+$/, message: "Email không hợp lệ" },
              })}
              errorMessage={errors.senderEmail?.message as string}
            />
            <LabeledInput
              label="Số điện thoại người gửi"
              required
              placeholder="Nhập số điện thoại người gửi"
              name="senderPhoneNumber"
              // type="tel"
              // deffaultValue={userInfo?.phone}
              register={register("senderPhoneNumber", {
                required: "Vui lòng nhập số điện thoại người gửi",
                pattern: {
                  value: /^[0-9]{9,11}$/,
                  message: "Số điện thoại không hợp lệ",
                },
              })}
              errorMessage={errors.senderPhoneNumber?.message as string}
            />
          </div>

          <h3 className="text-[#E32C89] font-bold text-[18px] mt-5 uppercase">
            Thông tin người nhận
          </h3>
          <div className="w-full h-[2px] bg-[#E32C89] my-2"></div>

          <div className="flex gap-2 items-center">
            <p className="font-bold">Nhận hàng tại cửa hàng?</p>
            <Switch
              checked={isNotDelivery}
              onChange={() => setIsNotDelivery(!isNotDelivery)}
            />
          </div>

          <LabeledInput
            label="Họ và tên người nhận"
            required
            placeholder="Nhập họ và tên người nhận"
            name="receiverName"
            // deffaultValue={isNotDelivery ? userInfo?.fullName : ""}
            register={register("receiverName", {
              required: "Vui lòng nhập họ tên người nhận",
            })}
            errorMessage={errors.receiverName?.message as string}
          />

          {!isNotDelivery && (
            <LabeledInput
              label="Số điện thoại người nhận"
              required
              placeholder="Nhập số điện thoại người nhận"
              name="receiverPhoneNumber"
              // type="tel"
              register={register("receiverPhoneNumber", {
                required: "Vui lòng nhập số điện thoại người nhận",
                pattern: {
                  value: /^[0-9]{9,11}$/,
                  message: "Số điện thoại không hợp lệ",
                },
              })}
              errorMessage={errors.receiverPhoneNumber?.message as string}
            />
          )}

          <div className="sm:flex justify-between gap-10">
            <LabeledInput
              label="Ngày nhận"
              required
              name="deliveryDate"
              type="date"
              register={register("deliveryDate", {
                required: "Vui lòng chọn ngày nhận",
              })}
              errorMessage={errors.deliveryDate?.message as string}
            />
            <LabeledInput
              label="Thời gian nhận"
              required
              name="deliveryTime"
              type="time"
              register={register("deliveryTime", {
                required: "Vui lòng chọn giờ nhận",
              })}
              errorMessage={errors.deliveryTime?.message as string}
            />
          </div>

          <LabeledInput
            label="Địa chỉ nhận hàng"
            required
            placeholder="Nhập địa chỉ nhận hàng"
            name="receiverAddress"
            readOnly={isNotDelivery}
            // deffaultValue={
            //   isNotDelivery
            //     ? "Cửa hàng FloraVNU - Khu phố 34, Phường Linh Xuân, TP. Hồ Chí Minh"
            //     : ""
            // }
            register={register("receiverAddress", {
              required: !isNotDelivery
                ? "Vui lòng nhập địa chỉ nhận hàng"
                : false,
            })}
            errorMessage={errors.receiverAddress?.message as string}
          />

          <LabeledInput
            label="Lời nhắn"
            placeholder="Nhập lời nhắn"
            name="messageForReceiver"
            register={register("messageForReceiver")}
          />
          <LabeledInput
            label="Lưu ý cho cửa hàng"
            placeholder="Nhập lưu ý cho cửa hàng"
            name="note"
            register={register("note")}
          />

          <h3 className="text-[#E32C89] font-bold text-[18px] mt-5 uppercase">
            Phương thức thanh toán
          </h3>
          <div className="w-full h-[2px] bg-[#E32C89] my-2"></div>

          <Controller
            name="paymentMethod"
            control={control}
            defaultValue={"Cash"}
            rules={{ required: "Vui lòng chọn phương thức thanh toán" }}
            render={({ field }) => (
              <RadioGroup {...field}>
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
            )}
          />
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
              form="create-order-form"
              className="block text-center uppercase w-full py-3 bg-[#FF69B5] text-white font-bold"
            >
              Tạo đơn
            </button>
          </div>
        </Modal>
        {/* Cột Order info */}
        <div className="flex-2 sm:block hidden relative">
          <div className="sticky top-32">
            <OrderInfomation
              itemAdded={itemAddedList}
              enableAdjustQuantity={false}
              onGetDataCallBack={(totalPrice) => setTotalPrice(totalPrice)}
            />
            <button
              type="submit"
              className="block text-center uppercase w-full py-3 bg-[#FF69B5] text-white font-bold"
            >
              Tạo đơn
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailOrder;
