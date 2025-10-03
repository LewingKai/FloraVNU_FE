"use client";
import FlowerItem from "@/components/flower_item";
import RecommendCarousel from "@/components/RecommendCarousel";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const slides = [
    "/images/home/event1.png",
    "/images/home/event2.png",
    "/images/home/event3.png",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

  const listFlowerItem = [
    {
      imageUrl: "/images/home/rose.png",
      title: "Hoa nắng vàng",
      price: "500000",
      description:
        "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
    },
    {
      imageUrl: "/images/home/rose.png",
      title: "Hoa nắng vàng",
      price: "500000",
      description:
        "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
    },
    {
      imageUrl: "/images/home/rose.png",
      title: "Hoa nắng vàng",
      price: "500000",
      description:
        "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
    },
    {
      imageUrl: "/images/home/rose.png",
      title: "Hoa nắng vàng",
      price: "500000",
      description:
        "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
    },
    {
      imageUrl: "/images/home/rose.png",
      title: "Hoa nắng vàng",
      price: "500000",
      description:
        "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
    },
    {
      imageUrl: "/images/home/rose.png",
      title: "Hoa nắng vàng",
      price: "500000",
      description:
        "Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu thương.",
    },
  ];
  return (
    <>
      <div
        className="w-[100%] relative h-[700px]"
        style={{
          backgroundImage: "url('/images/home/image1.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute max-w-[65%] p-10 mt-40 text-playfair">
          <h1 className="text-[80px] font-bold text-white">
            Hương hoa khẽ chạm, tình yêu khẽ nở.
          </h1>
          <p className="text-[20px] font-light text-white">
            FloraVNU mang đến những đóa hoa tươi nhất, gửi gắm yêu thương và
            khoảnh khắc lãng mạn đến người bạn trân quý.
          </p>
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-[40px] uppercase font-bold font-playfair text-center">
          Sản phẩm nổi bật
        </h2>
        <div className="mx-auto max-w-[1100px] max-md:px-12 mt-5">
          {listFlowerItem && (
            <RecommendCarousel flowers={listFlowerItem || []} />
          )}
        </div>
      </div>
      <div className="flex justify-between w-full px-20 py-10">
        {listItem.map((item, index) => {
          return (
            <div
              key={index}
              className="justify-center flex flex-col items-center max-w-[16%]"
            >
              <Image src={item.icon} alt={item.title} width={40} height={40} />

              <h3 className="text-center mt-5 text-[20px] font-bold">
                {item.title}
              </h3>
              <p className="text-center  text-wrap italic font-light text-[13px]">
                {item.des}
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="px-20">
          <div className="flex justify-end items-end mb-5">
            <p className="text-right text-[20px] italic font-light">
              Khám phá bộ sưu tập những đóa hoa tinh khôi, được tuyển chọn và
              sắp xếp tỉ mỉ, mang đến vẻ đẹp thanh lịch cho mọi khoảnh khắc yêu
              thương.
            </p>
            <h2 className="text-[50px] uppercase font-bold font-playfair max-w-[50%] text-right">
              Bộ sưu tập của chúng tôi
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-5 justify-items-center">
            {imageAlbum.map((img, index) => (
              <div
                key={index}
                className="relative w-full h-[250px] rounded-br-4xl  rounded-tl-4xl overflow-hidden group"
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  fill
                  className="object-cover rounded-tl-4xl rounded-br-4xl transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                <div
                  className="absolute inset-0 p-2 flex items-center justify-center 
               text-white text-2xl font-bold
               opacity-0 translate-y-5 transition-all duration-500
               group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <div className="max-w-[95%] flex items-center">
                    <h4 className="text-[30px] font-bold text-right text-secondary">
                      {img.title}
                    </h4>

                    <div className="mx-2 h-[80%] w-px bg-amber-400"></div>

                    <p className="text-[13px] font-light italic">{img.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full mt-10 overflow-hidden left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div
            className="flex h-[450px] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full relative">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  // className="object-cover"
                />
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-5 -translate-y-1/2  text-white rounded-full w-[50px] h-[50px] text-2xl cursor-pointer z-10 flex items-center justify-center"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-5 -translate-y-1/2  text-white rounded-full w-[50px] h-[50px] text-2xl cursor-pointer z-10 flex items-center justify-center"
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
            <span className="sr-only">Previous</span>
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
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* <div
          className="w-full h-100"
          style={{
            backgroundImage: "url('/images/home/image5.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div> */}
      </div>
    </>
  );
};

export default Home;
