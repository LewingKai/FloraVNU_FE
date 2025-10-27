import helpersFunction from "@/helpers/helpers";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckBox } from "@mui/icons-material";
import Image from "next/image";
const CartItem = ({ small }: { small: boolean }) => {
  return (
    <div
      className={`flex justify-between items-center  w-full mt-5 ${
        small ? " gap-3 relative" : "gap-10"
      }`}
    >
      {!small && <CheckBox />}
      <div
        className={`relative w-full  flex-1 ${
          small ? "h-[100px]" : "h-[130px]"
        }`}
      >
        <Image
          src="/images/blogs/image1.png"
          alt="Bó hoa xinh"
          fill
          className="object-cover"
          sizes="1000px"
        />
      </div>

      <div className="flex flex-col justify-between flex-4 min-h-full gap-1">
        <p
          className={` font-bold  ${
            small ? "text-[15px] line-clamp-1" : "text-[18px] line-clamp-2"
          }`}
        >
          Giọt nắng nsdf bashdas nasdnas oasdh nasdas jiasdnas adihasn
        </p>
        <p
          className={` italic font-light  ${
            small ? "text-[12px] line-clamp-2" : "text-[15px] line-clamp-3"
          }`}
        >
          The hope được thiết kế từ hoa hướng dương, loài hoa tượng trưng cho sự
          mạnh mẽ, niềm tin và tương lai tươi sáng. Bó hoa là sự lựa chọn để
          gửi...
        </p>
        <p className={`${small ? "text-[12px]" : "text-[15px]"}`}>
          Số lượng: 1
        </p>
        <p
          className={`text-red-500 font-bold ${
            small ? "text-[15px]" : "text-[18px]"
          }`}
        >
          {helpersFunction.formatPrice(Number(5000000))}
        </p>
      </div>
      {small ? (
        <button className=" px-1 rounded-full bg-red-500 absolute top-0 -left-2">
          <FontAwesomeIcon icon={faClose} color="white" />
        </button>
      ) : (
        <button className="py-2 flex-1 border">Xóa</button>
      )}
    </div>
  );
};

export default CartItem;
