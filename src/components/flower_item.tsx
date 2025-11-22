import { Flower } from "@/types/home";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import DOMPurify from "dompurify";
import helpersFunction from "@/helpers/helpers";
import useAuth from "@/stores/useAuth";
import { toast } from "react-toastify";
import cartApi from "@/services/axios/actions/cart.action";

const FlowerItem: React.FC<Flower> = (floweritem) => {
  const userInfo = useAuth().isAuth;
  const fontSizeTitle =
    "text-[14px]  sm:text-[15px] md:text-[18px]  lg:text-[20px]";
  const fontSizeDesc =
    "text-[11px]  sm:text-[12px] md:text-[13px]  lg:text-[13px]";
  const handleAddToCart = async () => {
    if (userInfo == null) {
      toast.error("Vui lòng đăng nhập!");
      return;
    }
    try {
      const res = await cartApi.addItemToCart(floweritem._id, 1);
      if (res.status == "success") {
        toast.success("Thêm vào giỏ hàng thành công.");
      }
    } catch (error) {
      toast.error("Không thể thêm vào giỏ hàng!");
    }
  };
  return (
    <Link href={`/flower-detail/${floweritem._id}`} className="w-full">
      <div className="relative w-full h-55">
        <Image
          src={floweritem.image?.url || "/images/default-flower.jpg"}
          alt={floweritem.name || "Bó hoa xinh"}
          fill
          className="object-cover"
          sizes="1000px"
        />
      </div>
      <div className="border-l border-r border-b p-3 border-secondary rounded-b-2xl">
        <h3 className={`${fontSizeTitle} font-bold line-clamp-1`}>
          {floweritem.name}
        </h3>
        <p className={`line-clamp-2 italic ${fontSizeDesc}`}>
          {helpersFunction.stripHtmlTags(floweritem.description)}
        </p>
        <div className="flex flex-row justify-between mt-2">
          <p
            className={`text-red-500 font-bold ${fontSizeTitle} text-priceText`}
          >
            {helpersFunction.formatPrice(Number(floweritem.price))}
          </p>
          <button
            className="hover:cursor-pointer md:px-4 md:py-2 px-2 py-1 bg-amber-200 rounded-full flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            <MdOutlineAddShoppingCart className="md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FlowerItem;
