import Link from "next/link";
import Image from "next/image";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import logo from "@/assets/images/logo.svg";
import { PATH_NAME } from "@/configs/pathName";

export default function Footer() {
  const fontSizeDesc = "text-[13px]  md:text-[15px]";
  return (
    <footer
      className="w-full px-4 sm:px-8 md:px-16 lg:px-32 pt-10 md:pt-20 pb-7  flex flex-col items-center gap-10 md:gap-20"
      style={{
        backgroundImage: "url('/images/footer.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hidden sm:flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 text-white">
        <Link
          href={PATH_NAME.HOME}
          className="text-center text-sm md:text-xl hover:text-secondary"
        >
          HOME
        </Link>
        <div className="hidden md:block lg:w-3 lg:h-3 md:w-2 md:h-2 bg-secondary rounded-full" />
        <Link
          href={PATH_NAME.PRODUCTS}
          className="text-center text-sm md:text-xl hover:text-secondary"
        >
          SẢN PHẨM
        </Link>
        <div className="hidden md:block w-3 h-3 md:w-2 md:h-2 bg-secondary rounded-full" />
        {/* <Link
          href={PATH_NAME.BLOGS}
          className="text-center text-sm md:text-xl hover:text-secondary"
        >
          BLOGS
        </Link> */}
        {/* <div className="hidden md:block w-3 h-3 md:w-2 md:h-2 bg-secondary rounded-full" /> */}
        <Link
          href={PATH_NAME.ABOUTUS}
          className="text-center text-sm md:text-xl hover:text-secondary"
        >
          VỀ CHÚNG TÔI
        </Link>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center sm:gap-10 gap-3 text-white">
        <div className="sm:flex hidden flex-col gap-4">
          <div className="flex items-center gap-4">
            <LocalPhoneIcon />
            <a href="tel:0338963327" className={` ${fontSizeDesc}`}>
              0338963327
            </a>
          </div>
          <div className="flex items-center gap-4">
            <EmailIcon />
            <a href="mailto:floravnu@gmail.com" className={` ${fontSizeDesc}`}>
              floravnu@gmail.com
            </a>
          </div>
          <div className="flex items-start gap-4">
            <ApartmentIcon />
            <address className={`not-italic ${fontSizeDesc}`}>
              Khu phố 34, Phường Linh Xuân
              <br />
              TP. Hồ Chí Minh
            </address>
          </div>
        </div>

        <Image src={logo} alt="FloraVNU logo" className="w-70 h-auto" />

        <p className="text-center md:text-left max-w-xs text-sm sm:text-base ">
          Website do nhóm sinh viên Trường Đại học Công nghệ Thông tin - ĐHQG
          TP.HCM phục vụ mục đích học tập.
        </p>
      </div>

      <div className="w-full py-4 border-t border-white/20 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-xs sm:text-sm text-gray-300 text-center">
        <Link href={PATH_NAME.OURCOMMIT} className="hover:text-secondary">
          Cam kết của FloraVNU
        </Link>
        <Link href={PATH_NAME.OPERATINGPOLICY} className="hover:text-secondary">
          Chính sách hoạt động
        </Link>
        <Link href={PATH_NAME.PRIVACYPOLICY} className="hover:text-secondary">
          Chính sách bảo mật thông tin
        </Link>
        <Link
          href={PATH_NAME.ORDERINSTRUCTIONS}
          className="hover:text-secondary"
        >
          Hướng dẫn đặt hoa
        </Link>
        <Link
          href={PATH_NAME.CONTACTINSTRUCTIONS}
          className="hover:text-secondary"
        >
          Hướng dẫn liên hệ
        </Link>
      </div>
    </footer>
  );
}
