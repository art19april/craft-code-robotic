import type { Metadata } from "next";
import { Noto_Sans_Thai, Space_Grotesk } from "next/font/google";
import "./globals.css";

const thai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://craft-code-robotic.sites.openai.com"),
  title: "Craft Code Robotic | Coding, Robotics & AI สำหรับเด็ก",
  description: "สถาบัน Coding, Robotics และ AI สำหรับเด็กอายุ 3–15+ ปี เรียนรู้ผ่านโปรเจกต์จริง พร้อมโค้ชดูแลใกล้ชิด ที่เซ็นทรัลแจ้งวัฒนะ",
  openGraph: {
    title: "Craft Code Robotic — Future Skills for Gen Alpha",
    description: "สร้างนักคิด สร้างนักลงมือทำ สู่อนาคตที่เด็กออกแบบเอง",
    images: [{ url: "/og.png", width: 1732, height: 908, alt: "Craft Code Robotic Coding Robotics AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft Code Robotic — Future Skills for Gen Alpha",
    description: "Coding · Robotics · AI สำหรับเด็ก 3–15+ ปี",
    images: ["/og.png"],
  },
  icons: {
    icon: "/images/craft-code-mark.png",
    apple: "/images/craft-code-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body className={`${thai.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
