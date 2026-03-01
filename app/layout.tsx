import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import { headers } from 'next/headers';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal'],
  // variable: '--font-poppins',
  weight: ['300', '500', '600', '800'],
});

export const metadata: Metadata = {
  title: 'Subsea Marine Engineering',
  description: 'Underwater Civil Engineering Specialist',
  icons: {
    icon: '/images/logo-subsea.png', // Your favicon
    shortcut: '/images/logo-subsea.png', // Optional for shortcut icon
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const nonce = headerList.get('x-nonce') ?? '';

  return (
    <html lang="en" className={`${poppins.className} h-full`} suppressHydrationWarning>
      <body>
        <main className="min-h-screen">
          {children}
          <Footer />
          <Script nonce={nonce} />
        </main>
      </body>
    </html>
  );
}
