"use client";

import * as React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { PATH_NAME } from "@/configs/pathName";
import useAuth from "@/stores/useAuth";
import { toast } from "react-toastify";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockResetIcon from "@mui/icons-material/LockReset";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

import { Button } from "@/components/ui/Button";
import accountApi from "@/services/axios/actions/account.action";

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
  const { user, logout } = useAuth();

  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);

  const handleNavigate = (path: string) => {
    setOpen?.(false);
    router.push(path);
  };

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      router.push(PATH_NAME.HOME);
      toast.success("Đăng xuất thành công!");
    }, 100);
    setOpen?.(false);
  };

  const handleDeleteAccount = async (id: string) => {
    try {
      await accountApi.deleteAccount(id);
      logout();
      setTimeout(() => {
        toast.success("Xóa tài khoản thành công!");
        router.push(PATH_NAME.HOME);
        setOpenDeleteModal(false);
      }, 100);
    } catch (error) {
      toast.error("Xóa tài khoản thất bại!");
      throw error;
    }
  };

  const renderMenu = () => (
    <List disablePadding className="flex-1">
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
              "&.Mui-selected": {
                bgcolor: "var(--color-primary)",
                color: "var(--color-secondary)",
                fontWeight: 600,
                "& .MuiListItemIcon-root": { color: "var(--color-secondary)" },
              },
              "&:hover": {
                bgcolor: "rgba(255, 105, 181, 0.08)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 32,
                color: isActive
                  ? "var(--color-secondary)"
                  : "rgba(107,114,128,1)",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText primary={item.label} />
          </ListItemButton>
        );
      })}

      <ListItemButton
        onClick={handleLogout}
        sx={{
          borderRadius: "8px",
          mt: "4px",
          color: "red",
          "&:hover": { bgcolor: "rgba(255,0,0,0.05)" },
        }}
      >
        <ListItemIcon sx={{ minWidth: 32, color: "red" }}>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Đăng xuất" />
      </ListItemButton>
    </List>
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen?.(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white border border-gray-200 rounded-r-2xl shadow-lg p-4 z-50 transition-transform duration-300 md:hidden flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Tài khoản của tôi
          </h2>
          <button
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={() => setOpen?.(false)}
          >
            <CloseIcon />
          </button>
        </div>

        {renderMenu()}

        <div className="mt-auto">
          <Divider className="my-4" />

          <Button
            variant="outline"
            size="default"
            onClick={() => setOpenDeleteModal(true)}
            className="flex items-center text-red-500 gap-2 w-full justify-center cursor-pointer"
          >
            <DeleteIcon fontSize="small" />
            <span>Xóa tài khoản</span>
          </Button>
        </div>
      </div>

      <div className="hidden md:flex flex-col w-64 bg-white border border-gray-200 rounded-2xl shadow-sm p-4 min-h-[320px]">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Tài khoản của tôi
        </h2>

        {renderMenu()}

        <div className="mt-auto">
          <Divider className="my-4" />

          <Button
            variant="outline"
            size="default"
            onClick={() => setOpenDeleteModal(true)}
            className="flex items-center text-red-500 gap-2 w-full justify-center cursor-pointer"
          >
            <DeleteIcon fontSize="small" />
            <span>Xóa tài khoản</span>
          </Button>
        </div>
      </div>

      <Dialog open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <DialogTitle>Xác nhận xóa tài khoản</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Hành động này không thể hoàn tác. Bạn có chắc chắn muốn xóa tài
            khoản không?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setOpenDeleteModal(false)}
            className="bg-gray-300 hover:bg-gray-400"
          >
            Hủy
          </Button>

          <Button
            onClick={() => user && handleDeleteAccount(user._id)}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Xóa ngay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SideBar;
