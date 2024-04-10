
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Recoil タスクスケジューラ",
  description: "状態管理ライブラリ「Recoil」を使用したタスクスケジューラ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
