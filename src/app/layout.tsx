import "./globals.css";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] }); <- default font

import { Roboto_Mono } from 'next/font/google';
 
const roboto = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}` }>
        {children}
      </body>
    </html>
  );
}
