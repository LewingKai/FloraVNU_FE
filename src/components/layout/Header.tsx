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
import { headerText } from "@/helpers/text_vn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { user, isAuth, fetchMe } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (
      !user &&
      typeof window !== "undefined" &&
      localStorage.getItem("access_token")
    ) {
      fetchMe();
    }
  }, [user, fetchMe]);

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
        <nav className="flex gap-10 max-lg:hidden items-center ml-[20px]">
          <Link
            href={PATH_NAME.HOME}
            className={
              pathname === PATH_NAME.HOME
                ? "font-bold text-secondary text-[17px] cursor-default"
                : "text-black font-bold hover:text-gray-700 text-[17px]"
            }
          >
            {headerText.homePages}
          </Link>
          <Link
            href={PATH_NAME.PRODUCTS}
            className={
              pathname === PATH_NAME.PRODUCTS
                ? "font-bold text-secondary text-[17px]"
                : "text-black font-bold hover:text-gray-700 text-[17px]"
            }
          >
            {headerText.productsPage}
          </Link>
          <Link
            href={PATH_NAME.BLOGS}
            className={
              pathname === PATH_NAME.BLOGS
                ? "font-bold text-secondary text-[17px]"
                : "text-black font-bold hover:text-gray-700 text-[17px]"
            }
          >
            {headerText.blogPage}
          </Link>
          <Link
            href={PATH_NAME.ABOUTUS}
            className={
              pathname === PATH_NAME.ABOUTUS
                ? "font-bold text-secondary text-[17px]"
                : "text-black font-bold hover:text-gray-700 text-[17px]"
            }
          >
            {headerText.aboutUsPage}
          </Link>
        </nav>
      </div>
      <button onClick={() => {}}>
        <div className="relative">
          <FontAwesomeIcon icon={faCartShopping} size="xl" color="#E32C89" />
          <p className="text-[10px] p-0.5 px-1.5 rounded-full bg-white text-[#E32C89]  absolute -top-1/4 -right-1">
            2
          </p>
        </div>
      </button>
      <div className="text-[20px] text-[#E32C89] ml-3"> |</div>
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
              {headerText.signIn}
            </Button>
          </Link>
          <Link href={PATH_NAME.SIGNUP}>
            <Button variant="default" size="lg">
              {headerText.signUp}
            </Button>
          </Link>
        </div>
      )}

      <button
        className="hidden max-lg:block text-black text-2xl focus:outline-none"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} size="sm" />
      </button>
    </header>
  );
};

export default Header;
