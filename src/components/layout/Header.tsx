"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/images/logo.svg";
import { PATH_NAME } from "@/configs/pathName";
import { Button } from "../ui/Button";
import AccountMenu from "../AccountMenu";
import useAuth from "@/stores/useAuth";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { user, isAuth, fetchMe } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-800
    ${
      scrolled
        ? "bg-primary shadow-[0_4px_10px_rgba(0,0,0,0.15)] sticky"
        : "bg-transparent absolute"
    } h-[10vh] md:h-[13vh] flex items-center px-[5vw] justify-between`}
    >
      <div className="w-full gap-10 flex items-center pr-5">
        <Link href={PATH_NAME.HOME}>
          <Image
            src={logo}
            alt="FloraVNU logo"
            className=" lg:w-[140px] w-[50px]"
          />
        </Link>
        <nav className="flex gap-10 max-md:hidden items-center ml-[20px]">
          <Link
            href={PATH_NAME.HOME}
            className={
              pathname === PATH_NAME.HOME
                ? "font-bold text-secondary text-[17px] cursor-default"
                : "text-black font-bold hover:text-gray-700 text-[17px]"
            }
          >
            Trang chủ
          </Link>
          <Link
            href={PATH_NAME.PRODUCTS}
            className={
              pathname === PATH_NAME.PRODUCTS
                ? "font-bold text-secondary text-[17px]"
                : "text-black font-bold hover:text-gray-700 text-[17px]"
            }
          >
            Sản phẩm
          </Link>
          <Link
            href={PATH_NAME.BLOGS}
            className={
              pathname === PATH_NAME.BLOGS
                ? "font-bold text-secondary text-[17px]"
                : "text-black font-bold hover:text-gray-700 text-[17px]"
            }
          >
            Blogs
          </Link>
          <Link
            href={PATH_NAME.ABOUTUS}
            className={
              pathname === PATH_NAME.ABOUTUS
                ? "font-bold text-secondary text-[17px]"
                : "text-black font-bold hover:text-gray-700 text-[17px]"
            }
          >
            Về chúng tôi
          </Link>
        </nav>
      </div>
      {isAuth && user ? (
        <div className="hidden lg:flex">
          <AccountMenu
            fullName={user.fullName}
            email={user.email}
            avatar={user.avatar}
            role={user.role}
          />
        </div>
      ) : (
        <div className="lg:flex gap-4 hidden">
          <Link href={PATH_NAME.SIGNIN}>
            <Button variant="default" size="lg">
              Đăng nhập
            </Button>
          </Link>
          <Link href={PATH_NAME.SIGNUP}>
            <Button variant="default" size="lg">
              Đăng ký
            </Button>
          </Link>
        </div>
      )}

      <button
        className="hidden max-lg:block text-black sm:text-2xl text-xl focus:outline-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </header>
  );
};

export default Header;
