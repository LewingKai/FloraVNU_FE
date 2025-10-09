"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
import { User } from "@/types/api/account";

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
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (field: string, value: string | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
      toast.error("Đăng ký thất bại");
      throw error;
    } finally {
      setLoading(false);
    }
  };

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
        <ValidatedTextField
          placeholder="Tên tài khoản"
          value={formData.username}
          validationRules={validateRequired}
          onChange={(value) => handleChange("username", value)}
          errorMessage="Tên tài khoản không được để trống."
        />
        <ValidatedTextField
          placeholder="Họ và tên"
          value={formData.fullName}
          validationRules={validateName}
          onChange={(value) => handleChange("fullName", value)}
          errorMessage="Họ và tên không hợp lệ. Vui lòng viết hoa chữ cái đầu mỗi từ."
        />
        <CustomSelect
          options={[
            { label: "Nam", value: "Nam" },
            { label: "Nữ", value: "Nữ" },
            { label: "Khác", value: "Khác" },
          ]}
          placeholder="Chọn giới tính"
          value={formData.gender}
          validationRules={validateRequired}
          onChange={(value) => handleChange("gender", value)}
          errorMessage="Giới tính không được để trống."
        />
        <CustomDatePicker
          placeholder="Ngày sinh"
          value={formData.birthday}
          validationRules={validateRequired}
          onChange={(value) => handleChange("birthday", value)}
          errorMessage="Ngày sinh không được để trống."
        />
        <ValidatedTextField
          placeholder="Email"
          value={formData.email}
          validationRules={validateEmail}
          onChange={(value) => handleChange("email", value)}
          errorMessage="Email không hợp lệ. Vui lòng nhập email dạng ***@gmail.com."
        />
        <ValidatedTextField
          placeholder="Số điện thoại"
          value={formData.phone}
          validationRules={validatePhone}
          onChange={(value) => handleChange("phone", value)}
          errorMessage="Số điện thoại không hợp lệ. Vui lòng nhập đúng 10 chữ số."
        />
        <PasswordTextField
          value={formData.password}
          validationRules={validatePassword}
          onChange={(value) => handleChange("password", value)}
          errorMessage="Mật khẩu không hợp lệ. Vui lòng nhập tối thiểu 6 ký tự."
        />
        <ConfirmPasswordTextField
          password={formData.password}
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
        <Button
          variant="default"
          size="lg"
          className="w-full"
          onClick={handleSubmit}
        >
          {loading ? "Đang đăng ký" : "Đăng ký"}
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
