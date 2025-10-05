import Image from "next/image";

const AboutUs = () => {
  const serviceBenefits = [
    {
      title: "Miễn phí giao hàng 63 tỉnh",
      description: "Free shipping (nội thành)",
      iconUrl: "/icons/shipping.png",
    },
    {
      title: "Phục vụ 24/24",
      description: "24-7 service",
      iconUrl: "/icons/service.png",
    },
    {
      title: "Giá đã gồm 8% VAT",
      description: "Price include VAT",
      iconUrl: "/icons/vat.png",
    },
    {
      title: "Giao nhanh trong 60 phút",
      description: "60 minutes quick delivery",
      iconUrl: "/icons/fast-delivery.png",
    },
    {
      title: "Cam kết hài lòng 100%",
      description: "100% guarantee smile",
      iconUrl: "/icons/guarantee.png",
    },
    {
      title: "Cam kết hoa tươi 3+ ngày",
      description: "3+ days fresh warranty",
      iconUrl: "/icons/fresh.png",
    },
    {
      title: "Tặng thiệp cao cấp",
      description: "Free greeting cards",
      iconUrl: "/icons/greeting-card.png",
    },
    {
      title: "Giảm giá đến 10%",
      description: "Receive 3-10% discount",
      iconUrl: "/icons/discount.png",
    },
  ];

  return (
    <div>
      <div
        className="w-[100%] relative h-[600px]"
        style={{
          backgroundImage: "url('/images/aboutus/image2.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[37%] absolute mt-[8%] ml-10">
          <p className="uppercase font-bold text-amber-300">
            Giới thiệu về chúng tôi
          </p>
          <h1 className="text-white uppercase font-bold text-[40px] mt-10">
            FloraVNU – Thổi hồn vào từng đóa hoa
          </h1>
          <p className="text-white text-[15px] italic font-light">
            Tại FloraVNU, chúng tôi tin rằng mỗi bó hoa đều mang trong mình một
            câu chuyện và cảm xúc. Sứ mệnh của chúng tôi là mang đến cho bạn
            những sản phẩm hoa tươi tinh tế, chất lượng và tràn đầy ý nghĩa
            trong từng khoảnh khắc.
          </p>
        </div>
      </div>
      <div className="flex gap-4 justify-center h-[500px] px-20 py-10">
        <Image
          src={"/images/aboutus/image1.png"}
          width={600}
          height={100}
          alt="Tiệm hoa"
          className="rounded-br-[70px] rounded-tl-[70px]"
        />
        <div className="ml-10">
          <p className="uppercase font-bold text-amber-300">Về chúng tôi</p>
          <h2 className="uppercase font-bold text-[40px]">
            Tầm nhìn và sứ mệnh của chúng tôi
          </h2>
          <p>
            FloraVNU mong muốn trở thành thương hiệu hoa uy tín và được yêu
            thích hàng đầu tại Làng Đại học, nơi mỗi sản phẩm không chỉ là một
            món quà mà còn là cầu nối gửi gắm yêu thương và lan tỏa vẻ đẹp cuộc
            sống.
          </p>
          <p className="mt-5">
            Chúng tôi cam kết mang đến những đóa hoa tươi mới, tinh tế và giàu
            cảm xúc, kết hợp cùng dịch vụ tận tâm để đồng hành cùng khách hàng
            trong mọi khoảnh khắc quan trọng – từ niềm vui, hạnh phúc đến những
            lời chúc ý nghĩa.
          </p>
        </div>
      </div>
      <div>
        {serviceBenefits.map((item, index) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
};

export default AboutUs;
