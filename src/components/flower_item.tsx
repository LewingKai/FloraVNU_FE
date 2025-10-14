import { Flower } from "@/types/home";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import DOMPurify from "dompurify";
import helpersFunction from "@/helpers/helpers";

const FlowerItem: React.FC<Flower> = (floweritem) => {
  const safeHtml = DOMPurify.sanitize(floweritem.description);
  const fontSizeTitle =
    "text-[14px]  sm:text-[15px] md:text-[18px]  lg:text-[20px]";
  const fontSizeDesc =
    "text-[12px]  sm:text-[13px] md:text-[15px]  lg:text-[18px]";
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
        <div
          className="flower-des_item line-clamp-2"
          dangerouslySetInnerHTML={{ __html: safeHtml }}
        />
        <div className="flex flex-row justify-between mt-2">
          <p
            className={`text-red-500 font-bold ${fontSizeTitle} text-priceText`}
          >
            {helpersFunction.formatPrice(Number(floweritem.price))}
          </p>
          <button className="md:px-6 md:py-2 px-3 py-1 bg-amber-200 rounded-full flex items-center justify-center">
            <MdOutlineAddShoppingCart className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FlowerItem;
