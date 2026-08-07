import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoAdvanced | Engenharia, Segurança e Meio Ambiente",
  description:
    "Soluções em Segurança do Trabalho, Meio Ambiente, Construção Civil e Arquitetura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}