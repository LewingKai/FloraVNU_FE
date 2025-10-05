"use client";
import FlowerItem from "@/components/flower_item";
import BubblyButton from "@/components/ui/BubblyButton";
import { Flower } from "@/types/home";
import { Review } from "@/types/review";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import RatingFlowerComponent from "./components/ratting_flower";

const sampleReviews: Review[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    rating: 5,
    date: "12/03/2025",
    comment:
      "Sản phẩm chất lượng tuyệt vời, vải mềm và thoáng mát. Đúng như mô tả và giao hàng nhanh.",
  },
  {
    id: 2,
    name: "Trần Thị B",
    rating: 2,
    date: "05/03/2025",
    comment:
      "Tôi rất hài lòng với chất lượng sản phẩm. Tuy nhiên kích thước hơi rộng một chút so với bảng size.",
  },
  {
    id: 3,
    name: "Lê Hoàng C",
    rating: 3,
    date: "28/02/2025",
    comment:
      "Chất liệu vải tốt nhưng màu sắc hơi khác so với hình ảnh trên website.",
  },
];
const listFlowerItem = [
  {
    id: "1",
    imageUrl: "/images/home/rose.png",
    title: "Hoa nắng vàng",
    price: "500000",
    description:
      "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
  },
  {
    id: "2",
    imageUrl: "/images/home/rose.png",
    title: "Hoa nắng vàng",
    price: "500000",
    description:
      "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
  },
  {
    id: "3",
    imageUrl: "/images/home/rose.png",
    title: "Hoa nắng vàng",
    price: "500000",
    description:
      "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
  },
  {
    id: "4",
    imageUrl: "/images/home/rose.png",
    title: "Hoa nắng vàng",
    price: "500000",
    description:
      "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
  },
];
const flowerItem = {
  imageUrl: "/images/home/rose.png",
  title: "Hoa nắng vàng",
  price: "500000",
  description:
    "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
};
const FlowerDetail = () => {
  return (
    <div className="px-20 mt-30 mb-20">
      <div className="flex gap-10 ">
        <Image
          src={flowerItem.imageUrl}
          alt={flowerItem.title}
          width={800}
          height={500}
          className="w-[60%] h-auto object-cover"
        />

        <div className="border-secondary p-8 border rounded-4xl ">
          <div className="w-full flex justify-end">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <h1 className="text-4xl font-bold">{flowerItem.title}</h1>
          <p className="text-xl font-light italic mt-3">
            {flowerItem.description}
          </p>
          <div className="flex w-full justify-between bg-[#F5F5F5] py-5 mt-10">
            <div className="ml-5">
              <p className="text-red-500 font-bold text-2xl">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(Number(flowerItem.price))}
              </p>

              <p className="text-red-500 font-light text-lg italic">
                Đã bao gồm VAT
              </p>
            </div>
            <div className="p-4  rounded-l-full bg-red-500  w-[30%] ">
              <p className="text-right uppercase text-white text-2xl">
                {" "}
                Siêu giảm giá!
              </p>
            </div>
          </div>
          <div className="flex gap-5  items-center my-10">
            <p>Số lượng: </p>
            <div className="flex gap-2 items-center mt-auto">
              <BubblyButton
                className={`bg-primary rounded-full p-1 w-8 h-8 text-white flex items-center justify-center`}
                // onClick={onIncrease}
              >
                <FontAwesomeIcon icon={faPlus} size="lg" />
              </BubblyButton>
              <input
                type="text"
                className="w-[20px] focus:outline-none text-center border-b border-b-[#a5a3a3]"
                // value={foodInfo.quantity}
                value={1}
                // onChange={(e) => {
                //   const value = e.target.value;
                //   if (/^-?\d*$/.test(value)) {
                //     onChangeQuality(+value);
                //   }
                // }}
              />
              <BubblyButton
                className="bg-primary rounded-full w-8 h-8 p-1 text-white"
                // onClick={onDecrease}
              >
                <FontAwesomeIcon icon={faMinus} />{" "}
              </BubblyButton>
            </div>
            <p>trong 2 sản phẩm có sẵn</p>
          </div>

          <div className="w-[90%] justify-between flex gap-5">
            <button className="uppercase flex-1  py-3 border rounded-full">
              <FontAwesomeIcon icon={faCartPlus} />
              Thêm vào giỏ hàng
            </button>
            <button className="uppercase text-secondary flex-1  py-3 border rounded-full">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
      {/* sản phẩm nổi bật */}
      <div className="mt-10">
        <div className=" px-4 py-2 bg-black w-fit">
          <h2 className="uppercase font-bold text-white">Sản phẩm liên quan</h2>
        </div>
        <div className="w-full h-0.5 bg-black"></div>
        <div className="grid grid-cols-4 gap-10 mt-10">
          {listFlowerItem.map((item) => {
            return (
              <FlowerItem
                id={item.id}
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
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
            Đánh giá của người mua
          </h2>
        </div>
        <div className="w-full h-0.5 bg-black"></div>
        <RatingFlowerComponent sampleReviews={sampleReviews} />
      </div>
    </div>
  );
};

export default FlowerDetail;
