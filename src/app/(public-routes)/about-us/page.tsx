import { AboutUsTextVN } from "@/helpers/text_vn";
import Image from "next/image";

const AboutUs = () => {
  const fontSizeH2 =
    "text-[20px]  sm:text-[25px] md:text-[30px]  lg:text-[40px]";
  const fontSizeP =
    "text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px]";
  const fontSizeH1 =
    "text-[30px] md:text-[50px] sm:text-[40px]  lg:text-[80px]";
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
        className="w-[100%] relative md:h-[600px] sm:h-[350px] h-[250px]"
        style={{
          backgroundImage: "url('/images/aboutus/image2.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:max-w-[37%] max-w-[60%] sm:max-w-[45%] absolute mt-[8%] md:ml-10 ml-5">
          <p className={`uppercase font-bold text-amber-300 ${fontSizeP}`}>
            {AboutUsTextVN.ourIntroduction}
          </p>
          <h1
            className={`${fontSizeH2} text-white uppercase font-bold md:mt-10 mt-3`}
          >
            {AboutUsTextVN.sloganAboutUs}
          </h1>
          <p className={`${fontSizeP} text-white italic font-light`}>
            {AboutUsTextVN.descriptionSlogan}
          </p>
        </div>
      </div>
      <div className="md:flex gap-4 justify-center md:px-20 px-5 py-10">
        <Image
          src={"/images/aboutus/image1.png"}
          width={1000}
          height={100}
          alt="Tiệm hoa"
          className="md:rounded-br-[70px] md:rounded-tl-[70px] rounded-br-[50px] rounded-tl-[50px] w-full"
        />

        <div className="md:ml-10">
          <p className="uppercase font-bold text-amber-300 text-center md:text-left mt-5">
            {AboutUsTextVN.aboutUs}
          </p>
          <h2
            className={`${fontSizeH2} uppercase font-bold text-center md:text-left mb-3`}
          >
            {AboutUsTextVN.ourVisionAndMission}
          </h2>
          <p
            className={`${fontSizeP}  text-black italic font-light text-center md:text-left`}
          >
            {AboutUsTextVN.descVisionAndMission}
          </p>
          <p
            className={`${fontSizeP}  italic font-light md:mt-5 text-black text-center md:text-left`}
          >
            {AboutUsTextVN.ourCommit}
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
