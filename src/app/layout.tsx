import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { QueryProvider } from "@/providers/QueryProvider";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "Архангельск · наследие",
    template: "%s | Архангельск · наследие",
  },
  description:
    "Каталог архитектурных памятников и достопримечательностей Архангельска.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${lora.variable} ${sourceSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white antialiased">
        <QueryProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
