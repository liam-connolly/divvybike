import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Divvy Bike Station Data',
  description: 'Explore trip data for your favorite Divvy Bike stations',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //const stationsPromise = getStations();

  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
