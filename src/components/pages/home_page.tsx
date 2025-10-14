"use client";
import RecommendCarousel from "@/components/RecommendCarousel";
import SearchBar from "@/components/ui/SearchBar";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";
import { Flower } from "@/types/home";
import { Review } from "@/types/review";
import { Avatar } from "@mui/material";

type Props = {
  outStandingFlower: Flower[];
  outStadingCommentList: Review[];
};
const HomePage = ({ outStandingFlower, outStadingCommentList }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("name");
  const router = useRouter();

  const handleSubmit = async () => {
    router.push(
      `${PATH_NAME.PRODUCTS}?keyword=${encodeURIComponent(
        searchValue
      )}&searchType=${encodeURIComponent(searchType)}`
    );
  };

  const slides = [
    "/images/home/event1.png",
    "/images/home/event2.png",
    "/images/home/event3.png",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selected, setSelected] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  const fontSizeH2 =
    "text-[20px]  sm:text-[25px] md:text-[30px]  lg:text-[40px]";
  const fontSizeP =
    "text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px]";
  const fontSizeH1 =
    "text-[30px] md:text-[50px] sm:text-[40px]  lg:text-[80px]";
  const listItem = [
    {
      icon: "/icons/home/banking_easy.svg",
      title: "Thanh toán dễ dàng",
      des: "Hỗ trợ nhiều phương thức, nhanh chóng và tiện lợi.",
    },
    {
      icon: "/icons/home/fast-delivery.svg",
      title: "Giao hàng nhanh chóng",
      des: "Đảm bảo đúng hẹn, an toàn đến tay bạn.",
    },
    {
      icon: "/icons/home/add-photo.svg",
      title: "Ảnh chân thật",
      des: "Hình ảnh rõ nét, giống sản phẩm thực tế.",
    },
    {
      icon: "/icons/home/support.svg",
      title: "Hỗ trợ ý tưởng",
      des: "Đưa ra gợi ý sáng tạo phù hợp nhu cầu.",
    },
  ];
  const imageAlbum = [
    {
      image: "/images/home/cam_chuong.png",
      title: "Cẩm chướng",
      des: "Hoa cẩm chướng mang trong mình vẻ đẹp giản dị nhưng bền bỉ, tượng trưng cho tình yêu sâu sắc, sự ngưỡng mộ và lòng biết ơn. Tùy vào màu sắc, cẩm chướng còn thể hiện niềm vui, sự may mắn hay tình mẫu tử thiêng liêng. Đây là loài hoa rất phù hợp để dành tặng những người thân yêu trong các dịp đặc biệt.",
      key: "camchuong",
    },
    {
      image: "/images/home/camtucau.png",
      title: "Cẩm tú cầu",
      des: "Cẩm tú cầu là loài hoa mang vẻ đẹp lãng mạn, tinh tế và mềm mại, thường được xem là biểu tượng của lòng biết ơn và sự chân thành. Với sắc hoa thay đổi theo độ pH của đất, cẩm tú cầu cũng gợi nhắc đến sự biến đổi trong cảm xúc và tình yêu. Loài hoa này thường xuất hiện trong các lễ cưới, thể hiện hạnh phúc viên mãn.",
      key: "camtucau",
    },
    {
      image: "/images/home/dongtien.png",
      title: "Đồng tiền",
      des: "Hoa đồng tiền rực rỡ là biểu tượng của niềm vui, hạnh phúc và sự khởi đầu may mắn. Với nhiều màu sắc tươi sáng, đồng tiền luôn mang đến cảm giác tích cực và hy vọng mới. Đây là loài hoa được ưa chuộng để trang trí và làm quà tặng trong dịp khai trương, mừng năm mới hoặc chúc mừng thành công.",
      key: "dongtien",
    },
    {
      image: "/images/home/hoaly.png",
      title: "Hoa ly",
      des: "Hoa ly sở hữu vẻ đẹp sang trọng, thanh tao và hương thơm nồng nàn, tượng trưng cho sự trong sáng, thanh khiết và lòng chung thủy. Ở phương Tây, hoa ly còn gắn liền với sự cao quý và thịnh vượng. Đây là loài hoa thường được dùng trong các dịp lễ lớn, thể hiện sự tôn trọng và tình cảm chân thành.",
      key: "hoaly",
    },
    {
      image: "/images/home/rose.png",
      title: "Hoa hồng",
      des: "Hoa hồng là biểu tượng muôn thuở của tình yêu, sự lãng mạn và cái đẹp. Mỗi màu hoa lại mang một ý nghĩa riêng: hồng đỏ tượng trưng cho tình yêu nồng cháy, hồng trắng cho sự thuần khiết, hồng vàng cho tình bạn và niềm vui. Đây là loài hoa không thể thiếu trong những dịp kỷ niệm, tỏ tình hay lễ cưới.",
      key: "hoahong",
    },
    {
      image: "/images/home/tulip.png",
      title: "Hoa tulip",
      des: "Hoa tulip mang trong mình vẻ đẹp sang trọng, tinh tế và hiện đại, tượng trưng cho tình yêu hoàn hảo, sự thịnh vượng và niềm hy vọng. Ở Hà Lan – quê hương của tulip – loài hoa này còn là biểu tượng của mùa xuân và sự khởi đầu mới. Tặng hoa tulip chính là gửi gắm lời chúc về một tình yêu trọn vẹn và cuộc sống tươi đẹp.",
      key: "hoatulip",
    },
  ];

  return (
    <div
      // full theo viewport
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/images/aboutus/image1.png')",
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // giữ ảnh cố định
      }}
    >
      <div
        className="w-[100%] relative lg:h-[700px]  sm:h-[500px] h-[300px]"
        style={{
          backgroundImage: "url('/images/home/image1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute bottom-1/5 left-1/2 w-[80%] lg:w-[60%] -translate-x-1/2">
          <h1 className={` ${fontSizeH1} font-bold text-white text-center`}>
            Hương hoa khẽ chạm, tình yêu khẽ nở.
          </h1>

          <div className=" bg-white rounded-xl md:p-10 p-3 sm:p-6 md:mt-10 mt-3 w-[90%] mx-auto">
            <SearchBar
              handleChangeCurrencies={(e) =>
                setSearchType(e.target.value as string)
              }
              handleChangeSearch={(e) => setSearchValue(e.target.value)}
              handleSubmit={handleSubmit}
              searchValue={searchValue}
              currencyValue={searchType}
            />
            <p className="sm:text-[15px]  lg:text-[15px] text-[10px] font-light text-black text-center mt-5">
              FloraVNU mang đến những đóa hoa tươi nhất, gửi gắm yêu thương và
              khoảnh khắc lãng mạn đến người bạn trân quý.
            </p>
          </div>
        </div>
      </div>

      {/* Sản phẩm nổi bật */}

      <div className="pt-10 bg-white md:pb-20 sm:pb-10 pb-6">
        <h2
          className={`${fontSizeH2} uppercase text-[#14057b] font-bold font-playfair text-center`}
        >
          Sản phẩm nổi bật
        </h2>
        <div className="w-[15vw] h-[4px] bg-secondary mx-auto mb-5"></div>
        <div className="mx-auto max-w-[1100px] max-md:px-12 mt-5">
          {outStandingFlower && (
            <RecommendCarousel flowers={outStandingFlower || []} />
          )}
        </div>
      </div>
      <div className="w-full sm:h-[1000px] h-[800px] bg-opacity-100 flex items-center justify-center">
        <div>
          <div>
            <h2
              className={`${fontSizeH2} text-white font-bold font-playfair text-center`}
            >
              Đánh giá của khách hàng
            </h2>
            <p
              className={`${fontSizeP} italic text-white text-center sm:mb-5 `}
            >
              Khách hàng của chúng tôi nói gì?
            </p>
            <div>
              <div className="flex justify-center items-center md:gap-6 gap-3 overflow-x-auto h-[20vh]">
                {outStadingCommentList.map((t, index) => (
                  <div
                    key={t.id}
                    className={` cursor-pointer transition-all md:w-[80px] md:h-[80px]  h-[40px] w-[40px] duration-300 rounded-full overflow-clip ${
                      selected === index
                        ? "scale-125 border-2 border-white"
                        : "scale-90 opacity-70"
                    }`}
                    onClick={() => setSelected(index)}
                  >
                    <Avatar
                      alt="Avatar khách hàng"
                      src={t.avatar || "/images/home/rose.png"}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* <Image
                      src={t.avatar || "/images/home/rose.png"}
                      alt={t.name || "Avatar khách hàng"}
                      fill
                      sizes="1000px"
                      className="rounded-full object-cover"
                    /> */}
                  </div>
                ))}
              </div>

              {/* Nội dung comment */}
              <div className="sm:max-w-[75vw] max-w-[85%] mx-auto sm:p-6 p-3 rounded-br-4xl rounded-tl-4xl bg-white/80 sm:my-5 my-2 min-h-[25vh] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <p className="text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px] italic text-center">
                      “{outStadingCommentList[selected].comment}”
                    </p>
                    <h4 className="text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px] font-bold text-secondary text-center text-lg">
                      {outStadingCommentList[selected].name}
                    </h4>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="sm:mt-10 mt-5">
            <h2
              className={`${fontSizeH2} font-bold font-playfair text-center text-white`}
            >
              Tại sao nên chọn FloraVNU?
            </h2>
            <div className="w-[10vw] h-[4px] bg-secondary mx-auto "></div>
            <div className="place-items-center w-full sm:px-20 px-5 md:py-10 py-5 sm:grid-cols-2 grid-cols-2 grid md:gap-5 gap-4">
              {listItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="sm:flex items-center min-w-[30vw] max-w-[50vw] sm:min-h-[0vh] min-h-[30vh] bg-white sm:p-7 p-4 gap-10 md:mb-7 rounded-2xl"
                  >
                    <div className="flex-shrink-0 w-[30px] h-[40px] mx-auto mb-2  sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="sm:text-left text-center text-[12px] sm:text-[15px] md:text-[18px] lg:text-[20px] font-bold">
                        {item.title}
                      </h3>
                      <p className="sm:text-left text-center text-wrap italic font-light text-[12px] md:text-[13px]">
                        {item.des}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div>
          <div className="sm:x-20 sm:px-30 px-5 sm:py-10 py-5">
            <div className=" sm:mt-10  sm:mb-12 mb-5 flex sm:gap-6 gap-3 items-center">
              <div className="w-[5px] h-[100px] bg-secondary"></div>
              <div>
                <h2 className="text-[20px]  sm:text-[25px] md:text-[30px]  lg:text-[40px] uppercase text-[#14057b] font-bold font-playfair ">
                  Bộ sưu tập của chúng tôi
                </h2>
                <p className=" text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px] italic font-light ">
                  Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn
                  và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh
                  khắc yêu thương.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-2  justify-items-center">
              {imageAlbum.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full sm:h-[250px] h-[100px] rounded-br-4xl  rounded-tl-4xl overflow-hidden group"
                  onClick={() => {
                    router.push(`${PATH_NAME.PRODUCTS}?types=${img.title}`);
                  }}
                >
                  <Image
                    src={img.image}
                    alt={img.title}
                    fill
                    className="object-cover rounded-tl-4xl rounded-br-4xl transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 p-2 flex items-center justify-center text-white text-2xl font-bold opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="max-w-[95%] flex items-center">
                      <h4 className="sm:text-[30px] text-[15px] font-bold text-right text-secondary">
                        {img.title}
                      </h4>

                      <div className="mx-2 h-[80%] w-px bg-amber-400"></div>
                      <p className="sm:text-[13px] text-[10px] font-light italic sm:line-clamp-10 line-clamp-3">
                        {img.des}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full sm:mt-10  overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div
              className="flex sm:h-[350px] h-[150px] w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full h-full relative mr-5">
                  <Image
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-5 -translate-y-1/2  text-white rounded-full sm:w-[50px] sm:h-[50px] w-[20px] h-[20px] text-2xl cursor-pointer z-10 flex items-center justify-center"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-5 -translate-y-1/2  text-white rounded-full sm:w-[50px] sm:h-[50px] w-[20px] h-[20px] text-2xl cursor-pointer z-10 flex items-center justify-center"
            >
              ❯
            </button>

            {/* Indicator dots */}
            <div className="flex justify-center absolute bottom-5 w-full z-10 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={` h-0.5 rounded-full w-[25px] cursor-pointer ${
                    currentSlide === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="relative w-full m-0 overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-10">
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
