import { Pagination } from "@mui/material";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
const MenuScreen = () => {
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
      <div className="border-b border-t flex  justify-between px-10 py-10 my-10">
        <button className="flex justify-center items-center">
          <HiAdjustmentsHorizontal />
          <p>Bộ lọc</p>
        </button>
        <p className="italic font-light text-gray">
          Hiển thị 1-16 trong tổng số 30 kết quả
        </p>
        <div className="flex">
          <p className="uppercase">Sắp xếp theo:</p>
          <p className="font-bold">Giá giảm dần</p>
        </div>
      </div>
      <div></div>
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
            color: "#fff",
            "&:hover": {
              backgroundColor: "#ff85c1",
            },
          },
        }}
      />
    </div>
  );
};

export default MenuScreen;
