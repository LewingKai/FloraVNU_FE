import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/logo.svg";
import { PATH_NAME } from "@/configs/pathName";

import ValidatedTextField from "@/components/ui/ValidatedTextField";
import PasswordTextField from "@/components/ui/PasswordTextField";
import { Button } from "@/components/ui/Button";

const SignIn = () => {
  return (
    <div
      className="relative flex justify-between mx-20 mt-28 mb-1 h-[600px] rounded-4xl py-10 px-32"
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
      <div className="z-10 flex flex-col justify-center gap-4 w-96">
        <div className="text-white text-3xl">Đăng nhập</div>
        <ValidatedTextField placeholder="Tên tài khoản" />
        <div className="flex flex-col items-end gap-1">
          <PasswordTextField placeholder="Mật khẩu" />
          <Link href={PATH_NAME.FORGOTPASSWORD}>
            <div className="text-white">Quên mật khẩu</div>
          </Link>
        </div>
        <Button variant="default" size="lg" className="w-full">
          Đăng nhập
        </Button>
        <div className="text-white text-center">
          Bạn chưa có tài khoản?{" "}
          <Button variant="link" className="px-1 cursor-pointer">
            Đăng ký ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
