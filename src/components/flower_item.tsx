import Image from "next/image";
import { MdOutlineAddShoppingCart } from "react-icons/md";

interface FlowerItemProps {
  key: number;
  url: string;
  title: string;
  price: string;
  description: string;
}
const FlowerItem: React.FC<FlowerItemProps> = ({
  key,
  url,
  title,
  price,
  description,
}) => {
  return (
    <div key={key}>
      <div className="relative w-full h-50">
        <Image src={url} alt={title} fill className="object-cover" />
      </div>
      <div className="border-l border-r border-b p-3 border-secondary rounded-b-2xl">
        <h3 className="text-[20px] font-bold line-clamp-2">
          {" "}
          hsbcas adcjhbasdcbsad csjadcbsjhadcbsdbcdcs asjhcbsadjcbsajd
        </h3>
        <p className="text-[13px] font-light italic line-clamp-2 mt-1">
          {description}
        </p>
        <div className="flex flex-row justify-between mt-2">
          <p className="font-black text-[20px] text-priceText">{price}</p>
          <button className="px-6 py-1 bg-amber-200 rounded-2xl">
            <MdOutlineAddShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlowerItem;
