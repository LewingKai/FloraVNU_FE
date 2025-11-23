"use client";
import BubblyButton from "@/components/ui/BubblyButton";
import { Flower } from "@/types/home";
import { Review } from "@/types/review";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import RatingFlowerComponent from "./ratting_flower";
import DOMPurify from "isomorphic-dompurify";
import helpersFunction from "@/helpers/helpers";
import { DetailProductTextVN } from "@/helpers/text_vn";
import { emitter } from "@/utils/eventbus";
import reviewAction from "@/services/axios/actions/review.action";
import cartApi from "@/services/axios/actions/cart.action";
import { toast } from "react-toastify";
import ButtonAdjustQuantity from "@/components/ui/button-adjust-quantity";
import Link from "next/link";
import { PATH_NAME } from "@/configs/pathName";
import useAuth from "@/stores/useAuth";
import { useRouter } from "next/navigation";
import { CardItemData } from "@/services/axios/types";
import FlowerItem from "@/components/flower_item";
interface DetailFlowerProps {
  flowerData: Flower;
  reviewList: Review[];
  OutstandingFlowerList: Flower[];
}
// export interface CardItemData {
//   _id?: string;
//   name?: string;
//   image?: ImageCartItem;
//   description?: string;
//   price?: number;
// }
type CartItem = {
  flowerId: CardItemData;
  quantity: number;
  price: number;
};
const DetailFlower = ({
  flowerData,
  reviewList,
  OutstandingFlowerList,
}: DetailFlowerProps) => {
  const userInfo = useAuth().isAuth;
  const [quantity, setQuantity] = useState(1);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const router = useRouter();
  function handleChangeQuantity(value: number) {
    setQuantity(value);
  }
  const safeHtml = DOMPurify.sanitize(flowerData.description);
  const handleAddToCart = async () => {
    if (userInfo == null) {
      toast.error("Vui lòng đăng nhập!");
      return;
    }
    try {
      const res = await cartApi.addItemToCart(flowerData._id, quantity);
      if (res.status == "success") {
        toast.success("Thêm vào giỏ hàng thành công.");
        setQuantity(1);
      }
    } catch (error) {
      toast.error("Không thể thêm vào giỏ hàng!");
    }
  };

  function handleNavigateToOrder() {
    if (userInfo == null) {
      toast.error("Vui lòng đăng nhập!");
      return;
    }
    const flowerinfo: CardItemData = {
      _id: flowerData._id,
      name: flowerData.name,
      image: {
        url: flowerData.image.url,
      },
      description: flowerData.description,
      price: Number(flowerData.price ?? "0"),
    };
    const itemAdded: CartItem[] = [
      {
        flowerId: flowerinfo,
        quantity: quantity,
        price: Number(flowerData.price ?? 0),
      },
    ];

    localStorage.setItem("itemAdded", JSON.stringify(itemAdded));
    router.push(PATH_NAME.CREATEORDER);
  }
  return (
    <div className="md:px-20 px-5 mt-30 mb-20">
      <div className="flex md:flex-row flex-col md:gap-10 gap-5">
        <div className="relative md:w-[35%] w-full md:h-auto h-80 object-cover md:rounded-0 rounded-4xl overflow-hidden">
          <Image
            src={flowerData.image?.url || "/images/default-flower.jpg"}
            alt={flowerData.name || "Bó hoa xinh"}
            fill
            className="w-full object-cover flex-1"
            sizes="1000px"
          />
        </div>

        <div className="border-secondary p-5 border rounded-4xl flex-3 flex-col justify-center items-center">
          <div className="w-full flex justify-end">
            <Rating
              name="half-rating"
              value={flowerData.rating}
              precision={0.5}
              readOnly
            />
          </div>
          <h1 className="lg:text-4xl text-2xl font-bold my-2">
            {flowerData.name}
          </h1>
          <div
            className={`flower-description ${!seeMore ? "line-clamp-4" : ""}`}
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />

          <div
            onClick={() => setSeeMore(!seeMore)}
            className="text-blue-600 underline"
          >
            {seeMore ? "Rút gọn" : "Xem thêm"}
          </div>

          <div className="flex w-full justify-between bg-[#F5F5F5] md:py-5 py-2 md:mt-10 mt-5">
            <div className="ml-5">
              <p className="text-red-500 font-bold text-2xl">
                {helpersFunction.formatPrice(Number(flowerData.price))}
              </p>

              <p className="text-red-500 font-light text-lg italic">
                {DetailProductTextVN.includedVAT}
              </p>
            </div>
            <div className="p-4 hidden md:flex rounded-l-full bg-red-500  w-[30%] ">
              <p className="text-right uppercase text-white lg:text-2xl text-lg">
                {DetailProductTextVN.flashSales}
              </p>
            </div>
          </div>
          <div className="flex gap-5  items-center justify-center my-10">
            <p>{DetailProductTextVN.quantity}</p>

            <div className="mt-auto">
              <ButtonAdjustQuantity
                maxQuantity={flowerData.stockQuantity ?? 0}
                onChange={handleChangeQuantity}
                defaultQuanity={quantity}
              />
            </div>
            <p>
              trong {flowerData.stockQuantity}{" "}
              {DetailProductTextVN.availableProducts}
            </p>
          </div>

          <div className=" justify-between flex md:flex-row flex-col  gap-5">
            <button
              onClick={handleAddToCart}
              className="flex-1 uppercase font-bold py-3 border   rounded-full 
               hover:bg-secondary hover:text-white transition-all duration-500 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faCartPlus} />
              {DetailProductTextVN.addToCart}
            </button>

            {/* Nút mua ngay */}
            <button
              onClick={handleNavigateToOrder}
              className="flex-1 uppercase font-bold py-3 border hover:border-secondary hover:bg-secondary hover:text-white rounded-full
               bg-white text-secondary transition-all duration-500"
            >
              {DetailProductTextVN.buyNow}
            </button>
          </div>
        </div>
      </div>
      {/* sản phẩm nổi bật */}
      <div className="mt-10">
        <div className=" px-4 py-2 bg-black w-fit">
          <h2 className="uppercase font-bold text-white">
            {DetailProductTextVN.buyNow}
          </h2>
        </div>
        <div className="w-full h-0.5 bg-black"></div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 mt-10">
          {OutstandingFlowerList.map((item) => {
            return (
              <FlowerItem
                _id={item._id}
                key={item._id}
                image={item.image || "/images/default-flower.jpg"}
                alt={item.name}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
      {/* Đánh giá của người mua */}
      <div className="py-10 font-text">
        <div className=" px-4 py-2 bg-black w-fit">
          <h2 className="uppercase font-bold text-white">
            {DetailProductTextVN.buyerReview}
          </h2>
        </div>
        <div className="w-full h-0.5 bg-black"></div>
        <RatingFlowerComponent
          reviewList={reviewList}
          flowerid={flowerData._id}
        />
      </div>
    </div>
  );
};

export default DetailFlower;
