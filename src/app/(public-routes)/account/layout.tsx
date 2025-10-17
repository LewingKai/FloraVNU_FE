import React from "react";
import SideBar from "./_components/SideBar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-[5vw] m-28 min-h-[500px]">
      <SideBar />
      <div className="flex-1 bg-white rounded-2xl shadow-sm p-6">
        {children}
      </div>
    </div>
  );
}
