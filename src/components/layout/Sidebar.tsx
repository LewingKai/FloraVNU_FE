"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";

import { PATH_NAME } from "@/configs/pathName";
import useAuth from "@/stores/useAuth";
import { Button } from "../ui/Button";
import AccountMenu from "../AccountMenu";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const { user, isAuth } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[100] transition-opacity max-w-[80%]  ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-1/3 bg-primary z-[101] p-5 transition-transform transform flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: 'url("/images/bg-login.png")',
        }}
      >
        <div>
          <IoMdClose
            className="text-black mb-6 font-bold text-3xl text-right cursor-pointer ml-auto"
            onClick={toggleSidebar}
          />
          <nav className="flex flex-col max-sm:items-center gap-4 font-medium text-xl">
            <Link
              href={PATH_NAME.HOME}
              className={
                pathname === PATH_NAME.HOME ? "text-secondary" : "text-black"
              }
              onClick={toggleSidebar}
            >
              Trang chủ
            </Link>
            <Link
              href={PATH_NAME.PRODUCTS}
              className={
                pathname === PATH_NAME.PRODUCTS
                  ? "text-secondary"
                  : "text-black"
              }
              onClick={toggleSidebar}
            >
              Sản phẩm
            </Link>
            <Link
              href={PATH_NAME.ABOUTUS}
              className={
                pathname === PATH_NAME.ABOUTUS ? "text-secondary" : "text-black"
              }
              onClick={toggleSidebar}
            >
              Về chúng tôi
            </Link>
            <Link
              href={PATH_NAME.BLOGS}
              className={
                pathname === PATH_NAME.BLOGS ? "text-secondary" : "text-black"
              }
              onClick={toggleSidebar}
            >
              Blogs
            </Link>
          </nav>
        </div>

        {!(isAuth && user) && (
          <div className="flex flex-col mb-6 gap-3.5">
            <Link href={PATH_NAME.SIGNIN} onClick={toggleSidebar}>
              <Button variant="default" className="w-full">
                Đăng nhập
              </Button>
            </Link>
            <Link href={PATH_NAME.SIGNUP} onClick={toggleSidebar}>
              <Button variant="default" className="w-full">
                Đăng ký
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
