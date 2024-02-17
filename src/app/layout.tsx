import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/theme';
import Navbar from '@/components/navbar/Navbar';

export const metadata: Metadata = {
  title: 'Star Wars App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
