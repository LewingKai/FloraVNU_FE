import { BlogsText } from "@/helpers/text_vn";
import BlogItem, { blogItem } from "./components/blog_item";
import img from "../../../../public/images/blogs/langdaihoc.png"
const BlogPage = () => {
  const fontSizeH1 =
    "text-[30px] md:text-[50px] sm:text-[40px]  lg:text-[60px]";
  const fontSizeH2 =
    "text-[20px]  sm:text-[25px] md:text-[30px]  lg:text-[40px]";

  const fontSizeP =
    "text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px]";
const staticBlogs : blogItem[] = [
  {
  _id: "1",
  title: "Nhu cầu hoa tươi tại Làng Đại học Quốc gia TP.HCM (VNU)",
  desc:
    "Phân tích xu hướng và nhu cầu sử dụng hoa tươi của sinh viên tại Làng Đại học Quốc gia TP.HCM (VNU) trong các dịp sinh nhật, lễ tốt nghiệp, tỏ tình và sự kiện học đường.",
  imageUrl: "/images/blogs/langdaihoc.png",
  url: "/blogs/nhu-cau-hoa-tuoi-lang-dai-hoc-vnu",
  author: "Nguyễn Công Bá",
  dateTime: "10/12/2025"
},

    {
      _id: "2",
      title: "Ý Nghĩa Của Hoa Hồng – Biểu Tượng Tình Yêu Và Cảm Xúc",
      desc:
        "Khám phá ý nghĩa của hoa hồng: từ tình yêu nồng cháy đến tình bạn, sự thanh khiết và hy vọng, cùng FloraVNU tìm hiểu từng màu sắc hoa hồng.",
      imageUrl: "https://i.pinimg.com/1200x/9b/df/34/9bdf34ec414fa77b289d02a81e78f7f7.jpg",
      url: "/blogs/hoa-hong",
      author: "Nguyễn Công Bá",
      dateTime: "05/01/2025"
    },
    {
      _id: "3",
      title: "Hoa cẩm tú cầu – Biểu tượng tinh tế và sắc màu cảm xúc",
      desc:
        "Khám phá ý nghĩa của hoa cẩm tú cầu, cách chăm sóc và ứng dụng trong quà tặng, trang trí để gửi thông điệp yêu thương và lòng biết ơn.",
      imageUrl:
        "https://i.pinimg.com/736x/c0/a3/a8/c0a3a85873eebc0493c9d96c07dfcfbb.jpg",
      url: "/blogs/cam-tu-cau",
      author: "Nguyễn Công Bá",
      dateTime: "01/01/2026"
    },
    {
      _id: "4",
      title: "Hoa Tulip – Biểu tượng của vẻ đẹp, tình yêu và sự hoàn hảo",
      desc:
        "Khám phá ý nghĩa của hoa Tulip, các màu sắc, cách chăm sóc và lựa chọn hoa Tulip phù hợp để gửi thông điệp yêu thương và niềm vui.",
      imageUrl:
        "https://i.pinimg.com/1200x/63/30/84/63308407d88be3e9ec588dbf246448df.jpg",
      url: "/blogs/hoa-tulip",
      author: "Lê Minh Khôi",
      dateTime: "20/12/2025"
    },
    {
  _id: "5",
  title: "Ý nghĩa tặng hoa ngày tốt nghiệp – Lời chúc cho hành trình trưởng thành",
  desc: "Tìm hiểu ý nghĩa của việc tặng hoa ngày tốt nghiệp, các loại hoa phù hợp và cách chọn hoa để gửi thông điệp chúc mừng thành công cho các sinh viên.",
  imageUrl: "/images/blogs/anhtotnghiep.png",
  url: "/blogs/hoa-ngay-tot-nghiep",
  author: "Lê Minh Khôi",
  dateTime: "15/12/2025"
}
  ]
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
          Bài viết nổi bật
        </h2>
        <div className="md:w-[10vw] w-[20vw] md:h-[3px] h-[2px] bg-[#FF69B5]  mb-5"></div>

        <div className="flex md:flex-row flex-col md:gap-10 gap-5 justify-between">
          
          <BlogItem
          key={staticBlogs[0]._id}
            containerClassName="md:w-[40vw] "
            imageClassName="w-full h-[180px] sm:h-[220px] md:h-[260px]"
            contentClassName="flex flex-col gap-2 py-2"
            blogData = {staticBlogs[0]}
          />
          <div className="flex flex-col gap-5">
            {
            staticBlogs.slice(1,3).map((blog) => {
              return <BlogItem
              key={blog._id}
              containerClassName="md:flex gap-4"
              imageClassName="w-full md:h-full h-[150px]"
              contentClassName="flex flex-col gap-2 py-2"
              blogData = {blog}
            />
            })
          }
          </div>
        </div>
        <div className="sm:py-10 md:py-20 py-5 mt-5">
          <h2 className={`uppercase font-bold text-[#14057b] ${fontSizeH2}`}>
            Bài viết gần đây
          </h2>
          <div className="md:w-[10vw] w-[20vw] md:h-[3px] h-[2px] bg-[#FF69B5]  mb-5"></div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
            {
               staticBlogs.slice(3, staticBlogs.length).map((blog) => {
              return <BlogItem
              key={blog._id}
               containerClassName="flex flex-col gap-4 mt-4"
              imageClassName="w-[100%] md:h-[300px] h-[160px] "
              contentClassName="flex flex-col gap-2"
              blogData = {blog}
            />
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
