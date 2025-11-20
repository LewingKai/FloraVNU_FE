"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

import { validatePassword } from "@/utils/validation";
import useAuth from "@/stores/useAuth";
import { PATH_NAME } from "@/configs/pathName";

import PasswordTextField from "@/components/ui/PasswordTextField";
import ConfirmPasswordTextField from "@/components/ui/ConfirmPasswordTextField";
import { Button } from "@/components/ui/Button";

import accountApi from "@/services/axios/actions/account.action";

const ChangePassword = () => {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleChange = (field: string, value: string | null) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  if (!user) {
    redirect(PATH_NAME.SIGNIN);
  }

  const handleSubmit = async () => {
    if (
      !validatePassword(data.currentPassword) ||
      !validatePassword(data.newPassword) ||
      !validatePassword(data.confirmNewPassword)
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin hợp lệ!");
      return;
    }

    try {
      setIsLoading(true);

      await accountApi.changePassword(
        data.currentPassword,
        data.newPassword,
        data.confirmNewPassword,
        user._id
      );
      toast.success("Đổi mật khẩu thành công!");
    } catch (error) {
      toast.error(error.message || "Đổi mật khẩu thất bại!");
    } finally {
      setIsLoading(false);
      setData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <PasswordTextField
        placeholder="Nhập mật khẩu hiện tại"
        value={data.currentPassword}
        onChange={(value) => handleChange("currentPassword", value)}
        validationRules={validatePassword}
        errorMessage="Mật khẩu không hợp lệ."
      />
      <PasswordTextField
        placeholder="Nhập mật khẩu mới"
        value={data.newPassword}
        onChange={(value) => handleChange("newPassword", value)}
        validationRules={validatePassword}
        errorMessage="Mật khẩu không hợp lệ."
      />
      <ConfirmPasswordTextField
        password={data.newPassword}
        value={data.confirmNewPassword}
        onChange={(value) => handleChange("confirmNewPassword", value)}
      />
      <Button
        variant="default"
        size="lg"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? "Đang cập nhật..." : "Lưu"}
      </Button>
    </div>
  );
};

export default ChangePassword;
