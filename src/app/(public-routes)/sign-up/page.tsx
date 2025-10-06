import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.svg";
import { PATH_NAME } from "@/configs/pathName";

import ValidatedTextField from "@/components/ui/ValidatedTextField";
import PasswordTextField from "@/components/ui/PasswordTextField";
import ConfirmPasswordTextField from "@/components/ui/ConfirmPasswordTextField";
import CustomSelect from "@/components/ui/CustomSelect";
import CustomDatePicker from "@/components/ui/CustomDatePicker";
import { Button } from "@/components/ui/Button";

const SignUp = () => {
  return (
    <div
      className="relative flex justify-between mx-20 mt-28 mb-1 rounded-4xl py-10 px-32"
      style={{
        backgroundImage: `url('/images/bg-signin.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 rounded-4xl" />
      <div className="absolute inset-0 bg-[#FFE6B7] opacity-30 rounded-4xl" />
      <Image
        src={logo}
        alt="FloraVNU logo"
        style={{ width: "500px", height: "auto", zIndex: "10" }}
      />
      <div className="z-10 flex flex-col justify-center gap-3 w-96">
        <div className="text-white text-3xl">Tạo tài khoản</div>
        <ValidatedTextField placeholder="Tên tài khoản" />
        <ValidatedTextField placeholder="Họ và tên" />
        <CustomSelect
          options={[
            { label: "Nam", value: "male" },
            { label: "Nữ", value: "female" },
            { label: "Khác", value: "other" },
          ]}
          placeholder="Chọn giới tính"
        />
        <CustomDatePicker placeholder="Ngày sinh" />
        <ValidatedTextField placeholder="Email" />
        <ValidatedTextField placeholder="Số điện thoại" />
        <PasswordTextField />
        <ConfirmPasswordTextField />
        <Button variant="default" size="lg" className="w-full">
          Đăng ký
        </Button>
        <div className="text-white text-center">
          Bạn đã có tài khoản?{" "}
          <Link href={PATH_NAME.SIGNIN}>
            <Button variant="link" className="px-1 cursor-pointer">
              Đăng nhập ngay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
