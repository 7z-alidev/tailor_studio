import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppFloating from '@/components/WhatsAppFloating';

export const metadata: Metadata = {
  title: 'Tailor Studio | Pakistan’s First Online Stitching Service',
  description:
    'Tailoring without visiting a shop. Doorstep pickup, precision custom stitching, and 7-day doorstep delivery across Karachi, Pakistan.',
  keywords: [
    'Online tailor Pakistan',
    'Doorstep tailoring Karachi',
    'Ladies stitching online',
    'Custom dress tailoring',
    'Online master tailor',
    'Tailor Studio',
  ],
  authors: [{ name: 'Tailor Studio' }],
  openGraph: {
    title: 'Tailor Studio | Pakistan’s First Online Stitching Service',
    description:
      'Pickup. Stitch. Deliver. Experience bespoke tailoring from the comfort of your home.',
    url: 'https://tailorstudio.pk',
    siteName: 'Tailor Studio',
    locale: 'en_PK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col selection:bg-secondary selection:text-white">
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
