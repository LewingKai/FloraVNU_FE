"use client";
import FlowerItem from "@/components/flower_item";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FormControl, MenuItem, Pagination, Select } from "@mui/material";
import { useState } from "react";
import ListFilter from "./components/list_filter";
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
const filterType = {
  event: [
    { label: "Hoa chúc mừng", value: "" },
    { label: " Hoa khai trương ", value: "" },
    { label: "Hoa tốt nghiệp", value: "" },
  ],
  flowerType: [
    { label: "Hoa hồng", value: "rose" },
    { label: "Hoa cẩm chướng ", value: "" },
    { label: "Hoa tulip", value: "" },
    { label: "Hoa ly", value: "" },
    { label: "Hoa cẩm tú cầu", value: "" },
    { label: "Hoa đồng tiền", value: "" },
  ],
  shapeType: [
    { label: "Bó hoa", value: "" },
    { label: "Hộp hoa", value: "" },

    { label: "Giỏ hoa", value: "" },
  ],
};

const sortTypeList = [
  {
    label: "Giá tăng dần",
    value: "priceIncreases",
  },
  {
    label: "Giá giảm dần",
    value: "priceDecrease",
  },
];
const MenuScreen = () => {
  const [openEventFilter, setOpenEventFilter] = useState(true);
  const [openFlowerTypeFilter, setOpenFlowerTypeFilter] = useState(true);
  const [openShapeTypeFilter, setOpenShapeTypeFilter] = useState(true);
  const [openPriceFilter, setOpenPriceFilter] = useState(true);
  const [sortType, setSortType] = useState("priceIncreases");
  const [openFilterBox, setOpenFilterBox] = useState(false);
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/images/menu/image1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[650px] relative items-center justify-center flex"
      >
        <div className="max-w-[70%]">
          <h1 className="text-[80px] font-bold text-white text-center">
            Sản phẩm của chúng tôi
          </h1>
          <p className="text-[25px] font-light italic text-white text-center">
            "FloraVNU mang đến những đóa hoa tươi nhất, gửi gắm yêu thương và
            khoảnh khắc lãng mạn đến người bạn trân quý."
          </p>
        </div>
      </div>
      <div className="border-b border-t flex  justify-between items-center px-10 py-10 my-10">
        <button
          className="flex justify-center items-center gap-2"
          onClick={() => setOpenFilterBox(!openFilterBox)}
        >
          <FontAwesomeIcon icon={faSliders} size="xl" />
          <p className="text-lg font-bold uppercase">Bộ lọc</p>
        </button>
        <p className="italic font-light text-gray">
          Hiển thị 1-16 trong tổng số 30 kết quả
        </p>
        <div className="flex justify-between items-center">
          <p className="uppercase font-bold text-lg">Sắp xếp theo:</p>
          <FormControl sx={{ m: 1, width: 200 }}>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={sortType}
              onChange={(valueA) => {
                setSortType(valueA.target.value);
              }}
            >
              {sortTypeList.map((type) => (
                <MenuItem
                  key={type.label}
                  value={type.value}
                  // style={getStyles(name, personName, theme)}
                >
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center py-10 px-10">
        <div className="flex gap-10 ">
          {/* Bộ lọc */}
          {openFilterBox && (
            <div className="flex-1  border h-fit border-gray-200">
              {/* lọc theo sự kiện */}
              <ListFilter
                open={openEventFilter}
                setOpen={setOpenEventFilter}
                listTitle={filterType.event}
                label="Theo sự kiện"
              />
              {/* lọc theo loài hoa */}
              <ListFilter
                open={openFlowerTypeFilter}
                setOpen={setOpenFlowerTypeFilter}
                listTitle={filterType.flowerType}
                label="Theo loài hoa"
              />
              {/* lọc theo kiểu dáng */}
              <ListFilter
                open={openShapeTypeFilter}
                setOpen={setOpenShapeTypeFilter}
                listTitle={filterType.shapeType}
                label="Theo kiểu dáng"
              />
              {/* lọc theo giá */}
              <ListFilter
                open={openPriceFilter}
                setOpen={setOpenPriceFilter}
                label="Theo mức giá"
                isPriceFilter={true}
              />
            </div>
          )}

          {/* Sản phẩm */}
          <div className=" flex-3">
            <div className="grid grid-cols-4 gap-5">
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
            <div className="grid grid-cols-4 gap-5 mt-10">
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
            <div className="grid grid-cols-4 gap-5 mt-10">
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
            <div className="grid grid-cols-4 gap-5 mt-10">
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
        </div>

        <Pagination
          count={5}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#000",
              borderColor: "#FF69B5",
              fontSize: "15px",
            },
            "& .Mui-selected": {
              backgroundColor: "#FF69B5",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#ff85c1",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default MenuScreen;
