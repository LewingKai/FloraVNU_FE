import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import ReactQueryProvider from "@/components/layout/tanstack_query";
import ThemeRegistry from "@/components/layout/ThemeRegistry";

export const metadata: Metadata = {
  title: "FloraVNU - Tiệm hoa tươi, nơi tình yêu bắt đầu",
  description:
    "FloraVNU – tiệm hoa tươi tại Làng Đại học Thủ Đức, mang đến những bó hoa tươi đẹp và ý nghĩa cho mọi dịp. Đặt hoa nhanh, giao tận tay, gửi trọn yêu thương đến người bạn quý.",
  keywords: [
    "FloraVNU",
    "floravnu",
    "flora vnu",
    "Flora VNU",
    "hoa tươi Làng Đại học Thủ Đức",
    "tiệm hoa Thủ Đức",
    "shop hoa tươi VNU",
    "đặt hoa online Thủ Đức",
    "giao hoa tận nơi Thủ Đức",
    "bó hoa tặng người yêu",
    "hoa sinh nhật đẹp",
    "hoa chúc mừng khai trương",
    "hoa tốt nghiệp Làng Đại học",
    "hoa tặng ngày lễ tình nhân",
    "hoa tặng 8/3 ý nghĩa",
    "hoa tặng mẹ đẹp và sang",
    "hoa hồng tươi đẹp",
    "shop hoa tươi giá rẻ Thủ Đức",
    "hoa tươi sinh viên VNU",
    "đặt hoa nhanh Làng Đại học",
  ],
  openGraph: {
    title: "FloraVNU - Tiệm hoa tươi, nơi tình yêu bắt đầu",
    description:
      "FloraVNU – tiệm hoa tươi tại Làng Đại học Thủ Đức, mang đến những bó hoa tươi đẹp và ý nghĩa cho mọi dịp. Đặt hoa nhanh, giao tận tay, gửi trọn yêu thương đến người bạn quý.",
    // url: "...",
    images: [
      {
        url: "/blogs/image1.png",
        width: 1200,
        height: 630,
        alt: "FloraVNU - Tiệm hoa tươi, nơi tình yêu bắt đầu",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FloraVNU - Tiệm hoa tươi, nơi tình yêu bắt đầu",
    description:
      "FloraVNU – tiệm hoa tươi tại Làng Đại học Thủ Đức, mang đến những bó hoa tươi đẹp và ý nghĩa cho mọi dịp. Đặt hoa nhanh, giao tận tay, gửi trọn yêu thương đến người bạn quý.",
    images: ["/blogs/image1.png"],
  },
  alternates: {
    // canonical: "",
  },
  verification: {
    // google: "qWaMtk5cUkw5LEkyrIHU6nkEXKwWsP-2GYwUz2OCkqQ",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
