import { BlogsText } from "@/helpers/text_vn";
import BlogItem from "./components/blog_item";

const BlogPage = () => {
  const fontSizeH1 =
    "text-[30px] md:text-[50px] sm:text-[40px]  lg:text-[60px]";
  const fontSizeH2 =
    "text-[20px]  sm:text-[25px] md:text-[30px]  lg:text-[40px]";

  const fontSizeP =
    "text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px]";

  return (
    <div>
      <div className="md:px-20 md:py-22 p-5 pt-10">
        <div
          className="w-[100%] relative lg:h-[400px]  sm:h-[300px] h-[200px]"
          style={{
            backgroundImage: "url('/images/blogs/image1.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-2/6 left-1/2 w-[80%] lg:w-[60%] -translate-x-1/2">
            <h1 className={` ${fontSizeH1} font-bold text-white text-center`}>
              {BlogsText.titleBlogPage}
            </h1>
            <p
              className={`${fontSizeP} text-center text-white italic font-light`}
            >
              {BlogsText.descBlogPage}
            </p>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-5">
        <h2 className={`uppercase font-bold text-[#14057b] ${fontSizeH2}`}>
          Bài viết gần đây
        </h2>
        <div className="md:w-[10vw] w-[20vw] md:h-[3px] h-[2px] bg-[#FF69B5]  mb-5"></div>

        <div className="flex md:flex-row flex-col md:gap-10 gap-5 justify-between">
          <BlogItem
            containerClassName="md:w-[40vw]"
            imageClassName="w-full md:h-[60%] h-[150px] "
            contentClassName="flex flex-col gap-2 py-2"
          />
          <div className="flex flex-col gap-5">
            <BlogItem
              containerClassName="md:flex gap-4"
              imageClassName="w-full md:h-full h-[150px]"
              contentClassName="flex flex-col gap-2 py-2"
            />
            <BlogItem
              containerClassName="md:flex gap-4"
              imageClassName="w-full md:h-full h-[150px]"
              contentClassName="flex flex-col gap-2 py-2"
            />
          </div>
        </div>
        <div className="sm:py-10 md:py-20 py-5">
          <h2 className="uppercase font-bold  text-[#14057b]">
            Bài viết nổi bật
          </h2>
          <div className="md:w-[10vw] w-[20vw] md:h-[3px] h-[2px] bg-[#FF69B5]  mb-5"></div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            <BlogItem
              containerClassName="flex flex-col gap-4 mt-4"
              imageClassName="w-[100%] md:h-[300px] h-[160px] "
              contentClassName="flex flex-col gap-2"
            />
            <BlogItem
              containerClassName="flex flex-col gap-4 mt-4"
              imageClassName="w-[100%] md:h-[300px] h-[160px] "
              contentClassName="flex flex-col gap-2"
            />
            <BlogItem
              containerClassName="flex flex-col gap-4 mt-4"
              imageClassName="w-[100%] md:h-[300px] h-[160px] "
              contentClassName="flex flex-col gap-2"
            />
            <BlogItem
              containerClassName="flex flex-col gap-4 mt-4"
              imageClassName="w-[100%] md:h-[300px] h-[160px] "
              contentClassName="flex flex-col gap-2"
            />
            <BlogItem
              containerClassName="flex flex-col gap-4 mt-4"
              imageClassName="w-[100%] md:h-[300px] h-[160px] "
              contentClassName="flex flex-col gap-2"
            />
            <BlogItem
              containerClassName="flex flex-col gap-4 mt-4"
              imageClassName="w-[100%] md:h-[300px] h-[160px] "
              contentClassName="flex flex-col gap-2"
            />
            <BlogItem
              containerClassName="flex flex-col gap-4 mt-4"
              imageClassName="w-[100%] md:h-[300px] h-[160px] "
              contentClassName="flex flex-col gap-2"
            />
            <BlogItem
              containerClassName="flex flex-col gap-4 mt-4"
              imageClassName="w-[100%] md:h-[300px] h-[160px] "
              contentClassName="flex flex-col gap-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
