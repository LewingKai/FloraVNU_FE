import Image from "next/image";
import Link from "next/link";

export type blogItem = {
  imageUrl: string;
  title: string;
  desc: string;
  author: string;
  dateTime: string;
  _id: string;
  url: string;
};

type Props = {
  containerClassName?: string;
  contentClassName?: string;
  imageClassName?: string;
  blogData?: blogItem;
};
const fontSizeTitle =
  "text-[13px]  sm:text-[15px] md:text-[18px]  lg:text-[20px]";
const fontSizeDesc =
  "text-[11px]  sm:text-[12px] md:text-[13px]  lg:text-[13px]";
const BlogItem = ({
  containerClassName,
  contentClassName,
  imageClassName,
  blogData,
}: Props) => {
  return (
      <Link href={blogData?.url ?? ""} className={`${containerClassName}`}>
        <div className={`${imageClassName} relative`}>
          <Image
            src= {blogData?.imageUrl ?? "/images/blogs/langdaihoc.png"}
            alt="blog thumbnail"
            sizes="1000px"
            fill
            className="object-cover"
          />
        </div>
        <div className={contentClassName}>
          <div className="flex justify-between">
            <p className={`${fontSizeDesc} text-blue-500 font-bold`}>
               { blogData?.author ?? "Nguyễn Công Bá"}  
            </p>
            <p className={`${fontSizeDesc} italic font-light text-gray-500`}>
              { blogData?.dateTime ?? "20/11/2025"}
            </p>
          </div>
          <p className={` line-clamp-2 font-bold ${fontSizeTitle}`}>
            { blogData?.title ?? "title"}
          </p>
          <p className={`${fontSizeDesc} line-clamp-2 italic font-light`}>
            { blogData?.desc ?? "desc"}
          </p>
          <p className={`${fontSizeDesc} text-blue-500 underline`}>Đọc thêm</p>
        </div>
      </Link>
  );
};

export default BlogItem;
