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
import CloseIcon from "@mui/icons-material/Close";

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

interface SideBarProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const SideBar = ({ open = false, setOpen }: SideBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useAuth();

  const handleNavigate = (path: string) => {
    if (setOpen) setOpen(false);
    router.push(path);
  };

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      router.push(PATH_NAME.HOME);
      toast.success("Đăng xuất thành công!");
    }, 100);
    if (setOpen) setOpen(false);
  };

  const handleOverlayClick = () => {
    if (setOpen) setOpen(false);
  };

  React.useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleOverlayClick}
      ></div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white border border-gray-200 rounded-r-2xl shadow-lg p-4 z-50 transition-transform duration-300 md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ minHeight: "320px" }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Tài khoản của tôi
          </h2>
          <button
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={() => setOpen && setOpen(false)}
            aria-label="Đóng menu"
          >
            <CloseIcon />
          </button>
        </div>
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
          className="flex justify-center text-red-600 gap-2 w-full cursor-pointer"
        >
          <LogoutIcon fontSize="small" />
          <span>Đăng xuất</span>
        </Button>
      </div>

      <div className="hidden md:block w-64 bg-white border border-gray-200 rounded-2xl shadow-sm p-4 min-h-[320px]">
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
    </>
  );
};

export default SideBar;
