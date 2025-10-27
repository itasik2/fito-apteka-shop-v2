import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Фито-аптека",
  description: "Натуральная косметика, масла и травы. Без суеты, с заботой о теле.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-[#f9fafb] text-[#0f172a]">
        <Navbar />
        <main className="container py-8">{children}</main>
      </body>
    </html>
  );
}
