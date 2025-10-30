"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { toast } from "react-toastify";

import logo from "@/assets/images/logo.svg";
import { PATH_NAME } from "@/configs/pathName";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
  validateRequired,
  validateConfirmPassword,
} from "@/utils/validation";
import { User } from "@/types/account";

import ValidatedTextField from "@/components/ui/ValidatedTextField";
import PasswordTextField from "@/components/ui/PasswordTextField";
import ConfirmPasswordTextField from "@/components/ui/ConfirmPasswordTextField";
import CustomSelect from "@/components/ui/CustomSelect";
import CustomDatePicker from "@/components/ui/CustomDatePicker";
import { Button } from "@/components/ui/Button";

import authApi from "@/services/axios/actions/auth.action";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<User>({
    username: "",
    fullName: "",
    email: "",
    gender: "",
    birthday: "",
    phone: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((field: string, value: string | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = async () => {
    if (!validateConfirmPassword(formData.password, confirmPassword)) {
      toast.error("Mật khẩu xác nhận không khớp!");
      return;
    }

    if (
      !validateEmail(formData.email) ||
      !validateName(formData.fullName) ||
      !validatePassword(formData.password) ||
      !validatePhone(formData.phone) ||
      !validateRequired(formData.birthday) ||
      !validateRequired(formData.gender) ||
      !validateRequired(formData.username)
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin hợp lệ!");
      return;
    }

    setLoading(true);
    try {
      await authApi.signUp(formData);
      toast.success("Đăng ký thành công! Hãy đăng nhập để tiếp tục");
      router.push(PATH_NAME.SIGNIN);
    } catch (error) {
      toast.error("Đăng ký thất bại!");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center mx-4 lg:mx-20 mt-24 mb-4 rounded-4xl py-10 px-6 lg:px-16 lg:gap-4 bg-[url('/images/bg-signin.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-60 rounded-4xl" />
      <div className="absolute inset-0 bg-[#FFE6B7] opacity-25 rounded-4xl" />

      <div className="z-10 flex justify-center md:justify-center w-full md:w-1/2 mb-8 md:mb-0">
        <Image
          src={logo}
          alt="FloraVNU logo"
          className="max-w-[70%] md:max-w-[350px] lg:max-w-[450px] h-auto"
        />
      </div>

      <div className="z-10 flex flex-col justify-center w-full md:w-[650px]">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
          Tạo tài khoản
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ValidatedTextField
            placeholder="Tên tài khoản"
            value={formData.username}
            onChange={(value) => handleChange("username", value)}
            validationRules={validateRequired}
            errorMessage="Tên tài khoản không được để trống."
          />
          <ValidatedTextField
            placeholder="Họ và tên"
            value={formData.fullName}
            onChange={(value) => handleChange("fullName", value)}
            validationRules={validateName}
            errorMessage="Họ và tên không hợp lệ."
          />
          <CustomSelect
            options={[
              { label: "Nam", value: "Nam" },
              { label: "Nữ", value: "Nữ" },
              { label: "Khác", value: "Khác" },
            ]}
            placeholder="Giới tính"
            value={formData.gender}
            onChange={(value) => handleChange("gender", value)}
            validationRules={validateRequired}
            errorMessage="Giới tính không được để trống."
          />
          <CustomDatePicker
            placeholder="Ngày sinh"
            value={formData.birthday}
            onChange={(value) => handleChange("birthday", value)}
            validationRules={validateRequired}
            errorMessage="Ngày sinh không được để trống."
          />
          <ValidatedTextField
            placeholder="Email"
            value={formData.email}
            onChange={(value) => handleChange("email", value)}
            validationRules={validateEmail}
            errorMessage="Email không hợp lệ."
          />
          <ValidatedTextField
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={(value) => handleChange("phone", value)}
            validationRules={validatePhone}
            errorMessage="Số điện thoại không hợp lệ."
          />
          <PasswordTextField
            value={formData.password}
            onChange={(value) => handleChange("password", value)}
            validationRules={validatePassword}
            errorMessage="Mật khẩu không hợp lệ."
          />
          <ConfirmPasswordTextField
            password={formData.password}
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
        </div>

        <Button
          variant="default"
          size="lg"
          className="w-full mt-4"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </Button>

        <div className="text-white text-center mt-2">
          Bạn đã có tài khoản?{" "}
          <Link href={PATH_NAME.SIGNIN}>
            <Button
              variant="link"
              className="px-1 cursor-pointer text-white hover:underline"
            >
              Đăng nhập ngay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
