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
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import LogoutIcon from "@mui/icons-material/Logout";

import { Button } from "@/components/ui/Button";

const menuItems = [
  {
    label: "Danh sách tài khoản",
    path: PATH_NAME.ADMINACCOUNTS,
    icon: <AccountCircleIcon fontSize="small" />,
  },
  {
    label: "Danh sách đơn",
    path: PATH_NAME.ADMINORDERS,
    icon: <LocalFloristIcon fontSize="small" />,
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
    <div className="block w-64 bg-white border border-gray-200 rounded-2xl shadow-sm p-4 min-h-[320px]">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Quản lý của Admin
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
      <Divider className="my-4" />
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
  );
};

export default SideBar;
