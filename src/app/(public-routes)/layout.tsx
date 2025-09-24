"use client";

import { useState } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div>{children}</div>
      <Footer />
    </>
  );
}
