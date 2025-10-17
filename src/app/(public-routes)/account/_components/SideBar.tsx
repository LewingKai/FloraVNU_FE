"use client";

import * as React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";
import useAuth from "@/stores/useAuth";
import { toast } from "react-toastify";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockResetIcon from "@mui/icons-material/LockReset";
import LogoutIcon from "@mui/icons-material/Logout";

import { Button } from "@/components/ui/Button";

const menuItems = [
  {
    label: "Hồ sơ",
    path: PATH_NAME.PROFILE,
    icon: <AccountCircleIcon fontSize="small" />,
  },
  {
    label: "Đổi mật khẩu",
    path: PATH_NAME.CHANGEPASSWORD,
    icon: <LockResetIcon fontSize="small" />,
  },
];

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useAuth();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      router.push(PATH_NAME.HOME);
      toast.success("Đăng xuất thành công!");
    }, 100);
  };

  return (
    <div className="w-full md:w-64 bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex flex-col justify-between min-h-[320px]">
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Tài khoản của tôi
        </h2>

        <List disablePadding>
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <ListItemButton
                key={item.path}
                selected={isActive}
                onClick={() => handleNavigate(item.path)}
                sx={{
                  borderRadius: "8px",
                  mb: "4px",
                  transition: "all 0.25s ease",
                  "&.Mui-selected": {
                    bgcolor: "var(--color-primary)",
                    color: "var(--color-secondary)",
                    fontWeight: 600,
                    "& .MuiListItemIcon-root": {
                      color: "var(--color-secondary)",
                    },
                  },
                  "&:hover": {
                    bgcolor: "rgba(255, 105, 181, 0.08)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "32px",
                    color: isActive
                      ? "var(--color-secondary)"
                      : "rgba(107,114,128,1)",
                    transition: "color 0.2s ease",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      fontSize: "16px",
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </div>

      <div className="mt-6">
        <Divider className="mb-4" />
        <Button
          variant="outline"
          size="default"
          onClick={handleLogout}
          className="flex items-center text-red-600 gap-2 w-full justify-center cursor-pointer"
        >
          <LogoutIcon fontSize="small" />
          <span>Đăng xuất</span>
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
