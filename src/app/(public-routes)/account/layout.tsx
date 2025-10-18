"use client";

import React, { useState } from "react";
import SideBar from "./_components/SideBar";
import MenuIcon from "@mui/icons-material/Menu";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:gap-4 lg:gap-6 px-8 lg:px-[5vw] mt-28 mb-4 min-h-[500px] relative">
      <button
        className="md:hidden absolute left-2 top-2 z-30 bg-white rounded-full p-2 shadow"
        onClick={() => setOpen(true)}
        aria-label="Mở menu tài khoản"
      >
        <MenuIcon />
      </button>
      <SideBar open={open} setOpen={setOpen} />
      <div className="flex-1 bg-white rounded-2xl shadow-sm p-6">
        {children}
      </div>
    </div>
  );
}
