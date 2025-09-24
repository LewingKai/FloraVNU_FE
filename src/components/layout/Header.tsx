"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "@/assets/images/logo.png";
import { PATH_NAME } from "@/configs/pathName";
import { Button } from "../ui/Button";
import SearchBar from "../ui/SearchBar";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit() {
    console.log(searchValue);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-primary h-[10vh] md:h-[15vh] flex items-center px-[5vw] justify-between sticky top-0 z-50
        ${
          scrolled
            ? "shadow-[0_4px_10px_rgba(255,255,255,0.8)] rounded-b-[20px]"
            : "shadow-none rounded-b-none"
        }`}
    >
      <div className="w-full gap-10 flex items-center pr-5">
        <Link href={PATH_NAME.HOME}>
          <Image
            src={logo}
            alt="FloraVNU logo"
            className="max-md:w-[90px] max-lg:w-[100px] lg:w-[140px]"
          />
        </Link>
        <nav className="flex gap-10 max-md:hidden items-center ml-[20px]">
          <Link
            href={PATH_NAME.HOME}
            className={
              pathname === PATH_NAME.HOME
                ? "font-medium text-secondary text-[18px] cursor-default"
                : "text-black font-medium hover:text-gray-500 text-[18px]"
            }
          >
            Trang chủ
          </Link>
          <Link
            href={PATH_NAME.PRODUCTS}
            className={
              pathname === PATH_NAME.PRODUCTS
                ? "font-medium text-secondary text-[18px]"
                : "text-black font-medium hover:text-gray-500 text-[18px]"
            }
          >
            Sản phẩm
          </Link>
          <Link
            href={PATH_NAME.BLOGS}
            className={
              pathname === PATH_NAME.BLOGS
                ? "font-medium text-secondary text-[18px]"
                : "text-black font-medium hover:text-gray-500 text-[18px]"
            }
          >
            Blogs
          </Link>
          <Link
            href={PATH_NAME.ABOUTUS}
            className={
              pathname === PATH_NAME.ABOUTUS
                ? "font-medium text-secondary text-[18px]"
                : "text-black font-medium hover:text-gray-500 text-[18px]"
            }
          >
            Về chúng tôi
          </Link>
          <SearchBar
            handleChangeSearch={(e) => setSearchValue(e.target.value)}
            handleSubmit={handleSubmit}
            searchValue={searchValue}
          />
        </nav>
      </div>
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

      <button
        className="hidden max-lg:block text-black text-2xl focus:outline-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </div>
  );
};

export default Header;
