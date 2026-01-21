"use client";

import { useState, useCallback, useEffect } from "react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

import useAuth from "@/stores/useAuth";
import { PATH_NAME } from "@/configs/pathName";
import {
  validateEmail,
  validateName,
  validatePhone,
  validateRequired,
} from "@/utils/validation";

import { Button } from "@/components/ui/Button";
import AvatarUploader from "@/components/ui/AvatarUploader";
import DisabledTextField from "@/components/ui/DisabledTextField";
import ValidatedTextField from "@/components/ui/ValidatedTextField";
import CustomDatePicker from "@/components/ui/CustomDatePicker";
import CustomSelect from "@/components/ui/CustomSelect";

import accountApi from "@/services/axios/actions/account.action";

const Profile = () => {
  const { user, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    gender: "",
    birthday: "",
    email: "",
    phone: "",
  });
  const [avatar, setAvatar] = useState<File | null>(null);
  const originalAvatarUrl = user?.avatar?.url || "/images/default-avatar.jpg";
  const [previewUrl, setPreviewUrl] = useState(originalAvatarUrl);

  if (!user) {
    redirect(PATH_NAME.SIGNIN);
  }

  useEffect(() => {
    if (isEditing && user) {
      setFormData({
        username: user.username,
        fullName: user.fullName,
        gender: user.gender,
        birthday: user.birthday,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [isEditing, user]);

  const handleChange = useCallback((field: string, value: string | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleAvatarChange = useCallback((file: File | null) => {
    if (file) {
      setAvatar(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setAvatar(null);
      setPreviewUrl("/images/default-avatar.jpg");
    }
  }, []);

  const handleCancel = () => {
    setIsEditing(false);
    setAvatar(null);
    setPreviewUrl(originalAvatarUrl);
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);

      if (
        !validateEmail(formData.email) ||
        !validateName(formData.fullName) ||
        !validatePhone(formData.phone) ||
        !validateRequired(formData.birthday) ||
        !validateRequired(formData.gender) ||
        !validateRequired(formData.username)
      ) {
        toast.error("Vui lòng nhập đầy đủ thông tin hợp lệ!");
        setIsLoading(false);
        return;
      }

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value as string);
      });

      if (avatar) {
        data.append("avatar", avatar);
      }

      const res = await accountApi.updateAccount(data, user._id);

      if (res.data) {
        setUser(res.data);
        setIsEditing(false);
        toast.success("Cập nhật thành công!");
      }
    } catch (error: any) {
      const errorMessage = error.message || 'Cập nhật thất bại!';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <AvatarUploader
        currentAvatar={previewUrl}
        onFileSelect={handleAvatarChange}
        isEditing={isEditing}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {isEditing ? (
          <>
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
            <div className="flex gap-2 mt-2">
              <Button
                variant="default"
                size="lg"
                onClick={handleSave}
                disabled={isLoading}
              >
                {isLoading ? "Đang lưu..." : "Lưu"}
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-red-600 text-white"
                onClick={handleCancel}
              >
                Hủy
              </Button>
            </div>
          </>
        ) : (
          <>
            <DisabledTextField label="Tên tài khoản" value={user.username} />
            <DisabledTextField label="Họ và tên" value={user.fullName} />
            <DisabledTextField label="Địa chỉ Email" value={user.email} />
            <DisabledTextField label="Giới tính" value={user.gender} />
            <DisabledTextField
              label="Ngày sinh"
              value={new Date(user.birthday).toLocaleDateString("vi-VN") || ""}
            />
            <DisabledTextField label="Số điện thoại" value={user.phone} />
            <div className="flex gap-2 mt-2">
              <Button
                variant="default"
                size="lg"
                onClick={() => setIsEditing(true)}
              >
                Chỉnh sửa
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
