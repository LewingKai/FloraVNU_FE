import { Flower } from "@/types/home";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const FlowerItem: React.FC<Flower> = (floweritem) => {
  return (
    <Link href={`/flower-detail/${floweritem.id}`}>
      <div className="relative w-full h-50">
        <Image
          src={floweritem.imageUrl}
          alt={floweritem.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="border-l border-r border-b p-3 border-secondary rounded-b-2xl">
        <h3 className="text-[20px] font-bold line-clamp-2">
          {" "}
          hsbcas adcjhbasdcbsad csjadcbsjhadcbsdbcdcs asjhcbsadjcbsajd
        </h3>
        <p className="text-[13px] font-light italic line-clamp-2 mt-1">
          {floweritem.description}
        </p>
        <div className="flex flex-row justify-between mt-2">
          <p className="font-black text-[20px] text-priceText">
            {floweritem.price}
          </p>
          <button className="px-6 py-1 bg-amber-200 rounded-2xl">
            <MdOutlineAddShoppingCart size={20} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FlowerItem;
