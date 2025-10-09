"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

import logo from "@/assets/images/logo.svg";
import { PATH_NAME } from "@/configs/pathName";
import { validateRequired, validatePassword } from "@/utils/validation";

import ValidatedTextField from "@/components/ui/ValidatedTextField";
import PasswordTextField from "@/components/ui/PasswordTextField";
import { Button } from "@/components/ui/Button";

import authApi from "@/services/axios/actions/auth.action";

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !validateRequired(formData.username) ||
      !validatePassword(formData.password)
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin hợp lệ!");
      return;
    }
    setLoading(true);
    try {
      await authApi.signIn(formData.username, formData.password);
      toast.success("Đăng nhập thành công!");
      router.push(PATH_NAME.HOME);
    } catch (error) {
      toast.error("Đăng nhập thất bại!");
      throw error;
    } finally {
      setLoading(false);
    }
  };

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
        <ValidatedTextField
          placeholder="Tên tài khoản"
          value={formData.username}
          onChange={(value) => handleChange("username", value)}
          validationRules={validateRequired}
          errorMessage="Tên tài khoản không được để trống"
        />
        <div className="flex flex-col items-end gap-1">
          <PasswordTextField
            value={formData.password}
            onChange={(value) => handleChange("password", value)}
            validationRules={validatePassword}
            errorMessage="Mật khẩu phải có ít nhất 6 ký tự"
          />
          <Link href={PATH_NAME.FORGOTPASSWORD}>
            <div className="text-white">Quên mật khẩu</div>
          </Link>
        </div>
        <Button
          variant="default"
          size="lg"
          className="w-full"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>
        <div className="text-white text-center">
          Bạn chưa có tài khoản?{" "}
          <Link href={PATH_NAME.SIGNUP}>
            <Button variant="link" className="px-1 cursor-pointer">
              Đăng ký ngay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
