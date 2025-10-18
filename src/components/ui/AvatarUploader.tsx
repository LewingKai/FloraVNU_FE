"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import { Button, Tooltip } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { toast } from "react-toastify";

interface AvatarUploaderProps {
  currentAvatar?: string;
  onFileSelect: (file: File | null) => void;
  isEditing?: boolean;
}

const AvatarUploader: React.FC<AvatarUploaderProps> = ({
  currentAvatar,
  onFileSelect,
  isEditing = false,
}) => {
  const [preview, setPreview] = useState<string>(
    currentAvatar || "/images/default-avatar.jpg"
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPreview(currentAvatar || "/images/default-avatar.jpg");
  }, [currentAvatar]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      toast.error("Chỉ chấp nhận các định dạng ảnh: JPEG, PNG, GIF.");
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("Kích thước ảnh không được vượt quá 2MB.");
      return;
    }

    setIsLoading(true);
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    onFileSelect(file);
    setIsLoading(false);
  };

  const handleDeleteAvatar = () => {
    setPreview("/images/default-avatar.jpg");
    onFileSelect(null);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex justify-center">
        {isLoading ? (
          <div className="text-gray-500">Đang tải...</div>
        ) : (
          <Image
            src={preview}
            alt="Avatar"
            width={160}
            height={160}
            className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border border-gray-300"
          />
        )}
      </div>

      {isEditing && (
        <div className="flex gap-3">
          <input
            type="file"
            accept="image/*"
            id="avatar-upload"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />

          <Tooltip title="Tải ảnh mới">
            <label htmlFor="avatar-upload">
              <Button
                variant="outlined"
                startIcon={<PhotoCameraIcon />}
                component="span"
                sx={{
                  color: "#000",
                  borderColor: "#ccc",
                  padding: "8px 16px",
                  borderRadius: "24px",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textTransform: "none",
                }}
              >
                Đổi ảnh
              </Button>
            </label>
          </Tooltip>

          <Tooltip title="Xóa ảnh">
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteAvatar}
              sx={{
                padding: "8px 16px",
                borderRadius: "24px",
                fontWeight: "bold",
                fontSize: "14px",
                textTransform: "none",
              }}
            >
              Xóa
            </Button>
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default AvatarUploader;
