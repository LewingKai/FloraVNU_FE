"use client";
import BubblyButton from "@/components/ui/BubblyButton";
import { Flower } from "@/types/home";
import { Review } from "@/types/review";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import RatingFlowerComponent from "./ratting_flower";
import DOMPurify from "dompurify";
import helpersFunction from "@/helpers/helpers";

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

const flowerItem = {
  imageUrl: "/images/home/rose.png",
  title: "Hoa nắng vàng",
  price: "500000",
  description:
    "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
};

interface DetailFlowerProps {
  flowerData: Flower;
}

const DetailFlower = ({ flowerData }: DetailFlowerProps) => {
  const [countItemAdd, setCountItemAdd] = useState(1);
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
        <Image
          src={flowerData.image?.url || "/images/default-flower.jpg"}
          alt={flowerData.name || "Bó hoa xinh"}
          width={800}
          height={500}
          className="w-[60%] object-cover flex-1"
          sizes="1000px"
        />

        <div className="border-secondary p-8 border rounded-4xl flex-3">
          <div className="w-full flex justify-end">
            <Rating
              name="half-rating"
              defaultValue={flowerData.rating}
              precision={0.5}
            />
          </div>
          <h1 className="text-4xl font-bold">{flowerData.name}</h1>
          <div
            className="flower-description mt-5"
            dangerouslySetInnerHTML={{ __html: safeHtml }}
          />
          <div className="flex w-full justify-between bg-[#F5F5F5] py-5 mt-10">
            <div className="ml-5">
              <p className="text-red-500 font-bold text-2xl">
                {helpersFunction.formatPrice(Number(flowerData.price))}
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
            <p>trong {flowerData.stockQuantity} sản phẩm có sẵn</p>
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
            Đánh giá của người mua
          </h2>
        </div>
        <div className="w-full h-0.5 bg-black"></div>
        <RatingFlowerComponent sampleReviews={sampleReviews} />
      </div>
    </div>
  );
};

export default DetailFlower;
