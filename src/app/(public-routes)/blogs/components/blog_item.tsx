import Image from "next/image";

type blogItem = {
  imageUrl: String;
  title: String;
  desc: String;
  author: String;
  dateTime: String;
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
    <div className={`${containerClassName}`}>
      <div className={`${imageClassName} relative`}>
        <Image
          src="/images/blogs/image1.png"
          alt="blog thumbnail"
          sizes="1000px"
          fill
          className="object-cover"
        />
      </div>
      <div className={contentClassName}>
        <div className="flex justify-between">
          <p className={`${fontSizeDesc} text-blue-500 font-bold`}>
            Nguyễn Công Bá
          </p>
          <p className={`${fontSizeDesc} italic font-light text-gray-500`}>
            20/11/2025
          </p>
        </div>
        <p className={` line-clamp-2 font-bold ${fontSizeTitle}`}>
          Blog title nè Đảm bảo đúng hẹn, an toàn đến tay bạn. Đảm bảo đúng hẹn,
          an toàn đến tay bạn.
        </p>
        <p className={`${fontSizeDesc} line-clamp-2 italic font-light`}>
          Blog desc Đảm bảo đúng hẹn, an toàn đến tay bạn. Đảm bảo đúng hẹn, an
          toàn đến tay bạn. Đảm bảo đúng hẹn, an toàn đến tay bạn.
        </p>
        <p className={`${fontSizeDesc} text-blue-500 underline`}>Đọc thêm</p>
      </div>
    </div>
  );
};

export default BlogItem;
