import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal'],
  // variable: '--font-poppins',
  weight: ['300', '500', '600', '800'],
});

export const metadata: Metadata = {
  title: 'Subsea Marine Engineering',
  description: 'Underwater Civil Engineering Specialist',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} h-full w-full`} suppressHydrationWarning>
      <body>
        <main className="min-h-screen w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
