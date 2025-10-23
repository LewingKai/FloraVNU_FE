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

interface DetailFlowerProps {
  flowerData: Flower;
  reviewList: Review[];
}

const DetailFlower = ({ flowerData, reviewList }: DetailFlowerProps) => {
  const [countItemAdd, setCountItemAdd] = useState(1);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const onChangeQuality = (value: number) => {
    if (value < 1) return;
    setCountItemAdd(value);
  };
  const onIncrease = () => {
    setCountItemAdd((prev) => prev + 1);
  };
  const onDecrease = () => {
    setCountItemAdd((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const safeHtml = DOMPurify.sanitize(flowerData.description);
  return (
    <div className="px-20 mt-30 mb-20">
      <div className="flex gap-10 ">
        <div className="relative w-[35%] h-auto object-cover">
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
            />
          </div>
          <h1 className="text-4xl font-bold">{flowerData.name}</h1>
          <div
            className={`flower-description mt-5 ${
              !seeMore ? "line-clamp-4" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />

          <div
            onClick={() => setSeeMore(!seeMore)}
            className="text-blue-600 underline"
          >
            {seeMore ? "Rút gọn" : "Xem thêm"}
          </div>

          <div className="flex w-full justify-between bg-[#F5F5F5] py-5 mt-10">
            <div className="ml-5">
              <p className="text-red-500 font-bold text-2xl">
                {helpersFunction.formatPrice(Number(flowerData.price))}
              </p>

              <p className="text-red-500 font-light text-lg italic">
                {DetailProductTextVN.includedVAT}
              </p>
            </div>
            <div className="p-4  rounded-l-full bg-red-500  w-[30%] ">
              <p className="text-right uppercase text-white text-2xl">
                {DetailProductTextVN.flashSales}
              </p>
            </div>
          </div>
          <div className="flex gap-5  items-center my-10">
            <p>{DetailProductTextVN.quantity}</p>
            <div className="flex gap-2 items-center mt-auto">
              <BubblyButton
                className={`${
                  countItemAdd <= 1 || (flowerData.stockQuantity ?? 0) <= 0
                    ? "bg-primary"
                    : "bg-[#FF69B5]"
                } rounded-full w-8 h-8 p-1 text-white`}
                onClick={onDecrease}
                disabled={
                  countItemAdd <= 1 || (flowerData.stockQuantity ?? 0) <= 0
                }
              >
                <FontAwesomeIcon icon={faMinus} />{" "}
              </BubblyButton>
              <input
                type="text"
                className="w-[20px] focus:outline-none text-center border-b border-b-[#a5a3a3]"
                value={countItemAdd}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^-?\d*$/.test(value)) {
                    onChangeQuality(+value);
                  }
                }}
              />
              <BubblyButton
                className={`${
                  (flowerData.stockQuantity ?? 0) <= countItemAdd
                    ? "bg-primary"
                    : "bg-[#FF69B5]"
                } rounded-full p-1 w-8 h-8 text-white flex items-center justify-center`}
                onClick={onIncrease}
                disabled={(flowerData.stockQuantity ?? 0) <= countItemAdd}
              >
                <FontAwesomeIcon icon={faPlus} size="lg" />
              </BubblyButton>
            </div>
            <p>
              trong {flowerData.stockQuantity}{" "}
              {DetailProductTextVN.availableProducts}
            </p>
          </div>

          <div className="w-[90%] justify-between flex gap-5">
            <button className="uppercase flex-1  py-3 border rounded-full">
              <FontAwesomeIcon icon={faCartPlus} />
              {DetailProductTextVN.addToCart}
            </button>
            <button className="uppercase text-secondary flex-1  py-3 border rounded-full">
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
        <div className="grid grid-cols-4 gap-10 mt-10">
          {/* {listFlowerItem.map((item) => {
            return (
              <FlowerItem
                _id={item.id}
                key={item.id}
                image={item.imageUrl.url || "/images/default-flower.jpg"}
                name={item.title}
                price={item.price}
                description={item.description}
              />
            );
          })} */}
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
