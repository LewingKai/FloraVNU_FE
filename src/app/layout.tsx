import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FloraVNU - Tiệm hoa tươi, nơi tình yêu bắt đầu",
  description:
    "FloraVNU – tiệm hoa tươi tại Làng Đại học Thủ Đức, mang đến những bó hoa tươi đẹp và ý nghĩa cho mọi dịp. Đặt hoa nhanh, giao tận tay, gửi trọn yêu thương đến người bạn quý.",
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
    openGraph: {
      title: "FloraVNU - Tiệm hoa tươi, nơi tình yêu bắt đầu",
      description:
        "FloraVNU – tiệm hoa tươi tại Làng Đại học Thủ Đức, mang đến những bó hoa tươi đẹp và ý nghĩa cho mọi dịp. Đặt hoa nhanh, giao tận tay, gửi trọn yêu thương đến người bạn quý.",
      // url: "...",
      images: [
        {
          url: "https://i.pinimg.com/736x/f4/00/e6/f400e61ef9f778657b1f843a589fbe2d.jpg",
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
      images: [
        "https://i.pinimg.com/736x/f4/00/e6/f400e61ef9f778657b1f843a589fbe2d.jpg",
      ],
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
        {children}
      </body>
    </html>
  );
}
