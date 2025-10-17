"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faUser,
  faClockRotateLeft,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { PATH_NAME } from "@/configs/pathName";

import useAuth from "@/stores/useAuth";

interface AccountMenuProps {
  fullName: string;
  email: string;
  avatar?: { url: string };
  role: string;
}

const AccountMenu = ({ fullName, email, avatar, role }: AccountMenuProps) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      router.push(PATH_NAME.HOME);
      toast.success("Đăng xuất thành công!");
    }, 100);
  };

  return (
    <>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="large"
            sx={{ ml: 2, p: 0 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <div className="flex gap-3 justify-start items-center">
              <div className="flex-col gap-2 text-sm justify-start">
                <p className="font-bold text-[20px] text-right text-black">
                  {fullName}
                </p>
                <p className="text-[15px] italic font-light text-black">
                  {email}
                </p>
              </div>
              <Avatar
                sx={{ width: 50, height: 50 }}
                src={avatar?.url}
                alt="avatar"
                className="border-2 rounded-full border-white"
              />
            </div>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        disableScrollLock
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => {
            router.push(PATH_NAME.ACCOUNT);
            handleClose();
          }}
          sx={{ paddingTop: "8px", paddingBottom: "8px" }}
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" size="lg" />
          Tài khoản của tôi
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push(PATH_NAME.ORDERSHISTORY);
            handleClose();
          }}
          sx={{ paddingTop: "8px", paddingBottom: "8px" }}
        >
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            className="mr-2"
            size="lg"
          />
          Lịch sử đặt hoa
        </MenuItem>
        {role === "admin" && (
          <MenuItem
            onClick={() => {
              router.push("/admin");
              handleClose();
            }}
            sx={{ paddingTop: "8px", paddingBottom: "8px" }}
          >
            <FontAwesomeIcon icon={faStore} className="mr-2" size="lg" />
            Trang quản lý của Admin
          </MenuItem>
        )}

        <Divider sx={{ marginTop: "5px", marginBottom: "5px" }} />

        <MenuItem onClick={handleLogout}>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="mr-2"
            size="lg"
            color="red"
          />
          <span className="text-red-600">Đăng xuất</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
