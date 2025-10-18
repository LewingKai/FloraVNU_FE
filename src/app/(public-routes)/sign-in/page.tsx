"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { toast } from "react-toastify";

import logo from "@/assets/images/logo.svg";
import { PATH_NAME } from "@/configs/pathName";
import { validateRequired, validatePassword } from "@/utils/validation";

import ValidatedTextField from "@/components/ui/ValidatedTextField";
import PasswordTextField from "@/components/ui/PasswordTextField";
import { Button } from "@/components/ui/Button";

import authApi from "@/services/axios/actions/auth.action";

import useAuth from "@/stores/useAuth";

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setUser, login, fetchMe } = useAuth();

  const handleChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value || "" }));
  }, []);

  const handleSubmit = async () => {
    if (
      !validateRequired(formData.username) ||
      !validatePassword(formData.password)
    ) {
      toast.error("Vui lòng nhập thông tin hợp lệ!");
      return;
    }

    setLoading(true);
    try {
      const res = await authApi.signIn(formData.username, formData.password);

      setUser(res.data.data);
      login();

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
    <div className="relative flex flex-col md:h-[512px] md:flex-row justify-center items-center mx-4 lg:mx-20 mt-24 mb-4 rounded-4xl py-10 px-6 lg:px-16 md:gap-4 bg-[url('/images/bg-signin.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-60 rounded-4xl" />
      <div className="absolute inset-0 bg-[#FFE6B7] opacity-25 rounded-4xl" />

      <div className="z-10 flex justify-center md:justify-center w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src={logo}
          alt="FloraVNU logo"
          className="max-w-[70%] md:max-w-[350px] lg:max-w-[450px] h-auto"
        />
      </div>

      <div className="z-10 flex flex-col justify-center w-full md:w-[450px]">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4 text-center md:text-left">
          Đăng nhập
        </h2>

        <div className="flex flex-col gap-4">
          <ValidatedTextField
            placeholder="Tên tài khoản"
            value={formData.username}
            onChange={(value) => handleChange("username", value)}
            validationRules={validateRequired}
            errorMessage="Tên tài khoản không được để trống."
          />
          <PasswordTextField
            value={formData.password}
            onChange={(value) => handleChange("password", value)}
            validationRules={validatePassword}
            errorMessage="Mật khẩu không hợp lệ."
          />
        </div>

        <Button
          variant="default"
          size="lg"
          className="w-full mt-4"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>

        <div className="text-white text-center mt-2">
          Bạn chưa có tài khoản?{" "}
          <Link href={PATH_NAME.SIGNUP}>
            <Button
              variant="link"
              className="px-1 cursor-pointer text-white hover:underline"
            >
              Đăng ký ngay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
