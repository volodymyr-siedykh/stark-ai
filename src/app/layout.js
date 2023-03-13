import './globals.css'
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${poppins.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
