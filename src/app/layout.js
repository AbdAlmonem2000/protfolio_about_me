import { Poppins } from 'next/font/google';
import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: 'Abdelmonem Ahmed | Frontend Developer',
  description:
    'Portfolio of Abdelmonem Ahmed, a frontend developer specializing in React, Next.js and modern web development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased text-gray-800 bg-white">{children}</body>
    </html>
  );
}
