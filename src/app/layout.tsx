import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

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
  metadataBase: new URL("https://floravnu.com"),
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
    url: "https://floravnu.com",
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
    canonical: "https://floravnu.com",
  },
  verification: {
    google: "ccOO_9hcDdRurbHQPI2fWWv5ixbLdjwoVM6kMO2a9iE",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FloraVNU",
    "alternateName": "Flora VNU",
    "url": "https://floravnu.com",
    "logo": "https://floravnu.com/images/logo.png",
    "image": "https://floravnu.com/blogs/image1.png",
    "description": "FloraVNU – tiệm hoa tươi tại Làng Đại học Thủ Đức, mang đến những bó hoa tươi đẹp và ý nghĩa cho mọi dịp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khu phố 34, Phường Linh Xuân",
      "addressLocality": "Thành phố Thủ Đức",
      "addressRegion": "TP. Hồ Chí Minh",
      "addressCountry": "VN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+84-338963327",
      "contactType": "Customer Service",
      "email": "floravnu@gmail.com",
      "availableLanguage": "Vietnamese"
    },
    "sameAs": [
      "https://www.facebook.com/floravnu"
    ]
  };

  return (
    <html lang="vi">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeRegistry>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeRegistry>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  );
}
