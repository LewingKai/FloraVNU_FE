"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { toast } from "react-toastify";

import logo from "@/assets/images/logo.svg";
import {
  validateEmail,
  validatePassword,
  validateRequired,
} from "@/utils/validation";
import { PATH_NAME } from "@/configs/pathName";

import ValidatedTextField from "@/components/ui/ValidatedTextField";
import PasswordTextField from "@/components/ui/PasswordTextField";
import ConfirmPasswordTextField from "@/components/ui/ConfirmPasswordTextField";
import { Button } from "@/components/ui/Button";

import accountApi from "@/services/axios/actions/account.action";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const router = useRouter();

  const handleChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value || "" }));
  }, []);

  const handleSendEmail = async () => {
    try {
      setLoading(true);
      await accountApi.forgotPassword(formData.email);
      setIsSendEmail(true);
      toast.success("Mã OTP đã được gửi thành công!");
    } catch (error) {
      toast.error("Đã có lỗi khi gửi OTP!");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (
      !validateEmail(formData.email) ||
      !validatePassword(formData.newPassword) ||
      !validateRequired(formData.otp)
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin hợp lệ!");
      return;
    }

    try {
      setLoading(true);
      await accountApi.resetPassword(formData);
      toast.success("Đổi mật khẩu thành công!");
      router.push(PATH_NAME.SIGNIN);
    } catch (error: any) {
      const errorMessage = error.message || 'Đổi mật khẩu thất bại!';
      toast.error(errorMessage);
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
          Quên mật khẩu
        </h2>

        <div className="flex flex-col gap-4">
          {!isSendEmail ? (
            <ValidatedTextField
              placeholder="Email"
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              validationRules={validateEmail}
              errorMessage="Email không hợp lệ."
            />
          ) : (
            <>
              <ValidatedTextField
                placeholder="OTP"
                value={formData.otp}
                onChange={(value) => handleChange("otp", value)}
                validationRules={validateRequired}
                errorMessage="OTP không được để trống."
              />
              <PasswordTextField
                placeholder="Nhập mật khẩu mới"
                value={formData.newPassword}
                onChange={(value) => handleChange("newPassword", value)}
                validationRules={validatePassword}
                errorMessage="Mật khẩu không hợp lệ."
              />
              <ConfirmPasswordTextField
                password={formData.newPassword}
                value={formData.confirmNewPassword}
                onChange={(value) => handleChange("confirmNewPassword", value)}
              />
            </>
          )}
        </div>

        {!isSendEmail ? (
          <Button
            variant="default"
            size="lg"
            className="w-full mt-4"
            onClick={handleSendEmail}
            disabled={loading}
          >
            {loading ? "Đang gửi..." : "Xác nhận Email"}
          </Button>
        ) : (
          <Button
            variant="default"
            size="lg"
            className="w-full mt-4"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Đang gửi..." : "Xác nhận"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
