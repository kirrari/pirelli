import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/public/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const font = localFont({
  src: [
    {
      path: '../public/fonts/Gotham-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gotham-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/fonts/Gotham-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Pirelli Global',
  description: 'Pirelli Global: Discover our world | Pirelli',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
